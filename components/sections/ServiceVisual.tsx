/**
 * Bespoke SVG "scene" per service — a small UI abstraction of what the work
 * looks like. Drawn with the service accent so every card feels designed.
 */
export function ServiceVisual({ slug, accent }: { slug: string; accent: string }) {
  return (
    <div
      className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[var(--border)]"
      style={{
        background: `linear-gradient(140deg, color-mix(in srgb, ${accent} 22%, var(--surface)), var(--surface))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          color: accent,
        }}
      />
      <svg
        viewBox="0 0 320 180"
        className="relative h-full w-full"
        fill="none"
        role="presentation"
      >
        <Scene slug={slug} accent={accent} />
      </svg>
    </div>
  );
}

function Scene({ slug, accent }: { slug: string; accent: string }) {
  const stroke = "var(--muted)";
  const panel = "var(--background)";

  switch (slug) {
    case "landing-pages":
      return (
        <g>
          <rect x="40" y="26" width="240" height="128" rx="8" fill={panel} stroke={stroke} />
          <circle cx="52" cy="38" r="2.5" fill={accent} />
          <circle cx="60" cy="38" r="2.5" fill={stroke} />
          <circle cx="68" cy="38" r="2.5" fill={stroke} />
          <rect x="40" y="46" width="240" height="1" fill={stroke} opacity="0.4" />
          <rect x="56" y="62" width="120" height="10" rx="3" fill={accent} />
          <rect x="56" y="80" width="160" height="6" rx="3" fill={stroke} opacity="0.5" />
          <rect x="56" y="92" width="140" height="6" rx="3" fill={stroke} opacity="0.5" />
          <rect x="56" y="112" width="70" height="20" rx="6" fill={accent} />
          <rect x="200" y="60" width="64" height="72" rx="6" fill={accent} opacity="0.18" />
        </g>
      );
    case "ecommerce":
      return (
        <g>
          <rect x="34" y="24" width="252" height="132" rx="8" fill={panel} stroke={stroke} />
          <rect x="34" y="24" width="252" height="20" rx="8" fill={accent} opacity="0.14" />
          <circle cx="266" cy="34" r="7" fill={accent} />
          <text x="264" y="37" fontSize="8" fill="#fff" textAnchor="middle">3</text>
          {[0, 1, 2].map((c) =>
            [0, 1].map((r) => (
              <g key={`${c}-${r}`}>
                <rect
                  x={48 + c * 76}
                  y={56 + r * 46}
                  width="60"
                  height="34"
                  rx="5"
                  fill={accent}
                  opacity={r === 0 && c === 1 ? 0.35 : 0.16}
                />
                <rect x={48 + c * 76} y={94 + r * 46} width="40" height="5" rx="2" fill={stroke} opacity="0.5" />
              </g>
            )),
          )}
        </g>
      );
    case "web-apps":
      return (
        <g>
          <rect x="34" y="24" width="252" height="132" rx="8" fill={panel} stroke={stroke} />
          <rect x="34" y="24" width="60" height="132" rx="8" fill={accent} opacity="0.12" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="46" y={40 + i * 20} width="36" height="6" rx="3" fill={stroke} opacity="0.5" />
          ))}
          {[70, 40, 90, 55, 75].map((h, i) => (
            <rect key={i} x={112 + i * 30} y={140 - h} width="16" height={h} rx="3" fill={accent} opacity={i === 2 ? 1 : 0.4} />
          ))}
          <path d="M112 70 L142 82 L172 52 L202 66 L232 40" stroke={accent} strokeWidth="2" />
        </g>
      );
    case "mobile-apps":
      return (
        <g>
          <rect x="122" y="16" width="76" height="148" rx="14" fill={panel} stroke={stroke} />
          <rect x="146" y="22" width="28" height="4" rx="2" fill={stroke} opacity="0.5" />
          <rect x="132" y="34" width="56" height="30" rx="6" fill={accent} opacity="0.3" />
          <rect x="132" y="70" width="56" height="8" rx="3" fill={stroke} opacity="0.5" />
          <rect x="132" y="82" width="42" height="8" rx="3" fill={stroke} opacity="0.5" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x="132" y={100 + i * 16} width="56" height="10" rx="4" fill={accent} opacity={i === 0 ? 0.9 : 0.25} />
          ))}
          <rect x="204" y="30" width="70" height="26" rx="6" fill={accent} />
          <rect x="212" y="38" width="40" height="4" rx="2" fill="#fff" opacity="0.9" />
          <rect x="212" y="46" width="30" height="4" rx="2" fill="#fff" opacity="0.6" />
        </g>
      );
    case "seo":
      return (
        <g>
          <rect x="40" y="28" width="200" height="20" rx="10" fill={panel} stroke={stroke} />
          <circle cx="52" cy="38" r="4" stroke={stroke} strokeWidth="1.6" />
          <rect x="64" y="35" width="90" height="6" rx="3" fill={stroke} opacity="0.5" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x="40"
                y={62 + i * 30}
                width="200"
                height="22"
                rx="5"
                fill={accent}
                opacity={i === 0 ? 0.35 : 0.12}
              />
              <rect x="52" y={68 + i * 30} width={i === 0 ? 120 : 90} height="5" rx="2" fill={stroke} opacity="0.55" />
              {i === 0 && (
                <text x="224" y={77} fontSize="10" fontWeight="700" fill={accent} textAnchor="middle">
                  #1
                </text>
              )}
            </g>
          ))}
          <path d="M258 120 L258 60 M258 60 L250 70 M258 60 L266 70" stroke={accent} strokeWidth="2.4" />
        </g>
      );
    case "google-ads":
      return (
        <g>
          <rect x="34" y="24" width="252" height="132" rx="8" fill={panel} stroke={stroke} />
          <rect x="46" y="36" width="26" height="12" rx="3" fill={accent} />
          <text x="59" y="45" fontSize="7" fill="#fff" textAnchor="middle">Ad</text>
          {[30, 46, 40, 66, 84, 74, 104].map((h, i) => (
            <rect key={i} x={54 + i * 30} y={140 - h} width="18" height={h} rx="3" fill={accent} opacity={i > 4 ? 1 : 0.35} />
          ))}
          <path d="M54 108 L84 100 L114 104 L144 84 L174 74 L204 58 L234 40" stroke={accent} strokeWidth="2" />
          <circle cx="234" cy="40" r="4" fill={accent} />
          <path d="M244 52 l10 4 l-4 4 l6 6 l-3 3 l-6 -6 l-4 4 z" fill={stroke} />
        </g>
      );
    case "crm":
      return (
        <g>
          <rect x="30" y="24" width="260" height="132" rx="8" fill={panel} stroke={stroke} />
          {["New", "In talks", "Won"].map((_, c) => (
            <g key={c}>
              <rect x={42 + c * 82} y="36" width="70" height="110" rx="6" fill={accent} opacity="0.08" />
              <rect x={48 + c * 82} y="42" width="34" height="6" rx="3" fill={stroke} opacity="0.5" />
              {[0, 1, c === 2 ? 2 : 1].slice(0, c === 0 ? 3 : c === 1 ? 2 : 3).map((__, k) => (
                <rect
                  key={k}
                  x={48 + c * 82}
                  y={56 + k * 26}
                  width="58"
                  height="20"
                  rx="4"
                  fill={accent}
                  opacity={c === 2 ? 0.9 : 0.28}
                />
              ))}
            </g>
          ))}
          <path d="M112 66 C 140 66, 150 66, 172 66" stroke={accent} strokeWidth="1.6" strokeDasharray="3 3" />
        </g>
      );
    case "performance":
      return (
        <g>
          <path
            d="M60 140 A 90 90 0 0 1 260 140"
            stroke={stroke}
            strokeWidth="12"
            opacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M60 140 A 90 90 0 0 1 232 96"
            stroke={accent}
            strokeWidth="12"
            strokeLinecap="round"
          />
          <text x="160" y="120" fontSize="34" fontWeight="800" fill="var(--foreground)" textAnchor="middle">
            98
          </text>
          <text x="160" y="140" fontSize="9" fill={stroke} textAnchor="middle">
            PERFORMANCE
          </text>
          <path d="M160 132 L214 104" stroke={accent} strokeWidth="3" strokeLinecap="round" />
          <circle cx="160" cy="132" r="5" fill={accent} />
        </g>
      );
    case "ai-integrations":
      return (
        <g>
          <rect x="40" y="22" width="240" height="136" rx="10" fill={panel} stroke={stroke} />
          <rect x="56" y="38" width="120" height="22" rx="11" fill={stroke} opacity="0.18" />
          <rect x="66" y="46" width="90" height="6" rx="3" fill={stroke} opacity="0.55" />
          <rect x="144" y="70" width="120" height="34" rx="12" fill={accent} opacity="0.9" />
          <rect x="156" y="80" width="88" height="5" rx="2.5" fill="#fff" opacity="0.9" />
          <rect x="156" y="90" width="60" height="5" rx="2.5" fill="#fff" opacity="0.6" />
          <rect x="56" y="114" width="96" height="22" rx="11" fill={stroke} opacity="0.18" />
          <circle cx="72" cy="125" r="3" fill={accent} />
          <circle cx="84" cy="125" r="3" fill={accent} opacity="0.6" />
          <circle cx="96" cy="125" r="3" fill={accent} opacity="0.3" />
          <path d="M236 30 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 z" fill={accent} />
        </g>
      );
    case "motion-3d":
      return (
        <g>
          <path d="M160 34 L222 68 L160 102 L98 68 Z" fill={accent} opacity="0.85" />
          <path d="M98 68 L160 102 L160 150 L98 116 Z" fill={accent} opacity="0.45" />
          <path d="M222 68 L160 102 L160 150 L222 116 Z" fill={accent} opacity="0.25" />
          <path d="M40 150 C 90 120, 120 170, 170 140 S 250 110, 290 130" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="262" cy="44" r="10" stroke={accent} strokeWidth="2" />
          <circle cx="58" cy="50" r="5" fill={accent} opacity="0.6" />
        </g>
      );
    default:
      return <rect x="40" y="30" width="240" height="120" rx="8" fill={panel} stroke={stroke} />;
  }
}
