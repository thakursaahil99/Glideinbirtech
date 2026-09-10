import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, isLocale, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";

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
    path: "/contact",
    title: dict.contactPage.title,
    description: dict.contactPage.subheading,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const c = dict.contactPage;

  return (
    <Section size="lg" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <OrganizationJsonLd locale={typed} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">{c.title}</p>
          <h1 className="font-display text-[2rem] font-semibold leading-[1.1] text-balance sm:text-4xl lg:text-5xl">
            {c.heading}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {c.subheading}
          </p>
          <p className="mt-4 text-sm font-medium text-[var(--accent)]">
            {t(siteConfig.responseTime, typed)}
          </p>

          <h2 className="mt-10 text-xs font-semibold uppercase tracking-widest text-muted">
            {c.directTitle}
          </h2>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={whatsappLink(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-[var(--primary)]"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              <span>{c.whatsappLabel}: {siteConfig.phone}</span>
            </a>
            <a href={telLink()} className="flex items-center gap-3 hover:text-[var(--primary)]">
              <Phone className="h-4 w-4" />
              <span>{c.phoneLabel}: {siteConfig.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:text-[var(--primary)]"
            >
              <Mail className="h-4 w-4" />
              <span>{c.emailLabel}: {siteConfig.email}</span>
            </a>
            <p className="flex items-center gap-3 text-muted">
              <MapPin className="h-4 w-4" />
              <span>{c.locationLabel}: {siteConfig.location}</span>
            </p>
          </div>
        </div>

        <div className="surface-card p-6 sm:p-8">
          <LeadForm locale={typed} dict={dict} />
        </div>
      </div>
    </Section>
  );
}
