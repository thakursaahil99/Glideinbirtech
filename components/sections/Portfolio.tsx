import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { projects } from "@/content/projects";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Portfolio({
  locale,
  dict,
  limit,
  showViewAll = true,
}: {
  locale: Locale;
  dict: Dictionary;
  limit?: number;
  showViewAll?: boolean;
}) {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <Section id="work" className="bg-[var(--surface)]/40">
      <SectionHeading
        eyebrow={dict.nav.work}
        title={dict.work.heading}
        subtitle={dict.work.subheading}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {list.map((p) => (
          <article
            key={p.slug}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] card-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.image}
                alt={`${p.name} — ${t(p.category, locale)}`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {p.placeholder ? (
                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
                  sample
                </span>
              ) : null}
            </div>
            <div className="p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-[var(--accent)]">
                {t(p.category, locale)}
              </p>
              <h3 className="mt-1 flex items-center gap-1 font-display text-lg font-semibold">
                {p.name}
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground"
                    aria-label={dict.work.visit}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(p.summary, locale)}</p>
              <p className="mt-2 text-sm font-medium">{t(p.result, locale)}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border)] px-2 py-0.5 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-muted">{dict.work.placeholderNote}</p>

      {showViewAll ? (
        <div className="mt-6 text-center">
          <Link
            href={`/${locale}/work`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
          >
            {dict.work.viewAll} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
