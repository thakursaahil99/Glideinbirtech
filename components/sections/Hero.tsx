import Link from "next/link";
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { HeroShowcase } from "@/components/sections/HeroShowcase";
import { heroStats } from "@/content/profile";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_65%)] blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_65%)] blur-3xl" />
      </div>
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <Container className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <Reveal>
            <Badge className="border-[var(--primary)]/30 bg-[var(--primary)]/10 text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent)]" />
              {h.badge}
            </Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.5rem] font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.75rem]">
              {h.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
              {h.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
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
          </Reveal>

          <Reveal delay={0.26}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--border)] pt-8">
              {heroStats.map((s) => (
                <div key={s.label.en} className="min-w-0">
                  <dt className="font-display text-2xl font-bold leading-[1.2] gradient-text sm:text-3xl">
                    <Counter value={s.value} />
                  </dt>
                  <dd className="mt-1.5 text-xs leading-snug text-muted text-pretty">
                    {t(s.label, locale)}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.2} direction="left">
          <HeroShowcase />
        </Reveal>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center sm:flex">
        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> {h.scroll}
        </span>
      </div>
    </section>
  );
}
