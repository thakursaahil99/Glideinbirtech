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
import { Tilt } from "@/components/motion/Tilt";
import { stackGroups } from "@/content/stack";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

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

export function TechStack({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="stack">
      <SectionHeading
        eyebrow={dict.stack.eyebrow}
        title={dict.stack.heading}
        subtitle={dict.stack.subheading}
      />
      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((g) => {
          const Icon = icons[g.icon] ?? Code2;
          return (
            <RevealItem key={g.label.en} className="h-full">
              <Tilt max={4} className="h-full">
                <div className="surface-card card-hover flex h-full flex-col p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                      {t(g.label, locale)}
                    </h3>
                    <span className="ml-auto text-xs tabular-nums text-muted">
                      {g.items.length}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-[13px] text-muted transition-colors hover:border-[var(--primary)]/50 hover:text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
