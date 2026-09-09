import Link from "next/link";
import {
  ArrowRight,
  Check,
  Database,
  LayoutDashboard,
  Rocket,
  Search,
  Smartphone,
  Target,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  search: Search,
  target: Target,
  database: Database,
};

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow={dict.nav.services}
        title={dict.services.heading}
        subtitle={dict.services.subheading}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Rocket;
          return (
            <Reveal key={s.slug} delay={i * 0.05} className="h-full">
            <Card hover className="flex h-full flex-col">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{t(s.title, locale)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.tagline, locale)}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p.en} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span className="text-muted">{t(p, locale)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
              >
                {dict.services.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
