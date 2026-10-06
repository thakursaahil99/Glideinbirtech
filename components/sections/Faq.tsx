"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/content/faq";
import { whatsappLink } from "@/lib/site";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Faq({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow={dict.faq.eyebrow}
            index="07"
            title={dict.faq.heading}
            subtitle={dict.faq.subheading}
          />
          <a
            href={whatsappLink(dict.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass({ variant: "outline", className: "mt-8" })}
          >
            WhatsApp <ArrowSlide />
          </a>
        </div>

        <div className="border-t border-[var(--border)]">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-medium text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-display text-lg font-medium tracking-tight transition-colors sm:text-2xl",
                        isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {t(item.q, locale)}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                      isOpen
                        ? "rotate-45 border-transparent bg-foreground text-background"
                        : "border-[var(--border-strong)] group-hover:border-foreground",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 pl-9 leading-relaxed text-muted sm:text-lg">
                        {t(item.a, locale)}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
