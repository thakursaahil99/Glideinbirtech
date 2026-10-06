import type { Bilingual } from "@/content/services";

/**
 * Real projects from Sahil Thakur's portfolio (sahilportfolio-tau.vercel.app)
 * and GitHub (github.com/thakursaahil99). Card text is bilingual; the deep
 * case-study prose (challenge / solution / highlights) is English only.
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
  gallery?: string[];
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
    category: { en: "Platform · Booking", hi: "प्लेटफ़ॉर्म · बुकिंग" },
    role: "Founder & Full-Stack Developer",
    summary: {
      en: "An all-in-one booking platform for Bir Billing — tandem flights, certification courses, hotels, camping and travel with real-time availability, Razorpay payments and an AI voice assistant.",
      hi: "बीर बिलिंग के लिए ऑल-इन-वन बुकिंग प्लेटफ़ॉर्म — टैंडम फ़्लाइट, सर्टिफ़िकेशन कोर्स, होटल, कैंपिंग और ट्रैवल; रियल-टाइम उपलब्धता, Razorpay पेमेंट और AI वॉइस असिस्टेंट के साथ।",
    },
    result: {
      en: "One cart, real-time slots, payments, customer + operator dashboards, and an AI assistant.",
      hi: "एक कार्ट, रियल-टाइम स्लॉट, पेमेंट, कस्टमर + ऑपरेटर डैशबोर्ड, और एक AI असिस्टेंट।",
    },
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Razorpay", "AI"],
    image: "/work/glideinbir.webp",
    gallery: [
      "/work/glide-in-bir/sections-1.jpg",
      "/work/glide-in-bir/sections-2.jpg",
      "/work/glide-in-bir/sections-3.jpg",
    ],
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
      "“Ask Sahu Bhai” — AI voice assistant for trip planning & support",
      "10,000+ flights and 500+ certifications tracked",
    ],
  },
  {
    slug: "glido",
    name: "Glido",
    year: "2026",
    category: { en: "Platform · Super-app", hi: "प्लेटफ़ॉर्म · सुपर-ऐप" },
    role: "Full-Stack Developer",
    summary: {
      en: "A local-commerce super-app — browse, cart, checkout, pay and track food orders live — with a NestJS API, real-time Socket.IO tracking, an admin panel and Flutter apps for riders and partners.",
      hi: "लोकल-कॉमर्स सुपर-ऐप — ब्राउज़, कार्ट, चेकआउट, पेमेंट और फ़ूड ऑर्डर की लाइव ट्रैकिंग — NestJS API, Socket.IO रियल-टाइम ट्रैकिंग, एडमिन पैनल और राइडर व पार्टनर के लिए Flutter ऐप।",
    },
    result: {
      en: "Food, grocery & cab in one app, with a validated order state machine and live tracking.",
      hi: "फ़ूड, ग्रोसरी और कैब एक ऐप में — वैलिडेटेड ऑर्डर स्टेट मशीन और लाइव ट्रैकिंग के साथ।",
    },
    tech: ["Next.js", "NestJS", "Node.js", "Socket.IO", "PostgreSQL", "Flutter"],
    image: "/work/glido/cover-0.jpg",
    gallery: ["/work/glido/cover-1.jpg", "/work/glido/cover-2.jpg"],
    accent: "#22c55e",
    url: "https://web-sahilt.vercel.app",
    featured: true,
    challenge:
      "A complete local-commerce platform: food ordering for authenticated users, real-time order status, payments, and separate interfaces for customers, administrators, delivery riders and restaurant partners.",
    solution:
      "Everything is real — PostgreSQL with DB-level enums and constraints, OTP auth with JWT refresh tokens, server-side pricing and a validated order state machine, live tracking over WebSockets and a full admin panel. Built as an npm-workspaces monorepo with Docker Compose.",
    highlights: [
      "Customer web app with restaurant search, menus, cart, checkout and order history",
      "Live order tracking via Socket.IO with validated status transitions",
      "OTP login using JWT access / refresh tokens",
      "Admin dashboard — stats, restaurant approval, menu management, coupons",
      "Razorpay payments with mock fallback; Swagger API docs",
      "Flutter apps for delivery riders and restaurant partners",
    ],
  },
  {
    slug: "sahucodex",
    name: "SahuCodeX",
    year: "2026",
    category: { en: "Web app · AI", hi: "वेब ऐप · AI" },
    role: "Full-Stack & AI Developer",
    summary: {
      en: "Code. Compete. Learn. An online judge with a sandboxed code runner, ICPC-style contests, a developer community and a local AI assistant with RAG search — all on open-source infrastructure.",
      hi: "कोड करो, मुक़ाबला करो, सीखो। सैंडबॉक्स्ड कोड रनर, ICPC-स्टाइल कॉन्टेस्ट, डेवलपर कम्युनिटी और RAG सर्च वाले लोकल AI असिस्टेंट के साथ ऑनलाइन जज — पूरी तरह ओपन-सोर्स इंफ्रास्ट्रक्चर पर।",
    },
    result: {
      en: "Deterministic sandboxed verdicts, live contest standings and 900+ automated tests.",
      hi: "सैंडबॉक्स में सटीक नतीजे, लाइव कॉन्टेस्ट स्टैंडिंग और 900+ ऑटोमेटेड टेस्ट।",
    },
    tech: ["Next.js", "FastAPI", "Python", "Redis", "Docker", "AI/RAG"],
    image: "/work/sahucodex/cover-0.jpg",
    gallery: ["/work/sahucodex/cover-1.jpg"],
    accent: "#8b6bff",
    url: "https://sahucodex.vercel.app",
    featured: true,
    challenge:
      "A complete competitive-programming platform needs isolated code execution, real-time contest management and AI help that is genuinely useful — without paying per-token for every hint.",
    solution:
      "Built SahuJudge, a sandboxed runner with deterministic verdicts; a Monaco editor workspace for Python, C++ and JavaScript; ICPC-style contests with live standings; and SahuCodeX AI — streaming chat, hints and code reviews from a local Ollama model with Qdrant RAG retrieval. Celery + Redis handle the queue; Prometheus and Grafana watch it all.",
    highlights: [
      "Isolated sandbox execution with deterministic verdicts",
      "Monaco editor for Python, C++ and JavaScript with autosaved drafts",
      "ICPC-style contests with live standings",
      "AI hints, code reviews and chat via local Ollama + Qdrant RAG",
      "Profiles with streaks, achievements and an activity calendar",
      "Prometheus metrics, Grafana dashboards and 900+ automated tests",
    ],
  },
  {
    slug: "pahadibhai",
    name: "Pahadibhai",
    year: "2025",
    category: { en: "eCommerce · Super-app", hi: "ईकॉमर्स · सुपर-ऐप" },
    role: "Full-Stack Developer",
    summary: {
      en: "A multi-vendor super-app for the mountains — food, grocery, pharmacy, eCommerce, parcel delivery and cab booking in one platform, with live location search and Google Maps store discovery.",
      hi: "पहाड़ों के लिए मल्टी-वेंडर सुपर-ऐप — फ़ूड, ग्रोसरी, फ़ार्मेसी, ईकॉमर्स, पार्सल डिलीवरी और कैब बुकिंग एक ही प्लेटफ़ॉर्म पर, लाइव लोकेशन सर्च और Google Maps स्टोर डिस्कवरी के साथ।",
    },
    result: {
      en: "City-style convenience for mountain towns — live at pahadibhai.in.",
      hi: "पहाड़ी शहरों के लिए शहर जैसी सुविधा — pahadibhai.in पर लाइव।",
    },
    tech: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "Firebase"],
    image: "/work/pahadibhai/cover-0.jpg",
    gallery: ["/work/pahadibhai/apps.jpg"],
    accent: "#ff7a3d",
    url: "https://pahadibhai.in",
    featured: true,
    challenge:
      "Mountain towns have none of the multi-service convenience cities take for granted — and the vendors that exist are hard to discover.",
    solution:
      "A Laravel backend powering a Flutter app and web front-end from one codebase, with location-based store discovery, social authentication, Firebase push and a growing vendor network across six service modules.",
    highlights: [
      "Food, grocery, pharmacy, eCommerce, parcel and cab modules",
      "Location search and Google Maps store discovery",
      "Google, Facebook and Apple sign-in",
      "Firebase push notifications",
      "Multi-language UI with light / dark themes",
    ],
  },
  {
    slug: "redbean-hospitality",
    name: "Redbean Hospitality",
    year: "2025",
    category: { en: "Corporate · 3D", hi: "कॉर्पोरेट · 3D" },
    role: "Web Developer",
    summary: {
      en: "The web presence for Redbean Hospitality, a pan-India contract kitchen & cafe management company since 2005 — the live corporate site plus four Next.js and React redesigns, including a 3D one.",
      hi: "Redbean Hospitality की वेब मौजूदगी — 2005 से पैन-इंडिया कॉन्ट्रैक्ट किचन और कैफ़े मैनेजमेंट कंपनी — लाइव कॉर्पोरेट साइट और चार Next.js / React रीडिज़ाइन, जिनमें एक 3D है।",
    },
    result: {
      en: "A food-service company that feels as premium as the kitchens it runs.",
      hi: "एक फ़ूड-सर्विस कंपनी जो अपनी किचन जितनी ही प्रीमियम दिखे।",
    },
    tech: ["Next.js", "React", "Three.js", "Framer Motion", "Bootstrap"],
    image: "/work/redbean/cover-0.jpg",
    gallery: ["/work/redbean/3d-0.jpg", "/work/redbean/official-0.jpg", "/work/redbean/full-0.jpg"],
    accent: "#e11d48",
    url: "https://redbeanhospitality.com",
    featured: true,
    challenge:
      "Make a food-service company — serving healthcare, education, corporate and industrial clients — feel as premium and trustworthy as the kitchens it runs.",
    solution:
      "Shipped the live corporate site, then explored four Next.js / React redesigns in different visual directions — editorial serif, collage, minimal and a full 3D experience in React Three Fiber — with validated lead capture throughout.",
    highlights: [
      "Live corporate site with service verticals",
      "Four redesigns — editorial serif, 3D concept, collage and minimal",
      "Interactive 3D experience with React Three Fiber",
      "Lead capture with React Hook Form + Zod validation",
    ],
  },
  {
    slug: "bobby-singh",
    name: "Bobby Singh",
    year: "2026",
    category: { en: "Personal brand · Motion", hi: "पर्सनल ब्रांड · मोशन" },
    role: "Frontend Developer",
    summary: {
      en: "A cinematic personal-brand site for Bobby Singh — founder of Redbeans Hospitality and Shark Tank India contestant — with GSAP scroll storytelling, Lenis smooth scrolling and a consultation funnel.",
      hi: "Bobby Singh के लिए सिनेमैटिक पर्सनल-ब्रांड साइट — Redbeans Hospitality के फ़ाउंडर और Shark Tank India प्रतिभागी — GSAP स्क्रॉल स्टोरीटेलिंग, Lenis स्मूद स्क्रॉल और कंसल्टेशन फ़नल के साथ।",
    },
    result: {
      en: "20 years of kitchen expertise told as a scroll story that books consultations.",
      hi: "20 साल का किचन अनुभव, एक स्क्रॉल-स्टोरी में जो कंसल्टेशन बुक कराती है।",
    },
    tech: ["Next.js", "TypeScript", "GSAP", "Lenis", "Framer Motion"],
    image: "/work/bobby-singh/cover-0.jpg",
    gallery: ["/work/bobby-singh/cover-1.jpg", "/work/bobby-singh/v2-0.jpg"],
    accent: "#eab308",
    url: "https://bobbysinghofficial.vercel.app",
    challenge:
      "Bobby Singh needed a website reflecting 20 years of institutional-kitchen expertise that felt bold and conversion-focused enough to attract coaching clients.",
    solution:
      "Shipped two versions: an editorial build using GSAP and Lenis for scroll-driven storytelling, and a Framer Motion alternative leaning on Shark Tank credibility — both ending in a consultation funnel.",
    highlights: [
      "Scroll-driven storytelling with GSAP and Lenis",
      "Consultation funnel with lead form",
      "Services, CGR programme and achievements sections",
      "Vercel Analytics & Speed Insights",
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
    image: "/work/dell-store/cover-0.jpg",
    gallery: ["/work/dell-store/featured.jpg", "/work/dell-store/xps.jpg", "/work/dell-store/support.jpg"],
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
    image: "/work/plantshed/cover-0.jpg",
    gallery: ["/work/plantshed/collections.jpg", "/work/plantshed/picks.jpg", "/work/plantshed/cafes.jpg"],
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
