import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { PrintButton } from "@/components/resume/print-button";
import { SocialRow } from "@/components/layout/social-row";
import { personal } from "@/config/personal";
import { resume } from "@/config/resume";
import { experience } from "@/config/experience";
import { skillCategories } from "@/config/skills";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Resume",
  description: `The professional resume of ${personal.name} — ${personal.title}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const keyProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="pt-32 pb-24 sm:pt-40">
      <Container size="narrow">
        {/* Page actions (hidden when printing) */}
        <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 print:hidden sm:flex-row sm:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
              <span className="h-px w-6 bg-line-strong" aria-hidden />
              Resume
            </span>
            <h1 className="mt-3 text-h2 font-semibold tracking-tight text-shine">
              Curriculum Vitae
            </h1>
          </div>
          <PrintButton />
        </Reveal>

        {/* Printable sheet */}
        <Reveal
          delay={0.05}
          className="resume-sheet overflow-hidden rounded-3xl border border-line bg-surface/40 p-8 edge-highlight sm:p-12 print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black"
        >
          {/* Header */}
          <header className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between print:border-black/20">
            <div>
              <h2 className="text-h1 font-semibold tracking-tight text-ink print:text-black">
                {personal.name}
              </h2>
              <p className="mt-1.5 text-lg text-accent-soft print:text-black">
                {personal.title}
              </p>
              <p className="mt-3 text-sm text-ink-muted print:text-black/70">
                {personal.location} ·{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-ink print:text-black"
                >
                  {personal.email}
                </a>{" "}
                · {personal.url.replace("https://", "")}
              </p>
            </div>
            <div className="print:hidden">
              <SocialRow size="sm" />
            </div>
          </header>

          {/* Summary */}
          <Block title="Summary">
            <p className="text-pretty leading-relaxed text-ink-soft print:text-black/80">
              {resume.summary}
            </p>
          </Block>

          {/* Experience */}
          <Block title="Experience">
            <div className="flex flex-col gap-7">
              {experience.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-base font-semibold text-ink print:text-black">
                      {item.role} ·{" "}
                      <span className="text-ink-soft print:text-black/80">
                        {item.company}
                      </span>
                    </h4>
                    <span className="font-mono text-xs text-ink-muted print:text-black/60">
                      {item.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="relative pl-4 text-sm leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-ink-faint print:text-black/80 print:before:bg-black/40"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>

          {/* Two-column: Skills + Education/Certs */}
          <div className="grid gap-x-12 sm:grid-cols-2">
            <Block title="Skills">
              <div className="flex flex-col gap-4">
                {skillCategories.map((cat) => (
                  <div key={cat.id}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted print:text-black/60">
                      {cat.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft print:text-black/80">
                      {cat.skills.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            <div>
              <Block title="Education">
                {resume.education.map((edu, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="text-sm font-semibold text-ink print:text-black">
                        {edu.institution}
                      </h4>
                      <span className="font-mono text-xs text-ink-muted print:text-black/60">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-ink-soft print:text-black/80">
                      {edu.credential}
                    </p>
                    {edu.detail && (
                      <p className="text-xs text-ink-muted print:text-black/60">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                ))}
              </Block>

              <Block title="Certifications">
                <ul className="flex flex-col gap-2">
                  {resume.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-ink-soft print:text-black/80">
                        {cert.name}{" "}
                        <span className="text-ink-muted print:text-black/60">
                          — {cert.issuer}
                        </span>
                      </span>
                      <span className="font-mono text-xs text-ink-muted print:text-black/60">
                        {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>
          </div>

          {/* Key projects */}
          <Block title="Selected Projects">
            <div className="flex flex-col gap-4">
              {keyProjects.map((p) => (
                <div key={p.slug} className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-sm font-semibold text-ink print:text-black">
                      {p.title}
                    </h4>
                    <span className="font-mono text-xs text-ink-muted print:text-black/60">
                      {p.stack.slice(0, 4).join(" · ")}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft print:text-black/80">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Block>

          {/* Achievements */}
          <Block title="Achievements">
            <ul className="flex flex-col gap-2.5">
              {resume.achievements.map((a, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  <span className="font-medium text-ink print:text-black">
                    {a.title}
                    {a.year && (
                      <span className="text-ink-muted print:text-black/60">
                        {" "}
                        ({a.year})
                      </span>
                    )}
                    {" — "}
                  </span>
                  <span className="text-ink-soft print:text-black/80">
                    {a.detail}
                  </span>
                </li>
              ))}
            </ul>
          </Block>
        </Reveal>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-ink-faint print:hidden">
          Use “Download PDF” above to save a print-perfect copy of this resume.
        </p>
      </Container>
    </div>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8 break-inside-avoid">
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft print:text-black">
        {title}
      </h3>
      {children}
    </section>
  );
}
