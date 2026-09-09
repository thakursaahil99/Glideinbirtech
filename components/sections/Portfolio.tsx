import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { projects } from "@/content/projects";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Portfolio({
  locale,
  dict,
  limit,
  variant = "home",
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  variant?: "home" | "page";
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <Section
      id="work"
      className={variant === "page" ? "relative overflow-hidden" : undefined}
    >
      {variant === "page" ? (
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-50" />
      ) : null}
      <SectionHeading
        eyebrow={dict.work.eyebrow}
        title={variant === "page" ? dict.work.pageHeading : dict.work.heading}
        subtitle={variant === "page" ? dict.work.pageSubheading : dict.work.subheading}
      />

      <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.06}>
        {list.map((p, i) => (
          <RevealItem key={p.slug} className="h-full">
            <Tilt max={5} className="h-full">
              <Link
                href={`/${locale}/work/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--card-accent)_55%,var(--border))]"
                style={{ ["--card-accent" as string]: p.accent }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 z-10 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: p.accent }}
                />
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.name} — ${t(p.category, locale)}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.year}
                  </span>
                  <span className="absolute right-4 top-4 font-display text-2xl font-bold text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: p.accent }}
                  >
                    {t(p.category, locale)}
                  </p>
                  <h3 className="mt-1.5 flex items-center gap-1.5 font-display text-xl font-semibold sm:text-2xl">
                    {p.name}
                    <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.summary, locale)}</p>
                  <p className="mt-3 text-sm font-medium">{t(p.result, locale)}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-[var(--border)] px-2 py-0.5 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]">
                    {dict.work.caseStudy}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Tilt>
          </RevealItem>
        ))}
      </RevealGroup>

      {limit ? (
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
          >
            {dict.work.viewAll} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
