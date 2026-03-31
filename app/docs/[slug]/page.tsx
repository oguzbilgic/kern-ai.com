import { getDoc, getAllDocSlugs } from "@/lib/docs";
import Link from "next/link";

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDoc(slug);
  return {
    title: `${doc.title} — kern docs`,
    description: `kern documentation: ${doc.title}`,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = await getDoc(slug);
  const allSlugs = getAllDocSlugs();

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

      <div className="flex gap-8">
        <aside className="hidden sm:block w-36 shrink-0">
          <nav className="sticky top-16 space-y-2 text-sm">
            {allSlugs.map((s) => (
              <div key={s}>
                <Link
                  href={`/docs/${s}`}
                  className={`capitalize ${s === slug ? 'text-[var(--fg)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'} transition-colors`}
                >
                  {s}
                </Link>
              </div>
            ))}
          </nav>
        </aside>

        <article className="flex-1 min-w-0">
          <h1 className="text-3xl font-bold mb-8">{doc.title}</h1>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: doc.content }}
          />
        </article>
      </div>

      <footer className="border-t border-[var(--border)] mt-16 pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">← All docs</Link>
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
      </footer>
    </main>
  );
}
