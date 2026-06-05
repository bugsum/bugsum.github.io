export interface Personal {
  /** Full name used across the site and metadata. */
  name: string;
  /** Short handle, used as a fallback logo mark. */
  initials: string;
  /** Path (in /public) to the logo image shown in the nav and footer. */
  logo: string;
  /** Primary role / title. */
  title: string;
  /** A rotating set of roles shown in the hero. */
  roles: string[];
  /** Location string. */
  location: string;
  /** Availability label shown as a status pill. */
  availability: string;
  /** Whether currently open to work. */
  available: boolean;
  /** One-line tagline. */
  tagline: string;
  /** Hero introduction — 1–2 sentences, premium and specific. */
  intro: string;
  /** Longer "about" story paragraphs. */
  about: {
    story: string[];
    philosophy: string;
    focus: string[];
  };
  /** Public email. */
  email: string;
  /** Canonical site URL (no trailing slash). */
  url: string;
}

export const personal: Personal = {
  name: "Samarth Sharma",
  initials: "Sam",
  logo: "/samarth.jpg",
  title: "Full-Stack Developer",
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Product-minded Builder",
    "Open Source Contributor",
    "Systems Thinker",
  ],
  location: "India",
  availability: "Open to opportunities",
  available: true,
  tagline: "I build fast, considered software for the community.",
  intro:
    "I design and engineer products end-to-end — from the data model to the last pixel — with a bias for clarity, performance, and craft.",
  about: {
    story: [
      "I'm a software engineer who cares about the details most people never notice: the easing curve on a transition, the p95 of an endpoint, the empty state nobody designed. I believe great products come from sweating both the architecture and the experience.",
      "Over the years I've shipped everything from internal platforms to customer-facing products, working across the stack and the lifecycle — discovery, design, build, and the unglamorous work of keeping things reliable in production.",
    ],
    philosophy:
      "Software should feel inevitable — fast, quiet, and obvious in hindsight. I optimize for the long term: readable systems, strong typing, and interfaces that respect the people using them.",
    focus: [
      "Performant, accessible web interfaces",
      "Type-safe, scalable system design",
      "Design engineering & motion",
      "Developer experience & tooling",
    ],
  },
  email: "samarthsharma9377@gmail.com",
  url: "https://bugsum.github.io",
};
