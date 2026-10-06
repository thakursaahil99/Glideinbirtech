import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { PageHero } from "@/components/sections/PageHero";
import { LocalTime } from "@/components/layout/FooterBits";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { getDictionary, isLocale, t, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(typed);
  return buildMetadata({
    locale: typed,
    path: "/contact",
    title: dict.contactPage.title,
    description: dict.contactPage.subheading,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const typed = locale as Locale;
  const dict = getDictionary(typed);
  const c = dict.contactPage;

  const channels = [
    {
      href: whatsappLink(dict.cta.whatsappMessage),
      icon: MessageCircle,
      color: "#25D366",
      label: c.whatsappLabel,
      value: siteConfig.phone,
      external: true,
    },
    { href: telLink(), icon: Phone, color: "var(--primary)", label: c.phoneLabel, value: siteConfig.phone },
    {
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      color: "var(--accent)",
      label: c.emailLabel,
      value: siteConfig.email,
    },
  ];

  return (
    <>
      <OrganizationJsonLd locale={typed} />
      <PageHero
        image="/about/glide-red.jpg"
        eyebrow={
          <p className="eyebrow">
            {c.title}
            <span className="normal-case tracking-normal text-[#16a34a]">
              {t(siteConfig.responseTime, typed)}
            </span>
          </p>
        }
        title={c.heading}
        lede={c.subheading}
      />

      <Section size="sm" className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="min-w-0 space-y-4">
            {channels.map((ch, i) => {
              const Icon = ch.icon;
              return (
                <Reveal key={ch.label} delay={i * 0.06}>
                  <Spotlight className="rounded-[1.5rem]">
                    <a
                      href={ch.href}
                      {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
                    >
                      <span
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
                        style={{ background: ch.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium uppercase tracking-widest text-muted">
                          {ch.label}
                        </span>
                        <span className="mt-1 block truncate font-display text-lg font-semibold sm:text-xl">
                          {ch.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-500 group-hover:rotate-45 group-hover:text-foreground" />
                    </a>
                  </Spotlight>
                </Reveal>
              );
            })}

            <Reveal delay={0.2}>
              <div className="group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-[1.5rem] border border-[var(--border)] p-6 text-white">
                <Image
                  src="/about/landing.jpg"
                  alt="Evening at the Bir Billing landing site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <p className="relative flex items-center gap-2 text-xs uppercase tracking-widest text-white/70">
                  <MapPin className="h-3.5 w-3.5" /> {c.locationLabel}
                </p>
                <p className="relative mt-2 font-display text-2xl font-semibold">{siteConfig.location}</p>
                <LocalTime className="relative mt-1 block text-sm tabular-nums text-white/75" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--card-shadow)] sm:p-9">
              <LeadForm locale={typed} dict={dict} />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
