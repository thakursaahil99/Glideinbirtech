import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowSlide } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { ServicePhoto } from "@/components/sections/ServicePhoto";
import { ServiceList } from "@/components/sections/ServiceList";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { services } from "@/content/services";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

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

  if (variant === "home") {
    return (
      <Section id="services" tone="raised" className="rounded-[2.5rem]">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          index="02"
          title={dict.services.heading}
          subtitle={dict.services.subheading}
          aside={
            <Link
              href={`/${locale}/services`}
              className="group inline-flex items-center gap-2 border-b border-[var(--border-strong)] pb-1 text-sm font-medium transition-colors hover:border-[var(--primary)]"
            >
              {dict.services.allCta} <ArrowSlide />
            </Link>
          }
        />
        <ServiceList
          className="mt-16"
          items={list.map((s, i) => ({
            slug: s.slug,
            href: `/${locale}/services/${s.slug}`,
            index: String(i + 1).padStart(2, "0"),
            title: t(s.title, locale),
            tagline: t(s.tagline, locale),
            accent: s.accent,
            image: s.image,
            visual: (
              <ServicePhoto
                src={s.image}
                alt={t(s.title, locale)}
                accent={s.accent}
                sizes="380px"
                zoom={false}
              />
            ),
          }))}
          viewLabel={dict.services.view}
        />
      </Section>
    );
  }

  return (
    <Section id="services" className="pt-0">
      <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <RevealItem key={s.slug} className="h-full">
            <Spotlight color={s.accent} className="h-full rounded-[1.75rem]">
              <Link
                href={`/${locale}/services/${s.slug}`}
                data-cursor={dict.services.view}
                className="group flex h-full flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-3 transition-transform duration-500 hover:-translate-y-1"
              >
                <ServicePhoto src={s.image} alt={t(s.title, locale)} accent={s.accent} />
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  <div className="flex items-center justify-between">
                    <ServiceIcon icon={s.icon} accent={s.accent} />
                    <span className="font-display text-sm font-semibold text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight">
                    {t(s.title, locale)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.tagline, locale)}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {s.points.map((p) => (
                      <li key={p.en} className="flex gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: s.accent }} />
                        <span className="text-muted">{t(p, locale)}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    {dict.services.view} <ArrowSlide />
                  </span>
                </div>
              </Link>
            </Spotlight>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
