import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { pricingTiers } from "@/content/pricing";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Pricing({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = dict.pricing;
  return (
    <Section id="pricing">
      <SectionHeading eyebrow={p.eyebrow} title={p.heading} subtitle={p.subheading} align="center" />

      <RevealGroup className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {pricingTiers.map((tier) => (
          <RevealItem key={tier.slug} className="h-full">
            <Spotlight
              className={cn("h-full rounded-[1.75rem]", tier.popular && "conic-border lg:-my-4")}
            >
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[1.75rem] p-7 sm:p-8",
                  tier.popular
                    ? "bg-foreground text-background"
                    : "border border-[var(--border)] bg-[var(--surface)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold">{t(tier.name, locale)}</h3>
                  {tier.popular ? (
                    <span className="rounded-full bg-[image:var(--sunset)] px-3 py-1 text-xs font-semibold text-white">
                      {p.popular}
                    </span>
                  ) : null}
                </div>
                <p className={cn("mt-2 text-sm", tier.popular ? "text-background/65" : "text-muted")}>
                  {t(tier.for, locale)}
                </p>
                <p className={cn("mt-8 text-xs uppercase tracking-widest", tier.popular ? "text-background/55" : "text-muted")}>
                  {p.startingAt}
                </p>
                <p className="mt-1 font-display text-5xl font-semibold tracking-tight">{tier.price}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {tier.features.map((feat) => (
                    <li key={feat.en} className="flex gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          tier.popular ? "bg-[image:var(--sunset)] text-white" : "bg-[var(--surface-2)]",
                        )}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className={tier.popular ? "text-background/80" : "text-muted"}>
                        {t(feat, locale)}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/contact`}
                  className={buttonClass({
                    variant: tier.popular ? "accent" : "outline",
                    className: "mt-9 w-full",
                  })}
                >
                  {p.cta} <ArrowSlide />
                </Link>
              </div>
            </Spotlight>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-dashed border-[var(--border-strong)] p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="font-display text-2xl font-semibold">{p.customTitle}</h3>
            <p className="mt-2 max-w-lg text-sm text-muted">{p.customText}</p>
          </div>
          <Link href={`/${locale}/contact`} className={buttonClass({ className: "shrink-0" })}>
            {p.customCta} <ArrowSlide />
          </Link>
        </div>
      </Reveal>

      <p className="mt-6 text-center text-xs text-muted">{p.note}</p>
    </Section>
  );
}
