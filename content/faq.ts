import type { Bilingual } from "@/content/services";

export type Faq = { q: Bilingual; a: Bilingual };

export const faqs: Faq[] = [
  {
    q: {
      en: "How long does a project take?",
      hi: "एक प्रोजेक्ट में कितना समय लगता है?",
    },
    a: {
      en: "A landing page is about a week. A full website is 2–4 weeks. Web and mobile apps are 4–10 weeks depending on scope. You get a firm timeline in your quote.",
      hi: "लैंडिंग पेज लगभग एक हफ़्ता। पूरी वेबसाइट 2–4 हफ़्ते। वेब और मोबाइल ऐप स्कोप के अनुसार 4–10 हफ़्ते। आपको कोटेशन में पक्की समय-सीमा मिलती है।",
    },
  },
  {
    q: { en: "How does payment work?", hi: "पेमेंट कैसे होता है?" },
    a: {
      en: "50% to start and 50% on delivery for most projects. Larger builds are split into milestones. GST invoice provided.",
      hi: "ज़्यादातर प्रोजेक्ट में 50% शुरू में और 50% डिलीवरी पर। बड़े प्रोजेक्ट माइलस्टोन में बँटते हैं। GST इनवॉइस दिया जाता है।",
    },
  },
  {
    q: { en: "Do I own the code and accounts?", hi: "क्या कोड और अकाउंट मेरे होते हैं?" },
    a: {
      en: "Yes, completely. Everything is built in your GitHub, your hosting and your domain. No lock-in, no monthly fee unless you choose a support plan.",
      hi: "हाँ, पूरी तरह। सब कुछ आपके GitHub, आपकी होस्टिंग और आपके डोमेन पर बनता है। कोई लॉक-इन नहीं, कोई मासिक शुल्क नहीं जब तक आप सपोर्ट प्लान न लें।",
    },
  },
  {
    q: { en: "Which technology will you use?", hi: "आप कौन-सी तकनीक इस्तेमाल करेंगे?" },
    a: {
      en: "Whatever fits your project best. For most sites and apps we use Next.js and React Native, but we also work with Vue, Laravel, Django and Flutter. We explain the choice in plain language.",
      hi: "जो आपके प्रोजेक्ट के लिए सबसे सही हो। ज़्यादातर साइट और ऐप के लिए हम Next.js और React Native इस्तेमाल करते हैं, पर Vue, Laravel, Django और Flutter में भी काम करते हैं। हम यह चुनाव आसान भाषा में समझाते हैं।",
    },
  },
  {
    q: {
      en: "Can you also run my Google Ads and SEO?",
      hi: "क्या आप मेरे Google Ads और SEO भी चला सकते हैं?",
    },
    a: {
      en: "Yes. We can build the site and run the marketing that feeds it, so the same team is responsible for the leads you get.",
      hi: "हाँ। हम साइट बना सकते हैं और उसे लीड देने वाली मार्केटिंग भी चला सकते हैं, ताकि आपकी लीड की ज़िम्मेदारी एक ही टीम की हो।",
    },
  },
  {
    q: {
      en: "What if I only have a rough idea?",
      hi: "अगर मेरे पास सिर्फ़ मोटा-मोटा आइडिया हो तो?",
    },
    a: {
      en: "That is normal. The free discovery call is where we turn your idea into a clear scope, timeline and price before you commit anything.",
      hi: "यह सामान्य है। फ्री डिस्कवरी कॉल में हम आपके आइडिया को साफ़ स्कोप, समय-सीमा और कीमत में बदलते हैं, इससे पहले कि आप कुछ तय करें।",
    },
  },
];
