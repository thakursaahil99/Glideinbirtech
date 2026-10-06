"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card wrapper that feeds the pointer position to the `.spotlight` CSS
 * (a glowing border + soft fill that follow the cursor).
 */
export function Spotlight({
  children,
  className,
  color,
  style,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  style?: CSSProperties;
}) {
  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <div
      onPointerMove={onMove}
      className={cn("spotlight", className)}
      style={{ ...(color ? { ["--spot" as string]: color } : null), ...style }}
    >
      {children}
    </div>
  );
}
