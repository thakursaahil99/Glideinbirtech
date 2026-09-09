import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { experience } from "@/content/experience";
import { t, type Locale } from "@/lib/i18n";

export function ExperienceTimeline({ locale }: { locale: Locale }) {
  return (
    <RevealGroup className="relative space-y-8 border-l border-[var(--border)] pl-6">
      {experience.map((role) => (
        <RevealItem key={role.period + role.company}>
          <div className="relative">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--primary)] bg-[var(--background)]" />
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              {role.period}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold">
              {t(role.role, locale)}{" "}
              <span className="text-muted">· {role.company}</span>
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted text-pretty">
              {t(role.description, locale)}
            </p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
