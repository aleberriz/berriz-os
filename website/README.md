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
| `PUBLIC_KIT_NEWSLETTER_URL` | Kit subscribe or archive page for *The Trade-off*. |
| `PUBLIC_KIT_NEWSLETTER_RSS` | RSS feed URL; at build time, `/writing` lists parsed `<item>` entries. |

## Field Notes

`/field-notes` is a content collection of distilled career lessons, one per card. Each card is a standalone page with a URL you can cite or project.

### How to add a new card

1. Create a markdown file at `src/content/cards/<slug>.md`. Use a short kebab-case slug that describes the lesson (e.g. `correlation-is-not-causation.md`).
2. Add frontmatter and a body:

   ```markdown
   ---
   title: "Correlation is not causation"
   summary: "Two variables moving together does not mean one drives the other."
   date: 2026-09-20
   tag: causal-inference
   ---

   The body is the elaboration. Keep it short: one to three paragraphs
   that make the core message land. This is what appears below the
   summary on the card page.
   ```

3. Run `npm run dev` to preview at `http://localhost:4321/field-notes/<slug>/`.
4. Commit and push. Cloudflare rebuilds on merge to `main`.

### Frontmatter fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | yes | The lesson, stated as a short claim. Displays as the card heading. |
| `summary` | yes | One sentence distilling the core message. Displays below the title in larger type. |
| `date` | yes | Publication date. Controls sort order (newest first on the index). |
| `tag` | no | A short theme label (e.g. `causal-inference`, `semantic-layer`). Displays after the date. |

### Routes

- `/field-notes/` — index listing all cards, newest first.
- `/field-notes/<slug>/` — the card page with prev/next navigation.
- `/field-notes/<slug>/?present` — present mode: hides header and footer, enlarges type for classroom projection.

### Design notes

- The card body supports full markdown: bold, italics, lists, code blocks, blockquotes.
- Keep the body to one screen. Field notes are flashcards, not essays. If a lesson needs more than three paragraphs, split it or write it as an essay under `/writing` instead.
- The slug becomes the URL. Choose it once and do not rename it; external links and citations depend on it being stable.

## Building page data

`/building` reads `../projects/projects.yaml` at **build** time (repo root relative to `website/`). Keep `on_hub: true` accurate in YAML; no duplicate list in the site source.

## Essays (later)

To add MDX essays: enable an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) under `src/content/essays/`, add a dynamic route `src/pages/writing/[slug].astro`, and list entries from `/writing`.
