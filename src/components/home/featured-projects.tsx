import Link from "next/link";
import { Section, SectionHeader } from "@/components/ui/section";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { ArrowRightIcon } from "@/components/icons";
import { featuredProjects } from "@/config/projects";

export function FeaturedProjects() {
  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeader
          eyebrow="Selected work"
          title="Projects I'm proud of"
          description="A few things I've designed and built end-to-end."
        />
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
        >
          All projects
          <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} className="h-full" />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
