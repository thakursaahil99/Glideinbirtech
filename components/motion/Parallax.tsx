"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/** Drifts its content against the scroll by up to `offset` px. */
export function Parallax({
  children,
  className,
  offset = 60,
}: {
  children: ReactNode;
  className?: string;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y: reduce ? 0 : y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Image parallax: the inner layer is oversized so movement never reveals edges. */
export function ParallaxMedia({
  children,
  className,
  amount = 10,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        style={{ y: reduce ? 0 : y, scale: reduce ? 1 : 1 + (amount * 2.2) / 100 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
