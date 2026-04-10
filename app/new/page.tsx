import Link from "next/link";

export default function NewHome() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="px-6 py-4 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/new" className="text-2xl font-bold tracking-tight">
          kern<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link>
          <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</Link>
          <Link href="/screenshots" className="hover:text-[var(--fg)] transition-colors">Screenshots</Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors flex items-center gap-1">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
          An AI agent that<br />never forgets
        </h1>
        <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
          One brain across terminal, browser, Telegram, and Slack. 
          Persistent memory, real tools, your infrastructure. 
          Not a chatbot — a coworker.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <div className="bg-[#111] border border-[var(--border)] rounded-lg px-5 py-3 font-mono text-sm inline-flex items-center gap-2">
            <span className="text-[var(--muted)]">$</span>
            <span>npm install -g kern-ai && kern init</span>
          </div>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Ready in 60 seconds. Supports OpenRouter, Anthropic, OpenAI, and Ollama.
        </p>
      </section>

      {/* Screenshot */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <img
          src="/images/web-ui.png"
          alt="kern web UI"
          className="rounded-xl border border-[var(--border)] shadow-2xl shadow-black/50"
        />
      </section>

      {/* Problem → Solution */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-mono text-[var(--muted)] mb-4 uppercase tracking-wider">The problem</h2>
          <p className="text-lg text-[var(--fg)] leading-relaxed mb-8">
            AI conversations are scattered. You ask Claude something in the browser, 
            continue on your phone, and it&apos;s a different conversation. You set up an agent 
            in Slack, but it can&apos;t see what you discussed in the terminal. Context is lost 
            every time you switch channels.
          </p>
          <h2 className="text-sm font-mono text-[var(--muted)] mb-4 uppercase tracking-wider">The fix</h2>
          <p className="text-lg text-[var(--fg)] leading-relaxed">
            kern runs one continuous session across every interface. Message from Telegram, 
            pick up in the terminal, check the web UI — same agent, same memory, same context. 
            It knows who&apos;s talking, what channel it&apos;s in, and what happened 10,000 messages ago.
          </p>
        </div>
      </section>

      {/* Three differentiators */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-3">
          <div>
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-lg font-bold mb-3">One brain, every channel</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Terminal, web, Telegram, Slack — all feed into one session. 
              The agent carries full context everywhere. No channel silos, no lost threads.
            </p>
            <pre className="text-xs text-[var(--muted)] leading-relaxed font-mono">
{`Terminal ─────┐
Web UI ───────┤
Telegram ─────┤── one session
Slack ────────┘`}
            </pre>
          </div>
          <div>
            <div className="text-3xl mb-4">♾️</div>
            <h3 className="text-lg font-bold mb-3">Memory that compounds</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Every conversation is segmented, summarized, and searchable. 
              20,000 messages compressed into the context window. 
              The agent gets smarter the longer it runs.
            </p>
            <pre className="text-xs text-[var(--muted)] leading-relaxed font-mono">
{`L2 ▪▪         (weeks)
L1 ▪▪▪▪▪▪     (days)
L0 ▪▪▪▪▪▪▪▪▪▪ (topics)
raw ──────────────────`}
            </pre>
          </div>
          <div>
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-lg font-bold mb-3">Your machine, your data</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Runs on your laptop, server, or homelab. The entire agent is a folder — 
              plain text, git-tracked, inspectable. Pay only for API tokens.
            </p>
            <pre className="text-xs text-[var(--muted)] leading-relaxed font-mono">
{`my-agent/
├── .kern/config.json
├── IDENTITY.md
├── KNOWLEDGE.md
├── knowledge/
└── notes/`}
            </pre>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-6 py-12 border-t border-[var(--border)] bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 text-center">
          <Stat value="★ 300+" label="GitHub stars" />
          <Stat value="4" label="Providers" />
          <Stat value="99%" label="Cache hit rate" />
          <Stat value="100k+" label="Token context" />
          <Stat value="60s" label="To first message" />
        </div>
      </section>

      {/* Features grid */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Everything an agent needs</h2>
          <p className="text-[var(--muted)] mb-12 text-center">Built-in, not bolted on.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Agent-built dashboards" desc="Agents create HTML dashboards with live data. Rendered in a side panel or inline. No frontend framework needed." />
            <FeatureCard title="Multi-modal" desc="Images, PDFs, files across every channel. Vision pre-digest, dedicated analysis tools, persistent storage." />
            <FeatureCard title="Desktop app" desc="Native macOS via Tauri. Tray icon, Cmd+1-9 agent switching, auto-reconnect." />
            <FeatureCard title="Prompt caching" desc="Three cache breakpoints. 99% mid-turn, 85-95% between turns. 10x cost reduction, zero config." />
            <FeatureCard title="Web UI" desc="React-based. Flat and bubble layouts, syntax highlighting, infinite scroll, drag-and-drop, multi-agent sidebar." />
            <FeatureCard title="Heartbeat" desc="Agents wake up periodically, review notes, update knowledge, reach out if needed. Autonomous maintenance." />
            <FeatureCard title="Real tools" desc="bash, read, write, edit, grep, glob, webfetch, websearch, pdf, image, render — full system access." />
            <FeatureCard title="Direct connections" desc="Connect from any browser with URL + token. Sticky ports, no proxy required, LAN and Tailscale ready." />
            <FeatureCard title="Plugin architecture" desc="Dashboard, media, recall, notes — all plugins with lifecycle hooks. Extend without touching core." />
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">What people build</h2>
          <div className="space-y-8">
            <UseCase
              emoji="🖥"
              title="Homelab admin"
              desc="Manages containers, monitors services, updates DNS, reboots machines. Remembers every config change across months of conversations."
            />
            <UseCase
              emoji="🤖"
              title="DevOps assistant"
              desc="Sits in #engineering on Slack. Answers questions, runs deploys, files tickets. Knows the full history of every incident."
            />
            <UseCase
              emoji="📋"
              title="Personal knowledge base"
              desc="Reads your notes, tracks your projects, wakes up daily to review what changed. Ask it anything about the last six months."
            />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">How it compares</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[var(--muted)]">
                  <th className="pb-3 pr-4"></th>
                  <th className="pb-3 pr-4 font-mono text-[var(--accent)]">kern</th>
                  <th className="pb-3 pr-4">ChatGPT</th>
                  <th className="pb-3 pr-4">Claude</th>
                  <th className="pb-3">Custom agent</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                <CompRow label="Persistent memory" values={["✓", "Limited", "Per-project", "DIY"]} />
                <CompRow label="Multi-channel" values={["✓", "✗", "✗", "DIY"]} />
                <CompRow label="Self-hosted" values={["✓", "✗", "✗", "✓"]} />
                <CompRow label="System tools" values={["✓", "Sandbox", "Sandbox", "DIY"]} />
                <CompRow label="Prompt caching" values={["Auto", "N/A", "N/A", "DIY"]} />
                <CompRow label="Multi-agent" values={["✓", "✗", "✗", "DIY"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 border-t border-[var(--border)] text-center">
        <h2 className="text-3xl font-bold mb-4">Start in 60 seconds</h2>
        <p className="text-[var(--muted)] mb-8">Two commands. Pick your model. Start talking.</p>
        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-6 font-mono text-sm space-y-2 max-w-lg mx-auto text-left mb-8">
          <div><span className="text-[var(--muted)]">$ </span>npm install -g kern-ai</div>
          <div><span className="text-[var(--muted)]">$ </span>kern init my-agent</div>
          <div><span className="text-[var(--muted)]">$ </span>kern tui</div>
        </div>
        <div className="flex gap-4 justify-center text-sm">
          <Link href="/docs/get-started" className="text-[var(--accent)] hover:underline">
            Read the docs →
          </Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            View on GitHub →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 border-t border-[var(--border)] py-8 max-w-5xl mx-auto flex flex-wrap gap-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--fg)] transition-colors">Home</Link>
        <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</Link>
        <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link>
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        <a href="https://www.npmjs.com/package/kern-ai" className="hover:text-[var(--fg)] transition-colors">npm</a>
        <a href="https://github.com/oguzbilgic/agent-kernel" className="hover:text-[var(--fg)] transition-colors">agent-kernel</a>
      </footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-[var(--fg)]">{value}</div>
      <div className="text-xs text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <h3 className="font-bold mb-2 text-sm">{title}</h3>
      <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
    </div>
  );
}

function UseCase({ emoji, title, desc }: { emoji: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="text-2xl flex-shrink-0 mt-1">{emoji}</div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CompRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-t border-[var(--border)]">
      <td className="py-3 pr-4 text-[var(--fg)]">{label}</td>
      {values.map((v, i) => (
        <td key={i} className={`py-3 pr-4 ${v === "✓" || v === "Auto" ? "text-[var(--accent)]" : ""}`}>
          {v}
        </td>
      ))}
    </tr>
  );
}
