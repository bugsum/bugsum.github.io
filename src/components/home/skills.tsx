import { Section, SectionHeader } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { skillCategories } from "@/config/skills";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Toolkit"
        title="Technologies I work with"
        description="A pragmatic stack — chosen for leverage, reliability, and developer experience."
      />

      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <RevealItem key={category.id} className="h-full">
            <div className="group flex h-full flex-col bg-surface/40 p-7 transition-colors duration-500 hover:bg-surface/80">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {category.label}
                </h3>
                <span className="font-mono text-xs text-ink-faint">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-ink-muted">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-1 text-[0.8rem] font-medium text-ink-soft transition-colors duration-300 hover:border-line-strong hover:text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
