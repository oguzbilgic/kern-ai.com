import { getAllDocSlugs } from "@/lib/docs";
import Link from "next/link";

export default function DocsIndex() {
  const slugs = getAllDocSlugs();

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

      <h1 className="text-3xl font-bold mb-8">Documentation</h1>

      <div className="space-y-4">
        {slugs.map((slug) => (
          <div key={slug}>
            <Link href={`/docs/${slug}`} className="text-lg hover:text-[var(--accent)] transition-colors capitalize">
              {slug}
            </Link>
          </div>
        ))}
      </div>

      <footer className="border-t border-[var(--border)] mt-16 pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        <a href="https://www.npmjs.com/package/kern-ai" className="hover:text-[var(--fg)] transition-colors">npm</a>
      </footer>
    </main>
  );
}
