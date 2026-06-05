import type { MetadataRoute } from "next";
import { seo } from "@/config/seo";

// Emit a static robots.txt at build time (required for `output: export`).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${seo.url}/sitemap.xml`,
    host: seo.url,
  };
}
