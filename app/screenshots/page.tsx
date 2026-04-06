import Link from "next/link";

const screenshots = [
  {
    src: "/images/web-ui.png",
    title: "Web UI",
    description: "Agent sidebar with resize, slash command autocomplete, file attachments, and token-based auth.",
    link: { href: "/docs/interfaces", label: "Interfaces docs →" },
  },
  {
    src: "/images/sessions.png",
    title: "Sessions",
    description: "Browse sessions with message counts, durations, and activity charts.",
    link: { href: "/blog/memory-ui", label: "See inside your agent's brain →" },
  },
  {
    src: "/images/segments-2.png",
    title: "Segments",
    description: "Hierarchical segment tree (L0/L1/L2). Click any segment to see its summary and compression stats.",
    link: { href: "/blog/lossless-context-management", label: "How kern compresses 20k messages →" },
  },
  {
    src: "/images/notes.png",
    title: "Notes",
    description: "Daily notes summaries with regeneration. The agent's narrative memory rendered as markdown.",
    link: { href: "/docs/memory", label: "Memory docs →" },
  },
  {
    src: "/images/recall.png",
    title: "Recall",
    description: "Semantic search over every past conversation. Stats, date range, and instant vector search.",
    link: { href: "/docs/memory", label: "Memory docs →" },
  },
  {
    src: "/images/context.png",
    title: "Context",
    description: "Full system prompt inspector. Collapsible XML sections with token cost bars and real-time breakdown.",
    link: { href: "/blog/prompt-caching", label: "How we cut API costs by 10x →" },
  },
];

export default function Screenshots() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <nav className="flex items-center justify-between mb-16">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors">
          kern<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/blog" className="hover:text-[var(--fg)] transition-colors">Blog</Link>
          <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</Link>
          <Link href="/screenshots" className="text-[var(--fg)]">Screenshots</Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Screenshots</h1>
      <p className="text-[var(--muted)] mb-12">
        The web UI ships with every kern agent. One port, token-based auth, works on any device.
      </p>

      <div className="space-y-16">
        {screenshots.map((s) => (
          <section key={s.src}>
            <h2 className="text-xl font-bold mb-2">{s.title}</h2>
            <p className="text-sm text-[var(--muted)] mb-3">{s.description}</p>
            {s.link && (
              <p className="text-sm mb-4">
                <Link href={s.link.href} className="text-[var(--accent)] hover:underline">
                  {s.link.label}
                </Link>
              </p>
            )}
            <a href={s.src} target="_blank" rel="noopener">
              <img
                src={s.src}
                alt={s.title}
                className="rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-zoom-in"
              />
            </a>
          </section>
        ))}
      </div>

      <footer className="border-t border-[var(--border)] mt-16 pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        <a href="https://www.npmjs.com/package/kern-ai" className="hover:text-[var(--fg)] transition-colors">npm</a>
        <a href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</a>
      </footer>
    </main>
  );
}
