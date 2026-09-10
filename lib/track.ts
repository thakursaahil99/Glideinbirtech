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

/**
 * Fire the Google Ads conversion on the thank-you page. The GA4 `generate_lead`
 * event is fired once by the form itself on submit — not here.
 */
export function trackConversion() {
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!adsId || !label) return;
  window.gtag("event", "conversion", { send_to: `${adsId}/${label}` });
}

export function trackContactClick(method: "whatsapp" | "call" | "email") {
  track("contact_click", { method });
}
