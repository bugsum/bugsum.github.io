import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { getAllPosts, getAllTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Essays and notes on software engineering, design, and the craft of building products.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([getAllPosts(), getAllTags()]);

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="The Blog"
        description="Thoughts on engineering, design, and building software with care. No filler — just the things I've learned worth sharing."
      />

      <Container className="pb-24 sm:pb-32">
        <BlogExplorer posts={posts} tags={tags} />
      </Container>
    </>
  );
}
