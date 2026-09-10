import type { Bilingual } from "@/content/services";

export type SkillGroup = {
  group: Bilingual;
  icon: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: { en: "Languages", hi: "भाषाएँ" },
    icon: "code",
    items: [
      { name: "JavaScript", level: 93 },
      { name: "TypeScript", level: 88 },
      { name: "PHP", level: 87 },
      { name: "Python", level: 74 },
      { name: "SQL", level: 83 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    group: { en: "Frontend", hi: "फ्रंटएंड" },
    icon: "layout",
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 91 },
      { name: "Vue.js", level: 82 },
      { name: "GSAP / Framer Motion", level: 80 },
      { name: "Bootstrap / Sass", level: 88 },
    ],
  },
  {
    group: { en: "Backend & Commerce", hi: "बैकएंड और कॉमर्स" },
    icon: "server",
    items: [
      { name: "Magento 2", level: 88 },
      { name: "Laravel", level: 86 },
      { name: "Node.js / Nest", level: 84 },
      { name: "Django / Flask", level: 74 },
      { name: "REST / GraphQL", level: 86 },
      { name: "MySQL / PostgreSQL", level: 84 },
    ],
  },
  {
    group: { en: "Mobile & CMS", hi: "मोबाइल और CMS" },
    icon: "smartphone",
    items: [
      { name: "React Native / Expo", level: 80 },
      { name: "Flutter", level: 74 },
      { name: "WordPress", level: 85 },
      { name: "Shopify / WooCommerce", level: 80 },
      { name: "Strapi / Sanity", level: 78 },
    ],
  },
  {
    group: { en: "Growth & data", hi: "ग्रोथ और डेटा" },
    icon: "line-chart",
    items: [
      { name: "SEO", level: 84 },
      { name: "Google Ads", level: 78 },
      { name: "GA4 / Tag Manager", level: 85 },
      { name: "Core Web Vitals", level: 90 },
      { name: "Conversion tracking", level: 82 },
    ],
  },
];

export const toolbox = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "PHP",
  "Python",
  "Tailwind CSS",
  "Vue.js",
  "Laravel",
  "Magento 2",
  "WordPress",
  "Shopify",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "REST / GraphQL",
  "React Native",
  "Flutter",
  "Node.js",
  "Redis",
  "Razorpay",
  "Stripe",
  "Docker",
  "AWS",
  "Vercel",
  "Cloudflare",
  "GitHub Actions",
  "GSAP",
  "Framer Motion",
  "GA4",
  "Google Ads",
];
