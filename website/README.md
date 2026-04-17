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
