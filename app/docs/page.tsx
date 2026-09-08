import Link from "next/link";

const docs = [
  {
    slug: "get-started",
    title: "Get Started",
    description: "Install kern, create your first agent, and start chatting in under a minute.",
  },
  {
    slug: "architecture",
    title: "Architecture",
    description: "How kern's processes fit together — agents, web proxy, registry, auth, and service management.",
  },
  {
    slug: "config",
    title: "Configuration",
    description: "Agent config, environment variables, model selection, provider setup.",
  },
  {
    slug: "commands",
    title: "Commands",
    description: "CLI reference — init, start, stop, restart, tui, web, proxy, install, logs, backup, restore, remove.",
  },
  {
    slug: "interfaces",
    title: "Interfaces",
    description: "Terminal, Web UI, Telegram, Slack, Matrix, Nostr, IRC — how agents connect to every channel.",
  },
  {
    slug: "tools",
    title: "Tools",
    description: "Built-in tools — bash, read, write, edit, glob, grep, webfetch, websearch, pdf, image, audio, render, message, recall.",
  },
  {
    slug: "skills",
    title: "Skills",
    description: "AgentSkills integration — install community skills, bundled skills, dynamic slash commands.",
  },
  {
    slug: "subagents",
    title: "Sub-agents",
    description: "Parallel delegated workers — spawn, inspect, cancel, and synthesize sub-agent reasoning loops.",
  },
  {
    slug: "mcp",
    title: "MCP",
    description: "Model Context Protocol — connect external tools via local stdio or remote SSE/HTTP servers.",
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    description: "Agent-built UIs — live data injection, render tool, panel views, and interactive sidecars.",
  },
  {
    slug: "docker",
    title: "Docker",
    description: "Run kern in Docker — containerized agent deployment, compose files, and web daemon setup.",
  },
  {
    slug: "media",
    title: "Media & Voice",
    description: "Images, PDFs, and audio — vision pre-digest, speech transcription, TTS voice replies across channels.",
  },
  {
    slug: "memory",
    title: "Memory",
    description: "How agents remember — files, recall vector DB, notes injection, and long-term context.",
  },
  {
    slug: "context",
    title: "Context",
    description: "How the prompt is built — system prompt, token budgets, segmentation, compression, inspection.",
  },
  {
    slug: "caching",
    title: "Caching",
    description: "Prompt caching — three breakpoints, stable trim boundaries, provider differences, cost savings.",
  },
  {
    slug: "pairing",
    title: "Pairing",
    description: "User authentication — pairing codes, operator setup, access control across messaging channels.",
  },
  {
    slug: "clients",
    title: "Clients",
    description: "Connecting to kern — Desktop app (Tauri), Web UI, TUI, and mobile clients.",
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
