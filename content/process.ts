import type { Bilingual } from "@/content/services";

export type ProcessStep = {
  step: string;
  title: Bilingual;
  text: Bilingual;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: { en: "Discover", hi: "समझना" },
    text: {
      en: "A free call to understand your goal, users and budget. You get a written scope, timeline and fixed quote.",
      hi: "आपका लक्ष्य, यूज़र और बजट समझने के लिए एक फ्री कॉल। आपको लिखित स्कोप, समय-सीमा और तय कोटेशन मिलता है।",
    },
  },
  {
    step: "02",
    title: { en: "Design", hi: "डिज़ाइन" },
    text: {
      en: "Wireframes and a clickable design you approve before any code is written. No surprises later.",
      hi: "वायरफ़्रेम और क्लिक करने योग्य डिज़ाइन जिसे आप कोड लिखने से पहले मंज़ूर करते हैं। बाद में कोई हैरानी नहीं।",
    },
  },
  {
    step: "03",
    title: { en: "Build", hi: "बनाना" },
    text: {
      en: "We build in weekly sprints with a live preview link. You see progress every few days, not at the end.",
      hi: "हम साप्ताहिक स्प्रिंट में बनाते हैं, लाइव प्रीव्यू लिंक के साथ। आप प्रगति हर कुछ दिन में देखते हैं, अंत में नहीं।",
    },
  },
  {
    step: "04",
    title: { en: "Launch", hi: "लॉन्च" },
    text: {
      en: "Testing, SEO, analytics and deployment. We hand over all accounts and code — it is fully yours.",
      hi: "टेस्टिंग, SEO, एनालिटिक्स और डिप्लॉयमेंट। हम सारे अकाउंट और कोड सौंप देते हैं — यह पूरी तरह आपका है।",
    },
  },
  {
    step: "05",
    title: { en: "Grow", hi: "बढ़ाना" },
    text: {
      en: "Optional monthly support: SEO, Google Ads, new features and fixes so results keep improving.",
      hi: "वैकल्पिक मासिक सहायता: SEO, Google Ads, नए फ़ीचर और सुधार ताकि नतीजे बेहतर होते रहें।",
    },
  },
];
