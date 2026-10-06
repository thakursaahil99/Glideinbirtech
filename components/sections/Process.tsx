import Image from "next/image";
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
        {processSteps.map((s, i) => {
          const tint = tints[i % tints.length];
          return (
            <StackCard key={s.step} index={i} total={processSteps.length}>
              <div className="grid gap-6 p-5 sm:p-7 lg:min-h-[28rem] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:p-8">
                <div className="grid gap-8 p-2 sm:p-3 md:grid-cols-[auto_1fr] md:gap-12 lg:p-6">
                  <div className="flex items-start justify-between md:flex-col">
                    <span
                      className="font-display text-[5.5rem] font-semibold leading-[0.8] tracking-[-0.06em] sm:text-[8rem]"
                      style={{
                        background: `linear-gradient(160deg, ${tint}, transparent 85%)`,
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
                <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-[var(--border)] lg:aspect-auto">
                  <Image
                    src={s.image}
                    alt={t(s.alt, locale)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ background: `linear-gradient(200deg, transparent 45%, ${tint}55 100%)` }}
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {s.step} · {t(s.title, locale)}
                  </span>
                </div>
              </div>
            </StackCard>
          );
        })}
      </div>
    </Section>
  );
}
