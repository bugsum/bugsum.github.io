"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navItems } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { SocialRow } from "./social-row";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex justify-center px-4 pt-3 sm:pt-4">
        <nav
          className={cn(
            "flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-500 ease-[var(--ease-out-expo)]",
            scrolled
              ? "glass border-line-strong shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
              : "border-transparent bg-transparent",
          )}
        >
          <Logo className="pl-1" />

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
                      active
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/[0.07]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <Button href="/contact" size="sm" variant="secondary">
              Get in touch
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-white/[0.06] hover:text-ink md:hidden"
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-canvas/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 px-6"
            >
              <ul className="flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between rounded-2xl border border-line px-5 py-4 text-2xl font-medium tracking-tight transition-colors",
                          active
                            ? "bg-white/[0.05] text-ink"
                            : "text-ink-soft hover:bg-white/[0.03]",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-8 flex items-center justify-between">
                <SocialRow />
                <Button href="/contact" size="sm">
                  Get in touch
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
