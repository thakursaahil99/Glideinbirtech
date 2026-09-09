import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { buttonClass } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Counter } from "@/components/motion/Counter";
import { HeroVisual } from "@/components/three/HeroVisual";
import { heroStats } from "@/content/profile";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-10">
      <HeroVisual />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />

      <Container className="py-20">
        <div className="max-w-3xl">
          <Reveal>
            <Badge className="border-[var(--primary)]/30 bg-[var(--primary)]/10 text-foreground">
              {h.badge}
            </Badge>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 font-display text-[2.6rem] font-bold leading-[1.04] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {h.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
              {h.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-3">
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
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-[var(--border)] pt-8">
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
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> {h.scroll}
        </span>
      </div>
    </section>
  );
}
