import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { stackGroups } from "@/content/stack";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function TechStack({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow={dict.stack.eyebrow}
        title={dict.stack.heading}
        subtitle={dict.stack.subheading}
      />
      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((g) => (
          <RevealItem key={g.label.en} className="h-full">
            <Tilt max={5} className="h-full">
              <Card hover className="h-full">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
                  {t(g.label, locale)}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-sm text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Tilt>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
