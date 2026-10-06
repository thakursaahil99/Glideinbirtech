import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { testimonials } from "@/content/testimonials";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // repeat so the infinite strip is always wider than the viewport
  const strip = [...testimonials, ...testimonials];

  const row = (hidden: boolean) => (
    <div
      aria-hidden={hidden}
      className="flex shrink-0 gap-5 pr-5 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
      style={{ animationDuration: "55s" }}
    >
      {strip.map((item, i) => (
        <figure
          key={i}
          className="flex w-[22rem] shrink-0 flex-col rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-7 sm:w-[28rem]"
        >
          <Quote className="h-8 w-8 text-[var(--primary)]" />
          <blockquote className="mt-5 flex-1 font-display text-xl font-medium leading-snug tracking-tight">
            “{t(item.quote, locale)}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[image:var(--sunset)] font-display text-sm font-semibold text-white">
              {item.name.charAt(0)}
            </span>
            <span>
              <span className="block text-sm font-semibold">{item.name}</span>
              <span className="block text-xs text-muted">{t(item.role, locale)}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );

  return (
    <Section className="overflow-hidden">
      <SectionHeading
        eyebrow={dict.testimonials.eyebrow}
        index="06"
        title={dict.testimonials.heading}
        subtitle={dict.testimonials.subheading}
      />
      <Reveal className="mt-14">
        <div className="group -mx-5 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] md:-mx-8">
          {row(false)}
          {row(true)}
        </div>
      </Reveal>
    </Section>
  );
}
