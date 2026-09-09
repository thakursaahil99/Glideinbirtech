import { Mail, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function FinalCta({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="hero-glow pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <Reveal>
        <div className="grid gap-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              {dict.finalCta.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {dict.finalCta.subheading}
            </p>
            <p className="mt-3 text-sm font-medium text-[var(--accent)]">
              {t(siteConfig.responseTime, locale)}
            </p>

            <div className="mt-7 space-y-3 text-sm">
              <a
                href={whatsappLink(dict.cta.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" /> {siteConfig.phone}
              </a>
              <a
                href={telLink()}
                className="flex items-center gap-3 text-muted hover:text-foreground"
              >
                <Phone className="h-4 w-4" /> {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-muted hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {siteConfig.email}
              </a>
            </div>
          </div>

          <div>
            <LeadForm locale={locale} dict={dict} />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
