"use client";

import type { ComponentProps } from "react";
import { whatsappLink } from "@/lib/site";
import { trackContactClick } from "@/lib/track";

/**
 * WhatsApp deep link. The server-rendered href carries the base message; on
 * click it is rewritten to also say which page the visitor wrote from, so
 * every chat arrives with context.
 */
export function WhatsAppLink({
  message,
  from,
  onClick,
  ...props
}: { message: string; from: string } & Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        const page = document.title.split(" · ")[0].trim();
        e.currentTarget.href = whatsappLink(`${message}\n\n— ${from}: ${page}\n${window.location.href}`);
        trackContactClick("whatsapp");
        onClick?.(e);
      }}
      {...props}
    />
  );
}
