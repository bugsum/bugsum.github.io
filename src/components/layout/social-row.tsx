import { primarySocials, socials, type Social } from "@/config/socials";
import { cn } from "@/lib/utils";

interface SocialRowProps {
  className?: string;
  /** Use the full set or only the primary ones. */
  variant?: "primary" | "all";
  size?: "sm" | "md";
}

export function SocialRow({
  className,
  variant = "primary",
  size = "md",
}: SocialRowProps) {
  const list: Social[] = variant === "all" ? socials : primarySocials;
  const dim = size === "sm" ? "size-9" : "size-10";
  const icon = size === "sm" ? "size-4" : "size-[1.1rem]";

  return (
    <ul className={cn("flex items-center gap-1.5", className)}>
      {list.map((social) => {
        const Icon = social.icon;
        return (
          <li key={social.platform}>
            <a
              href={social.href}
              target={social.platform === "email" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              className={cn(
                "group flex items-center justify-center rounded-full border border-transparent text-ink-muted transition-all duration-300 ease-[var(--ease-out-expo)] hover:border-line-strong hover:bg-white/[0.05] hover:text-ink",
                dim,
              )}
            >
              <Icon className={cn("transition-transform duration-300 group-hover:-translate-y-px", icon)} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
