import { cn } from "@/lib/utils";

export function StatusPill({
  label,
  active = true,
  className,
}: {
  label: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line glass px-3 py-1.5 text-xs font-medium text-ink-soft",
        className,
      )}
    >
      <span className="relative flex size-1.5">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={cn(
            "relative inline-flex size-1.5 rounded-full",
            active ? "bg-emerald-400" : "bg-ink-faint",
          )}
        />
      </span>
      {label}
    </span>
  );
}
