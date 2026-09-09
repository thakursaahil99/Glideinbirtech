import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { buttonClass } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { siteConfig } from "@/lib/site";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const h = dict.hero;

  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10" />
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge className="border-[var(--primary)]/30 bg-[var(--primary)]/10 text-foreground">
            {h.badge}
          </Badge>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            {h.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg text-pretty">
            {h.subtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`${base}/contact`} className={buttonClass({ size: "lg" })}>
              {h.primary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`${base}#work`}
              className={buttonClass({ variant: "outline", size: "lg" })}
            >
              {h.secondary}
            </Link>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted">
            <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
            {h.trust} {t(siteConfig.responseTime, locale)}
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-3">
            {h.stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="font-display text-2xl font-bold leading-[1.2] gradient-text">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted text-pretty">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-black/5 sm:p-6">
          <p className="mb-1 font-display text-lg font-semibold">{dict.finalCta.heading}</p>
          <p className="mb-4 text-sm text-muted">{t(siteConfig.responseTime, locale)}</p>
          <LeadForm locale={locale} dict={dict} compact />
        </div>
      </Container>
    </section>
  );
}
