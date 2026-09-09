import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Tilt } from "@/components/motion/Tilt";
import { testimonials } from "@/content/testimonials";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section>
      <SectionHeading
        eyebrow={dict.testimonials.eyebrow}
        title={dict.testimonials.heading}
        subtitle={dict.testimonials.subheading}
      />
      <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <RevealItem key={i} className="h-full">
            <Tilt max={5} className="h-full">
              <Card hover className="flex h-full flex-col">
                <Quote className="h-7 w-7 text-[var(--primary)]/40" />
                <p className="mt-4 flex-1 leading-relaxed">{t(item.quote, locale)}</p>
                <div className="mt-5 border-t border-[var(--border)] pt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-muted">{t(item.role, locale)}</p>
                </div>
              </Card>
            </Tilt>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
