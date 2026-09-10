"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";
import {
  Code2,
  LayoutTemplate,
  LineChart,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/content/skills";
import { t, type Locale } from "@/lib/i18n";

const SEGMENTS = 16;

const icons: Record<string, LucideIcon> = {
  code: Code2,
  layout: LayoutTemplate,
  server: Server,
  smartphone: Smartphone,
  "line-chart": LineChart,
};

function levelLabel(level: number, locale: Locale) {
  if (level >= 90) return locale === "hi" ? "एक्सपर्ट" : "Expert";
  if (level >= 80) return locale === "hi" ? "एडवांस्ड" : "Advanced";
  if (level >= 70) return locale === "hi" ? "प्रवीण" : "Proficient";
  return locale === "hi" ? "अच्छा" : "Working";
}

export function SkillBars({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();
  const active = inView || reduce;

  return (
    <div ref={ref} className="grid gap-5 lg:grid-cols-2">
      {skillGroups.map((group, gi) => {
        const Icon = icons[group.icon] ?? Code2;
        return (
          <div key={group.group.en} className="surface-card p-6">
            <div className="flex items-center gap-2.5 border-b border-[var(--border)] pb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                {t(group.group, locale)}
              </h3>
            </div>

            <ul className="mt-5 space-y-4">
              {group.items.map((item, ii) => {
                const filled = Math.round((item.level / 100) * SEGMENTS);
                const base = gi * 60 + ii * 40;
                return (
                  <li key={item.name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="shrink-0 text-[11px] font-medium uppercase tracking-wide text-muted">
                        {levelLabel(item.level, locale)}
                      </span>
                    </div>
                    <div
                      className="mt-2 flex gap-[3px]"
                      role="meter"
                      aria-valuenow={item.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={item.name}
                    >
                      {Array.from({ length: SEGMENTS }).map((_, s) => {
                        const on = s < filled;
                        const lit = on && active;
                        return (
                          <span
                            key={s}
                            className="h-2.5 flex-1 origin-bottom rounded-[2px] transition-[opacity,transform] duration-500 ease-out"
                            style={{
                              transitionDelay: on ? `${base + s * 22}ms` : "0ms",
                              transform: !on || lit ? "scaleY(1)" : "scaleY(0.35)",
                              opacity: !on ? 1 : lit ? 1 : 0.12,
                              background: on
                                ? `color-mix(in srgb, var(--accent) ${Math.round(
                                    (s / SEGMENTS) * 100,
                                  )}%, var(--primary))`
                                : "var(--surface-2)",
                              boxShadow:
                                lit && s === filled - 1
                                  ? "0 0 10px color-mix(in srgb, var(--accent) 55%, transparent)"
                                  : undefined,
                            }}
                          />
                        );
                      })}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
