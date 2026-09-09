import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/sections/Portfolio";
import { FinalCta } from "@/components/sections/FinalCta";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(typed);
  return buildMetadata({
    locale: typed,
    path: "/work",
    title: dict.work.heading,
    description: dict.work.subheading,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);

  return (
    <>
      <Portfolio locale={typed} dict={dict} showViewAll={false} />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
