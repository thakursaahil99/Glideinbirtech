import type { Bilingual } from "@/content/services";

export type SkillGroup = {
  group: Bilingual;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: { en: "Frontend", hi: "फ्रंटएंड" },
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 82 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    group: { en: "Backend & Commerce", hi: "बैकएंड और कॉमर्स" },
    items: [
      { name: "Magento 2", level: 88 },
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 87 },
      { name: "MySQL", level: 83 },
      { name: "Python / Flask", level: 72 },
      { name: "REST APIs", level: 86 },
    ],
  },
  {
    group: { en: "Mobile & 3D", hi: "मोबाइल और 3D" },
    items: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 74 },
      { name: "Three.js", level: 70 },
      { name: "GSAP", level: 78 },
    ],
  },
  {
    group: { en: "Growth & data", hi: "ग्रोथ और डेटा" },
    items: [
      { name: "SEO", level: 82 },
      { name: "Google Ads", level: 78 },
      { name: "GA4 / Search Console", level: 84 },
      { name: "Core Web Vitals", level: 88 },
    ],
  },
];

export const toolbox = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "Laravel",
  "Magento 2",
  "PHP",
  "MySQL",
  "Python / Flask",
  "REST / GraphQL",
  "React Native",
  "Flutter",
  "Prisma",
  "PostgreSQL",
  "Razorpay",
  "Git",
  "Docker",
  "Vercel",
  "GSAP",
  "Three.js",
  "GA4",
  "Google Ads",
];
