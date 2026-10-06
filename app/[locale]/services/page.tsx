import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { PageHero } from "@/components/sections/PageHero";
import { VelocityMarquee } from "@/components/motion/Marquee";
import { services } from "@/content/services";
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
    path: "/services",
    title: dict.services.pageTitle,
    description: dict.services.pageSubheading,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const techs = Array.from(new Set(services.flatMap((s) => s.tech)));

  return (
    <>
      <PageHero
        image="/about/glide-snow.jpg"
        eyebrow={<p className="eyebrow">{dict.services.eyebrow} · {services.length}</p>}
        title={dict.services.pageHeading}
        lede={dict.services.subheading}
      />
      <div className="mb-20 border-y border-[var(--border)] py-5">
        <VelocityMarquee items={techs} baseVelocity={-1.5} className="font-display text-3xl font-semibold tracking-tight sm:text-5xl" />
      </div>
      <Services locale={typed} dict={dict} variant="page" />
      <Process locale={typed} dict={dict} />
      <Pricing locale={typed} dict={dict} />
      <Faq locale={typed} dict={dict} />
      <FinalCta locale={typed} dict={dict} />
    </>
  );
}
