# Master Prompt — Mawawa Solutions Website

Use this document any time you want an AI tool (Claude, ChatGPT, etc.) to
build, extend, or redesign the Mawawa Solutions website. It's the full
brief in one place.

---

## Business

- **Name:** Mawawa Solutions
- **Tagline:** "Building Better Spaces. Connecting People."
- **What it does:** A two-sided marketplace that (1) helps customers find
  and hire verified fundis — plumbers, electricians, masons, contractors —
  and (2) lets those same fundis sell building materials directly to
  customers through the platform.
- **Service area:** Kimuka and its surrounding environs (Kajiado County,
  Kenya), starting local before expanding.
- **Audience:** Two groups —
  1. Customers/homeowners in Kimuka needing a trustworthy fundi or
     building materials.
  2. Fundis and small material suppliers who want more customers and a
     simple online storefront.
- **Revenue model:** Monthly fundi subscription (placeholder: KSh 500/mo)
  for a public profile + materials listing rights.
- **Language:** English only.

## Brand identity

- **Logo:** Octagonal badge, black background, gold gradient skyline +
  house icon, white people silhouettes, "MAWAWA" in bold white, "SOLUTIONS"
  in gold, green accent ring, tagline in white underneath.
- **Colors:**
  - Black `#0B0C0A` — primary background / header / footer
  - Gold `#D4A72C` → `#F2C94C` — primary accent, CTAs, highlights
  - Green `#1E7A3D` (dark `#14532A`) — secondary accent, trust/action
  - White `#FAFAF7` / cream `#F3EFE4` — light backgrounds, body text on dark
- **Typography:**
  - Display/headings: **Space Grotesk** (bold, geometric — echoes the
    logo's blocky wordmark)
  - Body text: **Inter**
  - Data/labels/prices: **JetBrains Mono** (spec-sheet, blueprint feel)
- **Visual motif:** Construction blueprint grid lines + skyline silhouette
  dividers, echoing the logo's building icon. Trade badges styled like
  hard-hat/ID chips. Avoid generic SaaS-marketplace defaults (no stock
  photos of handshakes, no purple gradients).

## Site structure (current build: single-page, sections)

1. **Header** — logo, nav (Find a Fundi / Materials / How it works / For
   Fundis / Contact), "Join as a Fundi" CTA button.
2. **Hero** — headline, short pitch, toggle between "Find a fundi" /
   "Buy materials" search modes, search bar, trust stats (fundi count,
   supplier count, area covered).
3. **How it works** — 3 steps: search → compare & contact directly → get
   the job done.
4. **Browse by trade** — badges for Plumbing, Electrical, Masonry, General
   Contracting, Carpentry, Painting (extendable).
5. **Find a Fundi** — card grid of fundi profiles (name, trade, area,
   verified badge, rating, call button).
6. **Materials marketplace** — card grid of materials (item, seller,
   price in KSh, stock status).
7. **Trust strip** — headline stats.
8. **Join as a fundi** — value proposition + subscription plan card
   (price, features, CTA).
9. **Contact** — form (name, phone, I am a... dropdown, message) +
   contact details (location, phone/WhatsApp, email, hours).
10. **Footer** — logo, tagline, nav links, location.

## Current tech (what exists today)

- Plain **HTML/CSS/JS**, no framework, no build step — chosen so it can be
  pushed straight to GitHub and hosted free on **GitHub Pages** with no
  domain yet.
- All fundi/material data is **hardcoded placeholder content** — there is
  no backend or database yet.
- Fully responsive (mobile, tablet, desktop), keyboard-focus visible,
  respects reduced-motion preference.

## Known next steps (not yet built)

- Backend + database for real fundi/material/customer data (candidates:
  Supabase, Firebase, or custom Node/Django API).
- Real fundi sign-up, login, and listing-management flow.
- M-Pesa (Daraja API) integration for subscription billing and/or
  materials checkout.
- Working search/filter by trade and location.
- Real reviews & ratings tied to completed jobs.
- Admin tooling to verify fundis before their badge goes live.
- Once a `.co.ke` domain is purchased: point DNS at GitHub Pages (or move
  to proper hosting if a backend is added).

---

### How to reuse this prompt

Paste this whole document to an AI coding assistant along with a specific
ask, e.g.:

> "Using the attached MASTER_PROMPT.md as the brand and product spec,
> build a fundi sign-up page that matches the existing design system."

That keeps every future addition consistent with the brand, colors, and
structure already established.
