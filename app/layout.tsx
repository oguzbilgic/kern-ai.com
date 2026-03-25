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
      <body className="antialiased">{children}</body>
    </html>
  );
}
