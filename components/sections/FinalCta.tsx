import { Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { SplitText } from "@/components/motion/SplitText";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const channels = [
    {
      href: whatsappLink(dict.cta.whatsappMessage),
      icon: <MessageCircle className="h-4 w-4 text-[#25D366]" />,
      label: "WhatsApp",
      value: siteConfig.phone,
      external: true,
    },
    { href: telLink(), icon: <Phone className="h-4 w-4" />, label: dict.cta.call, value: siteConfig.phone },
    {
      href: `mailto:${siteConfig.email}`,
      icon: <Mail className="h-4 w-4" />,
      label: dict.contactPage.emailLabel,
      value: siteConfig.email,
    },
  ];

  return (
    <Section id="contact">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-6 text-background sm:p-10 lg:p-16">
          {/* sunset glow inside the dark panel */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-[image:var(--sunset)] opacity-40 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-52 -left-32 h-[28rem] w-[28rem] rounded-full bg-[#8b6bff] opacity-25 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="flex flex-col">
              <p className="eyebrow mb-6 !text-background/60">{dict.contactPage.title}</p>
              <SplitText
                text={dict.finalCta.heading}
                className="font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl"
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-background/70 sm:text-lg">
                {dict.finalCta.subheading}
              </p>
              <p className="mt-4 text-sm font-medium text-[#ff9a6b]">
                {t(siteConfig.responseTime, locale)}
              </p>

              <div className="mt-auto grid gap-2 pt-10">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-background/15 px-5 py-4 transition-colors hover:border-background/40 hover:bg-background/5"
                  >
                    <span className="flex items-center gap-3 text-sm">
                      {c.icon}
                      <span className="text-background/60">{c.label}</span>
                    </span>
                    <span className="truncate text-sm font-medium transition-transform duration-300 group-hover:-translate-x-1">
                      {c.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-[var(--background)] p-6 text-foreground sm:p-8">
              <LeadForm locale={locale} dict={dict} />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
