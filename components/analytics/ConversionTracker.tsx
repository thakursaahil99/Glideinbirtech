"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/track";

export function ConversionTracker() {
  useEffect(() => {
    trackConversion();
  }, []);
  return null;
}
