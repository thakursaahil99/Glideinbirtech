"use server";

import { headers } from "next/headers";
import { leadSchema, type LeadInput, type LeadState } from "@/lib/schema";
import { sendLeadEmail } from "@/lib/resend";

// Very light in-memory rate limit (per server instance). Good enough to blunt bots.
const hits = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 4;

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || now - entry.ts > WINDOW_MS) {
    hits.set(key, { count: 1, ts: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function submitLead(
  _prev: LeadState,
  formData: FormData,
): Promise<LeadState> {
  const raw = {
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    email: formData.get("email") ?? "",
    service: formData.get("service") ?? "",
    budget: formData.get("budget") ?? "",
    message: formData.get("message") ?? "",
    locale: formData.get("locale") ?? "en",
    company: formData.get("company") ?? "",
  };

  const parsed = leadSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: LeadState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof LeadInput;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    // Honeypot tripped -> pretend success, drop it.
    if (fieldErrors.company) {
      return { status: "success" };
    }
    return { status: "error", message: "required", fieldErrors };
  }

  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return { status: "error", message: "error" };
  }

  try {
    await sendLeadEmail(parsed.data);
    return { status: "success" };
  } catch (err) {
    console.error("[lead] submit failed:", err);
    return { status: "error", message: "error" };
  }
}
