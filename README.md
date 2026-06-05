# Portfolio

A premium, content-driven developer portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Motion**, and **MDX**. Design language: Apple × Linear × Vercel — dark, minimal, typographic, and fast.

## Getting started

```bash
bun install      # or npm install
bun run dev      # start the dev server (Turbopack)
bun run build    # production build
```

Set up the contact form (optional) by copying `.env.example` → `.env.local` and adding your Discord webhook URL:

```bash
DISCORD_WEBHOOK_URL="https://discord.com/api/webhooks/…"
```

## Editing content — no UI code required

All user-facing content lives in [`src/config/`](src/config) as strongly-typed files. The UI renders from these, so you can update everything below without touching a component:

| File | What it controls |
| --- | --- |
| `personal.ts` | Name, title, rotating roles, hero intro, about story, email |
| `socials.ts` | Social links (GitHub, LinkedIn, X, Discord, email, website, custom) |
| `navigation.ts` | Header / footer navigation items |
| `skills.ts` | Skill categories (frontend, backend, infra, tooling, design) |
| `projects.ts` | Projects + the `featured` flag that surfaces them on the home page |
| `experience.ts` | Work-experience timeline |
| `resume.ts` | Resume summary, education, certifications, achievements |
| `contact.ts` | Contact heading, subjects, response time |
| `seo.ts` | Metadata, OpenGraph, Twitter, keywords |

### Adding a blog post

Drop a new `.mdx` file into [`src/content/blog/`](src/content/blog) and export `metadata`:

```mdx
export const metadata = {
  title: "My Post",
  description: "A short, compelling summary.",
  date: "2025-01-15",
  tags: ["TypeScript", "Design"],
  featured: false, // pins to the top of the blog index
};

## Your first heading

Write **MDX** here…
```

Reading time, the table of contents, tags, search, sitemap entry, and per-post SEO/OpenGraph are all generated automatically.

### Images

Place project covers in `public/projects/` and reference them via the `image` field in `projects.ts`. Projects without an image get a deterministic gradient cover.

## Architecture

```
src/
├─ app/                 # routes: /, /projects, /blog, /blog/[slug], /resume, /contact
│  ├─ api/contact/      # server-side Discord webhook handler
│  ├─ sitemap.ts        # dynamic sitemap · robots.ts · opengraph-image.tsx
├─ components/          # ui primitives, layout, home sections, blog, contact
├─ config/              # the typed content layer (edit here)
├─ content/blog/        # MDX posts
├─ lib/                 # blog loader, utils, validation
└─ mdx-components.tsx   # premium MDX typography mapping
```

Built with Server Components by default; Client Components only where interaction demands it (navbar, role rotator, blog search, contact form, table of contents).
