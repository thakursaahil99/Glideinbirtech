"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts up to a target when scrolled into view. `value` may carry a prefix
 * and/or suffix, e.g. "20+", "4h", "₹15,000". If it has no number it renders
 * unchanged.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)([\d,]+)(.*)$/);
    if (!m) return null;
    return { prefix: m[1], target: Number(m[2].replace(/,/g, "")), suffix: m[3] };
  }, [value]);

  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    if (!parsed || reduce || !inView) return;
    const dur = 1000;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(parsed.target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [parsed, reduce, inView]);

  let text = value;
  if (parsed) {
    const shown = n === null || reduce || !inView ? parsed.target : n;
    text = `${parsed.prefix}${shown.toLocaleString("en-IN")}${parsed.suffix}`;
  }

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
