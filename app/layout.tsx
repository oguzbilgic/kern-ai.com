import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kern — AI agents built for coworking",
  description:
    "One brain across every channel. Telegram, Slack, terminal. Agents that remember, adapt, and work alongside your team.",
  openGraph: {
    title: "kern — AI agents built for coworking",
    description:
      "One brain across every channel. Telegram, Slack, terminal.",
    url: "https://kern-ai.com",
    siteName: "kern",
  },
  twitter: {
    card: "summary_large_image",
    title: "kern — AI agents built for coworking",
    description:
      "One brain across every channel. Telegram, Slack, terminal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="https://github.com/oguzbilgic/kern-ai/blob/master/CHANGELOG.md"
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors py-2 border-b border-[var(--border)]"
        >
          <span className="bg-[var(--accent)] text-black text-xs font-bold px-2 py-0.5">NEW</span>
          <span>v0.18.1 — Memory UI, service management, Android app →</span>
        </a>
        {children}
      </body>
    </html>
  );
}
