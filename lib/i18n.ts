import { en } from "@/messages/en";
import { hi } from "@/messages/hi";

export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, hi };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

/** Pick the right language string from a bilingual `{ en, hi }` field. */
export function t(field: { en: string; hi: string }, locale: Locale): string {
  return field[locale] ?? field.en;
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
};
