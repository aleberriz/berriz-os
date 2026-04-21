# aleberriz.com (site source)

Static site for the public hub. Stack: Astro 4, MDX, Tailwind. Canonical copy lives in the repo root under `brand/`; this folder only implements layout and routing.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Build output: `dist/` (used by Cloudflare Pages with root directory `website`).

**Cloudflare Pages:** production branch `main`, root directory `website`, build command `npm run build`, output directory `dist`. If a build host cannot write to `~/.config`, set environment variable `ASTRO_TELEMETRY_DISABLED=1` on the project.

## Node

Astro 4 targets Node `>=20.3.0`. If Cloudflare build fails on Node version, set `NODE_VERSION` to `20` or `22` in the Pages project environment.

## Environment variables (optional)

Set in Cloudflare Pages → **Settings** → **Variables and Secrets** (production). All are optional; the site builds without them.

| Variable | Purpose |
|----------|---------|
| `PUBLIC_LINKEDIN_URL` | Full profile URL for the About page link. |
| `PUBLIC_KIT_NEWSLETTER_URL` | Kit subscribe or archive page for *The Intelligence Layer*. |
| `PUBLIC_KIT_NEWSLETTER_RSS` | RSS feed URL; at build time, `/writing` lists parsed `<item>` entries. |

## Building page data

`/building` reads `../projects/projects.yaml` at **build** time (repo root relative to `website/`). Keep `on_hub: true` accurate in YAML; no duplicate list in the site source.

## Essays (later)

To add MDX essays: enable an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) under `src/content/essays/`, add a dynamic route `src/pages/writing/[slug].astro`, and list entries from `/writing`.
