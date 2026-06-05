import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/projects/project-card";
import { projects, featuredProjects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of products, tools, and experiments I've designed and engineered.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Things I've built"
        description="From real-time data platforms to design systems and developer tools — a look at the work I'm most proud of."
      />

      <Container className="pb-24 sm:pb-32">
        {/* Featured */}
        <RevealGroup className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <RevealItem key={project.slug} className="h-full">
              <ProjectCard project={project} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>

        {/* More */}
        {others.length > 0 && (
          <>
            <div className="mt-20 mb-10 flex items-center gap-4">
              <h2 className="text-sm font-medium uppercase tracking-wider text-ink-faint">
                More projects
              </h2>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </div>
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project) => (
                <RevealItem key={project.slug} className="h-full">
                  <ProjectCard project={project} className="h-full" />
                </RevealItem>
              ))}
            </RevealGroup>
          </>
        )}
      </Container>
    </>
  );
}
