"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/** Cycles through words with a vertical mask swap. */
export function RotatingWords({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          className="serif-accent gradient-text inline-block whitespace-nowrap pr-1 text-[1.15em]"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Aurora blobs + grid, with a soft light that follows the pointer. */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--hx", `${e.clientX - r.left}px`);
        el.style.setProperty("--hy", `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-drift absolute -left-[10%] -top-[20%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_65%)] blur-3xl" />
      <div className="animate-drift absolute -right-[15%] top-[5%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_65%)] blur-3xl [animation-delay:-10s]" />
      <div className="animate-drift absolute left-[30%] top-[40%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--rose)_22%,transparent),transparent_65%)] blur-3xl [animation-delay:-5s]" />
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at var(--hx, 70%) var(--hy, 30%), color-mix(in srgb, var(--primary) 9%, transparent), transparent 60%)",
        }}
      />
      {/* fade into the page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </div>
  );
}
