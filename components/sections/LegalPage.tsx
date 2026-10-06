import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { lastUpdated } from "@/content/legal";

export function LegalPage({
  title,
  sections,
}: {
  title: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <>
      <PageHero
        image="/about/mountains.jpg"
        eyebrow={<p className="eyebrow">Last updated · {lastUpdated}</p>}
        title={title}
      />
      <Section size="sm" className="pt-0">
        <div className="grid gap-12 lg:grid-cols-[14rem_1fr]">
          <nav className="hidden lg:block">
            <ol className="sticky top-32 space-y-2 text-sm text-muted">
              {sections.map((s, i) => (
                <li key={s.h}>
                  <a href={`#s-${i}`} className="transition-colors hover:text-foreground">
                    {String(i + 1).padStart(2, "0")} · {s.h}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="max-w-2xl divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {sections.map((s, i) => (
              <Reveal key={s.h}>
                <div id={`s-${i}`} className="scroll-mt-28 py-8">
                  <h2 className="font-display text-2xl font-semibold">
                    <span className="mr-3 text-sm text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.h}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
