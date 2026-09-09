import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { projects, type Project } from "@/content/projects";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function TechTags({ tech }: { tech: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {tech.slice(0, 5).map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-[var(--border)] px-2 py-0.5 text-xs text-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/** Big alternating editorial row — used on the Work page. */
function ProjectRow({
  project: p,
  locale,
  dict,
  index,
  flip,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  index: number;
  flip: boolean;
}) {
  return (
      <Link
        href={`/${locale}/work/${p.slug}`}
        className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
        style={{ ["--card-accent" as string]: p.accent }}
      >
        <div className={cn("relative", flip && "lg:order-2")}>
          <div className="absolute -inset-3 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
            style={{ backgroundColor: p.accent }} />
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] shadow-xl shadow-black/20">
            <div className="relative aspect-[16/10]">
              <Image
                src={p.image}
                alt={`${p.name} — ${t(p.category, locale)}`}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl font-bold text-[var(--border)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
              style={{ backgroundColor: p.accent }}
            >
              {p.year}
            </span>
          </div>
          <p
            className="mt-4 text-xs font-semibold uppercase tracking-wider"
            style={{ color: p.accent }}
          >
            {t(p.category, locale)}
          </p>
          <h3 className="mt-1.5 flex items-center gap-2 font-display text-2xl font-bold sm:text-3xl">
            {p.name}
            <ArrowUpRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
          <p className="mt-3 leading-relaxed text-muted text-pretty">{t(p.summary, locale)}</p>
          <p className="mt-3 font-medium">{t(p.result, locale)}</p>
          <TechTags tech={p.tech} />
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]">
            {dict.work.caseStudy}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
  );
}

/** Compact card — used in the home grid. */
function ProjectCard({
  project: p,
  locale,
  dict,
  index,
}: {
  project: Project;
  locale: Locale;
  dict: Dictionary;
  index: number;
}) {
  return (
    <Tilt max={5} className="h-full">
      <Link
        href={`/${locale}/work/${p.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 card-hover"
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
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span
            className="absolute left-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
            style={{ backgroundColor: p.accent }}
          >
            {p.year}
          </span>
          <span className="absolute right-4 top-4 font-display text-2xl font-bold text-white/70">
            {String(index + 1).padStart(2, "0")}
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
          <TechTags tech={p.tech} />
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)]">
            {dict.work.caseStudy}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Tilt>
  );
}

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

      {variant === "page" ? (
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28">
          {list.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectRow
                project={p}
                locale={locale}
                dict={dict}
                index={i}
                flip={i % 2 === 1}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <>
          <Reveal className="mt-12">
            <ProjectRow
              project={list[0]}
              locale={locale}
              dict={dict}
              index={0}
              flip={false}
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-3" stagger={0.06}>
            {list.slice(1).map((p, i) => (
              <RevealItem key={p.slug} className="h-full">
                <ProjectCard project={p} locale={locale} dict={dict} index={i + 1} />
              </RevealItem>
            ))}
          </RevealGroup>
        </>
      )}

      {limit ? (
        <div className="mt-12 text-center">
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
