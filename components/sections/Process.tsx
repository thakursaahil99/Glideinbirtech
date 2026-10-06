import { Section, SectionHeading } from "@/components/ui/Section";
import { StackCard } from "@/components/sections/StackCard";
import { processSteps } from "@/content/process";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

const tints = ["#ff6b35", "#ff3d7f", "#b36bff", "#6b8bff"];

export function Process({
  locale,
  dict,
  title,
}: {
  locale: Locale;
  dict: Dictionary;
  title?: string;
}) {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow={dict.process.eyebrow}
        index="04"
        title={title ?? dict.process.heading}
        subtitle={dict.process.subheading}
      />
      <div className="mt-16">
        {processSteps.map((s, i) => (
          <StackCard key={s.step} index={i} total={processSteps.length}>
            <div className="grid min-h-[22rem] gap-8 p-7 sm:p-10 md:grid-cols-[auto_1fr] md:gap-14 lg:min-h-[26rem] lg:p-14">
              <div className="flex items-start justify-between md:flex-col">
                <span
                  className="font-display text-[5.5rem] font-semibold leading-[0.8] tracking-[-0.06em] sm:text-[8rem]"
                  style={{
                    background: `linear-gradient(160deg, ${tints[i % tints.length]}, transparent 85%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {s.step}
                </span>
                <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-muted">
                  {i + 1} / {processSteps.length}
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                  {t(s.title, locale)}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                  {t(s.text, locale)}
                </p>
              </div>
            </div>
          </StackCard>
        ))}
      </div>
    </Section>
  );
}
