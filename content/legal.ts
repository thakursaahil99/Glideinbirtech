import { siteConfig } from "@/lib/site";

/**
 * Plain-English legal copy. Review with a professional before relying on it.
 * Rendered on both /privacy and /terms for all locales.
 */
export const lastUpdated = "September 2025";

export const privacySections = [
  {
    h: "Who we are",
    p: `${siteConfig.name} is a software and digital marketing studio based in ${siteConfig.location}. You can contact us at ${siteConfig.email}.`,
  },
  {
    h: "What we collect",
    p: "When you submit an enquiry we collect the name, phone number, email address, and project details you provide. If analytics is enabled, we also collect anonymised usage data (pages viewed, device type, approximate location) through Google Analytics and Google Ads.",
  },
  {
    h: "How we use it",
    p: "We use your contact details only to respond to your enquiry and discuss your project. Analytics data is used to understand traffic and improve our marketing. We do not sell your data.",
  },
  {
    h: "Who we share it with",
    p: "Enquiry data is delivered to us by email through Resend. Analytics data is processed by Google. Hosting is provided by Vercel. Each of these processes data under its own privacy terms.",
  },
  {
    h: "Cookies",
    p: "We use a cookie to remember your language preference. If analytics is enabled, Google sets additional cookies for measurement.",
  },
  {
    h: "Your rights",
    p: `You can ask us to show, correct, or delete the personal data we hold about you by emailing ${siteConfig.email}. We will respond within a reasonable time.`,
  },
  {
    h: "Changes",
    p: "We may update this policy. The date above shows the latest revision.",
  },
];

export const termsSections = [
  {
    h: "Scope of work",
    p: "Every project begins with a written scope, timeline, and quote agreed by both sides. Work outside that scope is quoted separately before it starts.",
  },
  {
    h: "Payments",
    p: "Unless agreed otherwise, 50% of the quoted fee is payable to begin work and 50% on delivery. Larger projects are split into milestones. Invoices include GST where applicable.",
  },
  {
    h: "Timelines",
    p: "Estimated timelines assume timely feedback and content from you. Delays in review or approvals extend delivery dates accordingly.",
  },
  {
    h: "Ownership",
    p: "On final payment, all custom code, designs, and accounts created for your project are transferred to you. Third-party libraries and services keep their own licences.",
  },
  {
    h: "Revisions and support",
    p: "Each project includes a defined number of revision rounds. Post-launch support and maintenance are available under a separate monthly agreement.",
  },
  {
    h: "Liability",
    p: "We deliver work to a professional standard but are not liable for indirect losses, or for issues caused by third-party platforms, hosting, or changes made after handover.",
  },
  {
    h: "Contact",
    p: `Questions about these terms can be sent to ${siteConfig.email}.`,
  },
];
