import { Container } from "./container";
import { Reveal } from "./reveal";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  size = "default",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
}) {
  return (
    <header className={cn("relative pt-36 pb-12 sm:pt-44 sm:pb-16", className)}>
      <Container size={size}>
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
              <span className="h-px w-6 bg-line-strong" aria-hidden />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-balance text-h1 font-semibold tracking-tight text-shine">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
