---
title: "How we cut our agent's API costs by 10x with prompt caching"
date: "2026-04-06"
summary: "An AI agent with a 100k token prompt pays full price on every turn. kern uses three cache breakpoints and stable trim boundaries to hit 99% cache rates — dropping effective input costs by 10x."
---

## The problem

A long-running AI agent accumulates a large prompt. System instructions, injected documents, compressed conversation history, raw messages — kern's prompt regularly exceeds 100k tokens.

Without caching, every single turn sends all 100k tokens at full price. A multi-step turn where the agent calls 5 tools sends the full prompt 6 times. That's 600k input tokens for one user message.

Anthropic and OpenAI both offer server-side prompt caching. If the first N tokens of your request match a previous request exactly, those tokens are served from cache at ~10% of the normal cost. The catch: the prefix must be *byte-identical*. One token difference anywhere in the prefix invalidates the entire cache.

For a chatbot, this mostly works automatically — the system prompt stays the same, and each turn appends messages to the end. But for an agent with a sliding context window, compressed history injection, and tool results that shift the message boundary, keeping a stable prefix is surprisingly hard.

## What makes agent prompts unstable

Three things kill cache hit rates in agent systems:

**1. Sliding window drift.** When old messages are trimmed to fit the token budget, the trim point shifts by a few messages each turn. This changes every message index in the context, invalidating the entire prefix.

**2. Summary churn.** kern injects compressed conversation summaries into the system prompt. When a new semantic segment is created and summarized, the summary text changes — busting the system prompt cache.

**3. Moving breakpoints.** Anthropic's caching requires explicit `cache_control` markers on messages. If you put the marker on "the 4th-to-last message," it moves every turn and the cached region shifts.

## Three cache breakpoints

kern v0.21.0 places three cache breakpoints to create stable, nested cached regions:

```
┌─────────────────────────────────────────────┐
│  BP1: System prompt                          │  ~75k tokens
│  (docs, summaries, tools)                    │  Cached. Changes only on new segments.
├─────────────────────────────────────────────┤
│  BP2: Stable message prefix                  │  Varies
│  (snapped to every 20 messages)              │  Cached. Moves once every ~20 turns.
├─────────────────────────────────────────────┤
│  BP3: Turn breakpoint                        │  Varies
│  (last user message)                         │  Cached within multi-step turns.
├─────────────────────────────────────────────┤
│  Uncached tail                               │  Small
│  (new tool results, assistant response)      │  Pays full price.
└─────────────────────────────────────────────┘
```

**BP1** covers the system prompt — all injected documents, the conversation summary, tool definitions. This is the biggest block (~75k tokens) and the most stable. It only changes when a new semantic segment triggers a summary update, which happens roughly every 100 messages.

**BP2** is snapped to every 20th message in the raw message window. Instead of placing a breakpoint on a sliding index, we round down to the nearest multiple of 20. This means the breakpoint stays fixed for ~20 turns, and the growing tail between BP2 and BP3 is the only "partially cached" region.

**BP3** sits on the last user message. During a multi-step turn — where the agent calls several tools before responding — every step after the first reuses the entire prefix up to BP3 at 99%+ hit rates. This is where the biggest savings come from, since a single turn can involve 5-10 API calls.

## Stable trim boundaries

Cache breakpoints don't help if the message window shifts every turn. kern snaps the trim boundary to a stable position:

1. **Find the nearest segment edge.** kern's [semantic segmentation](/blog/lossless-context-management) groups messages into topic-coherent segments. The trim point is snapped forward to the end of the nearest L0 segment — a natural, stable boundary.

2. **Walk back to a user message.** Tool calls and results must be paired — cutting between a `tool_use` and `tool_result` causes API errors. From the snap point, we walk backward to the nearest `user` message, which is always a safe turn boundary.

This keeps the window start locked for many turns. It only shifts when the token budget pushes past the next segment boundary.

## Results

On a real agent running 100k+ token prompts on Anthropic (Claude Opus via OpenRouter):

| Scenario | Cache hit rate | Cost impact |
|----------|---------------|-------------|
| Mid-turn tool calls | 99% | 5-10 tool steps pay nearly nothing |
| Between turns | 85-95% | Only new messages + small tail pay full price |
| After new segment | 0% (one turn) | Full cache write; recovers immediately |

Before caching, a typical multi-step turn cost ~600k input tokens at full price. After: ~600k tokens, but ~590k of them are cached at 10% cost. Effective reduction: **~10x on input costs**.

The 0% hit after a new segment is unavoidable — the conversation summary changes and the system prompt cache busts. But segments form roughly every 100 messages, so this happens maybe once an hour in active use. Every other turn hits cache.

## OpenAI gets it for free

OpenAI and DeepSeek cache automatically — no markers needed. The stable trim boundaries still help because a shifting prefix invalidates their caches too, but there's no SDK work required.

Google models don't support prompt caching yet.

## The implementation

The core is ~60 lines in `context.ts`. Three functions:

- `buildSystemMessage()` — wraps the system prompt with `cache_control: ephemeral` for Anthropic
- `addCacheBreakpoints()` — places BP2 and BP3 on the right messages
- `trimToTokenBudget()` — snaps the trim point to segment edges and user messages

All caching logic is in one file, separated from the runtime. The runtime just calls `prepareContext()` and gets back ready-to-send messages with breakpoints already set.

```typescript
// BP2: stable prefix, snapped to 20-message intervals
const stableBpIdx = Math.floor(turnBpIdx / 20) * 20;

// BP3: last user message — caches everything for multi-step turns
for (let i = messages.length - 1; i >= 0; i--) {
  if (messages[i].role === "user") { turnBpIdx = i; break; }
}
```

No external caching layer. No Redis. No additional infrastructure. Just careful placement of markers and stable boundaries.

## Monitoring

kern logs cache stats on every turn:

```
cache: 246904 read, 726 written (100% hit rate, 247890 total input)
```

The Memory UI shows cumulative cache stats in the info panel, and `/status` reports totals. You always know if your cache is working.

## Try it

```bash
npm install -g kern-ai
kern init my-agent
kern tui
```

Prompt caching is automatic for Anthropic models — no configuration needed. For maximum savings, the defaults work well: `maxContextTokens: 100000` and `summaryBudget: 0.75` put ~75k tokens in the stable cached summary.

[Full caching docs →](https://github.com/oguzbilgic/kern-ai/blob/master/docs/caching.md)

*kern is open source: [github.com/oguzbilgic/kern-ai](https://github.com/oguzbilgic/kern-ai)*
