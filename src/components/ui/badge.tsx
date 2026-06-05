import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "accent";
}

const variants = {
  default: "bg-white/5 text-ink-soft border border-line",
  outline: "border border-line-strong text-ink-muted",
  accent:
    "border border-accent/30 bg-accent/10 text-accent-ink",
} as const;

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
