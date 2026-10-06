import { Fragment } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { Counter } from "@/components/motion/Counter";
import { Magnetic } from "@/components/motion/Magnetic";
import { VelocityMarquee } from "@/components/motion/Marquee";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { HeroBackdrop, RotatingWords } from "@/components/sections/HeroBits";
import { heroStats } from "@/content/profile";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";
import { tokenize } from "@/lib/text";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;
  const words = tokenize(h.title);

  return (
    <section className="relative overflow-hidden">
      <HeroBackdrop />

      <Container className="relative pb-10 pt-32 sm:pt-40 lg:pt-44">
        {/* status row */}
        <div className="rise flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3.5 py-1.5 font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {h.available}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted">
            <MapPin className="h-3.5 w-3.5" /> {siteConfig.location}
          </span>
        </div>

        {/* headline — CSS word-mask entrance so it never waits on JS */}
        <h1 className="mt-8 max-w-[15ch] font-display text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.045em] sm:text-7xl lg:text-[7.4rem]">
          {words.map((w, i) => (
            <Fragment key={i}>
              {i > 0 ? " " : null}
              <span className="word-mask">
                <span
                  className={cn(w.accent && "serif-accent gradient-text pr-[0.06em]")}
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  {w.word}
                </span>
              </span>
            </Fragment>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p
              className="rise font-display text-xl font-medium sm:text-2xl"
              style={{ animationDelay: "520ms" }}
            >
              {h.buildPrefix} <RotatingWords words={h.rotating} />
            </p>
            <p
              className="rise mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg"
              style={{ animationDelay: "600ms" }}
            >
              {h.subtitle}
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "680ms" }}>
              <Magnetic>
                <Link href={`${base}/contact`} className={buttonClass({ size: "lg" })}>
                  {h.primary} <ArrowSlide />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href={`${base}/work`} className={buttonClass({ variant: "outline", size: "lg" })}>
                  {h.secondary}
                </Link>
              </Magnetic>
            </div>
          </div>

          <dl
            className="rise grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)]"
            style={{ animationDelay: "760ms" }}
          >
            {heroStats.map((s) => (
              <div key={s.label.en} className="bg-[var(--surface)]/85 p-5 backdrop-blur sm:p-6">
                <dt className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
                  <Counter value={s.value} />
                </dt>
                <dd className="mt-3 text-xs leading-snug text-muted">{t(s.label, locale)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <HeroShowcase />

      <div className="relative mt-4 border-y border-[var(--border)] bg-[var(--surface)]/60 py-6 backdrop-blur sm:py-8">
        <VelocityMarquee
          items={services.map((s) => t(s.title, locale))}
          className="font-display text-4xl font-semibold tracking-tight sm:text-6xl"
        />
      </div>
    </section>
  );
}
