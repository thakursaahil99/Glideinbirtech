import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { processSteps } from "@/content/process";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Process({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="process" tone="raised">
      <SectionHeading
        eyebrow={dict.process.eyebrow}
        title={dict.process.heading}
        subtitle={dict.process.subheading}
      />
      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {processSteps.map((s) => (
          <RevealItem key={s.step} className="h-full">
            <Tilt max={4} className="h-full">
              <Card hover className="flex h-full gap-5 bg-[var(--background)]">
                <span className="font-display text-4xl font-bold text-[var(--primary)]/25">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold">{t(s.title, locale)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted text-pretty">
                    {t(s.text, locale)}
                  </p>
                </div>
              </Card>
            </Tilt>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
