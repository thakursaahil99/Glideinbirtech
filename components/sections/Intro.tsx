import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ArrowSlide } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { ScrollText } from "@/components/motion/ScrollText";
import { Marquee } from "@/components/motion/Marquee";
import { toolbox } from "@/content/skills";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Intro({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section size="md">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="text-foreground/50">(01)</span>
              {dict.intro.eyebrow}
            </p>
          </Reveal>
          <SplitText
            text={dict.intro.heading}
            className="font-display text-4xl font-semibold leading-[1] sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={0.2}>
            <Link
              href={`/${locale}/about`}
              className="group mt-8 inline-flex items-center gap-2 border-b border-[var(--border-strong)] pb-1 text-sm font-medium transition-colors hover:border-[var(--primary)]"
            >
              {dict.intro.cta} <ArrowSlide />
            </Link>
          </Reveal>
        </div>

        <ScrollText
          text={dict.intro.body}
          className="font-display text-[1.7rem] font-medium leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.6rem]"
        />
      </div>

      <Reveal className="mt-20">
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            {dict.marquee.label}
          </span>
          <span className="h-px flex-1 bg-[var(--border)]" />
        </div>
        <div className="mt-6">
          <Marquee items={toolbox} />
        </div>
      </Reveal>
    </Section>
  );
}
