"use client";

import { useState } from "react";
import { CopyButton } from "./CopyButton";

type Tab = "telegram" | "slack" | "matrix" | "compose";

interface Preset {
  title: string;
  command: string;
  note: string;
}

const presets: Record<Tab, Preset> = {
  telegram: {
    title: "Telegram",
    command: `docker run -d --restart=unless-stopped \\
  -v myagent:/home/agent \\
  -e KERN_NAME=ops \\
  -e OPENROUTER_API_KEY="sk-or-v1-..." \\
  -e TELEGRAM_BOT_TOKEN="123456:ABC-DEF..." \\
  ghcr.io/oguzbilgic/kern-ai`,
    note: "DM the bot on Telegram. The first user to message is automatically paired as the operator.",
  },
  slack: {
    title: "Slack",
    command: `docker run -d --restart=unless-stopped \\
  -v myagent:/home/agent \\
  -e KERN_NAME=ops \\
  -e OPENROUTER_API_KEY="sk-or-v1-..." \\
  -e SLACK_BOT_TOKEN="xoxb-..." \\
  -e SLACK_APP_TOKEN="xapp-..." \\
  ghcr.io/oguzbilgic/kern-ai`,
    note: "Socket Mode connection — zero inbound ports or public webhooks needed.",
  },
  matrix: {
    title: "Matrix",
    command: `docker run -d --restart=unless-stopped \\
  -v myagent:/home/agent \\
  -e KERN_NAME=ops \\
  -e OPENROUTER_API_KEY="sk-or-v1-..." \\
  -e MATRIX_HOMESERVER="https://matrix.org" \\
  -e MATRIX_USER_ID="@ops:matrix.org" \\
  -e MATRIX_ACCESS_TOKEN="syt_..." \\
  ghcr.io/oguzbilgic/kern-ai`,
    note: "Directly joins rooms and answers mentions or DMs with end-to-end multi-turn persistence.",
  },
  compose: {
    title: "Docker Compose",
    command: `services:
  ops:
    image: ghcr.io/oguzbilgic/kern-ai
    restart: unless-stopped
    volumes:
      - ops-home:/home/agent
    environment:
      KERN_NAME: ops
      OPENROUTER_API_KEY: \${OPENROUTER_API_KEY}
      TELEGRAM_BOT_TOKEN: \${TELEGRAM_BOT_TOKEN}

volumes:
  ops-home:`,
    note: "Persists everything (memory DB, session JSONL, SSH keys, git workspace) inside the volume.",
  },
};

export function DeployTabs() {
  const [active, setActive] = useState<Tab>("telegram");
  const preset = presets[active];

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[#0d0d0d] overflow-hidden text-left font-mono text-xs shadow-xl">
      {/* Tab Header */}
      <div className="bg-[#141414] border-b border-[var(--border)] px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          {(Object.keys(presets) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              type="button"
              className={`px-3 py-1 rounded text-xs transition-colors ${
                active === tab
                  ? "bg-neutral-800 text-[var(--fg)] font-semibold border border-neutral-700"
                  : "text-[var(--muted)] hover:text-neutral-300"
              }`}
            >
              {presets[tab].title}
            </button>
          ))}
        </div>
        <CopyButton text={preset.command} label="Copy snippet" />
      </div>

      {/* Code Body */}
      <div className="p-4 sm:p-5 overflow-x-auto bg-[#0a0a0a]">
        <pre className="text-neutral-300 leading-relaxed font-mono whitespace-pre">
          {preset.command}
        </pre>
      </div>

      {/* Footer Note */}
      <div className="bg-[#111] border-t border-[var(--border)] px-4 py-2.5 text-[11px] text-[var(--muted)] flex items-center justify-between">
        <span>💡 {preset.note}</span>
        <span className="text-neutral-500 hidden sm:inline">1 volume = 1 persistent brain</span>
      </div>
    </div>
  );
}
