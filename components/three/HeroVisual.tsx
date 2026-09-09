"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

/**
 * Only mounts the 3D when the device can comfortably run it: large screen,
 * enough CPU threads / memory, not reduced-motion, not save-data. Everything
 * else gets the CSS gradient orbs, which is the base layer regardless.
 */
export function HeroVisual() {
  const [enable3d, setEnable3d] = useState(false);

  useEffect(() => {
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
      deviceMemory?: number;
    };
    const bigScreen = window.matchMedia("(min-width: 1024px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enoughCpu = (navigator.hardwareConcurrency ?? 4) >= 4;
    const enoughMem = (nav.deviceMemory ?? 4) >= 4;
    const ok = bigScreen && !reduce && enoughCpu && enoughMem && !nav.connection?.saveData;
    // one-time capability probe
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnable3d(ok);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute right-[-8%] top-1/2 h-[38rem] w-[38rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--glow-a),transparent_65%)] blur-3xl" />
      <div className="absolute left-[-15%] top-[10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,var(--glow-b),transparent_62%)] blur-3xl" />
      {enable3d ? (
        <div className="absolute inset-y-0 right-0 hidden w-[46%] opacity-70 [mask-image:linear-gradient(to_right,transparent,#000_40%)] lg:block">
          <HeroCanvas />
        </div>
      ) : null}
    </div>
  );
}
