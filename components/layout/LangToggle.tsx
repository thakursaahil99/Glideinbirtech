"use client";

import { usePathname, useRouter } from "next/navigation";
import { Languages } from "lucide-react";
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
    <div className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] p-0.5 text-sm">
      <Languages className="mx-1.5 h-4 w-4 text-muted" aria-hidden="true" />
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchTo(l)}
          aria-pressed={l === locale}
          className={cn(
            "rounded-md px-2 py-1 font-medium transition-colors",
            l === locale
              ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
              : "text-muted hover:text-foreground",
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
