import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { SkillBars } from "@/components/sections/SkillBars";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { FinalCta } from "@/components/sections/FinalCta";
import { PersonJsonLd } from "@/components/seo/JsonLd";
import { aboutIntro, nowList, heroStats } from "@/content/profile";
import { principles } from "@/content/experience";
import { toolbox } from "@/content/skills";
import { getDictionary, isLocale, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(typed);
  return buildMetadata({
    locale: typed,
    path: "/about",
    title: dict.about.pageTitle,
    description: t(siteConfig.tagline, typed),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);

  return (
    <>
      <PersonJsonLd locale={typed} />

      <Section size="lg" className="relative overflow-hidden pb-0">
        <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-60" />
        <Reveal>
          <p className="eyebrow mb-4">{dict.about.eyebrow}</p>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {dict.about.heading}
          </h1>
          <p className="mt-3 text-lg text-muted">{dict.about.role}</p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="space-y-4">
            {aboutIntro.map((para) => (
              <p key={para.en} className="leading-relaxed text-muted text-pretty sm:text-lg">
                {t(para, typed)}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]"
              >
                GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]"
              >
                LinkedIn <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                {dict.about.now}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {nowList.map((item) => (
                  <li key={item.en} className="flex gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span className="text-muted">{t(item, typed)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <dl className="grid max-w-xl grid-cols-3 gap-6 border-t border-[var(--border)] pt-8">
            {heroStats.map((s) => (
              <div key={s.label.en} className="min-w-0">
                <dt className="font-display text-3xl font-bold gradient-text">
                  <Counter value={s.value} />
                </dt>
                <dd className="mt-1.5 text-xs leading-snug text-muted text-pretty">
                  {t(s.label, typed)}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section size="md" tone="raised">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {dict.about.experience}
          </h2>
        </Reveal>
        <div className="mt-10 lg:pl-4">
          <ExperienceTimeline locale={typed} />
        </div>
      </Section>

      <Section size="md">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{dict.about.skills}</h2>
        </Reveal>
        <div className="mt-10">
          <SkillBars locale={typed} />
        </div>
      </Section>

      <Section size="md" tone="raised">
        <Reveal>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            {dict.about.principles}
          </h2>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <li
              key={p.en}
              className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-5 font-display text-lg"
            >
              “{t(p, typed)}”
            </li>
          ))}
        </ul>

        <Reveal className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            {dict.about.toolbox}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {toolbox.map((tool) => (
              <span
                key={tool}
                className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-sm text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
