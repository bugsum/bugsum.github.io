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
    role: "CEO",
    company: "Elightnodes",
    // companyUrl: "https://example.com",
    period: "2024 — 2025",
    location: "Remote",
    current: false,
    highlights: [
      // elightnodes was a cloud hosting company for vps, dedi servers, minecraft hosting i was hired as a cfo first and then ceo
      "Led the company through a successful acquisition by a larger hosting provider.",
      "Doubled revenue within the first year by expanding into new markets and optimizing pricing strategies.",
      "Implemented a customer retention program that increased repeat business by 40%.",
    ],
    stack: [
      "Cloud Hosting",
      "Customer Acquisition",
      "Revenue Growth",
      "Team Leadership",
    ],
  },
  {
    role: "Director",
    company: "Avlanc Cloud",
    // companyUrl: "https://example.com",
    period: "2025 — 2025",
    location: "Remote",
    highlights: [
      // we had transformed from elightnodes to avlanc cloud and i had become the founder but the services were same.
      "Spearheaded the rebranding and strategic pivot to Avlanc Cloud, resulting in a 150% increase in brand recognition.",
      "Expanded service offerings to include managed cloud solutions, leading to a 60% increase in client acquisition.",
    ],
    stack: [
      "Cloud Solutions",
      "Brand Strategy",
      "Market Expansion",
      "Leadership",
    ],
  },
  {
    role: "Founder",
    company: "Bug Labs",
    period: "2023 — Present",
    location: "Hybrid",
    highlights: [
      // basically a simple startup which i created to professionally freelance along with maybe adding a team in future
      "Founded Bug Labs, a boutique software consultancy specializing in web/app development and UI/UX design.",
      "Secured contracts with 10+ clients across various industries, delivering high-quality digital solutions.",
    ],
    stack: [
      "Web Development",
      "App Development",
      "UI/UX Design",
      "Client Relations",
    ],
  },
];
