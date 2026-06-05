import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon, GitHubIcon } from "@/components/icons";
import type { Project } from "@/config/projects";
import { cn } from "@/lib/utils";

/** Deterministic gradient cover when a project has no image. */
function CoverFallback({ title }: { title: string }) {
  const hue = ([...title].reduce((a, c) => a + c.charCodeAt(0), 0) % 360) || 274;
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at 20% 10%, oklch(40% 0.12 ${hue} / 0.55), transparent 60%), radial-gradient(120% 120% at 90% 90%, oklch(45% 0.1 ${(hue + 60) % 360} / 0.4), transparent 55%), var(--color-surface)`,
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-[0.5] mask-radial-faded" />
      <span className="absolute bottom-4 left-5 font-mono text-7xl font-semibold text-white/[0.06]">
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const primaryHref = project.demo ?? project.github;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 transition-all duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:bg-surface/70",
        className,
      )}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
          />
        ) : (
          <CoverFallback title={project.title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-h3 font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-ink-faint">{project.year}</span>
        </div>

        <p className="mt-2.5 text-pretty text-[0.95rem] leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {project.highlight && (
          <p className="mt-3 text-sm font-medium text-accent-soft">
            {project.highlight}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
          {primaryHref && (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-soft"
            >
              {project.demo ? "Live demo" : "View source"}
              <ArrowUpRightIcon className="size-4" />
            </a>
          )}
          {project.github && project.demo && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="ml-auto inline-flex size-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink"
            >
              <GitHubIcon className="size-[1.1rem]" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
