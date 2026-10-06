"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  slug: string;
  href: string;
  index: string;
  title: string;
  tagline: string;
  accent: string;
  image: string;
  visual: ReactNode;
};

/**
 * Editorial service index: big rows that fill with the service colour on
 * hover, and a preview card that trails the cursor (desktop).
 */
export function ServiceList({
  items,
  viewLabel,
  className,
}: {
  items: Item[];
  viewLabel: string;
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });

  function onMove(e: React.PointerEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onPointerMove={onMove}
      onPointerLeave={() => setActive(null)}
    >
      <ul className="border-t border-[var(--border)]">
        {items.map((it, i) => (
          <motion.li
            key={it.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-[var(--border)]"
          >
            <Link
              href={it.href}
              data-cursor={viewLabel}
              onPointerEnter={() => setActive(i)}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-4 overflow-hidden py-6 sm:gap-8 sm:py-8"
            >
              {/* colour wipe */}
              <span
                aria-hidden
                className="absolute inset-0 -z-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                style={{ background: `color-mix(in srgb, ${it.accent} 10%, transparent)` }}
              />
              <span className="relative flex items-center gap-4 pl-2 sm:pl-4">
                <span className="font-display text-sm font-medium text-muted tabular-nums">{it.index}</span>
                {/* touch screens have no hover preview, so show a thumbnail inline */}
                <span className="relative block h-11 w-14 shrink-0 overflow-hidden rounded-lg border border-[var(--border)] sm:h-14 sm:w-20 sm:rounded-xl lg:hidden">
                  <Image src={it.image} alt="" fill sizes="80px" className="object-cover object-top" />
                </span>
              </span>
              <span className="relative min-w-0">
                <span className="block font-display text-2xl font-semibold leading-tight tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:text-4xl lg:text-5xl">
                  {it.title}
                </span>
                <span className="mt-2 block max-w-xl text-sm text-muted transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:text-base">
                  {it.tagline}
                </span>
              </span>
              <span
                className="relative mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:text-white sm:mr-4 sm:h-14 sm:w-14"
                style={{ ["--a" as string]: it.accent }}
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-[var(--a)] transition-transform duration-500 group-hover:scale-100" />
                <ArrowUpRight className="relative h-5 w-5" />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* cursor-trailing preview */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 hidden w-[400px] lg:block"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-115%" }}
      >
        <AnimatePresence>
          {active !== null ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.6, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {items[active].visual}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
