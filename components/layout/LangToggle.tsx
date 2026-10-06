"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { type Locale, locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LangToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    const rest = pathname.replace(/^\/(en|hi)(?=\/|$)/, "") || "";
    try {
      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    } catch {
      /* ignore */
    }
    router.push(`/${next}${rest}`);
    router.refresh();
  }

  return (
    <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)]/70 p-1 text-xs">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === locale}
          className={cn(
            "relative rounded-full px-2.5 py-1 font-semibold tracking-wide transition-colors",
            l === locale ? "text-background" : "text-muted hover:text-foreground",
          )}
        >
          {l === locale ? (
            <motion.span
              layoutId={`lang-pill`}
              className="absolute inset-0 rounded-full bg-foreground"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ) : null}
          <span className="relative">{l === "hi" ? "हि" : "EN"}</span>
        </button>
      ))}
    </div>
  );
}
