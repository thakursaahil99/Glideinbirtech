"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Dot + trailing ring cursor for fine pointers. Grows over interactive
 * elements; elements with `data-cursor="Label"` show that label in the ring.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 320, damping: 28, mass: 0.5 });
  const last = useRef<Element | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    // Pointer capability is client-only, so the cursor mounts after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      if (target === last.current) return;
      last.current = target;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a, button, [role='button'], label, summary, select");
      setLabel(labelled?.dataset.cursor ?? null);
      setHover(Boolean(labelled || interactive));
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 92 : hover ? 54 : 32;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10000] flex items-center justify-center rounded-full border text-[11px] font-semibold uppercase tracking-widest text-white"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: label
            ? "transparent"
            : "color-mix(in srgb, var(--foreground) 40%, transparent)",
          background: label
            ? "var(--sunset)"
            : hover
              ? "color-mix(in srgb, var(--primary) 14%, transparent)"
              : "transparent",
          opacity: visible ? 1 : 0,
        }}
        animate={{ width: size, height: size, scale: down ? 0.85 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        {label}
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-1.5 w-1.5 rounded-full bg-[var(--primary)]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible && !label ? 1 : 0,
        }}
      />
    </>
  );
}
