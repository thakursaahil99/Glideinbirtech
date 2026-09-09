import type { Locale } from "@/lib/i18n";

export type Bilingual = { en: string; hi: string };

export type Service = {
  slug: string;
  icon: string; // lucide icon key, resolved in components/sections/Services.tsx
  title: Bilingual;
  tagline: Bilingual;
  points: Bilingual[];
};

export const services: Service[] = [
  {
    slug: "landing-pages",
    icon: "rocket",
    title: { en: "Landing pages & websites", hi: "लैंडिंग पेज और वेबसाइट" },
    tagline: {
      en: "A fast, modern site that makes visitors trust you and take action.",
      hi: "तेज़, आधुनिक साइट जो विज़िटर का भरोसा जीते और कार्रवाई करवाए।",
    },
    points: [
      { en: "Conversion-focused design & copy", hi: "कन्वर्ज़न पर केंद्रित डिज़ाइन और कॉपी" },
      { en: "Loads in under 2 seconds on mobile", hi: "मोबाइल पर 2 सेकंड से कम में लोड" },
      { en: "On-page SEO & analytics set up", hi: "ऑन-पेज SEO और एनालिटिक्स सेटअप" },
      { en: "Lead form, WhatsApp & call buttons", hi: "लीड फ़ॉर्म, WhatsApp और कॉल बटन" },
    ],
  },
  {
    slug: "web-apps",
    icon: "layout-dashboard",
    title: { en: "Web apps & dashboards", hi: "वेब ऐप और डैशबोर्ड" },
    tagline: {
      en: "Custom tools, portals and dashboards that run your business online.",
      hi: "कस्टम टूल, पोर्टल और डैशबोर्ड जो आपका बिज़नेस ऑनलाइन चलाएँ।",
    },
    points: [
      { en: "Auth, roles & secure data", hi: "लॉगिन, भूमिकाएँ और सुरक्षित डेटा" },
      { en: "Admin panels & reporting", hi: "एडमिन पैनल और रिपोर्टिंग" },
      { en: "Payments & third-party integrations", hi: "पेमेंट और थर्ड-पार्टी इंटीग्रेशन" },
      { en: "Scales as your users grow", hi: "यूज़र बढ़ने पर स्केल होता है" },
    ],
  },
  {
    slug: "mobile-apps",
    icon: "smartphone",
    title: { en: "Mobile apps (iOS & Android)", hi: "मोबाइल ऐप (iOS और Android)" },
    tagline: {
      en: "One codebase, both stores — native-feeling apps your users love.",
      hi: "एक कोडबेस, दोनों स्टोर — नेटिव जैसा अनुभव देने वाली ऐप।",
    },
    points: [
      { en: "React Native or Flutter", hi: "React Native या Flutter" },
      { en: "Push notifications & offline mode", hi: "पुश नोटिफिकेशन और ऑफ़लाइन मोड" },
      { en: "Play Store & App Store submission", hi: "Play Store और App Store सबमिशन" },
      { en: "Same backend as your web app", hi: "वेब ऐप वाला ही बैकएंड" },
    ],
  },
  {
    slug: "seo",
    icon: "search",
    title: { en: "SEO", hi: "SEO" },
    tagline: {
      en: "Get found on Google for what your customers actually search.",
      hi: "जो आपके ग्राहक सर्च करते हैं, उसके लिए Google पर दिखें।",
    },
    points: [
      { en: "Technical SEO audit & fixes", hi: "तकनीकी SEO ऑडिट और सुधार" },
      { en: "Keyword & content plan", hi: "कीवर्ड और कंटेंट प्लान" },
      { en: "Local SEO & Google Business Profile", hi: "लोकल SEO और Google Business प्रोफ़ाइल" },
      { en: "Monthly ranking reports", hi: "मासिक रैंकिंग रिपोर्ट" },
    ],
  },
  {
    slug: "google-ads",
    icon: "target",
    title: { en: "Google Ads", hi: "Google Ads" },
    tagline: {
      en: "Paid campaigns that bring qualified leads, not just clicks.",
      hi: "ऐसे पेड कैंपेन जो सिर्फ़ क्लिक नहीं, असली लीड लाएँ।",
    },
    points: [
      { en: "Campaign setup & keyword research", hi: "कैंपेन सेटअप और कीवर्ड रिसर्च" },
      { en: "High-converting landing pages", hi: "ज़्यादा कन्वर्ट करने वाले लैंडिंग पेज" },
      { en: "Conversion tracking & call tracking", hi: "कन्वर्ज़न और कॉल ट्रैकिंग" },
      { en: "Weekly optimisation & spend control", hi: "साप्ताहिक ऑप्टिमाइज़ेशन और खर्च नियंत्रण" },
    ],
  },
  {
    slug: "crm",
    icon: "database",
    title: { en: "CRM & custom software", hi: "CRM और कस्टम सॉफ़्टवेयर" },
    tagline: {
      en: "Your own CRM, billing or operations system — built around how you work.",
      hi: "आपका अपना CRM, बिलिंग या ऑपरेशन सिस्टम — आपके काम के तरीके पर बना।",
    },
    points: [
      { en: "Lead pipeline & follow-up reminders", hi: "लीड पाइपलाइन और फ़ॉलो-अप रिमाइंडर" },
      { en: "Quotes, invoices & payment status", hi: "कोटेशन, इनवॉइस और पेमेंट स्टेटस" },
      { en: "WhatsApp & email automation", hi: "WhatsApp और ईमेल ऑटोमेशन" },
      { en: "Team access with permissions", hi: "अनुमतियों के साथ टीम एक्सेस" },
    ],
  },
];

export function serviceTitle(service: Service, locale: Locale) {
  return service.title[locale] ?? service.title.en;
}
