"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type Photo = { src: string; alt: string };

/**
 * Three columns of photos that drift at different speeds while scrolling.
 * Collapses to a simple two-column grid on small screens.
 */
export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [140, -40]);
  const speeds = [y1, y2, y3];

  const cols: Photo[][] = [[], [], []];
  photos.forEach((p, i) => cols[i % 3].push(p));

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
      {cols.map((col, ci) => (
        <motion.div
          key={ci}
          style={reduce ? undefined : { y: speeds[ci] }}
          className={ci === 2 ? "hidden flex-col gap-4 md:flex md:gap-6" : "flex flex-col gap-4 md:gap-6"}
        >
          {col.map((p, i) => (
            <div
              key={p.src}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-[var(--border)] ${
                (ci + i) % 2 ? "aspect-[4/5]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
