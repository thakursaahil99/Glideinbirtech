import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";
import { WhatsappFab } from "@/components/layout/WhatsappFab";
import { Analytics } from "@/components/analytics/Analytics";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Web, Mobile, SEO & Google Ads`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline.en,
  metadataBase: new URL(siteConfig.url),
  icons: { icon: "/favicon.ico" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Analytics />
        <Header locale={typedLocale} dict={dict} />
        <main className="flex-1 pb-14 sm:pb-0">{children}</main>
        <Footer locale={typedLocale} dict={dict} />
        <MobileCtaBar locale={typedLocale} dict={dict} />
        <WhatsappFab message={dict.cta.whatsappMessage} />
      </body>
    </html>
  );
}
