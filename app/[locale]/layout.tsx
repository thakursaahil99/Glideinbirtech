import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Bricolage_Grotesque,
  Geist,
  Instrument_Serif,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { WhatsappFab } from "@/components/layout/WhatsappFab";
import { Analytics } from "@/components/analytics/Analytics";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Cursor } from "@/components/motion/Cursor";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

// Display: expressive grotesque. Body: neutral sans. Accent: italic serif.
// Devanagari falls back to Noto Sans Devanagari for the Hindi locale.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-face",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif-face",
  weight: "400",
  style: ["italic", "normal"],
  display: "swap",
});
const deva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-deva",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Full-stack developer · Web, Mobile, SEO & Ads`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline.en,
  metadataBase: new URL(siteConfig.url),
  icons: { icon: "/favicon.ico" },
};

const bootScript = `(function(){var d=document.documentElement;d.classList.remove('no-js');try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);}catch(e){}})();`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typedLocale = locale as Locale;
  const dict = getDictionary(typedLocale);

  return (
    <html
      lang={typedLocale}
      className={`${display.variable} ${body.variable} ${serif.variable} ${deva.variable} h-full no-js`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <Analytics />
        <SmoothScroll />
        <ScrollProgress />
        <Cursor />
        <Header locale={typedLocale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <MobileCtaBar locale={typedLocale} dict={dict} />
        <WhatsappFab message={dict.cta.whatsappMessage} from={dict.cta.whatsappFrom} />
      </body>
    </html>
  );
}
