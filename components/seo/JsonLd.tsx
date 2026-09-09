import { siteConfig } from "@/lib/site";
import { services, serviceTitle } from "@/content/services";
import { faqs } from "@/content/faq";
import { t, type Locale } from "@/lib/i18n";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.name,
        description: t(siteConfig.tagline, locale),
        url: `${siteConfig.url}/${locale}`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "IN",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bir",
          addressRegion: "Himachal Pradesh",
          addressCountry: "IN",
        },
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: serviceTitle(s, locale) },
        })),
      }}
    />
  );
}

export function FaqJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: t(f.q, locale),
          acceptedAnswer: { "@type": "Answer", text: t(f.a, locale) },
        })),
      }}
    />
  );
}
