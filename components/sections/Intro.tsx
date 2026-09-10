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
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[inset_0_1px_0_var(--hairline)]">
          <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-3">
            <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {dict.marquee.label}
            </span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
          <div className="overflow-hidden rounded-b-2xl py-5">
            <Marquee items={toolbox} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
