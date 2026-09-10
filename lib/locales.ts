/**
 * Locale constants only — no message dictionaries. Safe to import from the edge
 * proxy without pulling the whole i18n bundle.
 */
export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
};
