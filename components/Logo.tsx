import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="logo-sunset" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff6b35" />
          <stop offset="0.55" stopColor="#ff3d7f" />
          <stop offset="1" stopColor="#8b6bff" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="10" fill="url(#logo-sunset)" />
      {/* a paraglider wing over a ridge */}
      <path d="M6.5 14.5C10 9.5 22 9.5 25.5 14.5" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M11 15.5 16 21l5-5.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
      <path d="M5 26l6.5-5 4 3 4.5-4 7 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("group inline-flex items-center gap-2.5 font-display font-semibold", className)}>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-12 group-hover:scale-110">
        <LogoMark />
      </span>
      <span className="text-[1.08rem] leading-none tracking-tight">
        Glideinbir<span className="serif-accent ml-1 text-[1.15em] text-muted">tech</span>
      </span>
    </span>
  );
}
