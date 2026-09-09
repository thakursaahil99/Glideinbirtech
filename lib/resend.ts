import "server-only";
import { Resend } from "resend";
import type { LeadInput } from "@/lib/schema";

const apiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.LEAD_TO_EMAIL ?? "sahilthakur961999@gmail.com";
const fromEmail = process.env.LEAD_FROM_EMAIL ?? "Glideinbir Tech <onboarding@resend.dev>";

const resend = apiKey ? new Resend(apiKey) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendLeadEmail(lead: LeadInput) {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["Service", lead.service || "—"],
    ["Budget", lead.budget || "—"],
    ["Language", lead.locale === "hi" ? "Hindi" : "English"],
    ["Message", lead.message],
  ];

  if (!resend) {
    console.info("[lead] RESEND_API_KEY not set — logging lead instead of emailing:");
    console.info(Object.fromEntries(rows));
    return { delivered: false as const };
  }

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#0f172a">
      <h2 style="margin:0 0 12px">New enquiry — Glideinbir Tech</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:6px 16px 6px 0;color:#64748b;vertical-align:top">${k}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(
                v,
              )}</td></tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: lead.email || undefined,
    subject: `New enquiry: ${lead.name}${lead.service ? ` — ${lead.service}` : ""}`,
    html,
  });

  if (error) {
    console.error("[lead] Resend error:", error);
    return { delivered: false as const, error: error.message };
  }
  return { delivered: true as const };
}
