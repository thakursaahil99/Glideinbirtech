"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { Container } from "@/components/ui/Section";

/**
 * Desktop: a tall section that pins its row and translates it sideways as you
 * scroll down. Mobile / reduced motion: a plain vertical stack.
 */
export function HorizontalScroll({
  intro,
  outro,
  hint,
  children,
}: {
  intro: ReactNode;
  outro?: ReactNode;
  hint?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setWide(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const pinned = wide && !reduce;

  // the track only exists in pinned mode, so measure once it has mounted
  useEffect(() => {
    const el = track.current;
    if (!pinned || !el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);
  const bar = useTransform(smooth, [0, 1], ["0%", "100%"]);

  const items = Children.toArray(children);

  if (!pinned) {
    return (
      <div ref={ref}>
      <Container>
        {intro}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {items.map((child, i) => (
            <div key={i}>{child}</div>
          ))}
          {outro ? <div className="sm:col-span-2 lg:col-span-1">{outro}</div> : null}
        </div>
      </Container>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ height: `calc(100vh + ${distance}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x }} className="flex w-max items-center gap-8 pl-[max(2rem,calc((100vw-80rem)/2+2rem))] pr-16">
          <div className="w-[34rem] shrink-0">{intro}</div>
          {items.map((child, i) => (
            <div key={i} className="w-[44vw] max-w-[46rem] shrink-0">
              {child}
            </div>
          ))}
          {outro ? <div className="w-[22rem] shrink-0">{outro}</div> : null}
        </motion.div>

        <div className="mx-auto mt-10 flex w-full max-w-7xl items-center gap-4 container-px">
          {hint ? (
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              {hint}
            </span>
          ) : null}
          <div className="relative h-px flex-1 bg-[var(--border)]">
            <motion.div className="absolute inset-y-0 left-0 bg-[image:var(--sunset)]" style={{ width: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}
