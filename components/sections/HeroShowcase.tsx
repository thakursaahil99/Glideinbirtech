import Image from "next/image";

function BrowserFrame({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/30 ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-center gap-1.5 border-b border-[var(--border)] bg-[var(--surface-2)] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="480px" className="object-cover object-top" />
      </div>
    </div>
  );
}

export function HeroShowcase() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
      {/* glow */}
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_70%)] blur-2xl" />

      {/* back browser */}
      <BrowserFrame
        src="/work/dell-store.webp"
        alt="Dell Store — Magento storefront"
        className="absolute left-0 top-6 w-[62%] rotate-[-5deg] opacity-90 [animation:float-y_7s_ease-in-out_infinite] motion-reduce:animate-none"
      />

      {/* main browser */}
      <BrowserFrame
        src="/work/glideinbir.webp"
        alt="Glide in Bir — booking platform"
        className="absolute right-0 top-16 w-[70%] rotate-[4deg] [animation:float-y_6s_ease-in-out_infinite] [animation-delay:-2s] motion-reduce:animate-none"
      />

      {/* phone */}
      <div className="absolute bottom-4 left-4 w-[27%] rotate-[-4deg] overflow-hidden rounded-[1.4rem] border-[3px] border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/40 [animation:float-y_5.5s_ease-in-out_infinite] [animation-delay:-1s] motion-reduce:animate-none">
        <div className="relative aspect-[9/17]">
          <Image
            src="/work/pahadi-bhai.webp"
            alt="Pahadi Bhai — mobile app"
            fill
            sizes="150px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* floating metric chip */}
      <div className="absolute right-4 top-2 rounded-xl border border-[var(--border)] bg-[var(--background)]/90 px-3 py-2 shadow-lg backdrop-blur [animation:float-y_6.5s_ease-in-out_infinite] [animation-delay:-3s] motion-reduce:animate-none">
        <p className="font-display text-lg font-bold gradient-text">98</p>
        <p className="text-[10px] uppercase tracking-wide text-muted">Lighthouse</p>
      </div>
    </div>
  );
}
