"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { tokenize, plain } from "@/lib/text";

type Tag = "h1" | "h2" | "h3" | "p";

/**
 * Headline that rises word-by-word from behind a mask when scrolled into view.
 * Wrap a phrase in *asterisks* to render it as the italic serif accent.
 */
export function SplitText({
  text,
  as = "h2",
  className,
  delay = 0,
  stagger = 0.045,
}: {
  text: string;
  as?: Tag;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  const tokens = tokenize(text);

  return (
    <Tag
      className={className}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      <span className="sr-only">{plain(text)}</span>
      {tokens.map((tok, i) => (
        <Fragment key={i}>
        {i > 0 ? " " : null}
        <span
          aria-hidden
          className="inline-block overflow-hidden pb-[0.12em] pt-[0.14em] -mb-[0.12em] -mt-[0.14em] align-top"
        >
          <motion.span
            className={cn(
              "inline-block",
              tok.accent && "serif-accent gradient-text pr-[0.08em]",
            )}
            variants={{
              hidden: { y: "115%", rotate: 5 },
              show: {
                y: "0%",
                rotate: 0,
                transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {tok.word}
          </motion.span>
        </span>
        </Fragment>
      ))}
    </Tag>
  );
}
