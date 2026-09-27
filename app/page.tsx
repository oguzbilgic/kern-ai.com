import Link from "next/link";
import { DeployTabs } from "./components/DeployTabs";
import { HighlightYaml } from "./components/HighlightYaml";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="px-6 py-4 max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          kern<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
          <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</Link>
          <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link>
          <a
            href="https://github.com/oguzbilgic/kern-ai"
            className="hover:text-[var(--fg)] transition-colors flex items-center gap-1.5"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Coworker agents that <br className="hidden sm:inline" />
          <span className="text-[var(--accent)]">live in your chat</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
          kern runs agents as long-lived containers with one persistent memory across Slack, Matrix, Telegram, Discord, IRC, and Nostr. They run background jobs, fan out sub-agents, and report back in the channel where the work was asked for.
        </p>

        {/* Hero Quick Commands */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 max-w-xl mx-auto">
          <a
            href="#fleet"
            className="w-full sm:w-auto bg-[var(--fg)] text-black font-semibold rounded-lg px-6 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            Get Started ↓
          </a>
          <a
            href="https://github.com/oguzbilgic/kern-ai"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto bg-[#111] border border-[var(--border)] text-neutral-300 font-semibold rounded-lg px-6 py-3 text-sm hover:border-[var(--accent)] hover:text-[var(--fg)] transition-all flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <p className="text-xs text-[var(--muted)]">
          No dashboards to host. No ports to expose. One volume per coworker.
        </p>
      </section>

      {/* Core Visual: Interactive Chat Room Workspace */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="rounded-xl border border-[var(--border)] bg-[#0d0d0d] shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
          {/* Chat Window Chrome / Header */}
          <div className="bg-[#141414] border-b border-[var(--border)] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/50 inline-block" />
              <span className="ml-2 font-bold text-neutral-300 flex items-center gap-1.5">
                <span className="text-[var(--muted)]">#</span>eng-operations
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[var(--muted)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>2 bots online</span>
              </span>
              <span className="hidden sm:inline border-l border-[var(--border)] pl-3 text-neutral-500">Slack / Matrix / Discord</span>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 sm:p-6 space-y-5 leading-relaxed">
            {/* User Message */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                OG
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-neutral-200">oguz</span>
                  <span className="text-[10px] text-neutral-500">today at 14:02</span>
                </div>
                <div className="text-neutral-300">
                  <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-1 rounded">@ops</span> staging checkout service is throwing 504 gateway timeouts. Profile the query latency and run the integration suite in the background.
                </div>
              </div>
            </div>

            {/* Agent Immediate Acknowledgement */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                OP
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-emerald-400">ops</span>
                  <span className="bg-neutral-800 text-neutral-400 text-[9px] px-1 py-0.5 rounded font-sans uppercase tracking-wider">APP</span>
                  <span className="text-[10px] text-neutral-500">14:02</span>
                </div>
                <div className="text-neutral-300 space-y-1.5">
                  <p>On it. Spawning a sub-agent to analyze Postgres slow logs and starting detached integration tests with <code className="text-amber-400">remindEvery: 60</code>.</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      spawn(subagent: query-profiler)
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      bash(job: npm test --suite=integration)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-agent Completion Arrival */}
            <div className="ml-10 p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 text-neutral-400 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span>✓</span> [subagent:query-profiler done, 14s]
                </span>
                <span className="text-[10px] text-neutral-500">14:02:44</span>
              </div>
              <p className="text-neutral-300">
                Identified missing index on <code className="text-neutral-200">orders(account_id, created_at)</code> causing sequential scan on 2.4M rows during peak checkout locks.
              </p>
            </div>

            {/* Background Job Finished Stamped to Origin */}
            <div className="ml-10 p-3 rounded-lg border border-neutral-800/80 bg-neutral-900/40 text-neutral-400 space-y-1">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-blue-400 font-semibold flex items-center gap-1">
                  <span>✓</span> [job:job_e9b41a exited 0, 48s] npm test --suite=integration
                </span>
                <span className="text-[10px] text-neutral-500">14:03:18</span>
              </div>
              <p className="text-neutral-300">
                48 test suites passed, 192 tests ok. Zero regressions in checkout pipeline.
              </p>
            </div>

            {/* Agent Synthesized Report In Channel */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                OP
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-emerald-400">ops</span>
                  <span className="bg-neutral-800 text-neutral-400 text-[9px] px-1 py-0.5 rounded font-sans uppercase tracking-wider">APP</span>
                  <span className="text-[10px] text-neutral-500">14:03:22</span>
                </div>
                <div className="text-neutral-300 space-y-2">
                  <p>
                    Root cause isolated: query lock on <code className="text-neutral-200">orders</code> table. Integration tests confirmed clean. Migration ready:
                  </p>
                  <pre className="p-2.5 rounded bg-black/60 border border-neutral-800 text-neutral-300 overflow-x-auto text-[11px]">
CREATE INDEX CONCURRENTLY idx_orders_account_created
ON orders (account_id, created_at DESC);
                  </pre>
                  <div className="flex items-center gap-2 pt-1 text-xs text-neutral-400">
                    <span className="text-neutral-500">Shared artifact:</span>
                    <a href="https://botbin.io" className="text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                      <span>botbin.io/incident-profile-291</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: A Fleet is Just Containers */}
      <section id="fleet" className="px-6 py-20 border-t border-[var(--border)] bg-[#0d0d0d]/60 scroll-mt-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3 tracking-tight">A fleet is just containers</h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto leading-relaxed mb-6">
              No complex daemon networks or master controllers. Each agent is a directory with its own volume and chat account. Name them after their job:
            </p>
            <div className="inline-flex justify-center">
              <Link
                href="/docs/docker"
                className="inline-flex items-center gap-2 bg-[var(--fg)] text-black font-semibold rounded-lg px-5 py-2.5 text-xs sm:text-sm hover:opacity-90 transition-opacity"
              >
                <span>Deploy Guide</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Compose Example */}
            <div className="rounded-xl border border-[var(--border)] bg-black p-5 font-mono text-xs overflow-x-auto shadow-2xl">
              <div className="text-[var(--muted)] mb-3 pb-2 border-b border-[var(--border)] flex justify-between items-center">
                <span className="font-semibold text-neutral-300">compose.yaml</span>
                <span className="text-neutral-500 text-[11px]">Docker Compose</span>
              </div>
              <HighlightYaml
                code={`services:
  ops:
    image: ghcr.io/oguzbilgic/kern-ai
    restart: unless-stopped
    volumes: ["ops-home:/home/agent"]
    environment:
      KERN_NAME: ops
      OPENROUTER_API_KEY: sk-or-...
      SLACK_BOT_TOKEN: xoxb-...
      SLACK_APP_TOKEN: xapp-...

  research:
    image: ghcr.io/oguzbilgic/kern-ai
    restart: unless-stopped
    volumes: ["research-home:/home/agent"]
    environment:
      KERN_NAME: research
      OPENROUTER_API_KEY: sk-or-...
      MATRIX_HOMESERVER: https://m.matrix
      MATRIX_USER_ID: "@research:matrix"
      MATRIX_ACCESS_TOKEN: syt_...

volumes:
  ops-home:
  research-home:`}
              />
            </div>

            {/* Why it works */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-sm text-neutral-200">Docker owns the lifecycle</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Restarts, health checks, CPU limits, and memory caps belong to your container runtime. `!restart` in chat cleanly signals Docker to reboot the container.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-sm text-neutral-200">Zero exposed ports</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    Coworkers live inside your chat networks over outbound WebSocket and HTTPS connections. No reverse proxies, no open firewall ports, no attack surface.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1 text-sm text-neutral-200">Self-sufficient workspaces</h3>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    The persistent volume holds sessions, memory DBs, git repositories, and any packages the agent installs for itself (<code className="text-neutral-400">npm -g</code>, <code className="text-neutral-400">pip</code>, SSH keys).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Three Pillars */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto grid gap-12 md:grid-cols-3">
          <div>
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <h3 className="text-base font-bold mb-2">One brain, every channel</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              Slack, Matrix, Telegram, Discord, IRC, and Nostr feed into one continuous session. Ask on Telegram, follow up in Slack — the agent remembers both.
            </p>
            <pre className="text-[11px] text-neutral-400 bg-[#111] p-3 rounded-lg border border-[var(--border)] font-mono leading-relaxed">
{`Slack ────────┐
Matrix ───────┤
Telegram ─────┤── one session
Discord ──────┤
IRC / Nostr ──┘`}
            </pre>
          </div>

          <div>
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            </div>
            <h3 className="text-base font-bold mb-2">Memory like a coworker</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              Conversations are segmented by topic, summarized, and rolled up into a DAG hierarchy (L0 → L1 → L2). Plus, a git repository of notes and knowledge it maintains itself.
            </p>
            <pre className="text-[11px] text-neutral-400 bg-[#111] p-3 rounded-lg border border-[var(--border)] font-mono leading-relaxed">
{`L2 ▪▪         (weeks)
L1 ▪▪▪▪▪▪     (days)
L0 ▪▪▪▪▪▪▪▪▪▪ (topics)
raw ──────────────────
+ knowledge/ & notes/`}
            </pre>
          </div>

          <div>
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
            </div>
            <h3 className="text-base font-bold mb-2">Does the real work</h3>
            <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
              Background shell commands run detached while the agent stays responsive. Parallel sub-agents fan out research. Platform tools let agents pin, react, and inspect chat history.
            </p>
            <pre className="text-[11px] text-neutral-400 bg-[#111] p-3 rounded-lg border border-[var(--border)] font-mono leading-relaxed">
{`bash({ background: true })
spawn({ prompt: ... })
slack({ action: "pins" })
matrix({ action: "widget" })`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section: Interfaces Grid */}
      <section className="px-6 py-20 border-t border-[var(--border)] bg-[#0d0d0d]/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Works where your team works</h2>
            <p className="text-xs text-[var(--muted)]">Every network feeds the same brain with turn envelopes and operator pairing.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <InterfaceBadge name="Slack" desc="Bot + App Token" icon="⚡" />
            <InterfaceBadge name="Matrix" desc="Any homeserver" icon="M" />
            <InterfaceBadge name="Telegram" desc="Direct bot API" icon="✈" />
            <InterfaceBadge name="Discord" desc="Guild & DM bots" icon="👾" />
            <InterfaceBadge name="IRC" desc="IRCv3 + TLS" icon="#" />
            <InterfaceBadge name="Nostr" desc="NIP-04/17 DMs" icon="🟣" />
          </div>
        </div>
      </section>

      {/* Features: What Ships Today */}
      <section className="px-6 py-20 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Built for production homelabs & workspaces</h2>
          <p className="text-xs text-[var(--muted)] mb-12 text-center">Not demo scripts. Primitives engineered for long-lived reliability.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Background shell jobs" desc="Detached long-running tasks. Exit status and tail output announce back into the channel that started them." />
            <FeatureCard title="Parallel sub-agents" desc="Spawn bounded read-only workers to research docs or evaluate candidates in parallel. Uses cheaper models." />
            <FeatureCard title="Lossless context (LCM)" desc="Topic segmentation DAG. Context never collapses — older turns compress into structured semantic summaries." />
            <FeatureCard title="Offline DB repair" desc="Scripts like recall-health, segment-prune, and recall-repair keep sqlite vector stores clean and consistent." />
            <FeatureCard title="Voice message I/O" desc="Audio notes transcribed automatically via Gemini audio or Whisper. Outbound voice notes synthesised inline." />
            <FeatureCard title="Chat commands" desc="Native /status, /wyd, /jobs, /subagents, /skills, and /restart. Works with ! prefix on reserved chat nets." />
            <FeatureCard title="Dynamic skills & MCP" desc="Load reusable skills dynamically without restarts. Connect external Model Context Protocol tool servers." />
            <FeatureCard title="Shared artifact links" desc="Chat-native agents share tables, reports, and dashboards via Botbin.io or matrix iframe room widgets." />
            <FeatureCard title="Multi-provider" desc="OpenRouter, Anthropic, OpenAI, or fully local Ollama. Point cheap models at background summaries and subagents." />
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 border-t border-[var(--border)] bg-[#0d0d0d]/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">How kern compares</h2>
          <p className="text-xs text-[var(--muted)] mb-8 text-center">Engineered specifically for coworker agents living in chat.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="text-left text-[var(--muted)] border-b border-[var(--border)]">
                  <th className="pb-3 pr-4"></th>
                  <th className="pb-3 pr-4 font-mono text-[var(--accent)] font-bold">kern</th>
                  <th className="pb-3 pr-4">Claude Code</th>
                  <th className="pb-3 pr-4">Codex</th>
                  <th className="pb-3 pr-4">OpenClaw</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)] divide-y divide-neutral-900 font-mono">
                <CompRow label="Operating model" values={["Coworker in chat", "CLI developer tool", "Coding assistant", "Chatbot gateway"]} />
                <CompRow label="Session model" values={["One brain across all", "Per-project terminal", "Per-task sandbox", "Per-channel isolation"]} />
                <CompRow label="Process lifecycle" values={["Plain Docker container", "Interactive terminal", "Cloud sandbox", "Monolithic daemon"]} />
                <CompRow label="Background tasks" values={["Origin-routed jobs", "Blocking CLI execution", "Sandboxed run", "Background exec"]} />
                <CompRow label="Sub-agents" values={["Parallel fan-out", "Sub-tasks", "✗", "Sub-sessions"]} />
                <CompRow label="Long-term memory" values={["Hierarchical DAG + Git", "CLAUDE.md", "Task memory", "Daily resets"]} />
                <CompRow label="Inbound ports" values={["Zero (pure outbound)", "Zero (local)", "Cloud API", "Gateway ports"]} />
                <CompRow label="Open source" values={["MIT", "✗", "✗", "Apache 2.0"]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 border-t border-[var(--border)] text-center">
        <h2 className="text-3xl font-bold mb-3 tracking-tight">Deploy your first coworker</h2>
        <p className="text-xs sm:text-sm text-[var(--muted)] mb-8 max-w-lg mx-auto">
          Give it a container, a bot token, and a volume. It remembers everything from here.
        </p>
        <div className="max-w-xl mx-auto mb-8">
          <DeployTabs />
        </div>
        <div className="flex gap-6 justify-center text-xs font-semibold">
          <Link href="/docs/docker" className="text-[var(--accent)] hover:underline">
            Read Docker Guide →
          </Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
            GitHub Repo →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 border-t border-[var(--border)] py-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-xs">
          <div>
            <div className="text-lg font-bold tracking-tight mb-2 font-mono">
              kern<span className="text-[var(--accent)]">.</span>
            </div>
            <p className="text-[var(--muted)] max-w-xs leading-relaxed">
              Open-source runtime for chat-native coworker agents. One memory, background jobs, zero open ports.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1 font-semibold">Documentation</span>
              <Link href="/docs" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Docs</Link>
              <Link href="/docs/docker" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Docker</Link>
              <Link href="/docs/memory" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Memory</Link>
              <Link href="/docs/interfaces" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Interfaces</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1 font-semibold">Community</span>
              <a href="https://github.com/oguzbilgic/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.npmjs.com/package/kern-ai" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" target="_blank" rel="noreferrer">npm</a>
              <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">Blog</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1 font-semibold">Related</span>
              <a href="https://github.com/oguzbilgic/agent-kernel" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" target="_blank" rel="noreferrer">agent-kernel</a>
              <a href="https://botbin.io" className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors" target="_blank" rel="noreferrer">botbin.io</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InterfaceBadge({ name, desc, icon }: { name: string; desc: string; icon: string }) {
  return (
    <div className="p-3 rounded-lg border border-[var(--border)] bg-[#111] flex flex-col items-center text-center">
      <span className="text-xl mb-1">{icon}</span>
      <span className="font-bold text-xs text-neutral-200">{name}</span>
      <span className="text-[10px] text-[var(--muted)] mt-0.5">{desc}</span>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-[var(--border)] rounded-lg p-4 bg-[#111]/40">
      <h3 className="font-bold mb-1.5 text-xs text-neutral-200">{title}</h3>
      <p className="text-[11px] text-[var(--muted)] leading-relaxed">{desc}</p>
    </div>
  );
}

function CompRow({ label, values }: { label: string; values: string[] }) {
  return (
    <tr>
      <td className="py-2.5 pr-4 text-neutral-400 font-medium">{label}</td>
      {values.map((v, i) => (
        <td
          key={i}
          className={`py-2.5 pr-4 ${i === 0 ? "text-[var(--accent)] font-bold" : "text-neutral-500"}`}
        >
          {v}
        </td>
      ))}
    </tr>
  );
}
