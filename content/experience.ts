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
    en: "Performance is a feature, not a phase.",
    hi: "परफ़ॉर्मेंस एक फ़ीचर है, कोई आख़िरी स्टेप नहीं।",
  },
  {
    en: "Customize without forking — clean extension points over overrides.",
    hi: "फ़ोर्क किए बिना कस्टमाइज़ करो — ओवरराइड से बेहतर साफ़ एक्सटेंशन पॉइंट।",
  },
  {
    en: "A design system beats one-off pages every time.",
    hi: "डिज़ाइन सिस्टम हमेशा अलग-अलग बने पेजों से बेहतर होता है।",
  },
  {
    en: "If it can't be demoed, it isn't done.",
    hi: "अगर डेमो नहीं दिखा सकते, तो वो पूरा नहीं हुआ।",
  },
];
