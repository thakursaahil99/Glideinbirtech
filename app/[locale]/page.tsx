import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { OrganizationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { t } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  return buildMetadata({
    locale: typed,
    path: "",
    title:
      typed === "hi"
        ? "वेब, मोबाइल, SEO और Google Ads एजेंसी"
        : "Web, Mobile, SEO & Google Ads agency",
    description: t(siteConfig.tagline, typed),
  });
}

export default async function HomePage({
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
      <OrganizationJsonLd locale={typed} />
      <FaqJsonLd locale={typed} />
      <Hero locale={typed} dict={dict} />
      <Services locale={typed} dict={dict} />
      <TechStack locale={typed} dict={dict} />
      <Process locale={typed} dict={dict} />
      <Portfolio locale={typed} dict={dict} limit={4} />
      <Pricing locale={typed} dict={dict} />
      <Testimonials locale={typed} dict={dict} />
      <Faq locale={typed} dict={dict} />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
