import { en } from "@/messages/en";
import { hi } from "@/messages/hi";

export {
  locales,
  defaultLocale,
  isLocale,
  localeNames,
  type Locale,
} from "@/lib/locales";

import type { Locale } from "@/lib/locales";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = { en, hi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

/** Pick the right language string from a bilingual `{ en, hi }` field. */
export function t(field: { en: string; hi: string }, locale: Locale): string {
  return field[locale] ?? field.en;
}
