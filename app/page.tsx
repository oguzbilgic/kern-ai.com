export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">kern</h1>
        <p className="text-xl text-[var(--muted)] mb-6">
          AI agents built for coworking.
        </p>
        <p className="text-[var(--fg)] mb-8 leading-relaxed">
          One brain across every channel. Your agent sits in Slack channels,
          Telegram DMs, and the terminal. It knows who&apos;s talking, reads the
          room, and remembers everything. Humans and agents, same channels, same
          conversation.
        </p>
        <div className="bg-[#111] border border-[var(--border)] rounded-lg p-4 mb-6 font-mono text-sm">
          <span className="text-[var(--muted)]">$</span> npx kern-ai init
          my-agent
        </div>
      </section>

      {/* Diagram */}
      <section className="mb-20">
        <pre className="text-sm text-[var(--muted)] leading-relaxed">
{`Terminal ─────────┐
Telegram DM ──────┤── kern ── one session ── one folder
#engineering ─────┤
Slack DM ─────────┘`}
        </pre>
      </section>

      {/* Features */}
      <section className="mb-20">
        <div className="grid gap-8 sm:grid-cols-2">
          <Feature
            title="One brain"
            description="A single continuous session across every interface. Message from Telegram, pick up in the TUI, continue in Slack. The agent always knows what happened."
          />
          <Feature
            title="Context-aware"
            description="The agent knows who's talking and where. It adapts — brief on Telegram, detailed in the terminal, professional in Slack channels."
          />
          <Feature
            title="A folder is the agent"
            description="Identity, memory, config, conversation — all in one directory. Plain text, git-tracked, inspectable. Move it, zip it, clone it."
          />
          <Feature
            title="No infra"
            description="No server, no database, no vector store. A folder, an API key, and npx kern-ai. Runs as a daemon with one command."
          />
          <Feature
            title="User pairing"
            description="Code-based approval. The first user becomes the operator automatically. Everyone else pairs with a KERN-XXXX code."
          />
          <Feature
            title="Agent-to-agent"
            description="Agents know not to loop with each other. They read the room, speak when useful, and let humans drive."
          />
        </div>
      </section>

      {/* Quick start */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Quick start</h2>
        <div className="space-y-4">
          <Step n={1} label="Create an agent">
            npx kern-ai init my-agent
          </Step>
          <Step n={2} label="Chat from the terminal">
            npx kern-ai tui
          </Step>
          <Step n={3} label="Or run as a daemon">
            npx kern-ai start my-agent
          </Step>
        </div>
        <p className="text-sm text-[var(--muted)] mt-4">
          The init wizard asks for a provider and API key. Supports OpenRouter,
          Anthropic, and OpenAI.
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
          <CmdLine cmd="kern list" args="" desc="show all agents" />
          <CmdLine cmd="kern pair" args="<agent> <code>" desc="approve user" />
          <CmdLine cmd="kern backup" args="<name>" desc="backup to .tar.gz" />
          <CmdLine cmd="kern restore" args="<file>" desc="restore from backup" />
          <CmdLine cmd="kern remove" args="<name>" desc="unregister agent" />
        </div>
      </section>

      {/* Agent structure */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Agent structure</h2>
        <pre className="text-sm text-[var(--muted)] leading-relaxed bg-[#111] border border-[var(--border)] rounded-lg p-4">
{`my-agent/
  AGENTS.md           # how the agent behaves
  IDENTITY.md         # who the agent is
  KNOWLEDGE.md        # what it knows
  USERS.md            # paired users
  knowledge/          # mutable state
  notes/              # daily logs
  .kern/
    config.json       # model, provider, toolScope
    .env              # API keys, bot tokens
    sessions/         # conversation history`}
        </pre>
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
          href="https://github.com/oguzbilgic/kern-ai/tree/master/docs"
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
          <span className="text-[var(--muted)]">$ </span>{children}
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
