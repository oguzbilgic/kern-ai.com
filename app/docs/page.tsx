import Link from "next/link";

const docs = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "Install kern, create your first agent, and start chatting in under a minute.",
  },
  {
    slug: "config",
    title: "Configuration",
    description: "Agent config, environment variables, model selection, provider setup.",
  },
  {
    slug: "commands",
    title: "Commands",
    description: "CLI reference — init, start, stop, restart, tui, web, logs, backup, restore.",
  },
  {
    slug: "interfaces",
    title: "Interfaces",
    description: "Terminal, web UI, Telegram, Slack — how agents connect to each channel.",
  },
  {
    slug: "tools",
    title: "Tools",
    description: "Built-in tools — bash, read, write, edit, glob, grep, fetch, message, recall.",
  },
  {
    slug: "memory",
    title: "Memory",
    description: "How agents remember — files, recall, notes injection, and long-term context.",
  },
  {
    slug: "context",
    title: "Context",
    description: "How the prompt is built — system prompt, token budgets, segmentation, compression, inspection.",
  },
  {
    slug: "pairing",
    title: "Pairing",
    description: "User authentication — pairing codes, operator setup, access control.",
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
