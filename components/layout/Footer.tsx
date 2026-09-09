import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { services, serviceTitle } from "@/content/services";
import { siteConfig, telLink } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 container-px py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {dict.footer.tagline}
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" /> {siteConfig.email}
            </a>
            <a href={telLink()} className="flex items-center gap-2 text-muted hover:text-foreground">
              <Phone className="h-4 w-4" /> {siteConfig.phone}
            </a>
            <p className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4" /> {siteConfig.location}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{dict.footer.exploreTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><Link href={`${base}/services`} className="hover:text-foreground">{dict.nav.services}</Link></li>
            <li><Link href={`${base}/work`} className="hover:text-foreground">{dict.nav.work}</Link></li>
            <li><Link href={`${base}/about`} className="hover:text-foreground">{dict.nav.about}</Link></li>
            <li><Link href={`${base}/contact`} className="hover:text-foreground">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{dict.footer.servicesTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`${base}/services`} className="hover:text-foreground">
                  {serviceTitle(s, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">{dict.footer.connectTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            <li>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground">
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </li>
            <li><Link href={`${base}/privacy`} className="hover:text-foreground">{dict.footer.privacy}</Link></li>
            <li><Link href={`${base}/terms`} className="hover:text-foreground">{dict.footer.terms}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 container-px py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. {dict.footer.rights}</p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
