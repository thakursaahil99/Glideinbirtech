import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { OrganizationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, isLocale, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
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
        ? "फुल-स्टैक डेवलपर — वेब, मोबाइल, AI, SEO और Google Ads"
        : "Full-stack developer — web, mobile, AI, SEO & Google Ads",
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
      <Intro locale={typed} dict={dict} />
      <Services locale={typed} dict={dict} limit={6} />
      <Portfolio locale={typed} dict={dict} limit={6} />
      <Process locale={typed} dict={dict} />
      <TechStack locale={typed} dict={dict} />
      <Testimonials locale={typed} dict={dict} />
      <Faq locale={typed} dict={dict} />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
