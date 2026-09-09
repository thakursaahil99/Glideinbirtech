import type { Bilingual } from "@/content/services";

/** PLACEHOLDER testimonials — replace with real client quotes and names. */
export type Testimonial = {
  quote: Bilingual;
  name: string;
  role: Bilingual;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      en: "They understood the business, not just the design. Enquiries from the website doubled in the first month.",
      hi: "उन्होंने सिर्फ़ डिज़ाइन नहीं, बिज़नेस को समझा। पहले ही महीने में वेबसाइट से पूछताछ दोगुनी हो गई।",
    },
    name: "Placeholder Client",
    role: { en: "Founder, Travel company", hi: "फ़ाउंडर, ट्रैवल कंपनी" },
    placeholder: true,
  },
  {
    quote: {
      en: "Clear updates every week and the app was delivered on time. The handover was clean — everything is ours.",
      hi: "हर हफ़्ते साफ़ अपडेट और ऐप समय पर मिली। हैंडओवर साफ़ था — सब कुछ हमारा है।",
    },
    name: "Placeholder Client",
    role: { en: "Director, Retail chain", hi: "डायरेक्टर, रिटेल चेन" },
    placeholder: true,
  },
  {
    quote: {
      en: "The Google Ads and landing page together brought real customers, not just traffic. Worth every rupee.",
      hi: "Google Ads और लैंडिंग पेज ने मिलकर असली ग्राहक लाए, सिर्फ़ ट्रैफ़िक नहीं। हर रुपया वसूल।",
    },
    name: "Placeholder Client",
    role: { en: "Owner, Local clinic", hi: "मालिक, लोकल क्लिनिक" },
    placeholder: true,
  },
];
