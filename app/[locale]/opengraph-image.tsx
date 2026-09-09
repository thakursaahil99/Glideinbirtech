import { ImageResponse } from "next/og";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.name;

export default async function OgImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = (isLocale(locale) ? locale : "en") as Locale;
  const dict = getDictionary(typed);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #070a13 0%, #141a33 55%, #0b2530 100%)",
          color: "#e9ebf5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            ▲
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, gap: 10 }}>
            <span>Glideinbir</span>
            <span style={{ color: "#22d3ee" }}>Tech</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
            {dict.hero.title}
          </div>
          <div style={{ fontSize: 30, color: "#98a2b8" }}>{dict.hero.badge}</div>
        </div>

        <div style={{ fontSize: 26, color: "#98a2b8" }}>
          {siteConfig.url.replace("https://", "")}
        </div>
      </div>
    ),
    { ...size },
  );
}
