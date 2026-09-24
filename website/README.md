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

## Theming

The site opens in dark mode unless the reader has saved a different choice with
the header toggle. OS color preferences do not change this default. Both
themes are defined once, as CSS variables in
[`src/styles/global.css`](src/styles/global.css), and Tailwind maps its color
utilities onto those variables in `tailwind.config.mjs`.

The practical consequence: **do not write `dark:` color classes in the shell.**
Write `text-ink`, `bg-canvas`, `border-line`, and the right color resolves in
both themes. `dark:` is still configured, keyed to `[data-theme="dark"]`, for
the rare rule a token cannot express.

Text colors are a three-step ramp, and using them as intended is what gives a
page its hierarchy:

| Token | Use for |
|---|---|
| `text-ink` | Headings, the active nav item, anything that should read first |
| `text-ink-body` | Running prose |
| `text-ink-muted` | Dates, tags, captions, other metadata |
| `text-accent` | Links, paired with an underline so color is never the only signal |
| `border-line` | Rules and dividers |

Every one of these clears WCAG AA against `bg-canvas` in both themes.

How the theme is chosen, in order:

1. `:root` holds dark, which is also the no-JavaScript default.
2. `data-theme="light"` on `<html>` applies the light palette.
3. The header toggle saves an explicit choice for later visits.

The first two rules are pure CSS, so dark mode paints on the first frame. The
inline script in `ThemeHead.astro` only replays a stored choice, which is why it
must stay `is:inline` and stay in `<head>` — moving it would reintroduce the
flash it exists to prevent.

Bare field notes opt out of all of this. They paint their own background and set
their own colors, by design.

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
| `featured` | no | `true` pins the card to the top of the index, above the date-sorted rest. Prev/next navigation follows the same order. Defaults to `false`. |
| `image` | no | Path to an image in `/public` (e.g. `/field-notes/my-meme.png`). Shown large between summary and body. Put image files in `public/field-notes/`. |
| `imageAlt` | no | Alt text for the image. Falls back to the title if omitted. |
| `display` | no | `default` (standard site layout) or `bare` (document shell only — no header, footer, or styling). Defaults to `default`. See [custom-designed field notes](#custom-designed-field-notes). **Not** `layout`: MDX reserves that key. |
| `series` | no | Series key for grouped notes (e.g. `opgov-flashcards`). Drives the index grouping at the top of `/field-notes/`. |

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

### Custom-designed field notes

Some notes need their own look — a different palette, diagrams, a visual joke, a piece meant to be read by an audience that would bounce off the standard card. Those get built as a dedicated Astro component and rendered through the `bare` display mode.

This costs more to maintain than a markdown card, so it should earn it. Most notes should stay `.md`.

**The shape:**

```
src/content/cards/<slug>.mdx          frontmatter + a one-line import
src/components/field-notes/<Name>.astro   the entire design, scoped
```

**Steps:**

1. Copy [`src/components/field-notes/_template.astro`](src/components/field-notes/_template.astro) to `<PascalCaseName>.astro` in the same folder. The template carries the working skeleton and documents every trap below.
2. Create `src/content/cards/<slug>.mdx`:

   ```mdx
   ---
   title: "The claim, stated short"
   summary: "One sentence giving away the conclusion."
   date: 2026-09-20
   tag: causal-inference
   display: bare
   ---

   import MyNote from '../../components/field-notes/MyNote.astro';

   <MyNote />
   ```

3. Build the design in the component. Keep the `.mdx` file to frontmatter plus the import — MDX is a poor place to write HTML and CSS, and putting the design in a real `.astro` file gets you scoped styles and proper syntax handling.
4. Preview at `http://localhost:4321/field-notes/<slug>/`, **and check it at 390px wide.**

Worked examples, each with a deliberately different look:

- [`AbTestTrap.astro`](src/components/field-notes/AbTestTrap.astro) → `/field-notes/fake-ab-test-trap/` — light graph paper, Space Grotesk display, SVG causal diagrams.
- [`DirectionalAnswer.astro`](src/components/field-notes/DirectionalAnswer.astro) → `/field-notes/directional-answer-trap/` — manila spec sheet inside a drafting border, IBM Plex Mono display, clause numbering, engineering title block.
- [`GenAiWithoutData.astro`](src/components/field-notes/GenAiWithoutData.astro) → `/field-notes/gen-ai-without-data/` — harbour cutaway: a waterline running down a dark page, Archivo Black caption type, and an original two-panel meme drawn in SVG.

Two custom notes should not look like each other. A shared house style for bare notes would defeat the point of the escape hatch.

**One exception: the Operational Governance Knowledge Flashcards.** Nineteen decks from the OpGov archive (2019–2023) are republished as bare notes that all share one look — a ruled index card — rendered by the single shared component [`OpGovFlashcard.astro`](src/components/field-notes/OpGovFlashcard.astro). A series is allowed a uniform house style; a series is also the only case where one component serves many notes. The card content lives in [`src/data/opgovFlashcards.ts`](src/data/opgovFlashcards.ts) (split across `opgovCardsA.ts` / `opgovCardsB.ts`), keyed by slug; each `src/content/cards/<slug>.mdx` is just frontmatter, `series: opgov-flashcards`, `display: bare`, and a one-line render. The frontmatter carries the publication date of the original deck; the deck's original section breakdown (What is it / When is it useful / How to use it / Common pitfalls / References and resources) is preserved, with the slide's main-area content (tables, diagrams, deep-dives) as its own section right after "How to use it". Internal-only links were dropped on republish; only public references are kept. To add a card to the series, add its entry to the data module and a matching thin `.mdx` file.

#### Rules, each of which has already broken a build

- **The frontmatter key is `display`, not `layout`.** MDX reserves `layout` and resolves it as a component import path. Using it fails the build with `Rollup failed to resolve import "bare"`.
- **Keep `<style>` scoped — never add `is:global`.** Astro scopes styles per component, which is what keeps one note's CSS off every other note and out of present mode. A global rule from a bare note is a bug waiting for the second bare note.
- **Paint the background on your own root element, not `body`.** Styling `body` needs a global rule. Instead give the root element `min-height: 100vh` and a background, full-bleed, with an inner element holding the reading column.
- **In SVG, CSS beats presentation attributes.** `<text text-anchor="start">` loses to any CSS rule setting `text-anchor`, and labels shift and clip with no warning. Drive `text-anchor`, `stroke-width`, and `fill` from classes.
- **SVG text does not wrap.** Long labels clip on phones. Keep SVG text to a few words and put the sentence in a `<figcaption>`. For anything with long labels — bar charts especially — build it in HTML and CSS instead, where text reflows.
- **Give each `<svg>` `role="img"` and an `aria-labelledby` `<title>`** that says what the diagram shows.
- **Avoid scroll-linked animation.** `animation-timeline: view()` is unevenly supported and fails toward *invisible content*, which is not a failure mode worth the effort.

#### Present mode

`?present` works on bare notes too: the `present` class is added to `<html>`, so target `html.present` in your own CSS if the design needs a projector variant.

### Routes

- `/field-notes/` — index listing all cards, newest first.
- `/field-notes/<slug>/` — the card page with prev/next navigation.
- `/field-notes/<slug>/?present` — present mode: hides header and footer, enlarges type for classroom projection.

Redirects for renamed slugs live in [`public/_redirects`](public/_redirects), which Cloudflare Pages reads from the build output. That yields a real 301; Astro's own `redirects` config would only emit a meta-refresh page in static mode.

### Design notes

- The card body supports full markdown: bold, italics, lists, code blocks, blockquotes.
- Keep the body to one screen. Field notes are flashcards, not essays. If a lesson needs more than three paragraphs, split it or write it as an essay under `/writing` instead.
- The slug becomes the URL. Choose it once and treat it as permanent — field notes are written to be cited and projected, so links outlive titles.
- If a slug does have to change, rename the file **and** add a 301 in [`public/_redirects`](public/_redirects). Keep the rule forever; it costs a line.

## Building page data

`/building` reads `../projects/projects.yaml` at **build** time (repo root relative to `website/`). Keep `on_hub: true` accurate in YAML; no duplicate list in the site source.

## Essays (later)

To add MDX essays: enable an Astro [content collection](https://docs.astro.build/en/guides/content-collections/) under `src/content/essays/`, add a dynamic route `src/pages/writing/[slug].astro`, and list entries from `/writing`.
