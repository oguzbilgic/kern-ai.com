---
title: "Lossless context management: how kern compresses 20,000 messages into a context window"
date: "2026-04-03"
summary: "AI agents forget when conversations get long. kern segments messages by topic, summarizes them hierarchically, and injects compressed history back into the context window. Nothing is lost."
---

## The problem

AI agents have a context window. It might be 50k tokens, maybe 200k. Either way, it runs out. When it does, the oldest messages get trimmed. The agent loses access to decisions made hours ago, tasks it was asked to do yesterday, configurations it set up last week.

This is fine for chatbots. It's not fine for agents that manage infrastructure, maintain knowledge bases, or work across days and weeks.

The common fix is RAG — embed everything, retrieve what seems relevant. But retrieval is lossy. It finds what matches the current query, not what the agent needs to know. An agent that discussed 50 topics over the last week gets back 3 chunks that happened to match. The other 47 topics vanish.

## What we built

kern v0.16.0 ships lossless context management. Instead of throwing away old messages or hoping retrieval picks the right ones, kern compresses the full conversation history into a hierarchical summary tree and injects it into the context window.

The agent always sees its complete history — recent messages in full detail, older ones at decreasing resolution.

## How it works

### 1. Segmentation

Messages are grouped into topic-coherent segments. Each message is embedded (text-embedding-3-small), and cosine distance between consecutive messages detects topic shifts. When the topic changes, a new segment starts.

```
Messages 0-180:     setting up Tailscale on new LXC
Messages 181-340:   debugging mempool Electrum backend
Messages 341-520:   writing blog post about session management
Messages 521-690:   reviewing PR for tool result truncation
```

Segments target ~15k tokens with a minimum of 5k tokens and 10 messages. This isn't fixed-size chunking — segments follow the natural topic boundaries of the conversation.

### 2. Summarization

Each segment is summarized by an LLM (gpt-4.1-mini). The prompt asks for first-person, bullet-point notes focusing on what was done, what was decided, and what's unresolved.

A segment with 15,000 tokens of raw messages compresses to ~1,000 tokens of summary. That's a 15:1 compression ratio while retaining the key facts.

```xml
<summary>
level: L0
messages: 341-520
first: 2026-04-02T06:09:27.043Z
last: 2026-04-02T07:15:33.891Z

- Wrote blog post comparing kern's single-session model to OpenClaw's per-channel isolation.
- Key argument: shared context is the feature, not a bug. Notes-based workaround fails because first session can't predict what second session needs.
- Published to kern-ai.com/blog, added prose styling and nav link.
- Post is ~600 words, technical tone targeting HN audience.
</summary>
```

### 3. Rollup

Every 10 L0 segments are summarized into an L1 parent. Every 10 L1s become an L2. This builds a tree:

```
L2  ████████████████████████████████████████████  (~220:1 compression)
L1  ████ ████ ████ ████ ████ ████ ████ ████ ████  (~15:1 compression)
L0  ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██  (~15:1 compression)
raw ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪  (full messages)
```

A 20,000-message session that used 500k+ tokens of raw conversation compresses to ~11,000 tokens of hierarchical summaries. The agent carries its entire history in 2% of the original size.

### 4. Injection

When the context window fills up and messages get trimmed, kern fills a budget (default 20% of context) with summaries from the tree. The algorithm is simple:

- Old history → high-level summaries (L2, L1). Cheap, broad strokes.
- Recent history near the trim boundary → low-level summaries (L0). Detailed, specific.

The result is injected as a `<conversation_summary>` block in the system prompt:

```xml
<conversation_summary>
<summary>
level: L2
messages: 0-9374

- Built kern agent runtime from scratch over two weeks...
- Established multi-interface architecture with unified session...
</summary>

<summary>
level: L0
messages: 20840-20900
first: 2026-04-03T06:47:20.925Z
last: 2026-04-03T06:58:45.273Z

- Fixed segment timestamp extraction to use first/last non-null timestamp...
- Switched system prompt delimiters from --- to XML tags...
</summary>
</conversation_summary>
```

The agent sees the full arc of its history. It knows what happened two weeks ago (broadly) and what happened an hour ago (in detail). When it needs to go deeper, it uses the `recall` tool to load raw messages from any segment.

## What this isn't

This isn't RAG. RAG answers "what's relevant to this query?" LCM answers "what has this agent done?" They're complementary — kern has both. Recall (semantic search) finds specific past conversations. Segments give the agent persistent awareness of its full history.

This also isn't prompt caching or conversation branching. The raw messages still exist in session files. Segments are a compressed view layered on top, rebuilt from the source whenever needed.

## The result

Our agent Vega has been running continuously for weeks. Its session has 21,000+ messages across terminal, Telegram, and web. The context window holds ~50k tokens. Without LCM, Vega would see only the last ~200 messages. With LCM, it sees those 200 messages in full detail plus compressed summaries of the other 20,800.

It remembers infrastructure decisions from last week. It knows which PRs shipped, which bugs were fixed, which tasks are still open. Not because it searched for them — because they're always in context, compressed but present.

## Try it

LCM ships in kern v0.16.0. It's automatic — segments build incrementally as conversations grow, summaries generate in the background, and history injection happens transparently when the context window fills up.

```bash
npm install -g kern-ai
kern init my-agent
```

Configuration is one field:

```json
{
  "historyBudget": 0.2
}
```

That allocates 20% of the context window to compressed history. Set to 0 to disable.

[GitHub](https://github.com/oguzbilgic/kern-ai) · [Docs](https://github.com/oguzbilgic/kern-ai/tree/master/docs) · [npm](https://www.npmjs.com/package/kern-ai)
