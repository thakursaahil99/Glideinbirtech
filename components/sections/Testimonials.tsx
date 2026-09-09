import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { testimonials } from "@/content/testimonials";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section className="bg-[var(--surface)]/40">
      <SectionHeading
        title={dict.testimonials.heading}
        subtitle={dict.testimonials.subheading}
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Card key={i} className="flex flex-col">
            <Quote className="h-6 w-6 text-[var(--primary)]/40" />
            <p className="mt-3 flex-1 text-sm leading-relaxed">{t(item.quote, locale)}</p>
            <div className="mt-4 border-t border-[var(--border)] pt-3">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-muted">{t(item.role, locale)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
