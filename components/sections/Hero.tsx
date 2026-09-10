import Link from "next/link";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { buttonClass } from "@/components/ui/Button";
import { Counter } from "@/components/motion/Counter";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { heroStats } from "@/content/profile";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;

  return (
    <section className="relative -mt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-drift absolute left-[-12%] top-[-14%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_65%)] blur-3xl" />
        <div className="animate-drift absolute right-[-12%] top-[16%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_65%)] blur-3xl [animation-delay:-9s]" />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-25" />

      <Container className="grid items-center gap-14 pb-16 pt-28 sm:pb-24 sm:pt-36 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="rise">
            <Badge className="border-[var(--primary)]/30 bg-[var(--primary)]/10 text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              {h.badge}
            </Badge>
          </div>

          <h1 className="rise mt-6 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.75rem] [animation-delay:60ms]">
            {h.title}
          </h1>

          <p className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty [animation-delay:120ms]">
            {h.subtitle}
          </p>

          <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:180ms]">
            <Link href={`${base}/contact`} className={buttonClass({ size: "lg" })}>
              {h.primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`${base}/work`}
              className={buttonClass({ variant: "outline", size: "lg" })}
            >
              {h.secondary}
            </Link>
          </div>

          <dl className="rise mt-12 flex max-w-lg divide-x divide-[var(--border)] border-t border-[var(--border)] pt-7 [animation-delay:260ms]">
            {heroStats.map((s) => (
              <div key={s.label.en} className="flex-1 px-4 first:pl-0">
                <dt className="font-display text-3xl font-bold leading-none gradient-text sm:text-[2.25rem]">
                  <Counter value={s.value} />
                </dt>
                <dd className="mt-2 text-xs leading-snug text-muted">{t(s.label, locale)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise [animation-delay:220ms]">
          <HeroShowcase />
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex">
        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> {h.scroll}
        </span>
      </div>
    </section>
  );
}
