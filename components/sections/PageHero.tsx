import { Fragment } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Section";
import { tokenize } from "@/lib/text";
import { cn } from "@/lib/utils";

/**
 * Shared top-of-page hero for inner pages: eyebrow, oversized headline with a
 * CSS word-mask entrance (no JS needed above the fold), optional lede + slot.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  aside,
  className,
  image,
}: {
  eyebrow?: ReactNode;
  title: string;
  lede?: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
  /** optional photo that fades in behind the right side of the hero */
  image?: string;
}) {
  const words = tokenize(title);
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {image ? (
          <div className="rise absolute inset-y-0 right-0 w-full [mask-image:linear-gradient(to_left,#000_25%,transparent_80%)] md:w-[62%]">
            <Image src={image} alt="" fill priority sizes="(max-width: 768px) 100vw, 62vw" className="object-cover opacity-45 dark:opacity-35" />
          </div>
        ) : null}
        <div className="hero-glow absolute inset-0 opacity-80" />
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />
      </div>
      <Container className="pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div className={cn(aside && "grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end")}>
          <div>
            {eyebrow ? <div className="rise mb-7">{eyebrow}</div> : null}
            <h1 className="max-w-[18ch] font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.045em] text-balance sm:text-7xl lg:text-[6.2rem]">
              {words.map((w, i) => (
                <Fragment key={i}>
                  {i > 0 ? " " : null}
                  <span className="word-mask">
                    <span
                      className={cn(w.accent && "serif-accent gradient-text pr-[0.06em]")}
                      style={{ animationDelay: `${80 + i * 60}ms` }}
                    >
                      {w.word}
                    </span>
                  </span>
                </Fragment>
              ))}
            </h1>
            {lede ? (
              <p
                className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted text-pretty sm:text-xl"
                style={{ animationDelay: `${200 + words.length * 60}ms` }}
              >
                {lede}
              </p>
            ) : null}
          </div>
          {aside ? (
            <div className="rise" style={{ animationDelay: "500ms" }}>
              {aside}
            </div>
          ) : null}
        </div>
        {children ? (
          <div className="rise" style={{ animationDelay: `${300 + words.length * 60}ms` }}>
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
