import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { type Locale, locales } from "@/lib/i18n";

type BuildMetaArgs = {
  locale: Locale;
  path?: string; // path after the locale segment, e.g. "/contact" or ""
  title: string;
  description: string;
  noindex?: boolean;
};

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  noindex,
}: BuildMetaArgs): Metadata {
  const canonical = `${siteConfig.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
  );

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages: { ...languages, "x-default": `${siteConfig.url}/en${path}` },
    },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      locale: locale === "hi" ? "hi_IN" : "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
