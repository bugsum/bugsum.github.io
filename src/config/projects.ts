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
    slug: "tierpvp",
    title: "TierPVP",
    image: "/projects/tierpvp.png",
    description: "A fast-paced, skill-based PvP minecraft game plugin.",
    longDescription:
      "Implemented a custom server architecture to achieve sub-50ms tick times under load. Features matchmaking, leaderboards, and tier based fights.",
    year: "2026",
    stack: ["Java", "Paper", "MySQL"],
    github: "https://github.com/Bug-Labs/TierPvP",
    featured: true,
    highlight: "P95 query latency under 400ms across 2B+ events",
  },
  {
    slug: "chunk-collector",
    title: "Chunk Collector",
    image: "/projects/chunk-collector.png",
    description:
      "A Minecraft plugin that makes hoppers more efficient by collecting items in a virtual inventory and depositing them in batches.",
    longDescription:
      "Designed a custom chunk-based inventory system to minimize disk I/O and reduce lag. Used async processing and batching to handle high throughput.",
    year: "2026",
    stack: ["Java", "Paper", "MySQL"],
    github: "https://github.com/Bug-Labs/Collector",
    featured: false,
    highlight: "Reduced hopper lag by up to 80% in large player base servers",
  },
  {
    slug: "symmetryiq",
    title: "SymmetryIQ",
    image: "/projects/symmetryiq.png",
    description:
      "A looksmaxxing mobile app that uses computer vision to analyze facial symmetry and provide personalized improvement recommendations.",
    longDescription:
      "Built a custom facial landmark detection model using Mediapipe. Developed a React Native app with a user-friendly interface for real-time analysis and feedback.",
    year: "2026",
    stack: ["Android", "iOS", "React Native", "Mediapipe", "Expo"],
    featured: true,
    highlight:
      "Achieved 95% accuracy in facial landmark detection across diverse datasets",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
