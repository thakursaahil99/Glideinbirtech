"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = (() => {
      try {
        return localStorage.getItem("theme") as Theme | null;
      } catch {
        return null;
      }
    })();
    const current =
      stored ??
      ((document.documentElement.getAttribute("data-theme") as Theme | null) ??
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    // Hydrate the icon from the client-only theme resolved by the pre-paint script.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(current);
  }, []);

  function apply(next: Theme) {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  }

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    // circular wipe from the button where the browser supports it
    const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
    if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      doc.startViewTransition(() => apply(next));
    } else {
      apply(next);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]/70 text-foreground transition-colors hover:border-[var(--primary)]"
    >
      <motion.span
        key={theme ?? "none"}
        className="flex"
        initial={theme ? { y: 14, rotate: -90, opacity: 0 } : false}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </button>
  );
}
