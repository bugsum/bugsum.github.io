import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { Container } from "./container";
import { Reveal } from "./reveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  size?: "default" | "narrow" | "wide";
}

export function Section({
  id,
  className,
  children,
  size = "default",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24 sm:py-32", className)}>
      <Container size={size}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted">
          <span className="h-px w-6 bg-line-strong" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-h2 font-semibold text-shine">{title}</h2>
      {description && (
        <p className="text-pretty text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </Reveal>
  );
}
