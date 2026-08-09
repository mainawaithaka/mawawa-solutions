# Mawawa Solutions — Website

"Building Better Spaces. Connecting People."

A marketplace website connecting customers in Kimuka and surrounding areas
with verified fundis (plumbers, electricians, masons, contractors) — and a
materials marketplace where fundis sell building materials directly.

## What's in this folder

```
mawawa/
├── index.html          → the homepage (all sections live here for now)
├── css/style.css        → all styling (colors, fonts, layout)
├── js/main.js            → small interactive bits (search tab toggle)
├── images/logo.png       → your logo
└── README.md             → this file
```

This is a **static site** — no server, no database yet. The fundi profiles
and material listings you see are placeholder examples so the site looks
and feels real. Nothing is saved when someone fills in the contact form yet.

## Put it on GitHub (no domain needed)

1. Go to [github.com](https://github.com) and create a free account if you
   don't have one.
2. Click the **+** icon (top right) → **New repository**.
   - Name it something like `mawawa-solutions`.
   - Set it to **Public**.
   - Don't add a README/gitignore (you already have one) — click **Create repository**.
3. On the new repo's page, click **uploading an existing file**.
4. Drag in every file and folder from this `mawawa` folder (keep the folder
   structure: `css`, `js`, `images` should stay as folders).
5. Click **Commit changes**.

## Turn it into a live website (still free, still no domain)

1. In your repo, go to **Settings → Pages** (left sidebar).
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
4. Wait 1–2 minutes, refresh the page — GitHub will show you a link like:
   `https://your-username.github.io/mawawa-solutions/`
5. That link is your live site. Share it with anyone right now. When you
   buy your `.co.ke` domain later, you point it at this same GitHub Pages
   site (or move to proper hosting) — no rebuild needed.

## What's next (in priority order)

This is a strong, good-looking MVP — but it's a **front end only**. To
become a real working platform you'll eventually need:

1. **A backend + database** — to store real fundi profiles, materials,
   stock levels, and customer messages (options: Firebase, Supabase, or a
   custom Node/Django backend).
2. **Fundi sign-up & subscription flow** — a real form, M-Pesa (Daraja
   API) integration for the monthly KSh 500 subscription, and a login area
   for fundis to manage their own listings and stock.
3. **Search that actually filters** — right now the search bar just
   scrolls to a section; it needs to query real data by trade and area.
4. **Reviews & ratings system** — so the ★ ratings shown are real,
   submitted by customers after a job.
5. **Admin/verification tooling** — a way for you (Mawawa) to verify a new
   fundi before their "Verified" badge goes live.

I'm happy to help you build any of these next — just say the word.
