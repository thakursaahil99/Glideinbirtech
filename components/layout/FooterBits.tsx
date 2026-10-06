"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { getLenis } from "@/components/motion/SmoothScroll";

const fmt = new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: "Asia/Kolkata",
});

/** Live clock in IST — rendered only on the client to avoid hydration drift. */
export function LocalTime({ className }: { className?: string }) {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className={className}>{now ?? "--:--:--"} IST</span>;
}

export function BackToTop({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(0, { duration: 1.6 });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-foreground transition-colors hover:border-[var(--primary)]"
    >
      {label}
      <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
