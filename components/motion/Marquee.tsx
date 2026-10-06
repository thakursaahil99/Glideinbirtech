"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { cn } from "@/lib/utils";

function Chip({ label }: { label: string }) {
  return (
    <span className="group/chip inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-muted shadow-[inset_0_1px_0_var(--hairline)] transition-colors hover:border-[var(--primary)] hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-[image:var(--sunset)] transition-transform group-hover/chip:scale-150" />
      {label}
    </span>
  );
}

function Track({
  items,
  speed,
  reverse,
}: {
  items: string[];
  speed: number;
  reverse?: boolean;
}) {
  const strip = (k: string, hidden: boolean) => (
    <div
      key={k}
      aria-hidden={hidden}
      className="flex shrink-0 items-center gap-3 pr-3 animate-marquee group-hover:[animation-play-state:paused]"
      style={{
        animationDuration: `${speed}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {items.map((item, i) => (
        <Chip key={`${item}-${i}`} label={item} />
      ))}
    </div>
  );

  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
      {strip("a", false)}
      {strip("b", true)}
    </div>
  );
}

/** Two counter-scrolling rows of chips. */
export function Marquee({
  items,
  className,
  speed = 60,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const half = Math.ceil(items.length / 2);
  const rowA = items.slice(0, half);
  const rowB = items.slice(half);

  if (reduce) {
    return (
      <div className={cn("flex flex-wrap gap-2", className)}>
        {items.map((item) => (
          <Chip key={item} label={item} />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <Track items={rowA} speed={speed} />
      <Track items={rowB} speed={speed * 1.2} reverse />
    </div>
  );
}

function wrap(min: number, max: number, v: number) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

/**
 * Oversized text band that drifts on its own and speeds up / reverses with
 * scroll velocity.
 */
export function VelocityMarquee({
  items,
  baseVelocity = -2,
  className,
}: {
  items: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const dir = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * baseVelocity * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = -1;
    else if (f > 0) dir.current = 1;
    move += dir.current * move * f;
    baseX.set(baseX.get() + move);
  });

  const row = (
    <span className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className={i % 2 ? "serif-accent gradient-text px-2" : "px-2"}>{item}</span>
          <span className="mx-6 inline-block h-3 w-3 rotate-45 rounded-[3px] bg-[image:var(--sunset)] sm:mx-10 sm:h-4 sm:w-4" />
        </span>
      ))}
    </span>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)} aria-hidden>
      <motion.div className="flex w-max" style={{ x }}>
        {row}
        {row}
        {row}
        {row}
      </motion.div>
    </div>
  );
}
