import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { StatusPill } from "@/components/ui/status-pill";
import { SocialRow } from "@/components/layout/social-row";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon, DownloadIcon } from "@/components/icons";
import { personal } from "@/config/personal";
import { RoleRotator } from "./role-rotator";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      {/* Local hero glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-144 mask-b-faded"
      >
        <div
          className="absolute left-1/2 -top-32 h-112 w-2xl -translate-x-1/2 rounded-full opacity-50 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, oklch(64% 0.18 302 / 0.3), transparent)",
          }}
        />
      </div>

      <Container className="relative">
        <div className="flex max-w-3xl flex-col items-start">
          <Reveal>
            <StatusPill label={personal.availability} active={personal.available} />
          </Reveal>

          <Reveal delay={0.06} className="mt-8">
            <h1 className="text-balance text-display font-semibold tracking-tight text-shine">
              {personal.name}
            </h1>
          </Reveal>

          <Reveal delay={0.12} className="mt-5">
            <p className="text-h3 font-medium tracking-tight text-ink-soft">
              <RoleRotator roles={personal.roles} />
            </p>
          </Reveal>

          <Reveal delay={0.18} className="mt-7 max-w-xl">
            <p className="text-pretty text-lg leading-relaxed text-ink-muted">
              {personal.intro}
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/projects" size="lg">
                View my work
                <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </Button>
              <Button href="/resume" size="lg" variant="secondary">
                <DownloadIcon className="size-4" />
                Resume
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-ink-faint">
                Find me
              </span>
              <span className="h-px w-8 bg-line-strong" aria-hidden />
              <SocialRow />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
