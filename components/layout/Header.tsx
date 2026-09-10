"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LangToggle } from "@/components/layout/LangToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonClass } from "@/components/ui/Button";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const base = `/${locale}`;

  const links = [
    { href: base, label: dict.nav.home, exact: true },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/work`, label: dict.nav.work },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close the mobile menu whenever the route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 rounded-b-2xl border-x border-b px-4 transition-all duration-300 sm:px-5",
          scrolled
            ? "mt-0 border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_82%,transparent)] shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "mt-0 border-transparent bg-transparent",
        )}
      >
        <Link href={base} aria-label="Home" className="shrink-0">
          <Logo />
        </Link>

        {/* desktop nav — pill with active highlight */}
        <nav className="hidden items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/60 p-1 text-sm backdrop-blur lg:flex">
          {links.map((l) => {
            const on = isActive(l.href, l.exact);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={on ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 font-medium transition-colors",
                  on ? "text-[var(--primary-foreground)]" : "text-muted hover:text-foreground",
                )}
              >
                {on ? (
                  <span className="absolute inset-0 -z-10 rounded-full bg-[var(--primary)] shadow-sm shadow-[var(--glow-a)]" />
                ) : null}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <LangToggle locale={locale} />
          <ThemeToggle label={dict.theme.toggle} />
          <Link href={`${base}/contact`} className={buttonClass({ size: "sm" })}>
            {dict.nav.cta} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mx-3 mt-2 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl lg:hidden">
          <nav className="flex flex-col p-2">
            {links.map((l) => {
              const on = isActive(l.href, l.exact);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    on
                      ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                      : "text-foreground hover:bg-[var(--surface-2)]",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center justify-between border-t border-[var(--border)] p-4">
            <LangToggle locale={locale} />
            <ThemeToggle label={dict.theme.toggle} />
          </div>
          <div className="p-3 pt-0">
            <Link
              href={`${base}/contact`}
              className={buttonClass({ className: "w-full" })}
            >
              {dict.nav.cta} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
