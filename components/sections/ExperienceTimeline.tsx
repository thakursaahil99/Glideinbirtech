"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { experience } from "@/content/experience";
import { t, type Locale } from "@/lib/i18n";

/** Timeline whose spine draws itself as you scroll. */
export function ExperienceTimeline({ locale }: { locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative pl-10 sm:pl-14">
      <span className="absolute bottom-0 left-[11px] top-0 w-px bg-[var(--border)] sm:left-[15px]" />
      <motion.span
        className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-[image:var(--sunset)] sm:left-[15px]"
        style={{ scaleY }}
      />
      <RevealGroup className="space-y-12">
        {experience.map((role) => (
          <RevealItem key={role.period + role.company}>
            <div className="relative grid gap-3 sm:grid-cols-[11rem_1fr] sm:gap-10">
              <span className="absolute -left-10 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--background)] sm:-left-14 sm:h-8 sm:w-8">
                <span className="h-2 w-2 rounded-full bg-[image:var(--sunset)]" />
              </span>
              <p className="pt-1.5 text-sm font-medium text-muted tabular-nums">{role.period}</p>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {t(role.role, locale)}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--primary)]">{role.company}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted text-pretty">
                  {t(role.description, locale)}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
