import { Section } from "@/components/ui/Section";
import { lastUpdated } from "@/content/legal";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Last updated: {lastUpdated}</p>
        <div className="mt-8 space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-lg font-semibold">{s.h}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
