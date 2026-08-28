# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Read this first: there is no application code here

**`luxor9-core` contains no running application.** If you are looking for the LUXOR9
backend, the agent hierarchy, `BaseAgent`, `UniversalMCP`, or anything you can execute,
it is in **[`rajkhemani/luxor9-unified-os`](https://github.com/rajkhemani/luxor9-unified-os)** —
start from that repo's `AGENTS.md`.

Earlier versions of this file described a monorepo with `packages/api`, `packages/ui`,
`packages/mcp`, `tests/`, and a working `make dev`. That description was accurate for a
2026-06 snapshot of the code that now lives in `luxor9-unified-os`, and was never true of
this repository — `git ls-files` returns zero entries under `packages/` or `tests/`.
The compose files here still mount those paths, so **`make dev` cannot start in this repo.**

Details and evidence: `docs/ARCHITECTURE-REVIEW.md` in `luxor9-unified-os`.

### Corrections worth carrying over

If you have read the old description, three things in it are now wrong:

- **Agent code moved.** `BaseAgent` is at `packages/agents/agents/base_agent.py` in
  `luxor9-unified-os`, not `app/agents/`. MCP clients are at `packages/core/mcp/`.
- **`UniversalMCP` is already wired.** The old "live next step" is done: `reason()` goes
  through `LLMEngine`, whose fallback chain is OpenAI → Anthropic → Groq → UniversalMCP →
  stub (`packages/agents/agents/llm_engine.py:157`).
- **`app/api.py` no longer exists**, so the note about it shadowing the `app/api/` package
  is obsolete.

## What this repo actually holds

| Path | What it is |
|---|---|
| `ds-bundle/` | The `@luxor9/ui` design-system bundle — HUD-style component surface (`_ds_bundle.js` / `.css`, stories map, render checks). The one build artifact of substance here. |
| `infra/` | Deployment configs: `docker/Dockerfile.{api,ui,strata}`, `nginx.conf`, `fly/`, `searxng/settings.yml`, `strata/strata-config.yml`. |
| `docker-compose.{dev,oss,prod}.yml` | Reference stack definitions. **They mount `packages/` and `tests/`, which do not exist here** — they describe the unified-os layout. |
| `monitoring/prometheus.yml` | Scrape config. |
| `.codebuddy/`, `.gemini/`, `.kiro/`, `.opencode/` | Four **byte-identical** copies of one `ui-ux-pro-max` skill bundle (28 files each), one per AI coding tool. Editing one leaves the other three stale. |
| `*ULTRAPLAN*.md`, `DEEP_RESEARCH.md`, `NEMOTRON_PLAN.md`, `NVIDIA_BLUEPRINT.md`, `EXECUTION_BOARD.md`, `SUCCESS_FAILURE_AUTOPSY.md`, `CROSS_PLATFORM.md`, `ULTRASEARCH.md` | Strategy and research writing. **Aspirational** — they reference agent personas and a `pip install luxor9` SDK that do not exist. Treat as vision, never as a description of code. |
| `folder_inventory.md`, `duplicate_flags.csv` | Inventory scans. |

## Working in this repo

- Changes to the design system belong in `ds-bundle/`; changes to deployment belong in
  `infra/`. Anything about agents, routing, or the API belongs in `luxor9-unified-os`.
- When you edit the `ui-ux-pro-max` skill, remember there are four copies. Until a single
  source of truth is chosen, an edit to one is a divergence from the other three.
- Python tooling config in `pyproject.toml` (black line-length 100, ruff `E,F,I,N,W`,
  Python ≥3.11) is kept for consistency with `luxor9-unified-os`. There are no packages
  here to lint.
- Commit and push only when explicitly asked.
