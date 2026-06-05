import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { SocialRow } from "@/components/layout/social-row";
import { MailIcon, ClockIcon } from "@/components/icons";
import { contact } from "@/config/contact";
import { personal } from "@/config/personal";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${personal.name}. ${contact.subheading}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={contact.heading}
        description={contact.subheading}
      />

      <Container className="pb-24 sm:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Aside */}
          <Reveal className="flex flex-col gap-8">
            <a
              href={`mailto:${contact.email}`}
              className="group flex flex-col gap-3 rounded-2xl border border-line bg-surface/30 p-6 transition-all duration-500 hover:border-line-strong hover:bg-surface/60"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-line bg-white/3 text-ink-soft transition-colors group-hover:text-ink">
                <MailIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Prefer email?</p>
                <p className="mt-0.5 font-medium text-ink transition-colors group-hover:text-accent-ink">
                  {contact.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/30 p-6">
              <span className="flex size-11 items-center justify-center rounded-full border border-line bg-white/3 text-ink-soft">
                <ClockIcon className="size-5" />
              </span>
              <div>
                <p className="text-sm text-ink-muted">Response time</p>
                <p className="mt-0.5 font-medium text-ink">
                  {contact.responseTime}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-line bg-surface/30 p-6">
              <p className="text-sm text-ink-muted">Or find me around the web</p>
              <SocialRow variant="all" />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal
            delay={0.08}
            className="rounded-3xl border border-line bg-surface/40 p-7 edge-highlight sm:p-9"
          >
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </>
  );
}
