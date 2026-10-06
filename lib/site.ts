/**
 * Central site configuration. Safe to edit — everything here is presentational.
 */

// Trim + fall back on blank OR unset env vars (Vercel can inject "" for an
// empty-valued variable, which `??` would not catch).
function env(value: string | undefined, fallback: string) {
  const v = value?.trim();
  return v && v.length > 0 ? v : fallback;
}

const rawUrl = env(process.env.NEXT_PUBLIC_SITE_URL, "https://glideinbir-tech.vercel.app");

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
  url: (/^https?:\/\//.test(rawUrl) ? rawUrl : `https://${rawUrl}`).replace(/\/$/, ""),
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "sahilthakur961999@gmail.com"),
  phone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE, "+91 98053 38877"),
  whatsapp: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "917018157169"),
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

/** WhatsApp number formatted for display, e.g. "+91 70181 57169". */
export function whatsappDisplay() {
  const d = siteConfig.whatsapp.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) return `+91 ${d.slice(2, 7)} ${d.slice(7)}`;
  return `+${d}`;
}

export function telLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}
