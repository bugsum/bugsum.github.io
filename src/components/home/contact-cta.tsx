import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SocialRow } from "@/components/layout/social-row";
import { ArrowRightIcon, MailIcon } from "@/components/icons";
import { contact } from "@/config/contact";

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl border border-line-strong px-8 py-16 text-center edge-highlight sm:px-16 sm:py-24">
          {/* Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute inset-0 bg-surface/40" />
            <div
              className="absolute left-1/2 top-1/2 h-96 w-160 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[100px]"
              style={{
                background:
                  "radial-gradient(closest-side, oklch(67% 0.16 274 / 0.22), transparent)",
              }}
            />
            <div className="absolute inset-0 bg-grid opacity-30 mask-radial-faded" />
          </div>

          <h2 className="mx-auto max-w-2xl text-balance text-h1 font-semibold tracking-tight text-shine">
            {contact.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            {contact.subheading}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Start a conversation
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            </Button>
            <Button href={`mailto:${contact.email}`} size="lg" variant="secondary">
              <MailIcon className="size-4" />
              {contact.email}
            </Button>
          </div>

          <div className="mt-10 flex justify-center">
            <SocialRow />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
