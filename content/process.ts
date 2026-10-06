import type { Bilingual } from "@/content/services";

export type ProcessStep = {
  step: string;
  title: Bilingual;
  text: Bilingual;
  image: string;
  alt: Bilingual;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: { en: "Discover", hi: "खोज" },
    text: {
      en: "Get into the business logic, the data model and the users before writing anything. A free call turns your idea into a written scope, timeline and fixed quote.",
      hi: "कुछ लिखने से पहले बिज़नेस लॉजिक, डेटा मॉडल और यूज़र को समझना। एक फ्री कॉल आपके आइडिया को लिखित स्कोप, समय-सीमा और तय कोटेशन में बदल देती है।",
    },
    image: "/about/landing.jpg",
    alt: { en: "People watching paragliders land in Bir", hi: "बीर में पैराग्लाइडर्स को उतरते देखते लोग" },
  },
  {
    step: "02",
    title: { en: "Design", hi: "डिज़ाइन" },
    text: {
      en: "Decide the boundaries — modules, APIs, caching, where state lives. Cheap to change now, expensive later. You approve a clickable design first.",
      hi: "सीमाएँ तय करना — मॉड्यूल, API, कैशिंग, स्टेट कहाँ रहेगा। अभी बदलना सस्ता, बाद में महँगा। पहले आप एक क्लिक करने योग्य डिज़ाइन मंज़ूर करते हैं।",
    },
    image: "/work/redbean/3d-0.jpg",
    alt: { en: "Red Bean website hero with a 3D cube", hi: "3D क्यूब के साथ Red Bean वेबसाइट" },
  },
  {
    step: "03",
    title: { en: "Build", hi: "बनाना" },
    text: {
      en: "Ship in vertical slices behind a design system, with a live preview link. Every slice is reviewable, testable and demoable — you see progress every few days.",
      hi: "डिज़ाइन सिस्टम के साथ वर्टिकल स्लाइस में बनाना, लाइव प्रीव्यू लिंक के साथ। हर स्लाइस रिव्यू, टेस्ट और डेमो हो सकती है — प्रगति हर कुछ दिन में दिखती है।",
    },
    image: "/work/sahucodex/cover-1.jpg",
    alt: { en: "SahuCodeX platform built end to end", hi: "पूरी तरह बनाया गया SahuCodeX प्लेटफ़ॉर्म" },
  },
  {
    step: "04",
    title: { en: "Launch & grow", hi: "लॉन्च और ग्रोथ" },
    text: {
      en: "Performance budgets, edge cases, SEO, analytics and monitoring. Then a handover with docs a future developer can use — plus optional SEO and Google Ads to keep results growing.",
      hi: "परफ़ॉर्मेंस बजट, एज केस, SEO, एनालिटिक्स और मॉनिटरिंग। फिर ऐसे डॉक्स के साथ हैंडओवर जो कोई भी डेवलपर इस्तेमाल कर सके — और नतीजे बढ़ाने के लिए वैकल्पिक SEO व Google Ads।",
    },
    image: "/about/glide-valley.jpg",
    alt: { en: "Paraglider taking off over a mountain valley", hi: "पहाड़ी घाटी के ऊपर उड़ान भरता पैराग्लाइडर" },
  },
];
