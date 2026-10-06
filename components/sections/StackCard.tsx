"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * Sticky card that scales back and dims as the next card slides over it,
 * producing a stacked-deck effect.
 */
export function StackCard({
  children,
  index,
  total,
}: {
  children: ReactNode;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const last = index === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.9]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, last ? 0 : 0.5]);

  return (
    <div
      ref={ref}
      className="sticky mb-6 last:mb-0"
      style={{ top: `calc(7rem + ${index * 1.25}rem)` }}
    >
      <motion.div
        style={reduce ? undefined : { scale, transformOrigin: "50% 0%" }}
        className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.35)]"
      >
        <div className="hero-glow pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative">{children}</div>
        {reduce ? null : (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[var(--background)]"
            style={{ opacity: dim }}
          />
        )}
      </motion.div>
    </div>
  );
}
