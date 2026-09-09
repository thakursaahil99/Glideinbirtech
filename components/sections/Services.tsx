import Link from "next/link";
import {
  ArrowRight,
  Check,
  Database,
  Gauge,
  LayoutDashboard,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { ServiceVisual } from "@/components/sections/ServiceVisual";
import { services } from "@/content/services";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  search: Search,
  target: Target,
  database: Database,
  "shopping-cart": ShoppingCart,
  gauge: Gauge,
};

export function Services({
  locale,
  dict,
  variant = "home",
  limit,
}: {
  locale: Locale;
  dict: Dictionary;
  variant?: "home" | "page";
  limit?: number;
}) {
  const list = limit ? services.slice(0, limit) : services;
  return (
    <Section
      id="services"
      className={variant === "page" ? "relative overflow-hidden" : undefined}
    >
      {variant === "page" ? (
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-50" />
      ) : null}
      <SectionHeading
        eyebrow={dict.services.eyebrow}
        title={variant === "page" ? dict.services.pageHeading : dict.services.heading}
        subtitle={variant === "page" ? dict.services.pageSubheading : dict.services.subheading}
      />
      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => {
          const Icon = icons[s.icon] ?? Rocket;
          return (
            <RevealItem key={s.slug} className="h-full">
              <Tilt max={5} className="h-full">
                <div
                  className="group/card flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 transition-colors duration-300 card-hover"
                  style={{ ["--card-accent" as string]: s.accent }}
                >
                  <ServiceVisual slug={s.slug} accent={s.accent} />
                  <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `color-mix(in srgb, ${s.accent} 16%, transparent)`,
                          color: s.accent,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm font-semibold text-[var(--border)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold">
                      {t(s.title, locale)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(s.tagline, locale)}
                    </p>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
                      {dict.services.whatYouGet}
                    </p>
                    <ul className="mt-2 space-y-2 text-sm">
                      {s.points.map((p) => (
                        <li key={p.en} className="flex gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0"
                            style={{ color: s.accent }}
                          />
                          <span className="text-muted">{t(p, locale)}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/${locale}/contact`}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
                    >
                      {dict.services.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Tilt>
            </RevealItem>
          );
        })}
      </RevealGroup>

      {variant === "home" ? (
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
          >
            {dict.services.allCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
