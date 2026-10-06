import {
  Cloud,
  Code2,
  CreditCard,
  Database,
  LayoutTemplate,
  LineChart,
  Server,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { stackGroups } from "@/content/stack";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  "shopping-bag": ShoppingBag,
  smartphone: Smartphone,
  database: Database,
  cloud: Cloud,
  "credit-card": CreditCard,
  "line-chart": LineChart,
};

// bento spans for a 6-col grid at lg
const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-6",
];

export function TechStack({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="stack" tone="raised" className="rounded-[2.5rem]">
      <SectionHeading
        eyebrow={dict.stack.eyebrow}
        index="05"
        title={dict.stack.heading}
        subtitle={dict.stack.subheading}
      />
      <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6" stagger={0.05}>
        {stackGroups.map((g, i) => {
          const Icon = icons[g.icon] ?? Code2;
          return (
            <RevealItem key={g.label.en} className={cn("h-full", spans[i])}>
              <Spotlight className="h-full rounded-[1.5rem]">
                <div className="flex h-full flex-col rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-semibold">{t(g.label, locale)}</h3>
                    <span className="ml-auto rounded-full border border-[var(--border)] px-2 py-0.5 text-xs tabular-nums text-muted">
                      {g.items.length}
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[13px] text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
