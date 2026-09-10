"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

function Chip({ label }: { label: string }) {
  return (
    <span className="group/chip inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-muted shadow-[inset_0_1px_0_var(--hairline)] transition-colors hover:border-[var(--primary)] hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] transition-transform group-hover/chip:scale-150" />
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
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
      {strip("a", false)}
      {strip("b", true)}
    </div>
  );
}

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
