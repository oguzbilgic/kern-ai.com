import Link from "next/link";

const docs = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "Install kern, create your first agent, and start chatting in under a minute.",
  },
  {
    slug: "docker",
    title: "Docker",
    description: "Deploy coworker agents with Docker and Compose — volumes, environment, and lifecycles.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    description: "Directory-based agent model, multi-channel session queue, and process isolation.",
  },
  {
    slug: "config",
    title: "Configuration",
    description: "Agent config, environment variables, model selection, and provider options.",
  },
  {
    slug: "cli",
    title: "CLI Reference",
    description: "Commands — init, run, status, tui, web, backup, restore, and scripts.",
  },
  {
    slug: "chat-commands",
    title: "Chat Commands",
    description: "In-chat slash and bang commands — !status, !wyd, !jobs, !subagents, !skills, !restart.",
  },
  {
    slug: "interfaces",
    title: "Interfaces",
    description: "Slack, Matrix, Telegram, Discord, IRC, Nostr — how agents connect to every channel.",
  },
  {
    slug: "tools",
    title: "Tools",
    description: "Built-in tools — bash, jobs, spawn, subagents, platform APIs, read, write, edit, grep.",
  },
  {
    slug: "subagents",
    title: "Sub-Agents",
    description: "Parallel delegated research workers with initiator-aware return routing.",
  },
  {
    slug: "memory",
    title: "Memory",
    description: "How agents remember — topic DAG, vector recall, and git-backed knowledge.",
  },
  {
    slug: "context",
    title: "Context",
    description: "Prompt assembly, token budgeting, segmentation, and summary rollups.",
  },
  {
    slug: "caching",
    title: "Caching",
    description: "Prompt caching — breakpoints, stable trim boundaries, and cost reduction.",
  },
  {
    slug: "skills",
    title: "Skills",
    description: "AgentSkills universal format — dynamic in-chat activation without restarts.",
  },
  {
    slug: "mcp",
    title: "MCP",
    description: "Model Context Protocol — extend toolboxes with external MCP servers.",
  },
  {
    slug: "media",
    title: "Media",
    description: "Multi-modal vision pre-digest, PDF extraction, and voice message audio I/O.",
  },
  {
    slug: "pairing",
    title: "Pairing",
    description: "Operator pairing codes, access control, and user permission tracking.",
  },
];

export default function DocsIndex() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <nav className="flex items-center justify-between mb-16">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors">
          kern<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link>
          <Link href="/docs" className="text-[var(--fg)]">Docs</Link>
          <Link href="/screenshots" className="hover:text-[var(--fg)] transition-colors">Screenshots</Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-2">Documentation</h1>
      <p className="text-[var(--muted)] mb-10">Everything you need to create, configure, and run kern agents.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors group"
          >
            <h2 className="font-bold mb-1 group-hover:text-[var(--accent)] transition-colors">{doc.title}</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">{doc.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 p-4 bg-[#111] border border-[var(--border)] rounded-lg">
        <p className="text-sm text-[var(--muted)]">
          Quick start: <code className="bg-[#1a1a1a] px-1.5 py-0.5 rounded text-[var(--fg)]">npm install -g kern-ai && kern init my-agent</code>
        </p>
      </div>

      <footer className="border-t border-[var(--border)] mt-16 pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--fg)] transition-colors">Home</Link>
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        <a href="https://www.npmjs.com/package/kern-ai" className="hover:text-[var(--fg)] transition-colors">npm</a>
      </footer>
    </main>
  );
}
