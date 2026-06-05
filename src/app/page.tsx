import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ExperienceTimeline } from "@/components/home/experience-timeline";
import { Skills } from "@/components/home/skills";
import { BlogPreview } from "@/components/home/blog-preview";
import { ContactCTA } from "@/components/home/contact-cta";
import { personal } from "@/config/personal";
import { seo } from "@/config/seo";

export default function HomePage() {
  return (
    <>
      <PersonJsonLd />
      <Hero />
      <About />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Skills />
      <BlogPreview />
      <ContactCTA />
    </>
  );
}

/** Structured data for richer search results. */
function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.title,
    description: personal.intro,
    url: seo.url,
    email: `mailto:${personal.email}`,
    address: { "@type": "PostalAddress", addressLocality: personal.location },
    sameAs: [
      "https://github.com/samarthsharma",
      "https://linkedin.com/in/samarthsharma",
      "https://x.com/samarthsharma",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
