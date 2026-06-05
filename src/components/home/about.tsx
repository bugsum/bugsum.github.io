import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { CheckIcon } from "@/components/icons";
import { personal } from "@/config/personal";

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title="Engineering with product taste"
        description={personal.about.philosophy}
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="flex flex-col gap-6">
          {personal.about.story.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-lg leading-relaxed text-ink-soft"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative rounded-2xl border border-line bg-surface/40 p-7 edge-highlight"
        >
          <h3 className="text-sm font-medium uppercase tracking-wider text-ink-faint">
            Current focus
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {personal.about.focus.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
                  <CheckIcon className="size-3 text-accent-soft" />
                </span>
                <span className="text-[0.95rem] leading-relaxed text-ink-soft">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
