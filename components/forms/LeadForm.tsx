"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Loader2, Send } from "lucide-react";
import { submitLead } from "@/app/actions/lead";
import type { LeadState } from "@/lib/schema";
import { buttonClass } from "@/components/ui/Button";
import { track } from "@/lib/track";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const initialState: LeadState = { status: "idle" };

const fieldBase =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/30";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
      {children}
    </label>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-red-500">{msg}</p>;
}

function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={buttonClass({ size: "lg", className: "w-full" })}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> {pendingLabel}
        </>
      ) : (
        <>
          <Send className="h-4 w-4" /> {label}
        </>
      )}
    </button>
  );
}

export function LeadForm({
  locale,
  dict,
  compact = false,
}: {
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}) {
  const f = dict.form;
  const [state, formAction] = useActionState(submitLead, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.status === "success") {
      track("generate_lead", { location: compact ? "hero" : "section" });
      router.push(`/${locale}/thank-you`);
    }
  }, [state.status, compact, locale, router]);

  const errs = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="locale" value={locale} />

      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <Label htmlFor="lead-name">{f.name} *</Label>
          <input
            id="lead-name"
            name="name"
            required
            autoComplete="name"
            placeholder={f.namePlaceholder}
            className={fieldBase}
          />
          <FieldError msg={errs.name} />
        </div>
        <div>
          <Label htmlFor="lead-phone">{f.phone} *</Label>
          <input
            id="lead-phone"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder={f.phonePlaceholder}
            className={fieldBase}
          />
          <FieldError msg={errs.phone} />
        </div>
      </div>

      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <div>
          <Label htmlFor="lead-email">{f.email}</Label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={f.emailPlaceholder}
            className={fieldBase}
          />
          <FieldError msg={errs.email} />
        </div>
        <div>
          <Label htmlFor="lead-service">{f.service}</Label>
          <select id="lead-service" name="service" defaultValue="" className={fieldBase}>
            <option value="" disabled>
              —
            </option>
            {f.serviceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      {!compact ? (
        <div>
          <Label htmlFor="lead-budget">{f.budget}</Label>
          <select id="lead-budget" name="budget" defaultValue="" className={fieldBase}>
            <option value="">—</option>
            {f.budgetOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <Label htmlFor="lead-message">{f.message} *</Label>
        <textarea
          id="lead-message"
          name="message"
          required
          rows={compact ? 3 : 4}
          placeholder={f.messagePlaceholder}
          className={cn(fieldBase, "resize-y")}
        />
        <FieldError msg={errs.message} />
      </div>

      {state.status === "error" ? (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-500">
          {state.message === "error" ? f.error : f.required}
        </p>
      ) : null}

      <SubmitButton label={f.submit} pendingLabel={f.submitting} />
      <p className="text-center text-xs text-muted">{f.consent}</p>
    </form>
  );
}
