export type SkillCategoryId =
  | "frontend"
  | "backend"
  | "infrastructure"
  | "tooling"
  | "design";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces that feel fast and considered.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Motion",
      "Radix UI",
      "React Query",
      "Zustand",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "Type-safe services and data models.",
    skills: [
      "Node.js",
      "tRPC",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Python",
      "Go",
    ],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    description: "Shipping and running things reliably.",
    skills: [
      "Vercel",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Cloudflare",
    ],
  },
  {
    id: "tooling",
    label: "Tooling",
    description: "The craft of a clean workflow.",
    skills: ["Git", "Turborepo", "Vitest", "Playwright", "ESLint", "pnpm"],
  },
  {
    id: "design",
    label: "Design",
    description: "Bridging engineering and product taste.",
    skills: ["Figma", "Design Systems", "Prototyping", "Accessibility (a11y)"],
  },
];
