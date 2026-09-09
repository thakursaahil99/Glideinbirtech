"use client";

import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";
import { trackContactClick } from "@/lib/track";
import type { Dictionary, Locale } from "@/lib/i18n";

export function MobileCtaBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-3 text-xs font-medium">
        <a
          href={telLink()}
          onClick={() => trackContactClick("call")}
          className="flex flex-col items-center gap-1 py-2.5 text-foreground"
        >
          <Phone className="h-4 w-4" />
          {dict.cta.call}
        </a>
        <a
          href={whatsappLink(dict.cta.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContactClick("whatsapp")}
          className="flex flex-col items-center gap-1 border-x border-[var(--border)] py-2.5 text-foreground"
        >
          <MessageCircle className="h-4 w-4" />
          {dict.cta.whatsapp}
        </a>
        <Link
          href={`/${locale}/contact`}
          className="flex flex-col items-center gap-1 bg-[var(--primary)] py-2.5 text-[var(--primary-foreground)]"
        >
          <Send className="h-4 w-4" />
          {dict.cta.quote}
        </Link>
      </div>
    </div>
  );
}
