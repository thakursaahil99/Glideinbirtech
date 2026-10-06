import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

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
    path: "/thank-you",
    title: dict.thankYou.title,
    description: dict.thankYou.heading,
    noindex: true,
  });
}

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const ty = dict.thankYou;

  return (
    <>
      <ConversionTracker />
      <PageHero
        image="/about/camp.jpg"
        className="min-h-[80vh]"
        eyebrow={
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {ty.title}
          </span>
        }
        title={ty.heading}
        lede={ty.text}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <WhatsAppLink
            message={dict.cta.whatsappMessage}
            from={dict.cta.whatsappFrom}
            className={buttonClass({ size: "lg" })}
          >
            <MessageCircle className="h-4 w-4" /> {ty.whatsapp}
          </WhatsAppLink>
          <Link href={`/${typed}`} className={buttonClass({ variant: "outline", size: "lg" })}>
            {ty.home} <ArrowSlide />
          </Link>
        </div>
      </PageHero>
    </>
  );
}
