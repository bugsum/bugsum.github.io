import fs from "node:fs";
import path from "node:path";
import { readingTime, slugify } from "@/lib/utils";

/** Metadata each blog `.mdx` file must export as `export const metadata`. */
export interface PostMeta {
  title: string;
  description: string;
  /** ISO date string, e.g. "2024-11-02". */
  date: string;
  tags: string[];
  /** Optional cover image in /public. */
  image?: string;
  /** Hide from listings while still routable. */
  draft?: boolean;
  /** Pin to the top of the blog index. */
  featured?: boolean;
  author?: string;
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  readingTime: number;
  toc: TocEntry[];
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function getRaw(slug: string): string {
  return fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf-8");
}

/** All post slugs (filenames without extension). */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** Parse `##` and `###` headings from raw MDX into a table of contents. */
export function buildToc(raw: string): TocEntry[] {
  const lines = raw.split("\n");
  const toc: TocEntry[] = [];
  let inFence = false;

  for (const line of lines) {
    if (line.trim().startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.*)$/.exec(line);
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/[#*`_]/g, "").trim();
    toc.push({ id: slugify(text), text, level });
  }

  return toc;
}

async function loadMeta(slug: string): Promise<PostMeta> {
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
    metadata?: PostMeta;
  };
  if (!mod.metadata) {
    throw new Error(`Post "${slug}" is missing an exported \`metadata\`.`);
  }
  return mod.metadata;
}

/** Fully resolved post (without the rendered component). */
export async function getPost(slug: string): Promise<Post | null> {
  if (!getPostSlugs().includes(slug)) return null;
  const raw = getRaw(slug);
  const meta = await loadMeta(slug);
  return {
    slug,
    meta,
    readingTime: readingTime(raw.replace(/```[\s\S]*?```/g, "")),
    toc: buildToc(raw),
  };
}

/** All published posts, newest first. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map((slug) => getPost(slug)),
  );

  return posts
    .filter((p): p is Post => p !== null && !p.meta.draft)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime(),
    );
}

/** Unique, sorted tag list across all posts. */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => p.meta.tags.forEach((t) => tags.add(t)));
  return [...tags].sort((a, b) => a.localeCompare(b));
}
