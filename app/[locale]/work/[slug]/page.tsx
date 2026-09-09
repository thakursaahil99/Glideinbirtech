import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";
import { projects, getProject } from "@/content/projects";
import { getDictionary, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug })),
  );
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

  return (
    <>
      <article>
        <Section size="lg" className="relative overflow-hidden pb-0">
          <div
            className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-50"
            style={{ ["--glow-a" as string]: `${project.accent}44` }}
          />
          <Link
            href={`/${typed}/work`}
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {dict.work.backToWork}
          </Link>
          <Reveal className="mt-6">
            <p
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: project.accent }}
            >
              {t(project.category, typed)}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              {t(project.summary, typed)}
            </p>
          </Reveal>

          <Reveal className="mt-8" delay={0.1}>
            <dl className="flex flex-wrap gap-x-10 gap-y-4 border-y border-[var(--border)] py-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">{dict.work.year}</dt>
                <dd className="mt-0.5 font-medium">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted">{dict.work.role}</dt>
                <dd className="mt-0.5 font-medium">{project.role}</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-muted">{dict.work.builtWith}</dt>
                <dd className="mt-0.5 font-medium">{project.tech.join(" · ")}</dd>
              </div>
              {project.url ? (
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">{dict.work.liveSite}</dt>
                  <dd className="mt-0.5">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-[var(--primary)]"
                    >
                      {new URL(project.url).host} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </Reveal>
        </Section>

        <Section size="sm">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--border)]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </Section>

        <Section size="sm" className="pt-0">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">{dict.work.theChallenge}</h2>
              <p className="mt-4 leading-relaxed text-muted text-pretty">{project.challenge}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-semibold">{dict.work.theSolution}</h2>
              <p className="mt-4 leading-relaxed text-muted text-pretty">{project.solution}</p>
            </Reveal>
          </div>

          <Reveal className="mt-12">
            <h2 className="font-display text-2xl font-semibold">{dict.work.highlights}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((hl) => (
                <li
                  key={hl}
                  className="flex gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0"
                    style={{ color: project.accent }}
                  />
                  <span className="text-sm text-muted">{hl}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>

        <Section size="sm" className="border-t border-[var(--border)]">
          <Link
            href={`/${typed}/work/${next.slug}`}
            className="group flex items-center justify-between gap-6"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted">
                {dict.work.nextProject}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold group-hover:text-[var(--primary)] sm:text-3xl">
                {next.name}
              </p>
            </div>
            <ArrowRight className="h-6 w-6 shrink-0 text-muted transition-transform group-hover:translate-x-1" />
          </Link>
        </Section>
      </article>

      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
