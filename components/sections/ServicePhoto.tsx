import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A service's real project screenshot, tinted with the service accent so the
 * set still reads as one family.
 */
export function ServicePhoto({
  src,
  alt,
  accent,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  zoom = true,
  priority,
}: {
  src: string;
  alt: string;
  accent: string;
  className?: string;
  sizes?: string;
  zoom?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-[var(--surface-2)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover object-top",
          zoom &&
            "transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
        )}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"
        style={{
          background: `linear-gradient(160deg, transparent 40%, color-mix(in srgb, ${accent} 45%, transparent))`,
        }}
      />
      <div aria-hidden className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-black/5" />
    </div>
  );
}
