"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** The running Lenis instance, if smooth scrolling is active. */
export function getLenis() {
  return instance;
}

/**
 * Inertial smooth scrolling for wheel/trackpad. Native scrolling is kept for
 * touch and for anyone who prefers reduced motion.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      anchors: { offset: -96 },
    });
    instance = lenis;
    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  // new route → start at the top without easing through the old page
  useEffect(() => {
    instance?.scrollTo(0, { immediate: true, force: true });
  }, [pathname]);

  return null;
}
