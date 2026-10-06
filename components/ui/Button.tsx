import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "accent";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-[color,border-color,transform,box-shadow] duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-60 disabled:pointer-events-none";

// a sunset fill that wipes up from the bottom on hover
const wipe =
  "before:absolute before:inset-0 before:-z-10 before:translate-y-[101%] before:rounded-[inherit] before:bg-[image:var(--sunset)] before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:before:translate-y-0";

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-foreground text-background hover:text-white shadow-[0_10px_30px_-12px_var(--glow-a)]",
    wipe,
  ),
  accent:
    "bg-[image:var(--sunset)] bg-[length:200%_100%] bg-left text-white shadow-[0_12px_32px_-12px_var(--glow-a)] transition-[background-position,transform] duration-500 hover:bg-right",
  outline: cn(
    "border border-[var(--border-strong)] bg-[var(--surface)]/60 text-foreground backdrop-blur hover:border-transparent hover:text-white",
    wipe,
  ),
  ghost: "text-foreground hover:bg-[var(--surface-2)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

export function buttonClass(opts: { variant?: Variant; size?: Size; className?: string } = {}) {
  const { variant = "primary", size = "md", className } = opts;
  return cn(base, variants[variant], sizes[size], className);
}

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={buttonClass({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  href,
  external,
  ...props
}: CommonProps & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href">) {
  const cls = buttonClass({ variant, size, className });
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}

/** Arrow that slides out and back in on parent `group/btn` hover. */
export function ArrowSlide({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-4 w-4 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox="0 0 16 16"
        className="absolute inset-0 h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-full group-hover/btn:-translate-y-full group-hover:translate-x-full group-hover:-translate-y-full"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12 12 4M5.5 4H12v6.5" />
      </svg>
      <svg
        viewBox="0 0 16 16"
        className="absolute inset-0 h-4 w-4 -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12 12 4M5.5 4H12v6.5" />
      </svg>
    </span>
  );
}
