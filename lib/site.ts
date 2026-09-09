/**
 * Central site configuration. Safe to edit — everything here is presentational.
 */

export const siteConfig = {
  name: "Glideinbir Tech",
  legalName: "Glideinbir Tech",
  tagline: {
    en: "We build websites, web apps & mobile apps that bring you customers.",
    hi: "हम ऐसी वेबसाइट, वेब ऐप और मोबाइल ऐप बनाते हैं जो आपके ग्राहक बढ़ाएँ।",
  },
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://glideinbir-tech.vercel.app").replace(/\/$/, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "krrishredbean@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+91 98053 38877",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919805338877",
  location: "Bir, Himachal Pradesh, India",
  responseTime: {
    en: "We reply within 4 working hours.",
    hi: "हम 4 कार्य-घंटों में जवाब देते हैं।",
  },
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}
