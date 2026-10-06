import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/Logo";
import { SplitText } from "@/components/motion/SplitText";
import { Magnetic } from "@/components/motion/Magnetic";
import { Parallax } from "@/components/motion/Parallax";
import { LocalTime, BackToTop } from "@/components/layout/FooterBits";
import { services, serviceTitle } from "@/content/services";
import { siteConfig, telLink, whatsappLink } from "@/lib/site";
import { t, type Dictionary, type Locale } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const explore = [
    { href: base, label: dict.nav.home },
    { href: `${base}/services`, label: dict.nav.services },
    { href: `${base}/work`, label: dict.nav.work },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] border-t border-[var(--border)] bg-[var(--surface)] pb-20 sm:pb-0">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[28rem] opacity-60" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl container-px">
        {/* big CTA */}
        <div className="grid items-end gap-10 border-b border-[var(--border)] pb-16 pt-20 sm:pt-28 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow mb-6">{dict.finalCta.heading.replace(/\*/g, "")}</p>
            <SplitText
              text={dict.footer.ctaHeading}
              className="max-w-4xl font-display text-[2.8rem] font-semibold leading-[0.98] sm:text-6xl lg:text-[5.5rem]"
            />
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t(siteConfig.responseTime, locale)}
            </p>
          </div>
          <Magnetic strength={0.35}>
            <Link
              href={`${base}/contact`}
              data-cursor="Let's go"
              className="group relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-foreground text-center font-display text-lg font-semibold leading-tight text-background sm:h-48 sm:w-48"
            >
              <span className="absolute inset-0 translate-y-full rounded-full bg-[image:var(--sunset)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative flex flex-col items-center gap-2 px-6 group-hover:text-white">
                {dict.footer.getQuote}
                <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </Link>
          </Magnetic>
        </div>

        {/* columns */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <Link href={base} className="inline-flex items-center gap-2.5">
              <LogoMark className="h-9 w-9" />
              <span className="font-display text-xl font-semibold tracking-tight">
                Glideinbir<span className="serif-accent ml-1 text-muted">tech</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">{dict.footer.tagline}</p>
            <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--background)]/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {dict.footer.localTime}
              </p>
              <LocalTime className="mt-1 block font-display text-2xl font-semibold tabular-nums" />
              <p className="mt-0.5 text-xs text-muted">{siteConfig.location}</p>
            </div>
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
              <FooterLink key={s.slug} href={`${base}/services/${s.slug}`}>
                {serviceTitle(s, locale)}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title={dict.footer.connectTitle}>
            <FooterLink href={`mailto:${siteConfig.email}`} external>
              {siteConfig.email}
            </FooterLink>
            <FooterLink href={whatsappLink(dict.cta.whatsappMessage)} external>
              WhatsApp
            </FooterLink>
            <FooterLink href={telLink()} external>
              {siteConfig.phone}
            </FooterLink>
            <FooterLink href={siteConfig.socials.github} external>
              GitHub
            </FooterLink>
            <FooterLink href={siteConfig.socials.linkedin} external>
              LinkedIn
            </FooterLink>
          </FooterCol>
        </div>

        {/* oversized wordmark */}
        <div aria-hidden className="pointer-events-none select-none overflow-hidden">
          <Parallax offset={40}>
            <p className="text-center font-display text-[17vw] font-bold leading-[0.78] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_var(--border-strong)] lg:text-[13.5rem]">
              Glideinbir
            </p>
          </Parallax>
        </div>

        {/* legal bar */}
        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {dict.footer.rights}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href={`${base}/privacy`} className="hover:text-foreground">
              {dict.footer.privacy}
            </Link>
            <Link href={`${base}/terms`} className="hover:text-foreground">
              {dict.footer.terms}
            </Link>
            <span>{dict.footer.builtWith}</span>
            <BackToTop label={dict.footer.backToTop} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {title}
      </h3>
      <div className="mt-5 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "group/fl relative w-fit text-[0.95rem] text-foreground/80 transition-colors hover:text-foreground";
  const inner = (
    <>
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-[image:var(--sunset)] transition-transform duration-500 group-hover/fl:origin-left group-hover/fl:scale-x-100" />
    </>
  );
  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
