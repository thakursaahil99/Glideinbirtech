"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/content/faq";
import { t, type Dictionary, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Faq({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" tone="raised">
      <SectionHeading
        eyebrow={dict.faq.eyebrow}
        title={dict.faq.heading}
        subtitle={dict.faq.subheading}
      />
      <div className="mx-auto mt-12 max-w-2xl divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--background)]">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              >
                <span className="font-medium sm:text-lg">{t(item.q, locale)}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6 sm:pb-6">
                    {t(item.a, locale)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
