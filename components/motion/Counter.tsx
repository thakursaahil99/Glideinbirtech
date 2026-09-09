"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

/**
 * Counts up to a target when scrolled into view. `value` may contain a number
 * with an optional prefix/suffix, e.g. "20+", "4h", "₹15,000".
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\D*)([\d,]+)(.*)$/);

  useEffect(() => {
    // display already starts at `value`; only the count-up needs an effect
    if (!match || reduce || !inView) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits.replace(/,/g, ""));
    const dur = 1100;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const n = Math.round(target * eased);
      setDisplay(`${prefix}${n.toLocaleString("en-IN")}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, value, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
