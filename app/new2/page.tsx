import Link from "next/link";

export default function New2Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="px-6 py-4 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/new2" className="text-2xl font-bold tracking-tight">
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
      <section className="px-6 pt-24 pb-16 max-w-3xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Agents that do the work
          <span className="text-[var(--muted)]"> and show it</span>
        </h1>
        <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
          kern agents run on your machine, use real tools, remember everything,
          and publish their own dashboards. Not chatbots — autonomous workers
          that maintain their own UI.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <div className="bg-[#111] border border-[var(--border)] rounded-lg px-5 py-3 font-mono text-sm inline-flex items-center gap-2">
            <span className="text-[var(--muted)]">$</span>
            <span>npm install -g kern-ai && kern init</span>
          </div>
        </div>
        <p className="text-sm text-[var(--muted)]">
          Open source. Self-hosted. Ready in 60 seconds.
        </p>
      </section>

      {/* Screenshot */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <img
          src="/images/web-ui.png"
          alt="kern agent with dashboard"
          className="rounded-xl border border-[var(--border)] shadow-2xl shadow-black/50"
        />
      </section>

      {/* Agent intranet — the vision, up front */}
      <section className="px-6 py-20 border-t border-[var(--border)] bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">The agent intranet</h2>
          <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
            Every function in your company runs an agent.
            Every agent publishes a dashboard. Put them behind one URL.
            That&apos;s your intranet — except it builds itself.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <IntranetCard
              role="Sales agent"
              desc="Pipeline by stage, deal velocity, stalled deals. Click 'follow up' — the agent drafts and sends the email."
            />
            <IntranetCard
              role="Infra agent"
              desc="Service health, deploy status, cost trends. Red indicator? Click — the agent explains and proposes a fix."
            />
            <IntranetCard
              role="Finance agent"
              desc="Burn rate, runway, spend breakdown. Cloud cost spike? Click — the agent traces it to a service."
            />
            <IntranetCard
              role="Support agent"
              desc="Ticket queue, response times, themes. Click a ticket — the agent drafts a reply from your docs."
            />
          </div>
          <p className="text-center text-sm text-[var(--muted)] mt-8">
            <Link href="/blog/agent-dashboards" className="text-[var(--accent)] hover:underline">
              Read the full thesis →
            </Link>
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-3">One brain, every channel</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Terminal, browser, Telegram, Slack — one continuous session.
              The agent knows who&apos;s talking, what channel it&apos;s in,
              and what happened 10,000 messages ago.
            </p>
            <pre className="text-xs text-[var(--muted)] leading-relaxed font-mono">
{`Terminal ─────┐
Web UI ───────┤
Telegram ─────┤── one session
Slack ────────┘`}
            </pre>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Memory that compounds</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Conversations segmented by topic, summarized into a hierarchy,
              compressed into context. Semantic recall over everything.
              The agent gets better the longer it runs.
            </p>
            <pre className="text-xs text-[var(--muted)] leading-relaxed font-mono">
{`L2 ▪▪         (weeks)
L1 ▪▪▪▪▪▪     (days)
L0 ▪▪▪▪▪▪▪▪▪▪ (topics)
raw ──────────────────`}
            </pre>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Your infra, your data</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Runs on your laptop, server, or homelab. The whole agent is
              a git-tracked folder. Pay only for API tokens — or use Ollama
              for fully local, zero-cost inference.
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

      {/* Memory — visual proof */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">See inside the agent&apos;s brain</h2>
          <p className="text-center text-[var(--muted)] mb-12 max-w-2xl mx-auto">
            Every conversation is segmented, summarized, and searchable.
            Five tabs show exactly what the agent knows and how it thinks.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <MemoryCard
              img="/images/segments-2.png"
              title="Semantic segments"
              desc="Conversations split by topic, rolled up into hierarchical summaries. Color-coded by token density."
            />
            <MemoryCard
              img="/images/recall.png"
              title="Recall search"
              desc="Semantic search over every past conversation. Find decisions, configs, or context from months ago."
            />
            <MemoryCard
              img="/images/sessions.png"
              title="Sessions"
              desc="Message activity, channel breakdown, role distribution. See how the agent spends its time."
            />
            <MemoryCard
              img="/images/context.png"
              title="Context window"
              desc="Token budget visualization. System prompt, compressed summaries, raw messages — see what fits."
            />
          </div>
          <p className="text-center text-sm text-[var(--muted)] mt-8">
            <Link href="/blog/memory-ui" className="text-[var(--accent)] hover:underline">
              See inside your agent&apos;s brain →
            </Link>
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 border-t border-[var(--border)] bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12 text-center">
          <StatBlock value="★ 300+" label="GitHub stars" />
          <StatBlock value="100k+" label="Token context" />
          <StatBlock value="99%" label="Cache hit rate" />
          <StatBlock value="4" label="LLM providers" />
          <StatBlock value="60s" label="To first message" />
        </div>
      </section>

      {/* Features — what ships today */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">What ships today</h2>
          <p className="text-[var(--muted)] mb-12 text-center">Not a roadmap. Primitives you can use right now.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Agent-built dashboards" desc="Agents create HTML dashboards with live data injection. Rendered in a side panel or inline in chat." />
            <FeatureCard title="Multi-modal" desc="Images, PDFs, files across every channel. Vision pre-digest, PDF extraction, dedicated analysis tools." />
            <FeatureCard title="Desktop app" desc="Native macOS via Tauri. Tray icon, Cmd+1-9 agent switching, direct connections." />
            <FeatureCard title="Prompt caching" desc="Three cache breakpoints. 99% mid-turn hits, 10x cost reduction. Automatic for Anthropic." />
            <FeatureCard title="React web UI" desc="Flat and bubble layouts, syntax highlighting, infinite scroll, multi-agent sidebar with live status." />
            <FeatureCard title="Real tools" desc="bash, read, write, edit, grep, webfetch, websearch, pdf, image, render — full system access." />
            <FeatureCard title="4 providers" desc="OpenRouter, Anthropic, OpenAI, Ollama. Mix models per role — chat, embeddings, summaries, vision." />
            <FeatureCard title="Heartbeat" desc="Agents wake periodically — review notes, update knowledge, reach out if needed. Autonomous maintenance." />
            <FeatureCard title="Plugin architecture" desc="Dashboard, media, recall, notes extracted as plugins. Extend with lifecycle hooks, no core changes." />
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3 text-center">Not another chatbot framework</h2>
          <p className="text-[var(--muted)] mb-8 text-center">kern is infrastructure for agents that do real work.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-left text-[var(--muted)]">
                  <th className="pb-3 pr-4"></th>
                  <th className="pb-3 pr-4 font-mono text-[var(--accent)]">kern</th>
                  <th className="pb-3 pr-4">ChatGPT</th>
                  <th className="pb-3 pr-4">Claude</th>
                  <th className="pb-3">DIY agent</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                <CompRow label="Agent-built UI" values={["Dashboards", "✗", "Artifacts", "DIY"]} />
                <CompRow label="Persistent memory" values={["Hierarchical", "Limited", "Per-project", "DIY"]} />
                <CompRow label="Multi-channel" values={["5 interfaces", "✗", "✗", "DIY"]} />
                <CompRow label="Self-hosted" values={["✓", "✗", "✗", "✓"]} />
                <CompRow label="System tools" values={["Full access", "Sandbox", "Sandbox", "DIY"]} />
                <CompRow label="Cost control" values={["10x caching", "Subscription", "Subscription", "DIY"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 border-t border-[var(--border)] text-center">
        <h2 className="text-3xl font-bold mb-4">Your first agent in 60 seconds</h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          Pick a model. Start talking. It remembers everything from here.
        </p>
        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-6 font-mono text-sm space-y-2 max-w-lg mx-auto text-left mb-8">
          <div><span className="text-[var(--muted)]">$ </span>npm install -g kern-ai</div>
          <div><span className="text-[var(--muted)]">$ </span>kern init my-agent</div>
          <div><span className="text-[var(--muted)]">$ </span>kern tui</div>
        </div>
        <div className="flex gap-6 justify-center text-sm">
          <Link href="/docs/get-started" className="text-[var(--accent)] hover:underline">
            Get started guide →
          </Link>
          <Link href="/blog/agent-dashboards" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            Read the dashboard thesis →
          </Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            GitHub →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 border-t border-[var(--border)] py-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <div className="text-lg font-bold tracking-tight mb-2">
              kern<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="text-xs text-[var(--muted)] max-w-xs leading-relaxed">
              Open-source agent runtime. Self-hosted, persistent memory,
              agent-built dashboards. Built for people who want agents
              that actually do things.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Product</span>
              <Link href="/docs/get-started" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Get started</Link>
              <Link href="/docs" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Docs</Link>
              <Link href="/screenshots" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Screenshots</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Community</span>
              <a href="https://github.com/oguzbilgic/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">GitHub</a>
              <a href="https://www.npmjs.com/package/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">npm</a>
              <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs text-[var(--muted)] uppercase tracking-wider mb-1">Related</span>
              <a href="https://github.com/oguzbilgic/agent-kernel" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">agent-kernel</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MemoryCard({ img, title, desc }: { img: string; title: string; desc: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden">
      <img src={img} alt={title} className="w-full border-b border-[var(--border)]" loading="lazy" />
      <div className="p-4">
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function IntranetCard({ role, desc }: { role: string; desc: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-5">
      <h4 className="font-bold mb-2">{role}</h4>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{desc}</p>
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

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-[var(--fg)]">{value}</div>
      <div className="text-xs text-[var(--muted)] mt-1">{label}</div>
    </div>
  );
}

function CompRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr className="border-t border-[var(--border)]">
      <td className="py-3 pr-4 text-[var(--fg)]">{label}</td>
      {values.map((v, i) => (
        <td key={i} className={`py-3 pr-4 ${i === 0 ? "text-[var(--accent)]" : ""}`}>
          {v}
        </td>
      ))}
    </tr>
  );
}
