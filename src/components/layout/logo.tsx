import Link from "next/link";
import Image from "next/image";
import { personal } from "@/config/personal";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${personal.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full",
        className,
      )}
    >
      <span className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg border border-line-strong edge-highlight transition-transform duration-300 ease-out-expo group-hover:scale-[1.05]">
        <Image
          src={personal.logo}
          alt=""
          width={32}
          height={32}
          priority
          className="size-full object-cover"
        />
      </span>
      <span className="text-[0.95rem] font-medium tracking-tight text-ink">
        {personal.name.split(" ")[0]}
        {/* <span className="text-ink-faint">.dev</span> */}
      </span>
    </Link>
  );
}
