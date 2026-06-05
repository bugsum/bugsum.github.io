import { personal } from "./personal";

export interface SeoConfig {
  siteName: string;
  /** Default title (also used as the template suffix). */
  title: string;
  titleTemplate: string;
  description: string;
  /** Canonical base URL, no trailing slash. */
  url: string;
  /** Default social share image (in /public). */
  ogImage: string;
  twitterHandle?: string;
  keywords: string[];
  locale: string;
}

export const seo: SeoConfig = {
  siteName: `${personal.name} — ${personal.title}`,
  title: `${personal.name} · ${personal.title}`,
  titleTemplate: `%s · ${personal.name}`,
  description: personal.intro,
  url: personal.url,
  ogImage: "/samarth.png",
  twitterHandle: "@samarthsharma",
  keywords: [
    personal.name,
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Design Engineer",
    "Portfolio",
  ],
  locale: "en_US",
};
