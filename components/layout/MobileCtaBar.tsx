"use client";

import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { telLink } from "@/lib/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { trackContactClick } from "@/lib/track";
import type { Dictionary, Locale } from "@/lib/i18n";

export function MobileCtaBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 sm:hidden">
      <div className="grid grid-cols-[1fr_1fr_1.4fr] gap-1 rounded-full border border-[var(--border)] bg-[color-mix(in_srgb,var(--background)_80%,transparent)] p-1 text-xs font-medium shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <a
          href={telLink()}
          onClick={() => trackContactClick("call")}
          className="flex items-center justify-center gap-1.5 rounded-full py-2.5 text-foreground"
        >
          <Phone className="h-4 w-4" />
          {dict.cta.call}
        </a>
        <WhatsAppLink
          message={dict.cta.whatsappMessage}
          from={dict.cta.whatsappFrom}
          className="flex items-center justify-center gap-1.5 rounded-full py-2.5 text-foreground"
        >
          <MessageCircle className="h-4 w-4 text-[#25D366]" />
          {dict.cta.whatsapp}
        </WhatsAppLink>
        <Link
          href={`/${locale}/contact`}
          className="flex items-center justify-center gap-1.5 rounded-full bg-[image:var(--sunset)] py-2.5 text-white"
        >
          <Send className="h-4 w-4" />
          {dict.cta.quote}
        </Link>
      </div>
    </div>
  );
}
