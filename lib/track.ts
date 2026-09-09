"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a generic event to GA4 / Google Ads if gtag is present. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}

/** Fire the Google Ads conversion (used on the thank-you page). */
export function trackConversion() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "conversion", {
    send_to: adsId && label ? `${adsId}/${label}` : undefined,
    event_category: "lead",
  });
  track("generate_lead");
}

export function trackContactClick(method: "whatsapp" | "call" | "email") {
  track("contact_click", { method });
}
