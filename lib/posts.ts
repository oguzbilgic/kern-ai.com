import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDirectory, file), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary || "",
      content: "",
    };
  });
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(
    path.join(postsDirectory, `${slug}.md`),
    "utf-8"
  );
  const { data, content } = matter(raw);
  const result = await remark().use(html).process(content);
  return {
    slug,
    title: data.title,
    date: data.date,
    summary: data.summary || "",
    content: result.toString(),
  };
}
