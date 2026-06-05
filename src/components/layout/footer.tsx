import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SocialRow } from "./social-row";
import { Logo } from "./logo";
import { navItems } from "@/config/navigation";
import { personal } from "@/config/personal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-line">
      <Container className="py-16">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-pretty text-sm leading-relaxed text-ink-muted">
              {personal.tagline} Currently {personal.available ? "open to" : "not seeking"} new
              opportunities.
            </p>
            <div className="mt-6">
              <SocialRow variant="all" size="sm" />
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-16 gap-y-3">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                Navigate
              </span>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                Connect
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Email
              </a>
              <Link
                href="/resume"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-xs text-ink-faint sm:flex-row">
          <p>
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with intent.
          </p>
        </div>
      </Container>
    </footer>
  );
}
