import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import Image, { type ImageProps } from "next/image";
import { slugify } from "@/lib/utils";

/** Flatten MDX heading children into a plain string for slug generation. */
function toText(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toText).join("");
  if (typeof node === "object" && "props" in node) {
    return toText((node as { props: { children?: ReactNode } }).props.children);
  }
  return "";
}

function Heading({
  as: Tag,
  className,
  children,
  ...props
}: {
  as: "h2" | "h3" | "h4";
  className: string;
  children?: ReactNode;
} & ComponentPropsWithoutRef<"h2">) {
  const id = slugify(toText(children));
  return (
    <Tag id={id} className={`group scroll-mt-28 ${className}`} {...props}>
      <a
        href={`#${id}`}
        className="relative no-underline"
        aria-label={`Link to section: ${toText(children)}`}
      >
        <span
          aria-hidden
          className="absolute -left-5 top-0 text-ink-faint opacity-0 transition-opacity group-hover:opacity-100"
        >
          #
        </span>
        {children}
      </a>
    </Tag>
  );
}

const components: MDXComponents = {
  h1: (props) => (
    <h1
      className="mt-2 mb-6 text-balance text-h1 font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      as="h2"
      className="mt-14 mb-5 text-h2 font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      className="mt-10 mb-4 text-h3 font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      as="h4"
      className="mt-8 mb-3 text-lg font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="my-5 text-pretty text-[1.05rem] leading-[1.8] text-ink-soft"
      {...props}
    />
  ),
  a: ({ href = "", ...props }: ComponentPropsWithoutRef<"a">) => {
    const external = href.startsWith("http");
    const cls =
      "font-medium text-ink underline decoration-line-strong underline-offset-[3px] transition-colors hover:decoration-accent-soft hover:text-accent-ink";
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props} />
      );
    }
    return <Link href={href} className={cls} {...props} />;
  },
  ul: (props) => (
    <ul className="my-5 flex flex-col gap-2.5 pl-1" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 flex list-decimal flex-col gap-2.5 pl-5 marker:text-ink-faint" {...props} />
  ),
  li: (props) => (
    <li
      className="relative pl-6 text-[1.05rem] leading-[1.75] text-ink-soft before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-line-strong [ol>&]:pl-1 [ol>&]:before:hidden"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-7 border-l-2 border-[color:var(--color-accent)]/50 pl-5 text-pretty text-lg italic leading-relaxed text-ink-soft"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-line" />,
  strong: (props) => <strong className="font-semibold text-ink" {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-md border border-line bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.85em] text-accent-ink"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <div className="group relative my-7 overflow-hidden rounded-xl border border-line bg-[oklch(12%_0.004_285)] edge-highlight">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
        <span className="size-2.5 rounded-full bg-white/10" />
      </div>
      <pre
        className="overflow-x-auto p-4 font-mono text-[0.85rem] leading-relaxed text-ink-soft [&>code]:border-0 [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-ink-soft"
        {...props}
      />
    </div>
  ),
  table: (props) => (
    <div className="my-7 overflow-x-auto rounded-xl border border-line">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-b border-line bg-white/[0.03] px-4 py-3 text-left font-semibold text-ink"
      {...props}
    />
  ),
  td: (props) => (
    <td className="border-b border-line px-4 py-3 text-ink-soft" {...props} />
  ),
  img: (props) => (
    <Image
      sizes="(max-width: 768px) 100vw, 768px"
      className="my-7 h-auto w-full rounded-xl border border-line"
      {...(props as ImageProps)}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
