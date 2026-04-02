import { remark } from "remark";
import html from "remark-html";

const REPO = "oguzbilgic/kern-ai";
const BRANCH = "master";
const DOCS_PATH = "docs";

const docFiles = ["get-started", "config", "commands", "interfaces", "tools", "memory", "pairing"];

export interface Doc {
  slug: string;
  title: string;
  content: string;
}

function titleFromSlug(slug: string): string {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export function getAllDocSlugs(): string[] {
  return docFiles;
}

export async function getDoc(slug: string): Promise<Doc> {
  const url = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${DOCS_PATH}/${slug}.md`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const raw = await res.text();

  // Extract title from first # heading
  const titleMatch = raw.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : titleFromSlug(slug);

  const result = await remark().use(html).process(raw);
  return {
    slug,
    title,
    content: result.toString(),
  };
}
