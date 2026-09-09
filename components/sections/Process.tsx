import { Section, SectionHeading } from "@/components/ui/Section";
import { processSteps } from "@/content/process";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Process({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow={dict.nav.process}
        title={dict.process.heading}
        subtitle={dict.process.subheading}
      />
      <ol className="mt-12 grid gap-6 md:grid-cols-5">
        {processSteps.map((s, i) => (
          <li key={s.step} className="relative">
            <div className="flex items-center gap-3 md:block">
              <span className="font-display text-sm font-bold text-[var(--accent)]">
                {s.step}
              </span>
              {i < processSteps.length - 1 ? (
                <span className="hidden h-px flex-1 bg-[var(--border)] md:mt-3 md:block" />
              ) : null}
            </div>
            <h3 className="mt-3 font-display text-base font-semibold">{t(s.title, locale)}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(s.text, locale)}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
