import type { Bilingual } from "@/content/services";

export type Role = {
  period: string;
  role: Bilingual;
  company: string;
  description: Bilingual;
};

export const experience: Role[] = [
  {
    period: "2026 — Present",
    role: { en: "Full-Stack Developer", hi: "फुल-स्टैक डेवलपर" },
    company: "Freelance · Glideinbir Tech",
    description: {
      en: "Building scalable applications with Next.js, Laravel and Python Flask for clients across commerce and SaaS — and running the SEO and Google Ads that bring them traffic.",
      hi: "कॉमर्स और SaaS क्लाइंट्स के लिए Next.js, Laravel और Python Flask से स्केलेबल एप्लिकेशन बनाना — और उन्हें ट्रैफ़िक दिलाने वाला SEO व Google Ads चलाना।",
    },
  },
  {
    period: "2023 — 2026",
    role: { en: "Magento & Laravel Developer", hi: "Magento और Laravel डेवलपर" },
    company: "Technodeft",
    description: {
      en: "Developed eCommerce solutions, custom modules, REST APIs and admin dashboards. Led performance-optimization work across multiple storefronts.",
      hi: "ईकॉमर्स समाधान, कस्टम मॉड्यूल, REST API और एडमिन डैशबोर्ड बनाए। कई स्टोरफ़्रंट पर परफ़ॉर्मेंस-ऑप्टिमाइज़ेशन का काम लीड किया।",
    },
  },
  {
    period: "2022 — 2023",
    role: { en: "Web Development Trainee", hi: "वेब डेवलपमेंट ट्रेनी" },
    company: "Technodeft",
    description: {
      en: "Training across frontend, backend and databases while shipping real client projects.",
      hi: "फ्रंटएंड, बैकएंड और डेटाबेस की ट्रेनिंग के साथ असली क्लाइंट प्रोजेक्ट डिलीवर किए।",
    },
  },
];

export const principles: Bilingual[] = [
  {
    en: "Speed is a feature — performance is designed in, not bolted on.",
    hi: "स्पीड एक फ़ीचर है — परफ़ॉर्मेंस शुरू से डिज़ाइन होती है, बाद में जोड़ी नहीं जाती।",
  },
  {
    en: "Real over demo — every feature works end to end, in production.",
    hi: "डेमो नहीं, असली — हर फ़ीचर शुरू से आख़िर तक, प्रोडक्शन में काम करे।",
  },
  {
    en: "Motion with meaning — animation guides attention, never decorates.",
    hi: "मतलब वाला मोशन — एनीमेशन ध्यान दिखाए, सिर्फ़ सजावट न करे।",
  },
  {
    en: "Own the whole stack — from the database schema to the last micro-interaction.",
    hi: "पूरा स्टैक अपना — डेटाबेस स्कीमा से आख़िरी माइक्रो-इंटरैक्शन तक।",
  },
];
