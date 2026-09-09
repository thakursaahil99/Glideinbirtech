import type { Bilingual } from "@/content/services";

export type StackGroup = {
  label: Bilingual;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    label: { en: "Frontend", hi: "फ्रंटएंड" },
    items: ["React", "Next.js", "Vue / Nuxt", "TypeScript", "Tailwind CSS", "Astro"],
  },
  {
    label: { en: "Backend", hi: "बैकएंड" },
    items: ["Node.js", "Nest.js", "Django", "Laravel", "FastAPI", "Go"],
  },
  {
    label: { en: "Mobile", hi: "मोबाइल" },
    items: ["React Native", "Expo", "Flutter", "Kotlin", "Swift"],
  },
  {
    label: { en: "Databases", hi: "डेटाबेस" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis", "Prisma"],
  },
  {
    label: { en: "Cloud & DevOps", hi: "क्लाउड और DevOps" },
    items: ["Vercel", "AWS", "Cloudflare", "Docker", "GitHub Actions", "Railway"],
  },
  {
    label: { en: "Marketing & data", hi: "मार्केटिंग और डेटा" },
    items: ["GA4", "Google Ads", "Search Console", "Meta Pixel", "Looker Studio"],
  },
];
