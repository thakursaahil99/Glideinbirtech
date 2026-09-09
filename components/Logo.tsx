import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
      fill="none"
    >
      <rect width="32" height="32" rx="9" fill="var(--primary)" />
      <path
        d="M7 20.5 16 8l9 12.5-9-4.2-9 4.2Z"
        fill="var(--primary-foreground)"
        opacity="0.95"
      />
      <path d="m11 23 5-2.3L21 23l-5 2-5-2Z" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display font-semibold", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] tracking-tight">
          Sahil <span className="text-[var(--accent)]">Thakur</span>
        </span>
        <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
          Glideinbir Tech
        </span>
      </span>
    </span>
  );
}
