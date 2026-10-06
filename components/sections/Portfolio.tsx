import { ViewTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowSlide } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ParallaxMedia } from "@/components/motion/Parallax";
import { HorizontalScroll } from "@/components/sections/HorizontalScroll";
import { projects, type Project } from "@/content/projects";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function ProjectImage({ p, sizes, className }: { p: Project; sizes: string; className?: string }) {
  return (
    <ViewTransition name={`project-${p.slug}`} share="morph" default="none">
      <Image
        src={p.image}
        alt={p.name}
        fill
        sizes={sizes}
        className={cn("object-cover object-top", className)}
      />
    </ViewTransition>
  );
}

/** Tall card used in the home horizontal gallery. */
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
    <Link
      href={`/${locale}/work/${p.slug}`}
      data-cursor={dict.work.caseStudy}
      className="group block w-full"
      style={{ ["--card-accent" as string]: p.accent }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-2)] lg:aspect-[16/11]">
        <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <ProjectImage p={p} sizes="(max-width: 1024px) 100vw, 60vw" />
        </div>
        {/* the dark overlay is only needed where the title sits on the image (lg+) */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-black/90 via-black/35 via-45% to-transparent lg:block" />
        <div
          className="absolute inset-0 opacity-0 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-30"
          style={{ backgroundColor: p.accent }}
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 lg:left-5 lg:top-5">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm backdrop-blur">
            {p.year}
          </span>
          <span className="hidden rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur lg:inline">
            {t(p.category, locale)}
          </span>
        </div>
        <span className="absolute right-5 top-5 hidden font-display text-5xl font-semibold text-white/80 tabular-nums lg:block">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform duration-500 group-hover:rotate-45 lg:hidden">
          <ArrowUpRight className="h-5 w-5" />
        </span>
        <div className="absolute inset-x-5 bottom-5 hidden items-end justify-between gap-4 text-white lg:flex">
          <div className="min-w-0">
            <h3 className="font-display text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
              {p.name}
            </h3>
            <p className="mt-2 line-clamp-2 max-w-md text-sm text-white/75">{t(p.result, locale)}</p>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>

      {/* phones & tablets: details below the image so they never fight its text */}
      <div className="px-1 pt-4 lg:hidden">
        <div className="flex items-center gap-3 text-xs">
          <span className="font-display font-semibold text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-6" style={{ backgroundColor: p.accent }} />
          <span className="font-medium" style={{ color: p.accent }}>
            {t(p.category, locale)}
          </span>
        </div>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted">{t(p.result, locale)}</p>
      </div>
    </Link>
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
      data-cursor={dict.work.caseStudy}
      className="group grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16"
    >
      <div className={cn("relative", flip && "lg:order-2")}>
        <div
          className="absolute -inset-6 -z-10 rounded-[3rem] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
          style={{ backgroundColor: p.accent }}
        />
        <ParallaxMedia
          amount={8}
          className="aspect-[16/11] rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-2)]"
        >
          <div className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
            <ProjectImage p={p} sizes="(max-width: 1024px) 100vw, 700px" />
          </div>
        </ParallaxMedia>
      </div>

      <div>
        <div className="flex items-center gap-3 text-sm">
          <span className="font-display font-semibold text-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-[var(--border-strong)] transition-all duration-500 group-hover:w-16" style={{ backgroundColor: p.accent }} />
          <span className="font-medium" style={{ color: p.accent }}>
            {t(p.category, locale)}
          </span>
        </div>
        <h3 className="mt-5 font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl lg:text-6xl">
          {p.name}
        </h3>
        <p className="mt-5 leading-relaxed text-muted text-pretty sm:text-lg">{t(p.summary, locale)}</p>
        <p className="mt-4 border-l-2 pl-4 font-medium" style={{ borderColor: p.accent }}>
          {t(p.result, locale)}
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {p.tech.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
          {dict.work.caseStudy} <ArrowSlide />
        </span>
      </div>
    </Link>
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

  if (variant === "page") {
    return (
      <Section id="work" className="pt-0">
        <div className="space-y-28 sm:space-y-40">
          {list.map((p, i) => (
            <Reveal key={p.slug}>
              <ProjectRow project={p} locale={locale} dict={dict} index={i} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-0">
      <HorizontalScroll
        intro={
          <SectionHeading
            eyebrow={dict.work.eyebrow}
            index="03"
            title={dict.work.heading}
            subtitle={dict.work.subheading}
          />
        }
        hint={dict.work.scrollHint}
        outro={
          <Link
            href={`/${locale}/work`}
            data-cursor={dict.work.viewAll}
            className="group flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-dashed border-[var(--border-strong)] text-center transition-colors hover:border-[var(--primary)] lg:aspect-[3/4]"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110">
              <ArrowUpRight className="h-7 w-7" />
            </span>
            <span className="font-display text-2xl font-semibold">{dict.work.viewAll}</span>
            <span className="text-sm text-muted">{projects.length} {locale === "hi" ? "प्रोजेक्ट" : "projects"}</span>
          </Link>
        }
      >
        {list.map((p, i) => (
          <ProjectCard key={p.slug} project={p} locale={locale} dict={dict} index={i} />
        ))}
      </HorizontalScroll>
    </section>
  );
}
