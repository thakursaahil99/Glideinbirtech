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
import { Counter } from "@/components/motion/Counter";
import { skillGroups } from "@/content/skills";
import { t, type Locale } from "@/lib/i18n";

const SEGMENTS = 18;

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
          <div
            key={group.group.en}
            className="surface-card relative overflow-hidden p-6"
          >
            {/* accent top line */}
            <span className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--accent),transparent)]" />

            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/12 text-[var(--primary)]">
                <Icon className="h-4 w-4" />
                <span className="absolute inset-0 rounded-xl shadow-[0_0_20px_-4px_var(--glow-a)]" />
              </span>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                {t(group.group, locale)}
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {group.items.map((item, ii) => {
                const filled = Math.round((item.level / 100) * SEGMENTS);
                const base = gi * 40 + ii * 60;
                return (
                  <li
                    key={item.name}
                    className="group/skill -mx-2 rounded-lg px-2 py-2 transition-colors hover:bg-[var(--surface-2)]/70"
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="rounded-md bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                          {levelLabel(item.level, locale)}
                        </span>
                      </div>
                      <span className="font-display text-base font-bold leading-none gradient-text transition-transform duration-200 group-hover/skill:scale-110">
                        <Counter value={`${item.level}%`} />
                      </span>
                    </div>

                    <div
                      className="relative mt-2 flex gap-[3px] rounded-full"
                      role="meter"
                      aria-valuenow={item.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={item.name}
                    >
                      {/* glow behind the filled run */}
                      <span
                        aria-hidden
                        className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-700 ease-out"
                        style={{
                          width: active ? `${(filled / SEGMENTS) * 100}%` : "0%",
                          background: "var(--primary)",
                          filter: "blur(9px)",
                          opacity: 0.4,
                        }}
                      />
                      {Array.from({ length: SEGMENTS }).map((_, s) => {
                        const on = s < filled;
                        const lit = on && active;
                        return (
                          <span
                            key={s}
                            className="relative z-10 h-3 flex-1 origin-bottom rounded-[3px] transition-[opacity,transform] duration-500 ease-out"
                            style={{
                              transitionDelay: on ? `${base + s * 26}ms` : "0ms",
                              transform: !on || lit ? "scaleY(1)" : "scaleY(0.3)",
                              opacity: !on ? 1 : lit ? 1 : 0.1,
                              background: on
                                ? `color-mix(in srgb, var(--accent) ${Math.round(
                                    (s / SEGMENTS) * 100,
                                  )}%, var(--primary))`
                                : "var(--surface-2)",
                              boxShadow:
                                lit && s === filled - 1
                                  ? "0 0 14px 1px color-mix(in srgb, var(--accent) 70%, transparent)"
                                  : lit
                                    ? "0 0 6px -2px color-mix(in srgb, var(--primary) 60%, transparent)"
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
