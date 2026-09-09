# Glideinbir Tech — website

Conversion-focused marketing site for **Glideinbir Tech**, a software + digital-marketing
studio. Built to turn Google Ads / paid traffic into enquiries.

- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4
- **Languages:** English + Hindi (locale in the URL: `/en`, `/hi`)
- **Lead capture:** server action → email via [Resend](https://resend.com)
- **SEO:** per-page metadata, sitemap, robots, JSON-LD, hreflang, OG images
- **Analytics:** GA4 + Google Ads gtag (loaded only when env IDs are set)

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in what you have; blanks are fine for dev
npm run dev                  # http://localhost:3000  → redirects to /en
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for SEO / OG / sitemap (no trailing slash) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email shown on the site. **Default is a personal Gmail — change to a branded address.** |
| `NEXT_PUBLIC_CONTACT_PHONE` / `NEXT_PUBLIC_WHATSAPP_NUMBER` | Phone shown / WhatsApp deep-link number (digits only, with country code) |
| `RESEND_API_KEY` | Resend key. **If blank, leads are logged to the server console instead of emailed.** |
| `LEAD_TO_EMAIL` | Where enquiry emails are delivered |
| `LEAD_FROM_EMAIL` | From address. Use `onboarding@resend.dev` until you verify a domain in Resend. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID (`G-XXXX`) — optional |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | Google Ads ID (`AW-XXXX`) — optional |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` | Conversion label fired on `/thank-you` — optional |

### Lead form without Resend

The form works with no email provider (leads print to the console). Two easy upgrades:

1. **Resend** — sign up, verify your domain, set `RESEND_API_KEY` + `LEAD_FROM_EMAIL`.
2. **Web3Forms** (no account server-side) — swap `sendLeadEmail()` in
   [`lib/resend.ts`](lib/resend.ts) for a `fetch` to `https://api.web3forms.com/submit`
   with your access key.

## Editing content

All copy and data live in plain files — no CMS:

| File | What |
| --- | --- |
| [`content/services.ts`](content/services.ts) | The 6 services + bullet points |
| [`content/pricing.ts`](content/pricing.ts) | **Placeholder** starting prices — replace with real numbers |
| [`content/projects.ts`](content/projects.ts) | **Placeholder** case studies — replace with real projects + images (`/public/work/…` or Unsplash) |
| [`content/testimonials.ts`](content/testimonials.ts) | **Placeholder** quotes — replace with real client quotes |
| [`content/faq.ts`](content/faq.ts) · [`content/process.ts`](content/process.ts) · [`content/stack.ts`](content/stack.ts) | FAQ, process steps, tech list |
| [`content/legal.ts`](content/legal.ts) | Privacy + Terms text (have a professional review before relying on it) |
| [`messages/en.ts`](messages/en.ts) · [`messages/hi.ts`](messages/hi.ts) | All UI chrome strings. `hi.ts` must keep the same shape as `en.ts`. |
| [`lib/site.ts`](lib/site.ts) | Brand name, contact defaults, socials |

Each content string is bilingual: `{ en: "…", hi: "…" }`.

## Deploy (Vercel)

1. Push to a Git repo and import into Vercel.
2. Add the env vars above (at minimum `NEXT_PUBLIC_SITE_URL`).
3. Add a custom domain (e.g. `glideinbirtech.com`) — improves email deliverability and ad trust.
4. In Resend, verify that domain; in Google Ads, point the conversion action at the
   `thank-you` page event.

## Not included yet (Phase 2)

- Password-protected `/admin` mini-CRM (lead list + status), backed by a database
- Per-campaign ad landing pages (`/lp/web-apps`, `/lp/seo`, …)
- MDX blog for organic SEO
