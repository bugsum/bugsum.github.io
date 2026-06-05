export interface Project {
  /** Stable unique slug. */
  slug: string;
  title: string;
  /** One-line summary used on cards. */
  description: string;
  /** Longer description for detail contexts. */
  longDescription?: string;
  /** Year or timeframe label. */
  year: string;
  /** Tech stack chips. */
  stack: string[];
  /** Cover image (place files in /public/projects). Optional — a refined
   *  generated placeholder is used when omitted. */
  image?: string;
  github?: string;
  demo?: string;
  /** Surfaces on the homepage featured grid. */
  featured: boolean;
  /** Short outcome/metric line for extra credibility. */
  highlight?: string;
}

export const projects: Project[] = [
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    description:
      "A real-time product analytics platform with sub-second query latency over billions of events.",
    longDescription:
      "Built the ingestion pipeline, columnar query layer, and the entire dashboard experience. Focused relentlessly on perceived performance and a calm, legible UI.",
    year: "2024",
    stack: ["Next.js", "TypeScript", "ClickHouse", "tRPC", "Tailwind"],
    github: "https://github.com/samarthsharma/atlas",
    demo: "https://atlas.example.com",
    featured: true,
    highlight: "P95 query latency under 400ms across 2B+ events",
  },
  {
    slug: "orbit-design-system",
    title: "Orbit Design System",
    description:
      "An accessible, themeable component library powering a suite of internal products.",
    longDescription:
      "Designed tokens, primitives, and motion guidelines. Shipped with full keyboard and screen-reader support, dark mode, and zero-runtime styling.",
    year: "2024",
    stack: ["React", "Radix UI", "Tailwind", "Storybook", "Motion"],
    github: "https://github.com/samarthsharma/orbit",
    featured: true,
    highlight: "Adopted by 6 teams, 40% faster feature delivery",
  },
  {
    slug: "ledger",
    title: "Ledger",
    description:
      "A privacy-first personal finance app with local-first sync and end-to-end encryption.",
    longDescription:
      "Engineered an offline-first architecture with conflict-free sync. Everything is encrypted client-side; the server never sees plaintext.",
    year: "2023",
    stack: ["React Native", "SQLite", "Rust", "CRDTs"],
    demo: "https://ledger.example.com",
    featured: true,
    highlight: "100% offline-capable, E2E encrypted",
  },
  {
    slug: "pulse",
    title: "Pulse",
    description:
      "An open-source uptime and status-page monitor with beautiful incident timelines.",
    year: "2023",
    stack: ["Go", "Next.js", "PostgreSQL", "WebSockets"],
    github: "https://github.com/samarthsharma/pulse",
    demo: "https://pulse.example.com",
    featured: false,
  },
  {
    slug: "quill",
    title: "Quill",
    description:
      "A collaborative, block-based writing editor with real-time multiplayer cursors.",
    year: "2022",
    stack: ["TypeScript", "Yjs", "ProseMirror", "WebRTC"],
    github: "https://github.com/samarthsharma/quill",
    featured: false,
  },
  {
    slug: "harbor",
    title: "Harbor",
    description:
      "A self-hostable deploy platform — push to git, get a preview URL in seconds.",
    year: "2022",
    stack: ["Node.js", "Docker", "Kubernetes", "Terraform"],
    github: "https://github.com/samarthsharma/harbor",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
