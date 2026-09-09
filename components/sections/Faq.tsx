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
    <Section id="faq">
      <SectionHeading title={dict.faq.heading} subtitle={dict.faq.subheading} />
      <div className="mx-auto mt-10 max-w-2xl divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium sm:text-base">{t(item.q, locale)}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen ? (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">
                  {t(item.a, locale)}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
