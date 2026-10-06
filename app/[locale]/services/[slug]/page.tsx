import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { ParallaxMedia } from "@/components/motion/Parallax";
import { Spotlight } from "@/components/motion/Spotlight";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceVisual } from "@/components/sections/ServiceVisual";
import { ServiceIcon } from "@/components/sections/ServiceIcon";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { services, getService } from "@/content/services";
import { getProject, type Project } from "@/content/projects";
import { getDictionary, isLocale, locales, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((s) => ({ locale, slug: s.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    locale: typed,
    path: `/services/${slug}`,
    title: t(service.title, typed),
    description: t(service.tagline, typed),
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getProject(s))
    .filter((p): p is Project => Boolean(p));
  const others = services.filter((s) => s.slug !== slug);
  const idx = services.findIndex((s) => s.slug === slug);

  return (
    <>
      <PageHero
        eyebrow={
          <Link
            href={`/${typed}/services`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> {dict.services.backToServices}
            <span className="text-foreground/40">/</span>
            <span className="tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
          </Link>
        }
        title={t(service.title, typed)}
        lede={t(service.tagline, typed)}
        aside={<ServiceIcon icon={service.icon} accent={service.accent} className="h-20 w-20 rounded-3xl [&_svg]:h-9 [&_svg]:w-9" />}
      >
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Link href={`/${typed}/contact`} className={buttonClass({ size: "lg" })}>
              {dict.services.detailCta} <ArrowSlide />
            </Link>
          </Magnetic>
          <div className="flex flex-wrap gap-1.5">
            {service.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-1 text-xs text-muted backdrop-blur"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </PageHero>

      <Section size="sm" className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-8 -z-10 rounded-[3rem] opacity-30 blur-3xl"
                style={{ backgroundColor: service.accent }}
              />
              <ParallaxMedia
                amount={6}
                className="aspect-[16/11] rounded-[2rem] border border-[var(--border)] bg-[var(--surface-2)] shadow-[var(--card-shadow)]"
              >
                <Image
                  src={service.image}
                  alt={t(service.title, typed)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  priority
                  className="object-cover object-top"
                />
              </ParallaxMedia>
              <div className="absolute -bottom-6 -right-4 hidden w-48 overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-1 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] sm:block" style={{ animation: "float-y 6s ease-in-out infinite" }}>
                <ServiceVisual slug={service.slug} accent={service.accent} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl text-pretty">
              {t(service.intro, typed)}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h2 className="eyebrow mb-8">{dict.services.included}</h2>
        </Reveal>
        <RevealGroup className="grid gap-4 sm:grid-cols-2">
          {service.points.map((p, i) => (
            <RevealItem key={p.en}>
              <Spotlight color={service.accent} className="h-full rounded-[1.5rem]">
                <div className="flex h-full items-start gap-4 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-6">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: service.accent }}
                  >
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
                    <p className="mt-1 font-display text-xl font-semibold leading-snug">{t(p, typed)}</p>
                  </div>
                </div>
              </Spotlight>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {related.length ? (
        <Section size="sm">
          <SectionHeading eyebrow={dict.services.relatedWork} title={dict.work.heading} />
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {related.slice(0, 4).map((p) => (
              <RevealItem key={p.slug}>
                <Link
                  href={`/${typed}/work/${p.slug}`}
                  data-cursor={dict.work.caseStudy}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[var(--border)]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted">{t(p.result, typed)}</p>
                    </div>
                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
      ) : null}

      <Process locale={typed} dict={dict} title={dict.services.howItWorks} />

      <Section size="sm">
        <Reveal>
          <h2 className="eyebrow mb-8">{dict.services.otherServices}</h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/${typed}/services/${s.slug}`}
              className="group inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] py-2 pl-2 pr-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            >
              <ServiceIcon icon={s.icon} accent={s.accent} className="h-9 w-9 rounded-full" />
              <span className="font-medium">{t(s.title, typed)}</span>
            </Link>
          ))}
        </div>
      </Section>

      <Faq locale={typed} dict={dict} />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
