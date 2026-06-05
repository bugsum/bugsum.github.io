import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  /** Narrower measure for reading contexts. */
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export function Container({
  as: Tag = "div",
  className,
  children,
  size = "default",
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-6 sm:px-8", sizes[size], className)}
    >
      {children}
    </Tag>
  );
}
