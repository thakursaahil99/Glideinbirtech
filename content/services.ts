import type { Locale } from "@/lib/i18n";

export type Bilingual = { en: string; hi: string };

export type Service = {
  slug: string;
  icon: string; // lucide icon key, resolved in components/sections/ServiceIcon.tsx
  accent: string; // used for the card visual + hover
  image: string; // real project screenshot shown on cards and hover previews
  title: Bilingual;
  tagline: Bilingual;
  intro: Bilingual; // longer pitch for the service detail page
  points: Bilingual[];
  tech: string[];
  related: string[]; // project slugs shown on the detail page
};

/**
 * The first four mirror the services on sahilportfolio-tau.vercel.app; the
 * rest are the growth and business services Glideinbir Tech also sells.
 */
export const services: Service[] = [
  {
    slug: "web-apps",
    image: "/work/glido/cover-0.jpg",
    icon: "layout-dashboard",
    accent: "#8b6bff",
    title: { en: "Web apps & platforms", hi: "वेब ऐप और प्लेटफ़ॉर्म" },
    tagline: {
      en: "Booking engines, super-apps and dashboards — from the database schema and API to a pixel-perfect, real-time UI.",
      hi: "बुकिंग इंजन, सुपर-ऐप और डैशबोर्ड — डेटाबेस स्कीमा और API से लेकर पिक्सेल-परफ़ेक्ट, रियल-टाइम UI तक।",
    },
    intro: {
      en: "Glide in Bir, Glido and SahuCodeX were each built end to end — schema, API, auth, payments, admin panel and the interface on top. I bring the same depth to your product: real data models with constraints, server-side business rules, real-time updates where they matter, and a UI that stays fast as the data grows.",
      hi: "Glide in Bir, Glido और SahuCodeX — तीनों शुरू से आख़िर तक बनाए: स्कीमा, API, लॉगिन, पेमेंट, एडमिन पैनल और ऊपर का इंटरफ़ेस। आपके प्रोडक्ट में भी यही गहराई: कंस्ट्रेंट वाले असली डेटा मॉडल, सर्वर-साइड बिज़नेस रूल्स, जहाँ ज़रूरी हो वहाँ रियल-टाइम अपडेट, और ऐसा UI जो डेटा बढ़ने पर भी तेज़ रहे।",
    },
    points: [
      { en: "Booking engines, portals & admin dashboards", hi: "बुकिंग इंजन, पोर्टल और एडमिन डैशबोर्ड" },
      { en: "Auth, roles, payments & real-time updates", hi: "लॉगिन, रोल, पेमेंट और रियल-टाइम अपडेट" },
      { en: "REST / GraphQL APIs with documentation", hi: "डॉक्यूमेंटेशन के साथ REST / GraphQL API" },
      { en: "Performance budgets & Core Web Vitals", hi: "परफ़ॉर्मेंस बजट और Core Web Vitals" },
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL"],
    related: ["glide-in-bir", "glido", "sahucodex"],
  },
  {
    slug: "ecommerce",
    image: "/work/dell-store/cover-0.jpg",
    icon: "shopping-cart",
    accent: "#0ea5e9",
    title: { en: "eCommerce", hi: "ईकॉमर्स" },
    tagline: {
      en: "Magento 2 storefronts, multi-vendor marketplaces and checkout flows engineered for speed and conversion.",
      hi: "Magento 2 स्टोरफ़्रंट, मल्टी-वेंडर मार्केटप्लेस और चेकआउट — स्पीड और कन्वर्ज़न के लिए बने।",
    },
    intro: {
      en: "Four years of Magento 2 work — themes, custom modules, checkout flows and integrations — plus multi-vendor marketplaces like Pahadibhai on Laravel. I keep customisation upgrade-safe and the storefront fast, because every extra second of load time costs sales.",
      hi: "चार साल का Magento 2 अनुभव — थीम, कस्टम मॉड्यूल, चेकआउट और इंटीग्रेशन — और Laravel पर Pahadibhai जैसे मल्टी-वेंडर मार्केटप्लेस। कस्टमाइज़ेशन अपग्रेड-सेफ और स्टोर तेज़ रखता हूँ, क्योंकि लोडिंग का हर अतिरिक्त सेकंड बिक्री घटाता है।",
    },
    points: [
      { en: "Magento 2 themes & custom modules", hi: "Magento 2 थीम और कस्टम मॉड्यूल" },
      { en: "Multi-vendor marketplaces", hi: "मल्टी-वेंडर मार्केटप्लेस" },
      { en: "Razorpay checkout & payment integrations", hi: "Razorpay चेकआउट और पेमेंट इंटीग्रेशन" },
      { en: "Catalog & cart performance tuning", hi: "कैटलॉग और कार्ट परफ़ॉर्मेंस ट्यूनिंग" },
    ],
    tech: ["Magento 2", "Laravel", "GraphQL", "Razorpay", "Multi-vendor"],
    related: ["pahadibhai", "dell-store", "plantshed", "raintree"],
  },
  {
    slug: "ai-integrations",
    image: "/work/sahucodex/cover-0.jpg",
    icon: "sparkles",
    accent: "#ff3d7f",
    title: { en: "AI integrations", hi: "AI इंटीग्रेशन" },
    tagline: {
      en: "Assistants, voice agents, RAG search and AI features that ship to production — not just demos.",
      hi: "असिस्टेंट, वॉइस एजेंट, RAG सर्च और ऐसे AI फ़ीचर जो प्रोडक्शन में चलें — सिर्फ़ डेमो नहीं।",
    },
    intro: {
      en: "“Ask Sahu Bhai” helps Glide in Bir visitors pick the right flight; SahuCodeX gives coders hints, reviews and chat from a local model with RAG search. I add AI where it saves your users or your team real time — grounded in your own data, streamed into the UI, and measured once it is live.",
      hi: "“Ask Sahu Bhai” Glide in Bir के विज़िटर्स को सही फ़्लाइट चुनने में मदद करता है; SahuCodeX लोकल मॉडल और RAG सर्च से कोडर्स को हिंट, रिव्यू और चैट देता है। मैं AI वहाँ जोड़ता हूँ जहाँ यह आपके यूज़र या टीम का असली समय बचाए — आपके अपने डेटा पर आधारित, UI में स्ट्रीम होता, और लाइव होने के बाद मापा जाता।",
    },
    points: [
      { en: "Chat assistants grounded in your data (RAG)", hi: "आपके डेटा पर आधारित चैट असिस्टेंट (RAG)" },
      { en: "Voice agents for bookings & support", hi: "बुकिंग और सपोर्ट के लिए वॉइस एजेंट" },
      { en: "Local / open-source models or hosted LLM APIs", hi: "लोकल / ओपन-सोर्स मॉडल या होस्टेड LLM API" },
      { en: "Streaming UI, guardrails & usage tracking", hi: "स्ट्रीमिंग UI, गार्डरेल और यूसेज ट्रैकिंग" },
    ],
    tech: ["LLM APIs", "Ollama", "Qdrant RAG", "Vapi Voice", "FastAPI"],
    related: ["sahucodex", "glide-in-bir"],
  },
  {
    slug: "motion-3d",
    image: "/work/bobby-singh/cover-0.jpg",
    icon: "box",
    accent: "#ff6b35",
    title: { en: "Motion & 3D sites", hi: "मोशन और 3D वेबसाइट" },
    tagline: {
      en: "Cinematic, award-style websites with WebGL shaders, GSAP scroll stories and smooth scrolling.",
      hi: "WebGL शेडर, GSAP स्क्रॉल स्टोरी और स्मूद स्क्रॉलिंग वाली सिनेमैटिक, अवॉर्ड-स्टाइल वेबसाइट।",
    },
    intro: {
      en: "For brands that need to be remembered — like Bobby Singh's scroll-told story or Redbean's 3D redesign. Motion with meaning: every animation guides attention or explains something, stays at 60fps on mid-range phones, and respects people who prefer reduced motion.",
      hi: "उन ब्रांड्स के लिए जिन्हें याद रखा जाना चाहिए — जैसे Bobby Singh की स्क्रॉल पर चलती कहानी या Redbean का 3D रीडिज़ाइन। मतलब वाला मोशन: हर एनीमेशन ध्यान खींचे या कुछ समझाए, आम फ़ोन पर भी 60fps पर चले, और कम-मोशन पसंद करने वालों का ध्यान रखे।",
    },
    points: [
      { en: "GSAP / Framer Motion scroll storytelling", hi: "GSAP / Framer Motion स्क्रॉल स्टोरीटेलिंग" },
      { en: "Three.js / React Three Fiber scenes", hi: "Three.js / React Three Fiber सीन" },
      { en: "Lenis smooth scroll & page transitions", hi: "Lenis स्मूद स्क्रॉल और पेज ट्रांज़िशन" },
      { en: "Fast on mobile, accessible by default", hi: "मोबाइल पर तेज़, डिफ़ॉल्ट रूप से एक्सेसिबल" },
    ],
    tech: ["WebGL", "Three.js", "GSAP", "Lenis", "Framer Motion"],
    related: ["bobby-singh", "redbean-hospitality"],
  },
  {
    slug: "mobile-apps",
    image: "/work/pahadibhai/apps.jpg",
    icon: "smartphone",
    accent: "#ec4899",
    title: { en: "Mobile apps (iOS & Android)", hi: "मोबाइल ऐप (iOS और Android)" },
    tagline: {
      en: "One codebase, both stores — native-feeling apps that share the backend with your website.",
      hi: "एक कोडबेस, दोनों स्टोर — नेटिव जैसी ऐप जो आपकी वेबसाइट वाला ही बैकएंड इस्तेमाल करे।",
    },
    intro: {
      en: "Pahadibhai's customer app and Glido's rider and partner apps were built in Flutter on top of the same APIs as their web apps. One codebase for iOS and Android, push notifications, maps, social sign-in and store submission — an app that feels native and is easy to keep updated.",
      hi: "Pahadibhai की कस्टमर ऐप और Glido की राइडर व पार्टनर ऐप Flutter में, उनके वेब ऐप वाली ही API पर बनीं। iOS और Android के लिए एक कोडबेस, पुश नोटिफिकेशन, मैप, सोशल साइन-इन और स्टोर सबमिशन — नेटिव जैसी ऐप जिसे अपडेट करना आसान।",
    },
    points: [
      { en: "Flutter or React Native", hi: "Flutter या React Native" },
      { en: "Push notifications, maps & social sign-in", hi: "पुश नोटिफिकेशन, मैप और सोशल साइन-इन" },
      { en: "Play Store & App Store submission", hi: "Play Store और App Store सबमिशन" },
      { en: "Same backend as your web app", hi: "वेब ऐप वाला ही बैकएंड" },
    ],
    tech: ["Flutter", "Dart", "React Native", "Firebase", "Google Maps"],
    related: ["pahadibhai", "glido"],
  },
  {
    slug: "landing-pages",
    image: "/work/redbean/cover-0.jpg",
    icon: "rocket",
    accent: "#6366f1",
    title: { en: "Landing pages & websites", hi: "लैंडिंग पेज और वेबसाइट" },
    tagline: {
      en: "A fast, modern site that makes visitors trust you and take action.",
      hi: "तेज़, आधुनिक साइट जो विज़िटर का भरोसा जीते और कार्रवाई करवाए।",
    },
    intro: {
      en: "Your website is often the first conversation a customer has with you. I design and build fast, mobile-first sites with clear messaging, strong calls to action and the tracking you need to know what works — so ad spend and search traffic turn into enquiries instead of bounces.",
      hi: "आपकी वेबसाइट अक्सर ग्राहक से आपकी पहली बातचीत होती है। मैं तेज़, मोबाइल-फर्स्ट साइट बनाता हूँ — साफ़ मैसेज, मज़बूत कॉल-टू-एक्शन और ज़रूरी ट्रैकिंग के साथ — ताकि ऐड और सर्च से आया ट्रैफ़िक पूछताछ में बदले, लौट न जाए।",
    },
    points: [
      { en: "Conversion-focused design & copy", hi: "कन्वर्ज़न पर केंद्रित डिज़ाइन और कॉपी" },
      { en: "Loads in under 2 seconds on mobile", hi: "मोबाइल पर 2 सेकंड से कम में लोड" },
      { en: "On-page SEO & analytics set up", hi: "ऑन-पेज SEO और एनालिटिक्स सेटअप" },
      { en: "Lead form, WhatsApp & call buttons", hi: "लीड फ़ॉर्म, WhatsApp और कॉल बटन" },
    ],
    tech: ["Next.js", "Tailwind CSS", "Vercel", "GA4"],
    related: ["redbean-hospitality", "mybirbilling"],
  },
  {
    slug: "crm",
    image: "/work/glido/cover-2.jpg",
    icon: "database",
    accent: "#14b8a6",
    title: { en: "CRM & custom software", hi: "CRM और कस्टम सॉफ़्टवेयर" },
    tagline: {
      en: "Your own CRM, billing or operations system — built around how you work.",
      hi: "आपका अपना CRM, बिलिंग या ऑपरेशन सिस्टम — आपके काम के तरीके पर बना।",
    },
    intro: {
      en: "Spreadsheets and WhatsApp threads break as you grow. I build CRMs and operations systems around how your team already works — lead pipelines, quotes, invoices, reminders and automations — so nothing slips and you can see the business at a glance.",
      hi: "बढ़ने के साथ स्प्रेडशीट और WhatsApp थ्रेड काम नहीं आते। मैं आपकी टीम के काम के तरीके पर CRM और ऑपरेशन सिस्टम बनाता हूँ — लीड पाइपलाइन, कोटेशन, इनवॉइस, रिमाइंडर और ऑटोमेशन — ताकि कुछ न छूटे और पूरा बिज़नेस एक नज़र में दिखे।",
    },
    points: [
      { en: "Lead pipeline & follow-up reminders", hi: "लीड पाइपलाइन और फ़ॉलो-अप रिमाइंडर" },
      { en: "Quotes, invoices & payment status", hi: "कोटेशन, इनवॉइस और पेमेंट स्टेटस" },
      { en: "WhatsApp & email automation", hi: "WhatsApp और ईमेल ऑटोमेशन" },
      { en: "Team access with permissions", hi: "अनुमतियों के साथ टीम एक्सेस" },
    ],
    tech: ["Laravel", "Next.js", "PostgreSQL", "WhatsApp Cloud API"],
    related: ["glide-in-bir", "glido"],
  },
  {
    slug: "seo",
    image: "/work/glide-in-bir/sections-2.jpg",
    icon: "search",
    accent: "#10b981",
    title: { en: "SEO", hi: "SEO" },
    tagline: {
      en: "Get found on Google for what your customers actually search.",
      hi: "जो आपके ग्राहक सर्च करते हैं, उसके लिए Google पर दिखें।",
    },
    intro: {
      en: "SEO that starts with the code: fast pages, clean structure, schema and Core Web Vitals. Then the content plan and local SEO that put you in front of people searching for exactly what you offer — with monthly reports in plain numbers.",
      hi: "SEO जो कोड से शुरू होता है: तेज़ पेज, साफ़ स्ट्रक्चर, schema और Core Web Vitals। फिर कंटेंट प्लान और लोकल SEO जो आपको ठीक उन लोगों के सामने लाए जो आपकी सेवा खोज रहे हैं — हर महीने आसान आँकड़ों में रिपोर्ट।",
    },
    points: [
      { en: "Technical SEO audit & fixes", hi: "तकनीकी SEO ऑडिट और सुधार" },
      { en: "Keyword & content plan", hi: "कीवर्ड और कंटेंट प्लान" },
      { en: "Local SEO & Google Business Profile", hi: "लोकल SEO और Google Business प्रोफ़ाइल" },
      { en: "Monthly ranking reports", hi: "मासिक रैंकिंग रिपोर्ट" },
    ],
    tech: ["Search Console", "GA4", "Schema.org", "Ahrefs"],
    related: ["glide-in-bir", "mybirbilling"],
  },
  {
    slug: "google-ads",
    image: "/work/glideinbir.webp",
    icon: "target",
    accent: "#f59e0b",
    title: { en: "Google Ads", hi: "Google Ads" },
    tagline: {
      en: "Paid campaigns that bring qualified leads, not just clicks.",
      hi: "ऐसे पेड कैंपेन जो सिर्फ़ क्लिक नहीं, असली लीड लाएँ।",
    },
    intro: {
      en: "Search campaigns built around buyer intent, matched with landing pages designed to convert and tracking that counts calls, WhatsApp clicks and form leads. Weekly optimisation keeps cost per lead falling instead of quietly burning budget.",
      hi: "खरीदने के इरादे पर बने सर्च कैंपेन, कन्वर्ट करने वाले लैंडिंग पेज और ऐसी ट्रैकिंग जो कॉल, WhatsApp क्लिक और फ़ॉर्म लीड गिने। साप्ताहिक ऑप्टिमाइज़ेशन से प्रति लीड खर्च घटता है, बजट चुपचाप नहीं जलता।",
    },
    points: [
      { en: "Campaign setup & keyword research", hi: "कैंपेन सेटअप और कीवर्ड रिसर्च" },
      { en: "High-converting landing pages", hi: "ज़्यादा कन्वर्ट करने वाले लैंडिंग पेज" },
      { en: "Conversion tracking & call tracking", hi: "कन्वर्ज़न और कॉल ट्रैकिंग" },
      { en: "Weekly optimisation & spend control", hi: "साप्ताहिक ऑप्टिमाइज़ेशन और खर्च नियंत्रण" },
    ],
    tech: ["Google Ads", "Tag Manager", "GA4", "Looker Studio"],
    related: ["glide-in-bir"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function serviceTitle(service: Service, locale: Locale) {
  return service.title[locale] ?? service.title.en;
}
