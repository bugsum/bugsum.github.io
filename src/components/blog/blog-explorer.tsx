"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Post } from "@/lib/blog";
import { BlogCard } from "./blog-card";
import { SearchIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function BlogExplorer({
  posts,
  tags,
}: {
  posts: Post[];
  tags: string[];
}) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const featured = posts.find((p) => p.meta.featured);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesTag = !activeTag || post.meta.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        post.meta.title.toLowerCase().includes(q) ||
        post.meta.description.toLowerCase().includes(q) ||
        post.meta.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  const isDefaultView = !query && !activeTag;
  const list = isDefaultView ? filtered.filter((p) => p !== featured) : filtered;

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-[1.1rem] -translate-y-1/2 text-ink-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts…"
            aria-label="Search posts"
            className="h-11 w-full rounded-full border border-line bg-surface/40 pl-11 pr-4 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-line-strong focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <TagChip
            label="All"
            active={!activeTag}
            onClick={() => setActiveTag(null)}
          />
          {tags.map((tag) => (
            <TagChip
              key={tag}
              label={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            />
          ))}
        </div>
      </div>

      {/* Featured (default view only) */}
      {isDefaultView && featured && (
        <div className="mt-12">
          <BlogCard post={featured} featured />
        </div>
      )}

      {/* Results */}
      <div className="mt-8">
        {list.length === 0 ? (
          <p className="rounded-2xl border border-line bg-surface/30 py-16 text-center text-ink-muted">
            No posts match your search.
          </p>
        ) : (
          <motion.div layout className="grid gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((post) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BlogCard post={post} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TagChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-300",
        active
          ? "border-line-strong bg-white/8 text-ink"
          : "border-line text-ink-muted hover:border-line-strong hover:text-ink",
      )}
    >
      {label}
    </button>
  );
}
