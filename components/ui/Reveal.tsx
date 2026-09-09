"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Progressive-enhancement scroll reveal. Content is fully visible by default
 * (SSR + no-JS + reduced-motion). After mount, elements still below the fold
 * fade/slide in when scrolled into view; anything already on screen stays put.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) return; // already visible — leave alone

    setState("hidden");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        state !== "static" && "transition-all duration-500 ease-out motion-reduce:transition-none",
        state === "hidden" && "translate-y-4 opacity-0",
        className,
      )}
      style={state === "shown" && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
