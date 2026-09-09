"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { trackContactClick } from "@/lib/track";

export function WhatsappFab({ message }: { message: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContactClick("whatsapp")}
      aria-label="WhatsApp"
      className="fixed bottom-20 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-6"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
