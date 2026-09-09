"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { LangToggle } from "@/components/layout/LangToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { buttonClass } from "@/components/ui/Button";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: `${base}#services`, label: dict.nav.services },
    { href: `${base}#stack`, label: dict.nav.stack },
    { href: `${base}#work`, label: dict.nav.work },
    { href: `${base}#process`, label: dict.nav.process },
    { href: `${base}#pricing`, label: dict.nav.pricing },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between container-px">
        <Link href={base} aria-label={dict.footer.getQuote} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LangToggle locale={locale} />
          <ThemeToggle label={dict.theme.toggle} />
          <Link href={`${base}/contact`} className={buttonClass({ size: "sm" })}>
            {dict.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[var(--border)] bg-[var(--background)] lg:hidden">
          <div className="mx-auto w-full max-w-6xl container-px py-4">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[var(--border)] py-3 text-base"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between">
              <LangToggle locale={locale} />
              <ThemeToggle label={dict.theme.toggle} />
            </div>
            <Link
              href={`${base}/contact`}
              onClick={() => setOpen(false)}
              className={buttonClass({ className: "mt-4 w-full" })}
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
