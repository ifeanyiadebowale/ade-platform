# Digital Pulse Networks (DPN) — Website MVP

First working version of the DPN website: personal brand (ADE) + business
platform, built as the foundation to grow into a full education platform.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Hand-built shadcn-style UI primitives (`components/ui`) — no CLI needed
- No database, auth, or third-party integrations yet (intentional — see below)

## What's included

- `/` — Home: hero, About ADE summary, What DPN is, learning tracks, ADE
  Weekly, Community, closing CTA
- `/about` — Full ADE story and focus areas
- `/learn` — Learning stages + skill tracks
- `/resources` — Placeholder catalog of DPN digital products (Selar)
- `/ade-weekly` — Newsletter landing page (sign-up form is UI only)
- `/community` — DPN Community overview
- `/contact` — Contact form (UI only) + direct email/socials

## What's intentionally NOT included yet

Per the brief, this version does not include:
- Authentication / user accounts
- A database
- Real newsletter integration (e.g. ConvertKit, Beehiiv, Mailchimp)
- Real community functionality (currently points to WhatsApp)

The forms on `/ade-weekly` and `/contact` are real HTML forms with working
client-side validation, but they don't submit anywhere yet — wire them up to
an email provider or a simple API route when you're ready for that layer.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

The simplest path is [Vercel](https://vercel.com) (made by the Next.js
team, generous free tier):

1. Push this project to a GitHub repository.
2. Import the repo at vercel.com/new.
3. Framework preset: Next.js (auto-detected). No environment variables
   needed for this version.
4. Deploy.

## Project structure

```
app/                  Route segments (one folder per page)
  layout.tsx          Root layout, fonts, nav + footer
  page.tsx            Homepage
  globals.css         Tailwind layers + base styles
components/
  navbar.tsx
  footer.tsx
  ui/
    button.tsx
    panel.tsx
lib/
  utils.ts            className merge helper (cn)
```

## Brand tokens (Tailwind)

Defined in `tailwind.config.ts`:
- `ink` — near-black text/background (#0A0A0A)
- `paper` — white (#FFFFFF)
- `mist` — light section background (#F5F6F8)
- `blue` / `blue-deep` / `blue-soft` — cobalt blue accent family
- `font-display` — Space Grotesk (headlines)
- `font-sans` — Inter (body)

## Next steps (when you're ready to go beyond MVP)

1. Wire `/ade-weekly` and `/contact` forms to a real provider (an API route
   + email service, or a form service like Formspree, is the fastest path
   with limited resources).
2. Replace the placeholder resource catalog on `/resources` with real Selar
   product links or an embedded storefront.
3. Decide on community tooling (Discord/Circle/custom) before building
   `/community` further.
4. Add auth + a database only once you actually need accounts (e.g. gated
   course content) — don't add this layer before it's needed.
