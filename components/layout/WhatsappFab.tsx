"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { cn } from "@/lib/utils";

export function WhatsappFab({ message, from }: { message: string; from: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <WhatsAppLink
      message={message}
      from={from}
      aria-label="WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)] transition-all duration-500 hover:scale-110 sm:inline-flex",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.4s]" />
      <MessageCircle className="relative h-6 w-6 transition-transform duration-500 group-hover:rotate-12" />
    </WhatsAppLink>
  );
}
