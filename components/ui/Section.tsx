import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl container-px", className)}>{children}</div>
  );
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  size = "md",
  tone = "plain",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg";
  tone?: "plain" | "raised";
}) {
  const pad = {
    sm: "py-14 sm:py-16",
    md: "py-16 sm:py-24",
    lg: "py-20 sm:py-28",
  }[size];
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24",
        pad,
        tone === "raised" && "border-y border-[var(--border)] bg-[var(--surface)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg text-pretty">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
