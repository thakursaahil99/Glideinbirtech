import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Reveal } from "@/components/motion/Reveal";
import { pricingTiers } from "@/content/pricing";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Pricing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = dict.pricing;
  return (
    <Section id="pricing">
      <SectionHeading eyebrow={p.eyebrow} title={p.heading} subtitle={p.subheading} />

      <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <RevealItem key={tier.slug} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-2xl border p-6 sm:p-7",
                tier.popular
                  ? "border-[var(--primary)] bg-[var(--surface)] shadow-lg shadow-[var(--glow-a)]"
                  : "border-[var(--border)] bg-[var(--surface)]",
              )}
            >
              {tier.popular ? (
                <span className="absolute -top-3 left-6 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-medium text-[var(--primary-foreground)]">
                  {p.popular}
                </span>
              ) : null}
              <h3 className="font-display text-xl font-semibold">{t(tier.name, locale)}</h3>
              <p className="mt-1 text-sm text-muted">{t(tier.for, locale)}</p>
              <p className="mt-5 text-sm text-muted">{p.startingAt}</p>
              <p className="font-display text-3xl font-bold sm:text-4xl">{tier.price}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {tier.features.map((feat) => (
                  <li key={feat.en} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    <span className="text-muted">{t(feat, locale)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/contact`}
                className={buttonClass({
                  variant: tier.popular ? "primary" : "outline",
                  className: "mt-7 w-full",
                })}
              >
                {p.cta}
              </Link>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-8">
        <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/60 p-7 text-center">
          <h3 className="font-display text-xl font-semibold">{p.customTitle}</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted">{p.customText}</p>
          <Link
            href={`/${locale}/contact`}
            className={buttonClass({ variant: "accent", className: "mt-5" })}
          >
            {p.customCta}
          </Link>
        </div>
      </Reveal>

      <p className="mt-6 text-center text-xs text-muted">{p.note}</p>
    </Section>
  );
}
