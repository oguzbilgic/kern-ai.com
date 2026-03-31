import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <nav className="flex items-center justify-between mb-16">
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-[var(--accent)] transition-colors">
          kern<span className="text-[var(--accent)]">.</span>
        </Link>
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/blog" className="text-[var(--fg)]">Blog</Link>
          <Link href="/docs" className="hover:text-[var(--fg)] transition-colors">Docs</Link>
          <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        </div>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-xl font-bold group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h2>
              <time className="text-sm text-[var(--muted)]">{post.date}</time>
              {post.summary && (
                <p className="text-[var(--muted)] mt-2 leading-relaxed">{post.summary}</p>
              )}
            </Link>
          </article>
        ))}
      </div>

      <footer className="border-t border-[var(--border)] mt-16 pt-8 flex gap-6 text-sm text-[var(--muted)]">
        <a href="https://github.com/oguzbilgic/kern-ai" className="hover:text-[var(--fg)] transition-colors">GitHub</a>
        <a href="https://www.npmjs.com/package/kern-ai" className="hover:text-[var(--fg)] transition-colors">npm</a>
        <a href="https://github.com/oguzbilgic/kern-ai/tree/master/docs" className="hover:text-[var(--fg)] transition-colors">Docs</a>
      </footer>
    </main>
  );
}
