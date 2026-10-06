import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl container-px", className)}>{children}</div>
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
    sm: "py-16 sm:py-20",
    md: "py-20 sm:py-28 lg:py-32",
    lg: "py-24 sm:py-32 lg:py-40",
  }[size];
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24",
        pad,
        tone === "raised" && "bg-[var(--surface)]",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

/**
 * Section heading. In `title`, wrap a phrase in *asterisks* to render it as
 * the italic serif gradient accent. `index` shows a small "(01)" marker.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  index,
  className,
  aside,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  index?: string;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <div
      className={cn(
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end",
        className,
      )}
    >
      <div className={cn(align === "left" && "max-w-3xl")}>
        {eyebrow ? (
          <Reveal>
            <p className={cn("eyebrow mb-6", align === "center" && "eyebrow-center")}>
              {index ? <span className="text-foreground/50">({index})</span> : null}
              {eyebrow}
            </p>
          </Reveal>
        ) : null}
        <SplitText
          text={title}
          className="font-display text-[2.4rem] font-semibold leading-[1.02] text-balance sm:text-5xl lg:text-[4.2rem]"
        />
        {subtitle ? (
          <Reveal delay={0.15}>
            <p
              className={cn(
                "mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg",
                align === "center" && "mx-auto",
              )}
            >
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
      {aside ? <Reveal delay={0.2}>{aside}</Reveal> : null}
    </div>
  );
}
