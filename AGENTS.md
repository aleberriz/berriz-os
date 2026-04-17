# AGENTS.md — berriz-os

This file is the entry point for any AI agent (Cursor, Claude Code, Codex, Copilot,
or any agentskills.io-compatible tool) opening this repository. Read it before acting.

---

## What this repository is

`berriz-os` is the **public operating system** for Alejandro Berrizbeitia's personal brand.
It contains:

- The **narrative canon** (brand positioning, bios, voice guide)
- The **project index** (all repos, their status, whether they appear on the website)
- The **roadmap** (the multi-phase personal brand plan with rationale for every decision)
- **OSS collaboration targets** (one file per project being tracked)
- The **website source** (`website/` — Astro + MDX + Tailwind, deployed to aleberriz.com)
- **Workspace files** for multi-repo Cursor sessions

This repo is intentionally public. It contains only what is meant to be read.
**Personal OKRs, career planning, and family content live in `atlas` (private repo).**

---

## Owner

Alejandro Berrizbeitia (`aleberriz` on GitHub).
Senior Data Analyst at Kit. Based in Paris. Trilingual (EN/ES/FR).
Brand thesis: *"Narratives in numbers."*
See [brand/narrative.md](brand/narrative.md) for the full positioning document.

---

## Folder map

```
berriz-os/
├── AGENTS.md              ← you are here
├── README.md              ← human-facing overview
├── llms.txt               ← machine-readable navigation index
├── brand/
│   ├── narrative.md       ← positioning, taglines, bios, proof points
│   ├── voice.md           ← writing style guide
│   └── foss-posture.md    ← tooling and hosting philosophy
├── roadmap/
│   └── 2026-personal-brand.md  ← the full multi-phase plan with rationale
├── projects/
│   ├── projects.yaml      ← MACHINE-READABLE source of truth for all repos
│   └── index.md           ← rendered view (regenerated from projects.yaml)
├── collaborations/
│   ├── README.md          ← priority order
│   └── <project>.md       ← one file per OSS contribution target
├── website/               ← Astro site source (aleberriz.com)
├── workspaces/            ← .code-workspace files for multi-repo Cursor sessions
└── templates/
    └── public-analytics-project/  ← starter template for hobby analytics repos
```

---

## Conventions

All commits follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/).
All branches follow `type/short-description` naming.
Full git workflow is defined in the [process-git skill](https://github.com/aleberriz/agent-skills/tree/main/plugins/core-skills/skills/process-git/SKILL.md).

Writing in this repo follows the [voice guide](brand/voice.md):
economist-precise, plain English, active voice, no hype.

---

## What to read for full context

| Goal | Read |
|------|------|
| Understand the overall plan and *why* each decision was made | [roadmap/2026-personal-brand.md](roadmap/2026-personal-brand.md) |
| Write anything on Alejandro's behalf (bio, copy, newsletter) | [brand/narrative.md](brand/narrative.md) + [brand/voice.md](brand/voice.md) |
| Add a new project to the index | [projects/projects.yaml](projects/projects.yaml) — edit YAML, then update index.md |
| Make a tooling or hosting decision | [brand/foss-posture.md](brand/foss-posture.md) |
| Track or update an OSS contribution | [collaborations/](collaborations/) |

---

## Common agent tasks — where to start

**"Add a new project to the index"**
→ Edit `projects/projects.yaml` (add a new entry following the existing schema).
→ Update `projects/index.md` to match.
→ Do NOT create the new project's files here — the repo is a sibling in `~/repos/`, not a child.

**"Update the roadmap / plan"**
→ Edit `roadmap/2026-personal-brand.md`.
→ If the phase is complete, mark it and add a brief "what actually happened" note.

**"Draft a bio or profile update"**
→ Read `brand/narrative.md` first. Use a bio variant from there; do not invent new copy.
→ Read `brand/voice.md` for tone constraints.

**"Add an OSS collaboration target"**
→ Create `collaborations/<project>.md` following the template in existing files.
→ Update `collaborations/README.md` priority list.

**"Update the website"**
→ Work in `website/`. See the Astro docs and the site's own README.

**"Propose a new skill for agent-skills"**
→ Open `~/repos/agent-skills` in a separate Cursor window. Do not create skill files here.

---

## What NOT to do in this repo

- Do not commit personal OKRs, salary notes, or career-planning content — those belong in `atlas`.
- Do not create new project repos under this directory — all repos are siblings in `~/repos/`.
- Do not edit `projects/index.md` without also updating `projects/projects.yaml` to match.
- Do not introduce a new tooling dependency without checking `brand/foss-posture.md` first.

---

## Local workspace layout

```
~/repos/
  berriz-os/          ← this repo (public)
  intelligence-layer/ ← knowledge base (public)
  agent-skills/       ← skills library (public)
  atlas/              ← lifelog + personal OKRs (private, not yet created)
  punta_cana_tours/   ← paid SEO/SEM side hustle (private)
  cartographia/       ← planned (public)
  biblioscope/        ← planned (public)
  ludography/         ← planned (public)
  plata/, dotfiles/   ← private utilities
  analytics-dbt/, kit-omni/, analytics-shared/  ← work repos
```

One Cursor window per repo is the default. For cross-repo sessions, use a
`.code-workspace` file from `workspaces/`.
