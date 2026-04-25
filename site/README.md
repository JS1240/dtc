# DTC — Landing site

Vite + React + TypeScript implementation of the DTC landing page.

## Setup

```bash
npm install
cp .env.example .env.local   # then edit .env.local with your Formspree ID
npm run dev                  # http://localhost:5173
```

## Scripts

- `npm run dev` — Vite dev server with hot reload.
- `npm run build` — type-check (`tsc -b`) + production build to `dist/`.
- `npm run preview` — serve the production bundle locally.
- `npm run gen:assets` — re-generate PNG assets (icons, OG image) in `public/` from SVG sources in `scripts/sources/`. Run after editing the sources, then commit the generated PNGs.

## Environment

| Variable             | Required | Default | Description                                                  |
| -------------------- | -------- | ------- | ------------------------------------------------------------ |
| `VITE_FORMSPREE_ID`  | yes      | —       | Form ID from your Formspree dashboard, e.g. `xnqlvabc`.      |

If unset, the contact form renders but submitting shows a configuration error instead of silently failing.

## Deploy

Targets Vercel out of the box — no `vercel.json` needed. Set `VITE_FORMSPREE_ID` in the Vercel project's Environment Variables.

## Project structure

```
public/                    Static assets (favicon, OG image, robots.txt, sitemap.xml, manifest)
scripts/
  gen-assets.mjs           Sharp-based SVG → PNG converter
  sources/                 SVG sources for icons + OG image
src/
  App.tsx                  Page composition + LeadFormProvider wrapper
  main.tsx                 React bootstrap
  components/              Reusable UI (StickyNav, MagneticBtn, Doodle, Reveal, ServiceFlip)
  content/data.ts          All Croatian copy + typed structures
  lib/
    leadForm.ts            Lead-form context (open + prefill staging)
    scroll.ts              Shared smooth-scroll helper
  sections/                One file per page section
  styles/globals.css       Design tokens, type, sticker/tilt/reveal/draw-in classes
```
