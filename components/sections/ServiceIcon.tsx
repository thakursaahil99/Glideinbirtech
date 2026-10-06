import {
  Box,
  Database,
  Gauge,
  LayoutDashboard,
  Rocket,
  Search,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  rocket: Rocket,
  "layout-dashboard": LayoutDashboard,
  smartphone: Smartphone,
  search: Search,
  target: Target,
  database: Database,
  "shopping-cart": ShoppingCart,
  gauge: Gauge,
  sparkles: Sparkles,
  box: Box,
};

export function ServiceIcon({
  icon,
  accent,
  className,
}: {
  icon: string;
  accent: string;
  className?: string;
}) {
  const Icon = icons[icon] ?? Rocket;
  return (
    <span
      className={cn("inline-flex h-11 w-11 items-center justify-center rounded-2xl", className)}
      style={{
        backgroundColor: `color-mix(in srgb, ${accent} 16%, transparent)`,
        color: accent,
      }}
    >
      <Icon className="h-5 w-5" />
    </span>
  );
}
