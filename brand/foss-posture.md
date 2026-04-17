# FOSS Posture

How Alejandro Berrizbeitia approaches software, tooling, and infrastructure choices.
Documented here so the preference is consistent and quotable across profiles, README files,
and project decisions — and so AI agents making tooling recommendations have a clear prior.

---

## The principle

Prefer open-source and open-standards solutions. Avoid vendor lock-in where the cost
of switching later would be high. Accept pragmatic exceptions when the open alternative
imposes meaningfully higher friction with no meaningful benefit.

This is not purism. It is risk management applied to tooling.

---

## Committed defaults

| Layer | Default |
|-------|---------|
| Desktop OS | Fedora (primary), Ubuntu LTS / Linux Mint (alternative) |
| Editor | VSCodium (OSS build of VS Code without Microsoft telemetry); Cursor for AI-assisted sessions |
| Terminal | bash / zsh; standard GNU coreutils |
| Office suite | LibreOffice |
| Personal cloud | Nextcloud (self-hosted on Hetzner Cloud) |
| Static hosting | Cloudflare Pages (static output; portable to any host) |
| VPS | Hetzner Cloud (EU data residency, €4-5/mo CX22) |
| Version control | Git + GitHub (GitHub is proprietary infra but git itself is FOSS and the data is portable) |
| Note-taking / lifelog | Obsidian (local-first markdown; files are portable even though the app is closed-source) |
| Password manager | Bitwarden (open-source client and server) |

---

## Permitted exceptions

These cloud/proprietary services are used for specific, justified purposes:

| Service | Justification | Lock-in risk |
|---------|---------------|--------------|
| AWS Bedrock | AI model experiments; no proprietary data format | Low — model outputs are text |
| AWS S3 | Occasional object storage for large datasets | Low — S3 API is widely replicated (MinIO, Backblaze) |
| Google Cloud | Project-specific requirements | Case-by-case; document before committing |
| GitHub Actions | CI/CD for public repos | Medium — YAML format is portable; actions marketplace is not |
| Cloudflare | DNS, CDN, Pages | Low — DNS is portable; Pages output is static HTML |

---

## What is not on the personal brand hub

To keep the personal hub (`aleberriz.com`, `berriz-os`) coherent:

- **Paid commercial work** (e.g., `punta_cana_tours`) is not featured on the hub.
  It has its own commercial surface. Personal brand ≠ business directory.
- **Client work** stays private.
- **Private family content** lives in `atlas` (private repo), not here.

---

## Future infrastructure

When a VPS is needed (Nextcloud, self-hosted analytics, Logseq sync):

```
Provider:  Hetzner Cloud (hetzner.com/cloud)
Location:  Falkenstein (Germany) or Helsinki (Finland)
Tier:      CX22 (2 vCPU, 4 GB RAM, 40 GB SSD) — €3.79/mo as of 2026
OS:        Ubuntu 24.04 LTS
```

When `berrizbeitia.org` matures into a family wiki:
- Hosted on Cloudflare Pages (static output from `atlas` sanitized subset)
- Access control: Cloudflare Access (zero-trust, email-based invite) or HTTP basic auth
- No passwords stored in the repo

---

## Why this is documented

Consistency is the goal. When someone (human or agent) needs to make a tooling decision
in any project under this brand, they should be able to check this file and get a prior
without re-litigating the question from scratch.
