import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { buttonClass } from "@/components/ui/Button";
import { ConversionTracker } from "@/components/analytics/ConversionTracker";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

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
    <Section size="lg" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <ConversionTracker />
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/12 text-[var(--accent)]">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-display text-[2rem] font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
          {ty.heading}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{ty.text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink(dict.cta.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass()}
          >
            <MessageCircle className="h-4 w-4" /> {ty.whatsapp}
          </a>
          <Link href={`/${typed}`} className={buttonClass({ variant: "outline" })}>
            {ty.home}
          </Link>
        </div>
      </div>
    </Section>
  );
}
