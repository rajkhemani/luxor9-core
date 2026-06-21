# LUXOR9-CORE — EXECUTION BOARD
## Grounded, vetted against real files

**Current state as of /mnt/e/projects/luxor9-core master 080ae07**
- Code is in `packages/` (real). Root planning docs are aspirational and out of sync (see CLAUDE.md warning).
- Real code exists: `packages/api/app/` (agents, api, main, config, db), `packages/mcp/universal.py`, client modules.
- 4 real tests exist flat in `tests/`; 3 empty dirs exist as placeholders (`unit/`, `integration/`, `e2e/`).
- Empty `packages/{agents,cli,core}` are unused.
- Dead file `packages/api/app/api.py` exists but is shadowed by the `app/api/` package (CLAUDE.md notes).

---

## P0 — PLUMBING & REPO HYGIENE

| ID | Title | Status | Note |
|---|---|---|---|
| P0-1 | Fix test invocation: `make test-unit` fails because tests aren't mounted into the api container | In Progress | Add `./tests:/app/tests` to docker-compose already done; now discover why import fails despite `/app/packages` being on sys.path |
| P0-2 | Decide fate of empty dirs: `packages/{agents,cli,core}` and `tests/{unit,integration,e2e}` | Pending | Recommend delete the empty dirs to stop lying about capabilities, then stop. |
| P0-3 | Remove dead file `packages/api/app/api.py` | Pending | Safe to delete; the package `packages/api/app/api/` provides the real routes and `main.py` imports those. |
| P0-4 | Put `.env.example` back into tracking if you want it publicly visible | Pending | Was ignored by `.env.*`; `git add -f .env.example` |

---

## P1 — TESTING

| ID | Title | Status | Note |
|---|---|---|---|
| P1-1 | Make `make test` green | In Progress | Root cause: pytest collection of `tests/test_universal.py` fails with `ModuleNotFoundError: No module named 'packages'`. Need PYTHONPATH fix in container or sys.path hacks. Minimal accepted fix: add `conftest.py` adding `Path('/app/packages')` to `sys.path`, or set PYTHONPATH to include `/app/packages` and `/app`. |
| P1-2 | Split tests into `tests/unit/`, `tests/integration/`, `tests/e2e/` | Pending | After P0-2. |
| P1-3 | Add tests for the 5-tier agent runtime (`packages/api/app/agents/`) | Pending | Not covered yet. |
| P1-4 | Add Make targets for unit/integration layers after split | Pending | |

---

## P2 — SDK / CLI / AGENT LIB (the "OSS plan" promises)

| ID | Title | Status | Note |
|---|---|---|---|
| P2-1 | Build `packages/core/luxor9/` — public SDK facade over `orchestrator.py` + `universal.py` | Pending | Keystone for `pip install luxor9`. Start with `Agent`, `Task`, `Luxor9Client`. |
| P2-2 | Build `packages/cli/` — `luxor9` command | Pending | Thin wrapper over core. |
| P2-3 | Extract/publish agent personas to shared lib for SDK + API reuse | Pending | Avoids duplication between API app and future CLI/SDK consumers. |
| P2-4 | Package MCP as distributable (`npx luxor9-mcp` equivalent) | Pending | OSS plan Phase 4. |

---

## P3 — DOC / REPO TRUST

| ID | Title | Status | Note |
|---|---|---|---|
| P3-1 | Consolidate the 8 root plan docs into `ROADMAP.md` | Pending | Preserve the real commitments, drop the drift. |
| P3-2 | Add a changelog/decisions log for upcoming structural changes | Pending | See P0–P2 above for what's changing. |

---

## EXECUTION ORDER

1. P0-1 first (tests green => can validate all later changes)
2. P0-2 + P0-3 (reduce surface area before SDK work)
3. P1-2..P1-4
4. P2-1..P2-4
5. P3-1, P3-2
