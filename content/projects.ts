import type { Bilingual } from "@/content/services";

/**
 * PLACEHOLDER case studies. Replace with real projects.
 * - `image` can be a local file in /public/work or a remote URL (unsplash allowed in next.config.ts).
 * - `url` is optional (live site link).
 */
export type Project = {
  slug: string;
  name: string;
  category: Bilingual;
  summary: Bilingual;
  result: Bilingual;
  tags: string[];
  image: string;
  url?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "glideinbir-travel",
    name: "Glideinbir",
    category: { en: "Website + Booking", hi: "वेबसाइट + बुकिंग" },
    summary: {
      en: "A booking-first travel site for paragliding, courses, stays and transport in Bir Billing.",
      hi: "बीर बिलिंग में पैराग्लाइडिंग, कोर्स, ठहरने और ट्रांसपोर्ट के लिए बुकिंग-केंद्रित ट्रैवल साइट।",
    },
    result: {
      en: "One place for flights, courses and hotels with instant enquiry.",
      hi: "उड़ान, कोर्स और होटल एक ही जगह, तुरंत पूछताछ के साथ।",
    },
    tags: ["Next.js", "Tailwind", "SEO"],
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=70",
    url: "https://glideinbir.vercel.app",
  },
  {
    slug: "retail-crm",
    name: "RetailDesk CRM",
    category: { en: "Custom CRM", hi: "कस्टम CRM" },
    summary: {
      en: "A lead-to-invoice CRM for a small retail chain with WhatsApp follow-ups.",
      hi: "छोटी रिटेल चेन के लिए लीड-से-इनवॉइस CRM, WhatsApp फ़ॉलो-अप के साथ।",
    },
    result: {
      en: "Placeholder: ~30% faster follow-ups, zero leads lost.",
      hi: "नमूना: ~30% तेज़ फ़ॉलो-अप, कोई लीड नहीं छूटी।",
    },
    tags: ["React", "Node", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70",
    placeholder: true,
  },
  {
    slug: "field-service-app",
    name: "OnField",
    category: { en: "Mobile App", hi: "मोबाइल ऐप" },
    summary: {
      en: "An Android + iOS app for field technicians to log jobs and collect payments offline.",
      hi: "फ़ील्ड तकनीशियनों के लिए Android + iOS ऐप — काम दर्ज करें और ऑफ़लाइन पेमेंट लें।",
    },
    result: {
      en: "Placeholder: paperwork replaced, same-day job reports.",
      hi: "नमूना: कागज़ी काम खत्म, उसी दिन जॉब रिपोर्ट।",
    },
    tags: ["React Native", "Expo", "Supabase"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=70",
    placeholder: true,
  },
  {
    slug: "clinic-ads",
    name: "City Dental — Google Ads",
    category: { en: "Google Ads + Landing", hi: "Google Ads + लैंडिंग" },
    summary: {
      en: "Search campaigns plus a dedicated booking landing page for a multi-branch clinic.",
      hi: "मल्टी-ब्रांच क्लिनिक के लिए सर्च कैंपेन और एक अलग बुकिंग लैंडिंग पेज।",
    },
    result: {
      en: "Placeholder: cost per booking down, calendar full 2 weeks ahead.",
      hi: "नमूना: प्रति बुकिंग लागत कम, कैलेंडर 2 हफ़्ते आगे तक भरा।",
    },
    tags: ["Google Ads", "GA4", "CRO"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=70",
    placeholder: true,
  },
];
