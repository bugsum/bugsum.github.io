import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon, ClockIcon } from "@/components/icons";
import type { Post } from "@/lib/blog";
import { cn, formatDate } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
  className,
}: {
  post: Post;
  featured?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group relative flex flex-col justify-between gap-6 rounded-2xl border border-line bg-surface/30 p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70 sm:p-7",
        featured && "sm:p-9",
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-3 text-xs text-ink-faint">
          <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="size-3.5" />
            {post.readingTime} min read
          </span>
          {featured && (
            <Badge variant="accent" className="ml-auto">
              Featured
            </Badge>
          )}
        </div>

        <h3
          className={cn(
            "mt-4 text-balance font-semibold tracking-tight text-ink transition-colors group-hover:text-accent-ink",
            featured ? "text-h2" : "text-h3",
          )}
        >
          {post.meta.title}
        </h3>

        <p
          className={cn(
            "mt-3 text-pretty leading-relaxed text-ink-muted",
            featured ? "text-lg max-w-2xl" : "text-[0.95rem]",
          )}
        >
          {post.meta.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {post.meta.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-all duration-300 group-hover:border-line-strong group-hover:bg-white/6 group-hover:text-ink">
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
        </span>
      </div>
    </Link>
  );
}
