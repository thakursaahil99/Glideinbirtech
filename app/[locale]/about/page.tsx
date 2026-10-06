import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { Marquee } from "@/components/motion/Marquee";
import { Spotlight } from "@/components/motion/Spotlight";
import { Magnetic } from "@/components/motion/Magnetic";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
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

const photos = [
  { src: "/about/glide-valley.jpg", alt: "Paraglider over a forested valley" },
  { src: "/about/landing.jpg", alt: "Evening at the Bir landing site" },
  { src: "/about/mountains.jpg", alt: "Mountain ridge at dusk" },
  { src: "/about/glide-red.jpg", alt: "Red paraglider in flight" },
  { src: "/about/camp.jpg", alt: "Camping in the hills" },
  { src: "/about/glide-snow.jpg", alt: "Flying past snow peaks" },
  { src: "/about/glide-blue.jpg", alt: "Blue paraglider against the sky" },
];

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

      <PageHero
        image="/about/glide-valley.jpg"
        eyebrow={
          <p className="eyebrow">
            {dict.about.eyebrow}
            <span className="inline-flex items-center gap-1 normal-case tracking-normal">
              <MapPin className="h-3.5 w-3.5" /> 32.04°N / 76.72°E
            </span>
          </p>
        }
        title={`${dict.about.heading.split(" ")[0]} *${dict.about.heading.split(" ").slice(1).join(" ")}*`}
        lede={dict.about.role}
        aside={
          <Magnetic>
            <Link href={`/${typed}/contact`} className={buttonClass({ size: "lg" })}>
              {dict.about.cta} <ArrowSlide />
            </Link>
          </Magnetic>
        }
      />

      <Section size="sm" className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            {aboutIntro.map((para, i) => (
              <Reveal key={para.en} delay={i * 0.05}>
                <p
                  className={
                    i === 0
                      ? "font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl text-pretty"
                      : "text-lg leading-relaxed text-muted text-pretty"
                  }
                >
                  {t(para, typed)}
                </p>
              </Reveal>
            ))}
            <Reveal className="flex flex-wrap gap-3 pt-2">
              {[
                { href: siteConfig.socials.github, label: "GitHub" },
                { href: siteConfig.socials.linkedin, label: "LinkedIn" },
                { href: siteConfig.socials.glideinbir, label: "Glide in Bir" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--primary)]"
                >
                  {s.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-32 lg:self-start">
            <Spotlight className="rounded-[1.75rem]">
              <div className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  {dict.about.now}
                </p>
                <ul className="mt-5 space-y-4">
                  {nowList.map((item, i) => (
                    <li key={item.en} className="flex gap-4">
                      <span className="text-xs font-medium text-muted tabular-nums">0{i + 1}</span>
                      <span className="text-[0.95rem] leading-snug">{t(item, typed)}</span>
                    </li>
                  ))}
                </ul>
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
                  {heroStats.map((s) => (
                    <div key={s.label.en}>
                      <dt className="font-display text-3xl font-semibold">
                        <Counter value={s.value} />
                      </dt>
                      <dd className="mt-1 text-[11px] leading-snug text-muted">{t(s.label, typed)}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </Section>

      <Section className="overflow-hidden">
        <SectionHeading
          eyebrow="Bir Billing"
          title={dict.about.lifeInBir}
          subtitle={dict.about.lifeInBirText}
        />
        <div className="mt-16">
          <PhotoGallery photos={photos} />
        </div>
      </Section>

      <Section tone="raised" className="rounded-[2.5rem]">
        <SectionHeading eyebrow={dict.about.experience} title={dict.about.experience} />
        <div className="mt-14">
          <ExperienceTimeline locale={typed} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={dict.about.skills} title={dict.stack.heading} />
        <div className="mt-14">
          <SkillBars locale={typed} />
        </div>
      </Section>

      <Section size="sm">
        <SectionHeading eyebrow={dict.about.principles} title={dict.about.principles} />
        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <RevealItem key={p.en} className="h-full">
              <Spotlight className="h-full rounded-[1.75rem]">
                <div className="flex h-full flex-col justify-between gap-10 rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
                  <span className="font-display text-6xl font-semibold leading-none text-transparent [-webkit-text-stroke:1px_var(--border-strong)]">
                    0{i + 1}
                  </span>
                  <p className="font-display text-2xl font-medium leading-snug tracking-tight">
                    {t(p, typed)}
                  </p>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-16">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              {dict.about.toolbox}
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <Marquee items={toolbox} className="mt-6" />
        </Reveal>
      </Section>

      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
