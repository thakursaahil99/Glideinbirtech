import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { toolbox } from "@/content/skills";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Intro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section size="md" tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-balance sm:text-3xl lg:text-[2.5rem]">
            {dict.intro.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted text-pretty">{dict.intro.body}</p>
          <Link
            href={`/${locale}/about`}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:gap-2.5"
          >
            {dict.intro.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] py-6 shadow-[inset_0_1px_0_var(--hairline)]">
          <span className="absolute left-4 top-0 -translate-y-1/2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)]">
            {dict.marquee.label}
          </span>
          <Marquee items={toolbox} />
        </div>
      </Reveal>
    </Section>
  );
}
