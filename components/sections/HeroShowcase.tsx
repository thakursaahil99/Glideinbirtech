"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Star, TrendingUp, Zap } from "lucide-react";
import { Container } from "@/components/ui/Section";

function FloatChip({
  icon,
  value,
  label,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`absolute z-20 hidden sm:block ${className ?? ""}`}
      style={{ animation: `float-y 6s ease-in-out ${delay}s infinite` }}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)]/90 px-4 py-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[image:var(--sunset)] text-white">
          {icon}
        </span>
        <span>
          <span className="block font-display text-base font-semibold leading-none">{value}</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-muted">
            {label}
          </span>
        </span>
      </div>
    </div>
  );
}

/**
 * Wide browser "screen" that starts tilted back in 3D and flattens / scales
 * up as it scrolls into view, with chips floating at different depths.
 */
export function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const rotateX = useTransform(p, [0, 1], [28, 0]);
  const scale = useTransform(p, [0, 1], [0.86, 1]);
  const y = useTransform(p, [0, 1], [60, 0]);
  const chipsY = useTransform(p, [0, 1], [120, 0]);

  return (
    <Container className="relative pb-16 pt-6 sm:pb-24">
      <div ref={ref} className="relative [perspective:1600px]">
        <motion.div
          style={reduce ? undefined : { rotateX, scale, y, transformOrigin: "50% 0%" }}
          className="relative"
        >
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[image:var(--sunset)] opacity-25 blur-3xl" />
          <div className="overflow-hidden rounded-[1.6rem] border border-[var(--border-strong)] bg-[var(--surface)] p-1.5 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)] sm:rounded-[2rem] sm:p-2">
            <div className="flex items-center gap-1.5 px-3 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="mx-auto hidden h-6 w-1/3 items-center justify-center rounded-full bg-[var(--surface-2)] text-[11px] text-muted sm:flex">
                glideinbir.vercel.app
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] sm:aspect-[16/8.5] sm:rounded-[1.5rem]">
              <Image
                src="/work/glideinbir.webp"
                alt="Glide in Bir — booking platform built by Glideinbir Tech"
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <motion.div style={reduce ? undefined : { y: chipsY }} className="pointer-events-none absolute inset-0">
          <FloatChip
            icon={<Zap className="h-4 w-4" />}
            value="10,000+"
            label="flights booked"
            className="-left-4 top-[22%] lg:-left-10"
          />
          <FloatChip
            icon={<Star className="h-4 w-4" />}
            value="98 / 100"
            label="Lighthouse"
            className="-right-4 top-[12%] lg:-right-10"
            delay={1.2}
          />
          <FloatChip
            icon={<TrendingUp className="h-4 w-4" />}
            value="500+"
            label="certifications tracked"
            className="bottom-[10%] right-[12%]"
            delay={2.2}
          />
        </motion.div>
      </div>
    </Container>
  );
}
