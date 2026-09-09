"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = 40,
}: {
  items: string[];
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]",
        className,
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-10 pr-10",
          !reduce && "animate-marquee group-hover:[animation-play-state:paused]",
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap text-sm font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      {!reduce && (
        <div
          aria-hidden
          className="animate-marquee flex shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
        >
          {row.map((item, i) => (
            <span
              key={`${item}-b-${i}`}
              className="whitespace-nowrap text-sm font-medium text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
