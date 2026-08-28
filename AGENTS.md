# LUXOR9 — repository notes

> **This repository contains no application code.** The LUXOR9 platform — agent hierarchy,
> API, MCP clients, UI shell — lives in
> [`rajkhemani/luxor9-unified-os`](https://github.com/rajkhemani/luxor9-unified-os).
> Read that repo's `AGENTS.md` for the architecture. See `CLAUDE.md` here for why.

## What changed

This file previously documented a runnable monorepo: `make dev`, `make test`, per-tier model
maps, `packages/api` + `packages/ui` + `packages/mcp`, and a five-tier agent hierarchy. That
content described a 2026-06 snapshot of the code now in `luxor9-unified-os`. It was removed
rather than corrected in place, because a corrected copy here would only drift again — the
code it describes is not in this repo and cannot be validated against it.

The commands it listed (`make dev`, `make dev-build`, `make oss-up`, `make test`,
`make lint-py`, …) are real, and they work **in `luxor9-unified-os`**, whose `Makefile`
carries the same target names.

## Repo layout

```
ds-bundle/          @luxor9/ui design-system bundle (the substantive artifact here)
infra/              Dockerfiles, nginx, fly.io, SearXNG, Strata configs
monitoring/         Prometheus scrape config
docker-compose.*    Reference stacks — mount packages/ and tests/, which do NOT exist here
.codebuddy|.gemini|.kiro|.opencode/
                    Four byte-identical copies of one ui-ux-pro-max skill bundle
*.md                Strategy/research writing — aspirational, not a description of code
```

## Ground rules

- Agents, routing, reasoning, MCP → `luxor9-unified-os`. Do not add them here.
- Design system → `ds-bundle/`. Deployment → `infra/`.
- The four skill-bundle copies have no single source of truth yet. Editing one diverges it
  from the other three; see `docs/ARCHITECTURE-REVIEW.md` in `luxor9-unified-os`.
- The strategy docs are vision documents. Code is ground truth, and the code is elsewhere.
