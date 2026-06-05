import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { BlogCard } from "@/components/blog/blog-card";
import { ArrowRightIcon } from "@/components/icons";
import { getAllPosts } from "@/lib/blog";

export async function BlogPreview() {
  const posts = (await getAllPosts()).slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section id="writing">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Writing"
          title="Notes on craft & engineering"
          description="Occasional essays on building software with care."
        />
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          Read the blog
          <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <RevealItem key={post.slug} className="h-full">
            <BlogCard post={post} className="h-full" />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
