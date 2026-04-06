export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      {/* Nav */}
      <nav className="flex items-center justify-end mb-16">
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <a href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</a>
          <a href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</a>
          <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors flex items-center gap-1">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">kern<span className="text-[var(--accent)]">.</span></h1>
        <p className="text-xl text-[var(--muted)] mb-6">
          AI agents built for coworking.
        </p>
        <p className="text-[var(--fg)] mb-8 leading-relaxed">
          One brain across every channel. Your agent sits in Slack channels,
          Telegram DMs, the terminal, and the browser. It knows who&apos;s talking,
          reads the room, and remembers everything. Humans and agents, same
          channels, same conversation.
        </p>
        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-4 mb-6 font-mono text-sm space-y-1">
          <div><span className="text-[var(--muted)] prompt">$ </span>npm install -g kern-ai</div>
          <div><span className="text-[var(--muted)] prompt">$ </span>kern init my-agent</div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="mb-20">
        <img
          src="/images/web-ui.png"
          alt="kern web UI showing a conversation with tool output"
          className="rounded-lg border border-[var(--border)] mb-6"
        />
        <pre className="text-sm text-[var(--muted)] leading-relaxed">
{`Terminal ─────────┐
Web UI ───────────┤
Telegram DM ──────┤── kern ── one session ── one folder
#engineering ─────┤
Slack DM ─────────┘`}
        </pre>
        <p className="text-sm text-[var(--muted)] mt-6">
          Built on{" "}
          <a href="https://github.com/oguzbilgic/agent-kernel" target="_blank" rel="noopener" className="text-[var(--fg)] underline underline-offset-2 hover:text-[var(--accent)] transition-colors">
            agent-kernel
          </a>{" "}
          — the open source agent memory pattern ★ 300+
        </p>
      </section>

      {/* Features */}
      <section className="mb-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <Feature
            title="One brain"
            description="A single continuous session across every interface. Message from Telegram, pick up in the terminal, continue in the browser. The agent always knows what happened."
          />
          <Feature
            title="Context-aware"
            description="The agent knows who's talking, which channel it's in, and what happened before. Every message carries identity and interface context. Cross-channel history is shared — nothing is lost between channels."
          />
          <Feature
            title="Agent-to-agent"
            description="Multiple agents can share channels without infinite loops. They recognize each other, speak when useful, stay silent when not. Humans drive the conversation — agents assist."
          />
          <Feature
            title="Long-term memory"
            description="Semantic search over every past conversation. Messages are segmented by topic, summarized hierarchically, and compressed into the context window. The Memory UI lets you inspect everything — sessions, segments, notes, recall, and the full context."
          />
          <Feature
            title="Web UI"
            description="Chat from any browser. Syntax-highlighted tool output, Memory inspector, agent sidebar, token-based auth, multi-server discovery, slash commands, markdown rendering. One port proxies everything."
          />
          <Feature
            title="A folder is the agent"
            description="Identity, memory, config, conversation — all in one directory. Plain text, git-tracked, inspectable. Move it, zip it, clone it."
          />
          <Feature
            title="Prompt caching"
            description="Three cache breakpoints keep the 100k+ token prompt stable across turns. 99% cache hit rate mid-turn, 85-95% between turns. Effective 10x cost reduction on input tokens — automatic for Anthropic, zero config."
          />
          <Feature
            title="Heartbeat"
            description="The agent wakes up periodically, reviews its notes, updates knowledge, and reaches out if something needs attention. Autonomous memory maintenance — no prompting required."
          />
          <Feature
            title="User pairing"
            description="Code-based approval. The first user becomes the operator automatically. Everyone else pairs with a KERN-XXXX code."
          />
          <Feature
            title="Slash commands"
            description="Type /status, /restart, or /help in any channel. Handled instantly by the runtime — no LLM call, zero tokens."
          />
        </div>
      </section>

      {/* Quick start */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Quick start</h2>
        <div className="space-y-4">
          <Step n={1} label="Install">
            npm install -g kern-ai
          </Step>
          <Step n={2} label="Create an agent">
            kern init my-agent
          </Step>
          <Step n={3} label="Chat from the terminal">
            kern tui
          </Step>
          <Step n={4} label="Or open in the browser">
            kern web start
          </Step>
        </div>
        <p className="text-sm text-[var(--muted)] mt-4">
          The init wizard asks for a provider and API key. Supports OpenRouter,
          Anthropic, OpenAI, and Ollama (local models). Agents run as daemons — start once, connect from anywhere.
        </p>
      </section>

      {/* CLI */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">CLI</h2>
        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-4 font-mono text-sm space-y-1">
          <CmdLine cmd="kern init" args="<name>" desc="create or configure" />
          <CmdLine cmd="kern start" args="[name|path]" desc="start agents" />
          <CmdLine cmd="kern stop" args="[name]" desc="stop agents" />
          <CmdLine cmd="kern restart" args="[name]" desc="restart agents" />
          <CmdLine cmd="kern tui" args="[name]" desc="interactive chat" />
          <CmdLine cmd="kern web" args="<start|stop|status>" desc="web UI server" />
          <CmdLine cmd="kern install" args="[name]" desc="install as service" />
          <CmdLine cmd="kern list" args="" desc="show all agents" />
          <CmdLine cmd="kern logs" args="[name]" desc="tail agent logs" />
          <CmdLine cmd="kern pair" args="<agent> <code>" desc="approve user" />
          <CmdLine cmd="kern import" args="opencode <path>" desc="import sessions" />
          <CmdLine cmd="kern backup" args="<name>" desc="backup to .tar.gz" />
          <CmdLine cmd="kern restore" args="<file>" desc="restore from backup" />
          <CmdLine cmd="kern remove" args="<name>" desc="unregister agent" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <a
          href="https://github.com/oguzbilgic/kern-ai"
          className="hover:text-[var(--fg)] transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/kern-ai"
          className="hover:text-[var(--fg)] transition-colors"
        >
          npm
        </a>
        <a
          href="/docs"
          className="hover:text-[var(--fg)] transition-colors"
        >
          Docs
        </a>
        <a
          href="https://github.com/oguzbilgic/agent-kernel"
          className="hover:text-[var(--fg)] transition-colors"
        >
          agent-kernel
        </a>
      </footer>
    </main>
  );
}

function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-[var(--muted)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function Step({ n, label, children }: { n: number; label: string; children: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-[var(--accent)] font-bold text-lg">{n}</span>
      <div className="flex-1">
        <p className="text-sm text-[var(--muted)] mb-1">{label}</p>
        <div className="bg-[#111] border border-[var(--border)] rounded px-3 py-2 font-mono text-sm">
          <span className="text-[var(--muted)] prompt">$ </span>{children}
        </div>
      </div>
    </div>
  );
}

function CmdLine({ cmd, args, desc }: { cmd: string; args: string; desc: string }) {
  return (
    <div className="flex">
      <span className="text-[var(--accent)]">{cmd}</span>
      {args && <span className="text-[var(--muted)] ml-1">{args}</span>}
      <span className="text-[var(--muted)] ml-auto text-xs">{desc}</span>
    </div>
  );
}
