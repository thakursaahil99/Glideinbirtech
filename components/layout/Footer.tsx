import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { buttonClass } from "@/components/ui/Button";
import { services, serviceTitle } from "@/content/services";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const explore = [
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/work`, label: dict.nav.work },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)] pb-16 sm:pb-0">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-56 opacity-35" />

      <div className="relative mx-auto w-full max-w-6xl container-px">
        {/* CTA strip */}
        <div className="flex flex-col items-start justify-between gap-5 border-b border-[var(--border)] py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {dict.footer.ctaHeading}
            </p>
            <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              {t(siteConfig.responseTime, locale)}
            </p>
          </div>
          <Link
            href={`${base}/contact`}
            className={buttonClass({ size: "lg", className: "shrink-0" })}
          >
            {dict.footer.getQuote} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href={base} className="inline-flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="font-display text-lg font-semibold tracking-tight">
                Glideinbir<span className="text-[var(--accent)]"> Tech</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              {dict.footer.tagline}
            </p>
          </div>

          <FooterCol title={dict.footer.exploreTitle}>
            {explore.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={dict.footer.servicesTitle}>
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`${base}/services`}>
                {serviceTitle(s, locale)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={dict.footer.connectTitle}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" /> {siteConfig.email}
            </a>
            <a
              href={whatsappLink(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" /> {siteConfig.phone}
            </a>
            <a
              href={telLink()}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" /> {dict.contactPage.phoneLabel}
            </a>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5 shrink-0" /> {siteConfig.location}
            </p>
            <div className="flex gap-2 pt-1.5">
              {[
                { href: siteConfig.socials.github, label: "GitHub" },
                { href: siteConfig.socials.linkedin, label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-[var(--border)] px-2.5 py-1 text-xs text-muted transition-colors hover:border-[var(--primary)] hover:text-foreground"
                >
                  {s.label} <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </FooterCol>
        </div>

        {/* oversized wordmark */}
        <div
          aria-hidden
          className="pointer-events-none select-none overflow-hidden border-t border-[var(--border)] pt-10"
        >
          <p className="bg-gradient-to-b from-[color-mix(in_srgb,var(--foreground)_12%,transparent)] to-transparent bg-clip-text text-center font-display text-[15vw] font-bold leading-[0.8] tracking-tighter text-transparent sm:text-[8.5rem]">
            Glideinbir&nbsp;Tech
          </p>
        </div>

        {/* legal bar */}
        <div className="flex flex-col gap-3 border-t border-[var(--border)] py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href={`${base}/privacy`} className="hover:text-foreground">
              {dict.footer.privacy}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-foreground">
              {dict.footer.terms}
            </Link>
            <span>{dict.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted">{title}</h3>
      <div className="mt-4 flex flex-col gap-2.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="w-fit text-sm text-muted transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
