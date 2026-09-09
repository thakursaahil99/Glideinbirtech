"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight pointer tilt. No library, no per-frame React state — writes CSS
 * custom properties directly on the node, rAF-throttled. Disabled for touch and
 * reduced-motion via CSS (see the media queries in the className).
 */
export function Tilt({
  children,
  className,
  max = 7,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  function onMove(e: React.PointerEvent) {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(0.5 - py) * max}deg`);
      el.style.setProperty("--ry", `${(px - 0.5) * max}deg`);
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
    });
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn(
        "group/tilt relative [transform-style:preserve-3d] [perspective:900px]",
        "transition-transform duration-200 ease-out will-change-transform",
        "[transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))]",
        "motion-reduce:!transform-none",
        className,
      )}
    >
      {children}
      {glare ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(340px circle at var(--gx,50%) var(--gy,50%), color-mix(in srgb, var(--primary) 22%, transparent), transparent 60%)",
          }}
        />
      ) : null}
    </div>
  );
}
