import Image from "next/image";
import { Star, Zap } from "lucide-react";

function Chip({
  icon,
  value,
  label,
  className,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--surface)]/95 px-3.5 py-2.5 shadow-[inset_0_1px_0_var(--hairline),0_18px_40px_-18px_rgba(0,0,0,0.5)] backdrop-blur [animation:float-y_6s_ease-in-out_infinite] motion-reduce:animate-none ${className ?? ""}`}
      style={delay ? { animationDelay: delay } : undefined}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)]/12 text-[var(--primary)]">
        {icon}
      </span>
      <span>
        <span className="block font-display text-sm font-bold leading-none">{value}</span>
        <span className="mt-1 block text-[10px] uppercase tracking-wide text-muted">
          {label}
        </span>
      </span>
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="relative mx-auto hidden w-full max-w-[560px] lg:block">
      {/* glow */}
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(60%_60%_at_60%_40%,var(--glow-a),transparent_70%)] blur-2xl" />

      {/* main browser */}
      <div className="overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] shadow-[inset_0_1px_0_var(--hairline),0_40px_80px_-30px_rgba(0,0,0,0.55)] rotate-[-1.5deg]">
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
            sizes="560px"
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* secondary browser, behind-right */}
      <div className="absolute -right-6 top-10 -z-[1] w-[46%] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] opacity-80 shadow-2xl shadow-black/40 rotate-[5deg]">
        <div className="flex gap-1 border-b border-[var(--border)] bg-[var(--surface-2)] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted)]" />
        </div>
        <div className="relative aspect-[16/10]">
          <Image
            src="/work/dell-store.webp"
            alt="Dell Store — Magento storefront"
            fill
            sizes="260px"
            className="object-cover object-top"
          />
        </div>
      </div>

      <Chip
        icon={<Zap className="h-4 w-4" />}
        value="10,000+"
        label="flights booked"
        className="-left-6 top-14"
        delay="-2s"
      />
      <Chip
        icon={<Star className="h-4 w-4" />}
        value="98 / 100"
        label="Lighthouse"
        className="-bottom-5 right-2"
        delay="-4s"
      />
    </div>
  );
}
