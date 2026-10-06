"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { submitLead } from "@/app/actions/lead";
import type { LeadState } from "@/lib/schema";
import { ArrowSlide, buttonClass } from "@/components/ui/Button";
import { track } from "@/lib/track";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const initialState: LeadState = { status: "idle" };

const fieldBase =
  "peer w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 pb-2.5 pt-6 text-[0.95rem] text-foreground outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-transparent focus:border-[var(--primary)] focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--primary)_14%,transparent)]";

const labelBase =
  "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted transition-all duration-200 peer-focus:top-4 peer-focus:text-[11px] peer-focus:font-medium peer-focus:text-[var(--primary)] peer-[:not(:placeholder-shown)]:top-4 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-medium";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1.5 pl-1 text-xs text-red-500">{msg}</p>;
}

function Field({
  id,
  label,
  error,
  className,
  ...input
}: {
  id: string;
  label: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      <div className="relative">
        <input id={id} className={fieldBase} placeholder={label} {...input} />
        <label htmlFor={id} className={labelBase}>
          {label}
        </label>
      </div>
      <FieldError msg={error} />
    </div>
  );
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
          {label} <ArrowSlide />
        </>
      )}
    </button>
  );
}

/** Chip-style single choice backed by a hidden input. */
function ChipGroup({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  const [value, setValue] = useState("");
  return (
    <fieldset>
      <legend className="mb-2.5 pl-1 text-sm font-medium">{label}</legend>
      <input type="hidden" name={name} value={value} />
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = value === o;
          return (
            <button
              key={o}
              type="button"
              aria-pressed={on}
              onClick={() => setValue(on ? "" : o)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm transition-all duration-300",
                on
                  ? "border-transparent bg-foreground text-background"
                  : "border-[var(--border)] bg-[var(--surface)] text-muted hover:border-[var(--border-strong)] hover:text-foreground",
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function LeadForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.form;
  const [state, formAction] = useActionState(submitLead, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.status === "success") {
      track("generate_lead");
      router.push(`/${locale}/thank-you`);
    }
  }, [state.status, locale, router]);

  const errs = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input type="hidden" name="locale" value={locale} />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="lead-name" name="name" required autoComplete="name" label={`${f.name} *`} error={errs.name} />
        <Field
          id="lead-phone"
          name="phone"
          required
          inputMode="tel"
          autoComplete="tel"
          label={`${f.phone} *`}
          error={errs.phone}
        />
      </div>

      <Field id="lead-email" name="email" type="email" autoComplete="email" label={f.email} error={errs.email} />

      <ChipGroup name="service" label={f.service} options={f.serviceOptions} />
      <ChipGroup name="budget" label={f.budget} options={f.budgetOptions} />

      <div>
        <div className="relative">
          <textarea
            id="lead-message"
            name="message"
            required
            rows={4}
            placeholder={f.message}
            className={`${fieldBase} resize-y`}
          />
          <label
            htmlFor="lead-message"
            className={cn(labelBase, "top-6 peer-focus:top-4 peer-[:not(:placeholder-shown)]:top-4")}
          >
            {f.message} *
          </label>
        </div>
        <FieldError msg={errs.message} />
      </div>

      {state.status === "error" ? (
        <p className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm text-red-500">
          {state.message === "error" ? f.error : f.required}
        </p>
      ) : null}

      <SubmitButton label={f.submit} pendingLabel={f.submitting} />
      <p className="text-center text-xs text-muted">{f.consent}</p>
    </form>
  );
}
