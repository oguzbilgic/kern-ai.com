---
title: "Introducing kern: AI agents built for coworking"
date: "2026-03-31"
summary: "kern is an open-source runtime for AI agents that live across every channel — terminal, browser, Telegram, Slack. One brain, one session, one folder."
---

We built [kern](https://github.com/oguzbilgic/kern-ai) because we wanted AI agents that actually fit into how we work — not locked inside one app, but present everywhere we are.

## The problem

Most AI tools live in a single interface. You chat with Claude in the browser. You use Copilot in your editor. You have a bot in Slack that doesn't know what you told it in the terminal.

We wanted something different: an agent that's in Telegram when you're on your phone, in the terminal when you're SSHing into a server, in the browser when you're at your desk, and in Slack when your team is talking. Same agent, same memory, same conversation.

## What kern does

kern is an open-source agent runtime. You create an agent in a folder, point it at a model, and it runs as a daemon. Then you talk to it from anywhere:

```
$ npm install -g kern-ai
$ kern init my-agent
$ kern start
$ kern tui
```

That gives you terminal chat. But the same agent is also available via:

- **Web UI** — `kern web start` opens a browser interface with agent sidebar, slash commands, and markdown rendering
- **Telegram** — add a bot token and your agent is on your phone
- **Slack** — channels and DMs, with awareness of who's talking

Every message from every channel flows into one session. The agent knows who said what, where, and when.

## One brain

This is the core idea. Most chatbots maintain separate conversations per channel. kern doesn't. Your agent has one continuous session shared across every interface.

Tell it something on Telegram while you're out. When you get home and open the terminal, it already knows. Ask it to do something in Slack — check the result in the browser.

```
Terminal ─────────┐
Web UI ───────────┤
Telegram DM ──────┤── kern ── one session ── one folder
#engineering ─────┤
Slack DM ─────────┘
```

## A folder is the agent

An agent's entire state lives in one directory:

- `IDENTITY.md` — who the agent is, how it behaves
- `KNOWLEDGE.md` — index of what it knows
- `knowledge/` — mutable state files about the world
- `notes/` — daily narrative of what happened
- `.kern/config.json` — model, provider, settings
- `.kern/sessions/` — conversation history

It's plain text. You can read it, edit it, git-track it, zip it, move it to another machine. The agent is the folder.

## Context-aware

Every message includes metadata:

```
[via telegram, user: oguz, time: 2026-03-31T10:00:00Z]
```

The agent knows who's talking, which channel it's in, and adapts. Terminal gets detailed output. Telegram gets short responses. Slack channels — it reads every message but only responds when relevant.

## Long-term memory

Conversations grow. Context windows don't. kern solves this with semantic recall — every conversation is indexed into a vector database. When context is trimmed, relevant past conversations are automatically retrieved and injected.

Your agent doesn't just remember the last 40k tokens. It remembers everything.

## Agents that cowork

kern supports multiple agents in shared channels. They recognize each other and don't fall into infinite response loops. Humans drive the conversation — agents assist when useful, stay silent when not.

## Open source

kern is MIT licensed. It runs on your machine, uses your API keys, and stores everything locally. No cloud service, no vendor lock-in.

- **GitHub**: [github.com/oguzbilgic/kern-ai](https://github.com/oguzbilgic/kern-ai)
- **npm**: `npm install -g kern-ai`
- **Docs**: [github.com/oguzbilgic/kern-ai/tree/master/docs](https://github.com/oguzbilgic/kern-ai/tree/master/docs)

Built on [agent-kernel](https://github.com/oguzbilgic/agent-kernel) — the open-source agent memory pattern.
