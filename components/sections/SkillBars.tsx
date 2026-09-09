"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { skillGroups } from "@/content/skills";
import { t, type Locale } from "@/lib/i18n";

export function SkillBars({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.group.en}>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            {t(group.group, locale)}
          </h3>
          <ul className="mt-4 space-y-3.5">
            {group.items.map((item) => (
              <li key={item.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xs text-muted">{item.level}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--surface-2)]">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--primary),var(--accent))]"
                    initial={{ width: reduce ? `${item.level}%` : 0 }}
                    animate={inView ? { width: `${item.level}%` } : undefined}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
