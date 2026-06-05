"use client";

import { useEffect, useState } from "react";
import type { TocEntry } from "@/lib/blog";
import { cn } from "@/lib/utils";

export function TableOfContents({ toc }: { toc: TocEntry[] }) {
  const [active, setActive] = useState<string>(toc[0]?.id ?? "");

  useEffect(() => {
    if (toc.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: [0, 1] },
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="flex flex-col gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
        On this page
      </span>
      <ul className="flex flex-col gap-1 border-l border-line">
        {toc.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={cn(
                "-ml-px block border-l py-1 text-sm transition-colors duration-300",
                entry.level === 3 ? "pl-7" : "pl-4",
                active === entry.id
                  ? "border-accent-soft text-ink"
                  : "border-transparent text-ink-muted hover:text-ink-soft",
              )}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
