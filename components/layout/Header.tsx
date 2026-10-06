"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Logo } from "@/components/Logo";
import { LangToggle } from "@/components/layout/LangToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { Magnetic } from "@/components/motion/Magnetic";
import { getLenis } from "@/components/motion/SmoothScroll";
import { siteConfig, whatsappDisplay } from "@/lib/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const ease = [0.76, 0, 0.24, 1] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const base = `/${locale}`;
  const { scrollY } = useScroll();

  const links = [
    { href: base, label: dict.nav.home, exact: true },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/work`, label: dict.nav.work },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  // hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > 240 && y > prev && !open);
  });

  useEffect(() => {
    // close the menu whenever the route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  const activeHref = links.find((l) => isActive(l.href, l.exact))?.href ?? null;
  const pillTarget = hovered ?? activeHref;

  return (
    <>
      <motion.header
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        style={{ viewTransitionName: "site-header" }}
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={cn(
            "pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 sm:px-4",
            scrolled || open
              ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_72%,transparent)] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href={base} aria-label="Home" className="relative z-10 shrink-0 pl-1">
            <Logo />
          </Link>

          {/* desktop nav — sliding pill */}
          <nav
            className="hidden items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 p-1 text-sm lg:flex"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((l) => {
              const on = isActive(l.href, l.exact);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={on ? "page" : undefined}
                  onMouseEnter={() => setHovered(l.href)}
                  className={cn(
                    "relative rounded-full px-4 py-1.5 font-medium transition-colors duration-300",
                    pillTarget === l.href ? "text-background" : "text-muted hover:text-foreground",
                  )}
                >
                  {pillTarget === l.href ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-0 rounded-full bg-foreground"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <LangToggle locale={locale} />
            <ThemeToggle label={dict.theme.toggle} />
            <Magnetic strength={0.25}>
              <Link href={`${base}/contact`} className={buttonClass({ size: "sm" })}>
                {dict.nav.cta} <ArrowSlide />
              </Link>
            </Magnetic>
          </div>

          <button
            type="button"
            className="relative z-10 inline-flex h-10 items-center gap-2.5 rounded-full bg-foreground pl-4 pr-3 text-sm font-medium text-background lg:hidden"
            aria-label={open ? dict.nav.close : dict.nav.menu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-4 overflow-hidden">
              <motion.span
                className="flex flex-col"
                animate={{ y: open ? "-50%" : "0%" }}
                transition={{ duration: 0.45, ease }}
              >
                <span className="h-4 leading-4">{dict.nav.menu}</span>
                <span className="h-4 leading-4">{dict.nav.close}</span>
              </motion.span>
            </span>
            <span className="relative h-3 w-4">
              <motion.span
                className="absolute left-0 top-0.5 h-[1.5px] w-4 rounded bg-background"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease }}
              />
              <motion.span
                className="absolute bottom-0.5 left-0 h-[1.5px] w-4 rounded bg-background"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease }}
              />
            </span>
          </button>
        </div>
      </motion.header>

      {/* fullscreen mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            className="fixed inset-0 z-40 flex flex-col bg-[var(--background)] lg:hidden"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2.5rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2.5rem)" }}
            transition={{ duration: 0.8, ease }}
            data-lenis-prevent
          >
            <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" />
            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6 pt-20">
              {links.map((l, i) => {
                const on = isActive(l.href, l.exact);
                return (
                  <div key={l.href} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.06 }}
                    >
                      <Link
                        href={l.href}
                        className="group flex items-baseline gap-4 py-1.5 font-display text-[2.9rem] font-semibold leading-none tracking-tight"
                      >
                        <span className="text-xs font-medium text-muted tabular-nums">
                          0{i + 1}
                        </span>
                        <span className={cn(on ? "serif-accent gradient-text" : "text-foreground")}>
                          {l.label}
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </nav>
            <motion.div
              className="relative space-y-5 border-t border-[var(--border)] px-6 pb-24 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <LangToggle locale={locale} />
                <ThemeToggle label={dict.theme.toggle} />
              </div>
              <div className="flex flex-col gap-1 text-sm text-muted">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                <WhatsAppLink message={dict.cta.whatsappMessage} from={dict.cta.whatsappFrom}>
                  WhatsApp · {whatsappDisplay()}
                </WhatsAppLink>
              </div>
              <Link href={`${base}/contact`} className={buttonClass({ size: "lg", className: "w-full" })}>
                {dict.nav.cta} <ArrowSlide />
              </Link>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
