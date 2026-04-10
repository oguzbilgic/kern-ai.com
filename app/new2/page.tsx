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
          Agents that do the work<br />
          <span className="text-[var(--muted)]">and show it</span>
        </h1>
        <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
          kern agents run on your machine, use real tools, remember everything,
          and publish dashboards. Not chatbots — autonomous coworkers
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
          alt="kern agent with chat and dashboard"
          className="rounded-xl border border-[var(--border)] shadow-2xl shadow-black/50"
        />
      </section>

      {/* The shift */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Every SaaS is a database, some logic, and a UI</h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            Salesforce is a contacts table with pipeline stages and forms.
            Jira is a task list with state machines and a board.
            Datadog is a time-series store with threshold rules and charts.
          </p>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            AI agents already handle data and logic. What they couldn&apos;t do was
            show their work. Chat is fine for questions, but nobody wants to ask
            &ldquo;what&apos;s the pipeline look like?&rdquo; every morning.
          </p>
          <p className="text-lg text-[var(--fg)] leading-relaxed">
            When an agent can maintain its own dashboard — publish data, render a UI,
            and route human actions back through its reasoning — that&apos;s the
            full stack. Data, logic, presentation. Except the agent builds it,
            maintains it, and adapts it to <em>your</em> business.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">How it works</h2>
          <p className="text-[var(--muted)] mb-12 text-center">An agent is a folder. A dashboard is a subfolder.</p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <pre className="text-sm text-[var(--muted)] leading-relaxed font-mono bg-[#111] border border-[var(--border)] rounded-lg p-5">
{`my-agent/
├── .kern/config.json
├── IDENTITY.md
├── knowledge/
├── notes/
└── dashboards/
    └── pipeline/
        ├── index.html
        └── data.json`}
              </pre>
            </div>
            <div className="space-y-6">
              <Step n="1" text="The agent maintains data.json — after a tool call, a heartbeat check, a webhook, whatever triggers it." />
              <Step n="2" text="The dashboard reads this data through an injected variable. Any HTML, any CDN library. No build step." />
              <Step n="3" text="When someone clicks an action, it becomes a message to the agent. The agent reasons and acts." />
            </div>
          </div>

          <div className="mt-12 text-center">
            <pre className="inline-block text-sm text-[var(--muted)] font-mono bg-[#111] border border-[var(--border)] rounded-lg px-6 py-3">
{`Agent maintains data → Dashboard renders → Human acts → Agent reasons`}
            </pre>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid gap-16 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-3">One brain, every channel</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              Terminal, browser, Telegram, Slack — one continuous session.
              The agent knows who&apos;s talking, what channel it&apos;s in, and what happened
              10,000 messages ago. No context lost between channels.
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
              Conversations are segmented by topic, summarized into a hierarchy,
              and compressed into context. Semantic recall searches everything.
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
{`$ kern init sales-agent
$ kern start
$ kern tui
Listening on :4100`}
            </pre>
          </div>
        </div>
      </section>

      {/* The vision */}
      <section className="px-6 py-20 border-t border-[var(--border)] bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">The agent intranet</h2>
          <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
            One agent with a dashboard replaces one SaaS tool. The real shift
            happens at the org level.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mb-8">
            <VisionCard role="Sales agent" desc="Pipeline by stage, deal velocity, stalled opportunities. Click 'follow up' — the agent drafts and sends the email." />
            <VisionCard role="Infra agent" desc="Service health, deploy status, cost trends. A red indicator? Click — the agent explains and proposes a fix." />
            <VisionCard role="Finance agent" desc="Burn rate, runway, spend by category. Cloud cost spike? Click — the agent traces it and recommends action." />
            <VisionCard role="Support agent" desc="Ticket queue, response times, recurring themes. Click a ticket — the agent drafts a reply from your docs." />
          </div>
          <p className="text-lg text-[var(--fg)] leading-relaxed">
            Each agent publishes its dashboard. Put them behind one URL.
            That&apos;s your company intranet — except nobody designed it,
            nobody maintains it, and it adapts as your business changes.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">What ships today</h2>
          <p className="text-[var(--muted)] mb-12 text-center">Not a roadmap. Primitives you can use right now.</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Dashboards" desc="Agents create HTML dashboards with live data injection. Rendered in a side panel or inline in chat." />
            <FeatureCard title="Multi-modal" desc="Images, PDFs, files across every channel. Vision pre-digest, dedicated pdf and image analysis tools." />
            <FeatureCard title="Desktop app" desc="Native macOS via Tauri. Tray icon, Cmd+1-9 agent switching, direct connections." />
            <FeatureCard title="Prompt caching" desc="Three cache breakpoints. 99% mid-turn hits, 10x cost reduction. Automatic for Anthropic." />
            <FeatureCard title="React web UI" desc="Flat and bubble layouts, syntax highlighting, infinite scroll, multi-agent sidebar with live status." />
            <FeatureCard title="Real tools" desc="bash, read, write, edit, grep, webfetch, websearch, pdf, image, render — full system access." />
            <FeatureCard title="4 providers" desc="OpenRouter, Anthropic, OpenAI, Ollama. Mix models per role — chat, embeddings, summaries, vision." />
            <FeatureCard title="Heartbeat" desc="Agents wake periodically, review notes, update knowledge, reach out if needed. Autonomous." />
            <FeatureCard title="Plugin architecture" desc="Dashboard, media, recall, notes — all plugins with lifecycle hooks. Extend without touching core." />
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

      {/* Bottom CTA */}
      <section className="px-6 py-24 border-t border-[var(--border)] text-center">
        <h2 className="text-3xl font-bold mb-4">Start building</h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          Two commands. Pick your model. Your agent remembers everything
          from the first message.
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

function Step({ n, text }: { n: string; text: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-[var(--accent)] font-bold font-mono text-lg flex-shrink-0">{n}</span>
      <p className="text-sm text-[var(--muted)] leading-relaxed">{text}</p>
    </div>
  );
}

function VisionCard({ role, desc }: { role: string; desc: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-4">
      <h4 className="font-bold text-sm mb-1">{role}</h4>
      <p className="text-xs text-[var(--muted)] leading-relaxed">{desc}</p>
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
