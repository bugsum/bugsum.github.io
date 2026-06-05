import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@/components/icons";
import { experience } from "@/config/experience";

export function ExperienceTimeline() {
  return (
    <Section id="experience" size="narrow">
      <SectionHeader
        eyebrow="Experience"
        title="A track record of shipping"
        description="Roles where I've built, scaled, and cared for products in production."
      />

      <ol className="mt-14 flow-root">
        {experience.map((item, i) => (
          <li key={`${item.company}-${i}`} className="relative">
            <Reveal
              delay={i * 0.05}
              className="group relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 last:pb-0"
            >
              {/* Rail + node */}
              <div className="relative flex flex-col items-center">
                <span
                  className={`relative z-10 mt-1.5 flex size-3 items-center justify-center rounded-full border ${
                    item.current
                      ? "border-accent-soft bg-[color:var(--color-accent)]"
                      : "border-line-strong bg-surface-2"
                  }`}
                >
                  {item.current && (
                    <span className="absolute inline-flex size-3 animate-ping rounded-full bg-[color:var(--color-accent)] opacity-60" />
                  )}
                </span>
                <span className="mt-2 w-px flex-1 bg-line group-last:hidden" aria-hidden />
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-h3 font-semibold tracking-tight text-ink">
                    {item.role}
                  </h3>
                  {item.current && <Badge variant="accent">Current</Badge>}
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-ink-soft transition-colors hover:text-accent-soft"
                    >
                      {item.company}
                      <ArrowUpRightIcon className="size-3.5" />
                    </a>
                  ) : (
                    <span className="font-medium text-ink-soft">{item.company}</span>
                  )}
                  <span className="text-ink-faint">·</span>
                  <span className="font-mono text-xs">{item.period}</span>
                  {item.location && (
                    <>
                      <span className="text-ink-faint">·</span>
                      <span>{item.location}</span>
                    </>
                  )}
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="relative pl-5 text-[0.95rem] leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-line-strong"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {item.stack && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
