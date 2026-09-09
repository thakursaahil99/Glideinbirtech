/**
 * Central site configuration. Safe to edit — everything here is presentational.
 */

export const siteConfig = {
  name: "Glideinbir Tech",
  person: "Sahil Thakur",
  studio: "Glideinbir Tech",
  role: {
    en: "Full-stack developer & digital studio",
    hi: "फुल-स्टैक डेवलपर और डिजिटल स्टूडियो",
  },
  tagline: {
    en: "I build websites, web apps and mobile apps that bring businesses customers — and run the SEO and ads that feed them.",
    hi: "मैं ऐसी वेबसाइट, वेब ऐप और मोबाइल ऐप बनाता हूँ जो बिज़नेस को ग्राहक दिलाएँ — और उन्हें भरने वाला SEO व ऐड्स भी चलाता हूँ।",
  },
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://glideinbir-tech.vercel.app").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sahilthakur961999@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 98053 38877",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919805338877",
  location: "Bir Billing, Himachal Pradesh",
  responseTime: {
    en: "Replies within 4 working hours.",
    hi: "4 कार्य-घंटों में जवाब।",
  },
  socials: {
    github: "https://github.com/thakursaahil99",
    linkedin: "https://www.linkedin.com/in/sahil-thakur",
    glideinbir: "https://glideinbir.vercel.app",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}
