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
| `PUBLIC_KIT_NEWSLETTER_URL` | Kit subscribe or archive page for *The Trade-off*. When set, the Writing page and About page link to it. |
| `PUBLIC_KIT_NEWSLETTER_RSS` | RSS feed URL; at build time, `/writing` lists parsed `<item>` entries in a Newsletter section. |

LinkedIn and GitHub profile URLs are hardcoded in `src/site.config.ts`. The IE blog post URL is also there.

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
| `image` | no | Path to an image in `/public` (e.g. `/field-notes/my-meme.png`). Shown large between summary and body. Put image files in `public/field-notes/`. |
| `imageAlt` | no | Alt text for the image. Falls back to the title if omitted. |
| `layout` | no | `default` (standard site layout) or `bare` (no header, no footer, no styling). Defaults to `default`. See custom layouts below. |

### Images and memes

To show a meme or image on a card, drop the file in `public/field-notes/` and set the `image` field:

```markdown
---
title: "Garbage in, garbage out"
summary: "The quality of the output is bounded by the quality of the input."
date: 2026-09-18
tag: data-quality
image: /field-notes/gigo-meme.png
imageAlt: "A conveyor belt feeding trash into a machine that outputs the same trash"
---

The body goes here.
```

You can also embed images inline in the body using standard markdown `![alt](/field-notes/filename.png)`.

### Custom layouts

Some cards need a completely different look — a different color scheme, a full-bleed image, a visual joke that breaks from the site's visual paradigm. For those cases:

1. Set `layout: bare` in the frontmatter.
2. Rename the file from `.md` to `.mdx`.
3. Define your own page structure in the MDX body. The `bare` layout provides only the HTML document shell (head, meta tags, fonts) and the present-mode script. Everything else — layout, styling, structure — is yours to define.
4. You can import and use any Astro component, write inline `<style>` blocks, or use Tailwind classes.

Example:

```mdx
---
title: "Cognitive fallacies in action"
summary: "A list of cognitive fallacies with common examples."
date: 2026-09-18
layout: bare
---

<div class="min-h-screen flex items-center justify-center bg-yellow-100">
  <div class="max-w-2xl p-12 text-center">
    <h1 class="text-6xl font-bold">Cognitive fallacies</h1>
    <p class="mt-4 text-2xl">Coming soon.</p>
  </div>
</div>
```

The `?present` query param still works on bare-layout cards. The `present` class is added to `<html>`, so you can target it in your own CSS.

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
