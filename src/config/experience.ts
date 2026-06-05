export interface ExperienceItem {
  role: string;
  company: string;
  /** Optional company URL. */
  companyUrl?: string;
  /** e.g. "2023 — Present" */
  period: string;
  /** Short location / arrangement. */
  location?: string;
  /** 1–3 bullet achievements. */
  highlights: string[];
  /** Tech used. */
  stack?: string[];
  /** Currently active role. */
  current?: boolean;
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Vantage Labs",
    companyUrl: "https://example.com",
    period: "2023 — Present",
    location: "Remote",
    current: true,
    highlights: [
      "Led the rebuild of the core product surface, cutting time-to-interactive by 48%.",
      "Architected a type-safe API layer adopted across four teams.",
      "Mentored engineers and established the frontend design-engineering practice.",
    ],
    stack: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
  },
  {
    role: "Software Engineer",
    company: "Northwind",
    companyUrl: "https://example.com",
    period: "2021 — 2023",
    location: "Hybrid",
    highlights: [
      "Shipped the customer-facing dashboard from zero to 30k MAU.",
      "Introduced an end-to-end testing pipeline that cut regressions by 60%.",
    ],
    stack: ["React", "Node.js", "GraphQL", "AWS"],
  },
  {
    role: "Frontend Engineer",
    company: "Pixelworks Studio",
    period: "2019 — 2021",
    location: "On-site",
    highlights: [
      "Built award-winning marketing experiences for global brands.",
      "Owned the motion and interaction system used across client work.",
    ],
    stack: ["TypeScript", "React", "GSAP", "WebGL"],
  },
];
