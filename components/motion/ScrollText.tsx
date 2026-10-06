"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
}

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Fragment key={i}>
        {i > 0 ? " " : null}
        <Word
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        >
          {w}
        </Word>
        </Fragment>
      ))}
    </p>
  );
}
