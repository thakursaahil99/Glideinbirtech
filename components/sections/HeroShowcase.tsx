"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, Zap } from "lucide-react";

function Chip({
  icon,
  value,
  label,
  className,
  depth = 60,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  depth?: number;
}) {
  return (
    <div
      className={`absolute z-20 ${className ?? ""}`}
      style={{
        transform: `translate3d(calc(var(--ry,0)*${(depth / 8).toFixed(1)}px), calc(var(--rx,0)*${(-depth / 8).toFixed(1)}px), ${depth}px)`,
      }}
    >
      <div className="flex items-center gap-2.5 rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-3 shadow-[inset_0_1px_0_var(--hairline),0_24px_50px_-16px_rgba(0,0,0,0.6)] [animation:float-y_6s_ease-in-out_infinite] motion-reduce:animate-none">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--accent))] text-white">
          {icon}
        </span>
        <span>
          <span className="block font-display text-sm font-bold leading-none">{value}</span>
          <span className="mt-1 block text-[10px] font-medium uppercase tracking-wide text-muted">
            {label}
          </span>
        </span>
      </div>
    </div>
  );
}

export function HeroShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  function onMove(e: React.PointerEvent) {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--ry", `${(px * 14).toFixed(2)}`);
      el.style.setProperty("--rx", `${(-py * 10).toFixed(2)}`);
      el.style.setProperty("--gx", `${(px * 80 + 50).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(py * 80 + 50).toFixed(1)}%`);
    });
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.setProperty("--ry", "0");
    el.style.setProperty("--rx", "0");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className="relative mx-auto hidden w-full max-w-[500px] px-8 [perspective:1500px] lg:block"
    >
      {/* glow that tracks the cursor */}
      <div
        className="absolute -inset-8 -z-10 rounded-[3rem] blur-2xl transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(52% 52% at var(--gx,58%) var(--gy,42%), var(--glow-a), transparent 72%)",
        }}
      />

      {/* resting isometric pose + pointer offset */}
      <div
        className="relative transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d] motion-reduce:!rotate-0"
        style={{
          transform:
            "rotateX(calc(4deg + var(--rx,0)*1deg)) rotateY(calc(-9deg + var(--ry,0)*1deg))",
        }}
      >
        {/* main browser */}
        <div
          className="overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] shadow-[inset_0_1px_0_var(--hairline),0_50px_90px_-30px_rgba(0,0,0,0.6)]"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 h-4 flex-1 rounded bg-[var(--background)]" />
          </div>
          <div className="relative aspect-[16/11]">
            <Image
              src="/work/glideinbir.webp"
              alt="Glide in Bir — booking platform built by Glideinbir Tech"
              fill
              sizes="500px"
              priority
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* secondary browser, behind-right */}
        <div
          className="absolute -right-10 top-6 w-[44%] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/50"
          style={{ transform: "translateZ(4px) rotate(6deg)" }}
        >
          <div className="flex gap-1 border-b border-[var(--border)] bg-[var(--surface-2)] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src="/work/dell-store.webp"
              alt="Dell Store — Magento storefront"
              fill
              sizes="220px"
              className="object-cover object-top"
            />
          </div>
        </div>

        <Chip
          icon={<Zap className="h-4 w-4" />}
          value="10,000+"
          label="flights booked"
          className="-left-10 top-20"
          depth={80}
        />
        <Chip
          icon={<Star className="h-4 w-4" />}
          value="98 / 100"
          label="Lighthouse"
          className="-bottom-6 right-2"
          depth={68}
        />
      </div>
    </div>
  );
}
