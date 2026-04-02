---
title: "Why your agent needs one session, not one per channel"
date: "2026-04-02"
summary: "Most agent frameworks create a separate conversation per channel. kern doesn't. Here's how we route Telegram, Slack, terminal, and web into a single continuous session — and why it matters."
---

## The problem

You tell your agent to check disk usage on Telegram. It does. Later someone asks in Slack #engineering: "what's the disk situation?" The agent has no idea — that conversation happened in a different session.

The issue isn't multiple channels — it's multiple sessions. Most agent frameworks create a separate session for each channel. Your Slack channel gets its own conversation history. Your Telegram DM gets another. The terminal starts fresh every time. The agent has the same name, the same system prompt, the same tools — but no shared memory of what just happened.

The workaround is notes: the agent writes something to a file in one session and reads it back in another. But this almost never works in practice. The agent in the first session has to decide what's worth writing down before it knows what will matter later. The agent in the second session has to know to read those notes before responding — and read the right ones. The coordination problem is nearly impossible to get right. You end up with an agent that either writes everything (and drowns in its own notes) or writes nothing useful for the next session.

## How OpenClaw does it

OpenClaw is the most popular multi-channel agent gateway. It supports 20+ messaging platforms and has a sophisticated session model with four isolation levels (`main`, `per-peer`, `per-channel-peer`, `per-account-channel-peer`).

The default — `dmScope: "main"` — does share DMs into one session across channels. Sounds close. But group chats are always isolated. Every Slack channel, every Telegram group gets its own session key (`agent:<id>:<channel>:group:<groupId>`). A Slack #homelab channel can never see what you discussed in a Telegram DM. The terminal can never see what happened in a Slack thread.

And the project is actively moving toward more isolation, not less — issue #14688 calls the current shared-DM behavior "cross-channel DM context bleed" and proposes `per-channel-peer` as the safe default. Sessions reset daily at 4am. Identity linking (`identityLinks`) exists to reconnect what isolation split apart.

The architecture treats shared context as a problem to be contained. kern treats it as the point.

## One session

In kern, every message from every interface flows into the same session:

```
Terminal ─────────┐
Telegram DM ──────┤
#engineering ──────┤── one session ── one context window
Slack DM ─────────┤
Web UI ───────────┘
```

One message queue. One context window. One conversation history. The agent always has the full picture. If you truly need isolation, create separate agents — each is just a folder.

## How messages flow

Every message gets tagged with metadata before it hits the model:

```
[via telegram, user: oguz, time: 2026-04-02T10:00:00Z]
did you clean up that disk?
```

The agent sees the interface, the channel, who's talking, and when. This is prepended to the user message — the model sees it as natural context. The runtime routes the reply back to the originating interface.

Because there's one session, the context window contains messages from every interface interleaved chronologically:

```
[via terminal, user: oguz] check disk usage on kamrui
[assistant] Running df -h... /data is at 90%.
[via telegram, user: oguz] did you clean up that disk?
[assistant] Not yet. Want me to remove the old snapshots?
[via slack, #homelab, user: sarah] what's the disk situation?
[assistant] /data on kamrui is at 90%. Oguz and I discussed removing old snapshots.
```

Sarah gets context she never asked for — because the agent already has it. No one had to repeat themselves.

The metadata also lets the agent compartmentalize without session isolation. It sees `[via slack, #engineering]` and knows this is a work context. It sees `[via telegram, user: oguz]` and knows this is a private conversation. You don't need separate sessions when the model can read the room.

## Who is talking and where

One session doesn't mean one behavior. The agent adapts to each interface — but not through code.

kern's system prompt (the `KERN.md` template) describes how the agent should behave in each context. The agent also reads `USERS.md` — a file it maintains itself — to know who each person is, their role, and any guardrails. When Sarah asks a question in Slack, the agent knows she's a cofounder who handles finance, and adjusts accordingly.

This is soft-programming: behavior described in plain text that the agent reads. You change how the agent behaves in Slack by editing a markdown file, not by writing code.

## NO_REPLY

Shared context creates a problem: agents that won't shut up.

In a Slack channel, there might be 50 messages a day. Most aren't for the agent. But it sees all of them — that's the point. Without a mechanism to stay silent, it would respond to everything.

`NO_REPLY` is a convention: if the agent's entire response is the literal string `NO_REPLY`, the runtime swallows it. No message is sent. But the agent's turn still happened — it read the message, updated its internal state, and chose not to speak.

This is also how multiple agents coexist in the same channel without infinite loops. Agent A says something. Agent B sees it, decides it has nothing to add, returns `NO_REPLY`. No ping-pong.

## Implementation

The core is small. Each interface (Telegram, Slack, CLI, web) is an adapter that converts platform-specific events into a common message:

```typescript
interface IncomingMessage {
  text: string;
  userId: string;
  chatId: string;
  interface: string;  // "telegram", "slack", "cli", "web"
  channel?: string;   // "telegram:12345", "#engineering", "terminal"
}
```

The runtime prepends the metadata tag and pushes it into the queue. The model never knows or cares which interface a message came from — it just sees text with context. The message queue itself is ~100 lines.

## Try it

```bash
npm install -g kern-ai
kern init my-agent
kern tui
```

