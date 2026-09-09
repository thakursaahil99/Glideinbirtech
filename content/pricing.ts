import type { Bilingual } from "@/content/services";

/**
 * PLACEHOLDER starting prices. Replace `price` values with your real numbers.
 * These render as "Starting at ₹X" — not fixed packages.
 */
export type PricingTier = {
  slug: string;
  name: Bilingual;
  price: string; // display string, e.g. "₹15,000"
  for: Bilingual;
  features: Bilingual[];
  popular?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "launch",
    name: { en: "Launch", hi: "लॉन्च" },
    price: "₹15,000",
    for: {
      en: "A professional one-page site to start running ads.",
      hi: "विज्ञापन शुरू करने के लिए एक पेशेवर वन-पेज साइट।",
    },
    features: [
      { en: "Single landing page, mobile-first", hi: "एक लैंडिंग पेज, मोबाइल-फर्स्ट" },
      { en: "Copywriting + stock imagery", hi: "कॉपीराइटिंग + स्टॉक इमेज" },
      { en: "Lead form, WhatsApp & call buttons", hi: "लीड फ़ॉर्म, WhatsApp और कॉल बटन" },
      { en: "Basic SEO + Google Analytics", hi: "बेसिक SEO + Google Analytics" },
      { en: "Delivered in ~1 week", hi: "~1 हफ़्ते में डिलीवरी" },
    ],
  },
  {
    slug: "grow",
    name: { en: "Grow", hi: "ग्रोथ" },
    price: "₹45,000",
    popular: true,
    for: {
      en: "A full multi-page website built to rank and convert.",
      hi: "रैंक और कन्वर्ट करने के लिए पूरी मल्टी-पेज वेबसाइट।",
    },
    features: [
      { en: "Up to 8 pages + blog/CMS", hi: "8 पेज तक + ब्लॉग/CMS" },
      { en: "Custom design system", hi: "कस्टम डिज़ाइन सिस्टम" },
      { en: "Full on-page SEO + schema", hi: "पूरा ऑन-पेज SEO + schema" },
      { en: "Conversion tracking setup", hi: "कन्वर्ज़न ट्रैकिंग सेटअप" },
      { en: "30 days post-launch support", hi: "लॉन्च के बाद 30 दिन सहायता" },
    ],
  },
  {
    slug: "build",
    name: { en: "Build", hi: "बिल्ड" },
    price: "₹1,20,000",
    for: {
      en: "A web app, mobile app or CRM scoped to your workflow.",
      hi: "आपके वर्कफ़्लो के अनुसार वेब ऐप, मोबाइल ऐप या CRM।",
    },
    features: [
      { en: "Discovery + technical spec", hi: "डिस्कवरी + तकनीकी स्पेक" },
      { en: "Web app or iOS/Android app", hi: "वेब ऐप या iOS/Android ऐप" },
      { en: "Auth, database, admin panel", hi: "लॉगिन, डेटाबेस, एडमिन पैनल" },
      { en: "Payments & integrations", hi: "पेमेंट और इंटीग्रेशन" },
      { en: "Deployment + handover + training", hi: "डिप्लॉयमेंट + हैंडओवर + ट्रेनिंग" },
    ],
  },
];
