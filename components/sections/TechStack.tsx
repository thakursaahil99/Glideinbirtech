import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { stackGroups } from "@/content/stack";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function TechStack({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="stack" className="bg-[var(--surface)]/40">
      <SectionHeading
        eyebrow={dict.nav.stack}
        title={dict.stack.heading}
        subtitle={dict.stack.subheading}
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((g) => (
          <Card key={g.label.en}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              {t(g.label, locale)}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
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
        ))}
      </div>
    </Section>
  );
}
