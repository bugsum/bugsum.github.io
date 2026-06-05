import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { ArrowLeftIcon, ClockIcon, ArrowRightIcon } from "@/components/icons";
import { getAllPosts, getPost, getPostSlugs } from "@/lib/blog";
import { personal } from "@/config/personal";
import { seo } from "@/config/seo";
import { formatDate } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const { meta } = post;
  const url = `${seo.url}/blog/${slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.description,
      url,
      publishedTime: meta.date,
      authors: [meta.author ?? personal.name],
      tags: meta.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);
  const { meta, readingTime, toc } = post;

  // Find adjacent post for "keep reading".
  const all = await getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const next = idx >= 0 ? all[idx + 1] ?? all[0] : undefined;

  return (
    <article className="relative pt-32 pb-24 sm:pt-40">
      <Container size="wide">
        <Reveal>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeftIcon className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
            Back to blog
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05} className="mx-auto mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            <span aria-hidden className="text-ink-faint">·</span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-4" />
              {readingTime} min read
            </span>
          </div>
          <h1 className="mt-5 text-balance text-h1 font-semibold tracking-tight text-shine">
            {meta.title}
          </h1>
          <p className="mt-5 text-pretty text-xl leading-relaxed text-ink-soft">
            {meta.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {meta.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Reveal>

        <hr className="mx-auto mt-10 max-w-3xl border-line" />

        {/* Body + TOC */}
        <div className="mt-12 lg:grid lg:grid-cols-[1fr_16rem] lg:gap-12">
          <div className="mx-auto w-full max-w-3xl min-w-0">
            <Content />
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents toc={toc} />
            </div>
          </aside>
        </div>

        {/* Footer / keep reading */}
        <div className="mx-auto mt-20 max-w-3xl">
          <BlogPostJsonLd
            title={meta.title}
            description={meta.description}
            date={meta.date}
            slug={slug}
          />
          {next && next.slug !== slug && (
            <Link
              href={`/blog/${next.slug}`}
              className="group flex flex-col gap-2 rounded-2xl border border-line bg-surface/30 p-7 transition-all duration-500 hover:border-line-strong hover:bg-surface/60"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                Keep reading
              </span>
              <span className="flex items-center justify-between gap-4">
                <span className="text-h3 font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-ink">
                  {next.meta.title}
                </span>
                <ArrowRightIcon className="size-5 shrink-0 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          )}

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-medium text-ink">Enjoyed this?</p>
              <p className="mt-1 text-sm text-ink-muted">
                Let&apos;s talk about your next project.
              </p>
            </div>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}

function BlogPostJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    author: { "@type": "Person", name: personal.name, url: seo.url },
    url: `${seo.url}/blog/${slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
