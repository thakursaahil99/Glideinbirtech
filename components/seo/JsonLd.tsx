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

const socials = [
  siteConfig.socials.github,
  siteConfig.socials.linkedin,
  siteConfig.socials.glideinbir,
];

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: siteConfig.studio,
        description: t(siteConfig.tagline, locale),
        url: `${siteConfig.url}/${locale}`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        areaServed: "IN",
        founder: { "@type": "Person", name: siteConfig.person },
        sameAs: socials,
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

export function PersonJsonLd({ locale }: { locale: Locale }) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.person,
        jobTitle: "Full-stack developer",
        worksFor: { "@type": "Organization", name: siteConfig.studio },
        description: t(siteConfig.tagline, locale),
        url: `${siteConfig.url}/${locale}/about`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bir Billing",
          addressRegion: "Himachal Pradesh",
          addressCountry: "IN",
        },
        sameAs: socials,
        knowsAbout: ["Next.js", "React", "Laravel", "Magento", "SEO", "Google Ads"],
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
