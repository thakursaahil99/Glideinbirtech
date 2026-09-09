import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "@/components/Logo";
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
    <footer className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-64 opacity-40" />

      <div className="relative mx-auto w-full max-w-6xl container-px">
        {/* top: brand + tagline + contact */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
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
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-[var(--accent)]">
              {t(siteConfig.responseTime, locale)}
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
              <Mail className="h-3.5 w-3.5" /> {siteConfig.email}
            </a>
            <a
              href={whatsappLink(dict.cta.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <MessageCircle className="h-3.5 w-3.5" /> {siteConfig.phone}
            </a>
            <a
              href={telLink()}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" /> {dict.contactPage.phoneLabel}
            </a>
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-3.5 w-3.5" /> {siteConfig.location}
            </p>
            <div className="flex gap-2 pt-1">
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
          className="pointer-events-none select-none border-t border-[var(--border)] pt-8 text-center font-display text-[13vw] font-bold leading-none tracking-tighter text-transparent [--stroke:color-mix(in_srgb,var(--foreground)_9%,transparent)] [-webkit-text-stroke:1px_var(--stroke)] sm:text-[9rem]"
        >
          Glideinbir Tech
        </div>

        {/* bottom bar */}
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
      className="text-sm text-muted transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}
