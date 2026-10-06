import { ViewTransition } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ParallaxMedia } from "@/components/motion/Parallax";
import { Magnetic } from "@/components/motion/Magnetic";
import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { projects, getProject } from "@/content/projects";
import { getDictionary, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    locale: typed,
    path: `/work/${slug}`,
    title: `${project.name} — ${t(project.category, typed)}`,
    description: t(project.summary, typed),
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { label: dict.work.year, value: project.year },
    { label: dict.work.role, value: project.role },
    { label: dict.work.builtWith, value: project.tech.join(" · ") },
  ];

  return (
    <ViewTransition key={slug} enter="page-in" exit="page-out" default="none">
      <article style={{ ["--card-accent" as string]: project.accent }}>
        <PageHero
          eyebrow={
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${typed}/work`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" /> {dict.work.backToWork}
              </Link>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                style={{ backgroundColor: project.accent }}
              >
                {t(project.category, typed)}
              </span>
            </div>
          }
          title={project.name}
          lede={t(project.summary, typed)}
          aside={
            project.url ? (
              <Magnetic>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass({ size: "lg" })}
                >
                  {dict.work.liveSite} <ExternalLink className="h-4 w-4" />
                </a>
              </Magnetic>
            ) : undefined
          }
        >
          <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label} className="bg-[var(--surface)]/85 p-5 backdrop-blur">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {m.label}
                </dt>
                <dd className="mt-2 font-medium">{m.value}</dd>
              </div>
            ))}
          </dl>
        </PageHero>

        {/* hero image — morphs from the card that was clicked */}
        <Section size="sm" className="pt-0">
          <div className="relative">
            <div
              className="absolute -inset-10 -z-10 rounded-[4rem] opacity-30 blur-3xl"
              style={{ backgroundColor: project.accent }}
            />
            <ParallaxMedia
              amount={6}
              className="aspect-[16/10] rounded-[2rem] border border-[var(--border)] bg-[var(--surface-2)] sm:aspect-[16/9]"
            >
              <ViewTransition name={`project-${project.slug}`} share="morph" default="none">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-top"
                  priority
                />
              </ViewTransition>
            </ParallaxMedia>
          </div>
        </Section>

        <Section size="sm" className="pt-0">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow mb-4">{dict.work.theChallenge}</p>
              <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                {project.challenge}
              </p>
            </Reveal>
            <div>
              <Reveal>
                <p className="eyebrow mb-4">{dict.work.theSolution}</p>
                <p className="text-lg leading-relaxed text-muted text-pretty">{project.solution}</p>
              </Reveal>
              <Reveal className="mt-12">
                <p className="eyebrow mb-6">{dict.work.highlights}</p>
              </Reveal>
              <RevealGroup className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
                {project.highlights.map((hl, i) => (
                  <RevealItem key={hl}>
                    <div className="flex items-baseline gap-5 py-5">
                      <span className="text-xs font-medium tabular-nums" style={{ color: project.accent }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-medium">{hl}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Section>

        {project.gallery?.length ? (
          <Section size="sm" className="pt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 0.08}
                  className={project.gallery!.length % 2 === 1 && i === 0 ? "md:col-span-2" : undefined}
                >
                  <ParallaxMedia
                    amount={5}
                    className="aspect-[16/10] rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface-2)]"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} — screen ${i + 2}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </ParallaxMedia>
                </Reveal>
              ))}
            </div>
          </Section>
        ) : null}

        {/* next project */}
        <Link
          href={`/${typed}/work/${next.slug}`}
          data-cursor={dict.work.nextProject}
          className="group relative block overflow-hidden border-t border-[var(--border)]"
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <Image src={next.image} alt="" fill sizes="100vw" className="object-cover object-top opacity-25 blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
          </div>
          <div className="relative mx-auto flex max-w-7xl items-end justify-between gap-6 py-20 container-px sm:py-28">
            <div>
              <p className="eyebrow">{dict.work.nextProject}</p>
              <p className="mt-4 font-display text-5xl font-semibold tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-4 sm:text-7xl lg:text-8xl">
                {next.name}
              </p>
            </div>
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-500 group-hover:rotate-45 sm:h-20 sm:w-20">
              <ArrowUpRight className="h-7 w-7" />
            </span>
          </div>
        </Link>
      </article>

      <FinalCta locale={typed} dict={dict} />
    </ViewTransition>
  );
}
