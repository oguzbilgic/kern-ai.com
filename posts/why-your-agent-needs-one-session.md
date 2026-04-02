---
title: "Why your agent needs one session, not one per channel"
date: "2026-04-02"
summary: "Most agent frameworks create a separate conversation per channel. kern doesn't. Here's how we route Telegram, Slack, terminal, and web into a single continuous session — and why it matters."
---

Most chatbots — and most agent frameworks — create a separate conversation per channel. Your Slack bot has one history, your Telegram bot has another, your CLI tool starts fresh every time. They're the same agent in name only.

kern takes a different approach: one session, shared across every interface. This post explains how it works and why we think it's the right default.

## The problem

Say you have an AI agent that manages your homelab. You SSH into a server and ask it to check disk usage. It runs `df -h`, sees a volume is 90% full, and you discuss a plan.

Later, you're on your phone and message it on Telegram: "did you clean up that disk?" If it's a separate session, it has no idea what you're talking about.

This is the norm. ChatGPT has separate conversations. Claude has separate conversations. Slack bots have per-channel history. Every interface is an island.

## One session

In kern, every message from every interface flows into the same session:

```
Terminal ─────────┐
Web UI ───────────┤
Telegram DM ──────┤── one session ── one context window
#engineering ─────┤
Slack DM ─────────┘
```

There's one message queue, one context window, one conversation history. The agent always has the full picture.

## How messages flow

Every message gets tagged with metadata before it hits the model:

```
[via telegram, user: oguz, time: 2026-04-02T10:00:00Z]
did you clean up that disk?
```

The agent sees the interface, the channel, who's talking, and when. This is prepended to the user message — the model sees it naturally as context. When the agent responds, the runtime routes the reply back to the originating interface.

## What the agent remembers

Because there's one session, the agent's context window contains messages from every interface interleaved chronologically:

```
[via terminal, user: oguz] check disk usage on kamrui
[assistant] Running df -h... /data is at 90%.
[via telegram, user: oguz] did you clean up that disk?
[assistant] Not yet. Want me to remove the old snapshots?
[via slack, #homelab, user: sarah] what's the disk situation?
[assistant] /data on kamrui is at 90%. Oguz and I discussed removing old snapshots.
```

Sarah gets context she never asked for — because the agent already knows. No one had to repeat themselves.

## The message queue

This sounds simple until two people message the agent at the same time from different channels. Or someone sends a follow-up on Telegram while the agent is mid-turn processing a terminal command.

kern uses a single FIFO message queue with channel awareness:

1. Messages arrive from any interface and enter the queue
2. The queue processes one message at a time
3. If a new message arrives on the **same channel** as the active turn, it gets injected mid-turn — the agent sees it at the next tool step
4. If it's a **different channel**, it waits behind the current turn

Same-channel conversation feels responsive (you can interrupt or add context mid-turn), while cross-channel messages don't collide.

## Soft-programming

One session doesn't mean one behavior. The agent adapts to each interface — but not through code.

kern's system prompt (the [KERN.md template](https://github.com/oguzbilgic/kern-ai/blob/master/templates/KERN.md)) describes how the agent should behave in each context:

- **Terminal / Web UI** — this is your operator. Be detailed, share everything.
- **Telegram / Slack DM** — keep it short and conversational.
- **Slack channels** — read every message but only respond when @mentioned, directly asked, or genuinely useful. Otherwise, stay silent.

The agent also reads `USERS.md` — a file it maintains itself — to know who each person is, their role, and any guardrails. When Sarah asks a question in Slack, the agent knows she's a cofounder who handles finance, and adjusts accordingly.

This is soft-programming: the behavior isn't hardcoded in the runtime, it's described in plain text that the agent reads. You change how the agent behaves in Slack by editing a markdown file, not by writing code.

## NO_REPLY

Shared context creates a problem: agents that won't shut up.

In a Slack channel, there might be 50 messages a day. Most aren't for the agent. But it sees all of them — that's the point. Without a mechanism to stay silent, it would respond to everything.

`NO_REPLY` is a convention: if the agent's entire response is the literal string `NO_REPLY`, the runtime swallows it. No message is sent. But the agent's turn still happened — it read the message, updated its internal state, and chose not to speak.

This is also how multiple agents coexist in the same channel without infinite loops. Agent A says something. Agent B sees it, decides it has nothing to add, returns `NO_REPLY`. No ping-pong.

## How other frameworks handle this

Most agent frameworks unify DMs per user. If the same person messages on Telegram and CLI, they might share a session. That's the easy case.

The hard case is channels. When a message comes from `#engineering` in Slack, it has different participants, different context, different purpose than a Telegram DM. So frameworks create a separate session for it. Each Slack channel gets its own conversation, each group DM gets its own history. This is the default in OpenAI Assistants, LangChain, and most Slack bot frameworks.

kern doesn't split. `#engineering`, your Telegram DM, and the terminal are all the same session. The agent in `#engineering` already knows what you told it on Telegram.

## Implementation

The core of this is surprisingly small. The [message queue](https://github.com/oguzbilgic/kern-ai/blob/master/src/queue.ts) is ~100 lines. Each interface (Telegram, Slack, CLI, web) is an adapter that converts platform-specific events into a common message:

```typescript
interface IncomingMessage {
  text: string;
  userId: string;
  chatId: string;
  interface: string;  // "telegram", "slack", "cli", "web"
  channel?: string;   // "telegram:12345", "#engineering", "terminal"
}
```

The runtime prepends the metadata tag and pushes it into the queue. The model never knows or cares which interface a message came from — it just sees text with context.

## Why not per-channel?

The obvious objection: what if you want separate conversations?

In practice, the metadata gives the agent enough signal to compartmentalize. It doesn't dump your Telegram homelab discussion into a Slack work channel unprompted. It reads the room.

If you truly need isolation, create separate agents. Each is just a folder. But in our experience, one brain is almost always what you want.

## Try it

```bash
npm install -g kern-ai
kern init my-agent
kern tui
```

Add `TELEGRAM_BOT_TOKEN` to `.kern/.env` and your terminal agent is also on your phone. Same brain, same conversation.

[GitHub](https://github.com/oguzbilgic/kern-ai) · [Docs](https://github.com/oguzbilgic/kern-ai/tree/master/docs) · [npm](https://www.npmjs.com/package/kern-ai)
