import type { Bilingual } from "@/content/services";

/**
 * Real projects from Sahil Thakur's portfolio. Card text is bilingual; the
 * deep case-study prose (challenge / solution / highlights) is English only.
 */
export type Project = {
  slug: string;
  name: string;
  year: string;
  category: Bilingual;
  role: string;
  summary: Bilingual;
  result: Bilingual;
  tech: string[];
  image: string;
  accent: string;
  url?: string;
  featured?: boolean;
  challenge: string;
  solution: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "glide-in-bir",
    name: "Glide in Bir",
    year: "2026",
    category: { en: "Product · Booking platform", hi: "प्रोडक्ट · बुकिंग प्लेटफ़ॉर्म" },
    role: "Founder · Full-stack developer",
    summary: {
      en: "An all-in-one booking platform for paragliding in Bir Billing — flights, courses, stays, camps and travel in one checkout.",
      hi: "बीर बिलिंग में पैराग्लाइडिंग के लिए ऑल-इन-वन बुकिंग प्लेटफ़ॉर्म — उड़ान, कोर्स, ठहरना, कैंप और ट्रैवल एक ही चेकआउट में।",
    },
    result: {
      en: "One cart, real-time slots, payments, customer + operator dashboards, and an AI assistant.",
      hi: "एक कार्ट, रियल-टाइम स्लॉट, पेमेंट, कस्टमर + ऑपरेटर डैशबोर्ड, और एक AI असिस्टेंट।",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Razorpay"],
    image: "/work/glideinbir.webp",
    accent: "#ff7a1a",
    url: "https://glideinbir.vercel.app",
    featured: true,
    challenge:
      "Bir Billing's paragliding economy runs on WhatsApp and cash. Tandem flights, P1–P4 courses, hostels, camping and Delhi transfers are all booked separately, availability is never real-time, and there is no system of record for operators.",
    solution:
      "Built the whole stack — a unified catalogue and cart across every service type, real-time availability locking, Razorpay payments with flexible cancellation, a customer dashboard for bookings, and an operator admin panel for inventory, slots and payouts. “Ask Sahu Bhai” is an AI assistant that answers trip questions and helps visitors pick the right flight or course.",
    highlights: [
      "One cart across flights, courses, stays, camps and travel",
      "Real-time slot locking + Razorpay checkout & refunds",
      "Customer dashboard + operator admin panel (inventory, slots, payouts)",
      "“Ask Sahu Bhai” — AI assistant for trip planning & support",
      "10,000+ flights and 500+ certifications tracked",
    ],
  },
  {
    slug: "dell-store",
    name: "Dell Store",
    year: "2025",
    category: { en: "Full-stack eCommerce", hi: "फुल-स्टैक ईकॉमर्स" },
    role: "Full-stack developer",
    summary: {
      en: "A full-stack Magento 2 storefront with a custom catalog, checkout and CMS-driven content.",
      hi: "कस्टम कैटलॉग, चेकआउट और CMS-आधारित कंटेंट के साथ फुल-स्टैक Magento 2 स्टोरफ़्रंट।",
    },
    result: {
      en: "Marketing ships landing pages with no developer, storefront stays fast.",
      hi: "मार्केटिंग टीम बिना डेवलपर लैंडिंग पेज बनाती है, स्टोर तेज़ रहता है।",
    },
    tech: ["Magento 2", "PHP", "Tailwind CSS", "GraphQL"],
    image: "/work/dell-store.webp",
    accent: "#0f6fff",
    challenge:
      "A large catalog and a marketing team that needed to ship landing pages and merchandising changes without a developer in the loop — while keeping the storefront fast.",
    solution:
      "Built reusable CMS blocks and a component-driven theme, moved heavy catalog queries behind cache layers, and set a performance budget enforced in CI.",
    highlights: [
      "Component-based theme with a shared design system",
      "CMS blocks for no-code landing pages",
      "Catalog and cart performance tuning",
    ],
  },
  {
    slug: "pahadi-bhai",
    name: "Pahadi Bhai",
    year: "2024",
    category: { en: "Full-stack platform · Mobile", hi: "फुल-स्टैक प्लेटफ़ॉर्म · मोबाइल" },
    role: "Full-stack developer",
    summary: {
      en: "A Laravel backend powering a Flutter mobile client and an operations admin panel.",
      hi: "एक Laravel बैकएंड जो Flutter मोबाइल ऐप और ऑपरेशन एडमिन पैनल दोनों चलाता है।",
    },
    result: {
      en: "One versioned API serves the customer app and the ops dashboard.",
      hi: "एक वर्ज़न्ड API कस्टमर ऐप और ऑप्स डैशबोर्ड दोनों को चलाती है।",
    },
    tech: ["Laravel", "Flutter", "MySQL", "REST API"],
    image: "/work/pahadi-bhai.webp",
    accent: "#ff7a3d",
    challenge:
      "One backend had to serve a customer mobile app and an operations dashboard with different needs.",
    solution:
      "Designed a versioned REST API, role-based admin, and background jobs for the heavy work — keeping the mobile client thin.",
    highlights: [
      "Versioned REST API for web + mobile",
      "Role-based admin dashboard",
      "Queued jobs for notifications and reports",
    ],
  },
  {
    slug: "plantshed",
    name: "PlantShed",
    year: "2024",
    category: { en: "Frontend storefront", hi: "फ्रंटएंड स्टोरफ़्रंट" },
    role: "Frontend developer",
    summary: {
      en: "A storefront rebuild — new design system, product pages and a smoother cart-to-checkout.",
      hi: "स्टोरफ़्रंट रीबिल्ड — नया डिज़ाइन सिस्टम, प्रोडक्ट पेज और आसान कार्ट-टू-चेकआउट।",
    },
    result: {
      en: "Lower layout shift and JS weight on the pages that drive conversion.",
      hi: "कन्वर्ज़न वाले पेजों पर कम लेआउट शिफ्ट और कम JS वज़न।",
    },
    tech: ["Magento 2", "Tailwind CSS", "Alpine.js"],
    image: "/work/plantshed.webp",
    accent: "#3fbf6b",
    challenge: "An ageing theme with inconsistent UI and slow product pages hurting conversion.",
    solution:
      "Rebuilt the front-end on a Tailwind design system, streamlined the PDP and cart, and cut layout shift and JS weight across key templates.",
    highlights: [
      "Design-system-driven rebuild",
      "Reworked product and cart UX",
      "Reduced CLS and JavaScript payload",
    ],
  },
  {
    slug: "raintree",
    name: "Raintree",
    year: "2024",
    category: { en: "Full-stack application", hi: "फुल-स्टैक एप्लिकेशन" },
    role: "Full-stack developer",
    summary: {
      en: "A Magento 2 application with custom modules and third-party integrations.",
      hi: "कस्टम मॉड्यूल और थर्ड-पार्टी इंटीग्रेशन के साथ Magento 2 एप्लिकेशन।",
    },
    result: {
      en: "Bespoke business rules without forking the platform.",
      hi: "प्लेटफ़ॉर्म को फ़ोर्क किए बिना कस्टम बिज़नेस रूल्स।",
    },
    tech: ["Magento 2", "PHP", "Tailwind CSS"],
    image: "/work/raintree.webp",
    accent: "#28c0c8",
    challenge: "Bespoke business rules that did not map to stock Magento behaviour.",
    solution:
      "Wrote focused custom modules with clean extension points, plus integration layers for the external services the business depended on.",
    highlights: [
      "Custom modules with clean plugins / observers",
      "Third-party service integrations",
      "Theme and checkout customization",
    ],
  },
  {
    slug: "meraj",
    name: "Meraj",
    year: "2023",
    category: { en: "Full-stack application", hi: "फुल-स्टैक एप्लिकेशन" },
    role: "Full-stack developer",
    summary: {
      en: "A Magento 2 build — custom theming, a tailored checkout and API work.",
      hi: "Magento 2 बिल्ड — कस्टम थीमिंग, टेलर्ड चेकआउट और API काम।",
    },
    result: {
      en: "A brand-specific experience with upgrade-safe, override-free customization.",
      hi: "अपग्रेड-सेफ, ओवरराइड-फ्री कस्टमाइज़ेशन के साथ ब्रांड-विशिष्ट अनुभव।",
    },
    tech: ["Magento 2", "PHP", "Tailwind CSS"],
    image: "/work/meraj.webp",
    accent: "#a678ff",
    challenge: "A brand-specific experience that needed to feel custom without forking the platform.",
    solution:
      "Layered a custom theme and checkout steps on top of Magento, keeping upgrades safe with override-free customization.",
    highlights: ["Brand-led custom theme", "Tailored checkout steps", "API endpoints for external tooling"],
  },
  {
    slug: "mybirbilling",
    name: "Mybirbilling",
    year: "2023",
    category: { en: "Design & development", hi: "डिज़ाइन और डेवलपमेंट" },
    role: "Designer & developer",
    summary: {
      en: "Product design and development — a UI system and a marketing site for a billing product.",
      hi: "प्रोडक्ट डिज़ाइन और डेवलपमेंट — बिलिंग प्रोडक्ट के लिए UI सिस्टम और मार्केटिंग साइट।",
    },
    result: {
      en: "A design system from scratch and a fast Next.js marketing site that converts.",
      hi: "शुरू से बना डिज़ाइन सिस्टम और तेज़, कन्वर्ट करने वाली Next.js मार्केटिंग साइट।",
    },
    tech: ["Next.js", "Tailwind CSS", "UI / UX"],
    image: "/work/mybirbilling.webp",
    accent: "#ff2e97",
    challenge:
      "A billing product with no consistent visual language and a marketing site that did not convert.",
    solution:
      "Built a small design system and a fast Next.js marketing site with clear messaging and a considered information hierarchy.",
    highlights: ["Design system from scratch", "Fast Next.js marketing site", "Messaging and IA overhaul"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
