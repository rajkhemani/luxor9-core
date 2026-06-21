# LUXOR9 — Agent Orchestration Platform

## Repo layout
```
E:\Projects\luxor9-core\     # canonical monorepo (active dev)
E:\Projects\LUXOR9\          # legacy — references only, don't edit
```

No `.github/workflows/` or `opencode.json` in this repo. The legacy repo has the Composio/Rube config.

## Quick start
```sh
make dev              # dev stack (API:8000, UI:5173, PG:5432, Redis:6379, Strata:8081)
make dev-build        # dev stack, rebuilding images (needed after adding test files)
make dev-down / dev-logs
make oss-up           # dev + local OSS (Ollama/Whisper/Kokoro/SearXNG/Chroma)
make oss-models       # pull local models into Ollama (llama3.1:8b, qwen2.5:3b, all-minilm)
make oss-status       # UniversalMCP status() — which provider serves each capability

make test             # install deps + run pytest in api container
make test-api         # just tests/test_api.py
make test-unit        # everything except test_api.py (agents + mcp + universal)
make coverage         # html pytest-cov report
make lint-py          # black (100) + ruff check (E,F,I,N,W) --fix on packages/
make lint-ts          # eslint in ui container
make build / push     # multi-stage prod images → luxoranova/ on Docker Hub
make pwa-build        # installable PWA → packages/ui/dist
make desktop-dev / desktop-build  # Tauri native app
make db-shell / redis-cli
make debug-traces / debug-trace / debug-errors  # LangSmith trace debugging
make clean            # WARNING: docker system prune -af + volume prune -f (all projects)
```

Run a single test (pytest runs from `/app` in the container; `asyncio_mode = auto` so async tests need no decorator):
```sh
docker compose -f docker-compose.dev.yml exec api pytest tests/test_universal.py::TestRouting::test_auto_prefers_local -v
```

## Architecture

**Entrypoints.** FastAPI app at `packages/api/app/main.py`. Dev command: `uvicorn app.main:app --reload`. The orch is booted by `Orchestrator.boot()` (`app/orchestrator.py`) via API calls, not at startup.

**OSS overlay.** `make oss-up` applies `docker-compose.oss.yml` on top of `docker-compose.dev.yml` — adds OSS provider services + sets their URLs as API container env.

**Agent hierarchy (5 tiers, message-passing).** T0 LUXOR-PRIME → T1 C-Suite (CORTEX/TREASURY/SENTINEL) → T2 ten VPs → T3 managers (ACQ/DEL/RET per VP) → T4 workers. `BaseAgent` runs an async `think()` loop; tools assigned per tier via `app/agents/tools/__init__.py` (`TIER_TOOLS`, `WORKER_TYPE_TOOLS`).

**LLM routing — three coexisting paths:**
1. `app/agents/llm_engine.py` — **legacy LangChain** (OpenAI→Anthropic→Groq→stub), what `BaseAgent.reason()` actually calls
2. `packages/mcp/nvidia_nim.py` — direct NVIDIA NIM HTTP, used by orchestrator MCP warm-up
3. `packages/mcp/universal.py` — **OSS-direction router**, local-first (`local→self→free→paid`), `OSS_MODE` env (`auto`/`local`/`hybrid`/`cloud`), not yet wired into `BaseAgent.reason()`

**Database.** SQLAlchemy sync+async, auto-seeds categories/streams on init.

## Testing quirks
- `test_api.py` sets env vars (`ENVIRONMENT=test`, `DATABASE_URL=sqlite://`, `RATE_LIMIT_ENABLED=false`) at **module level before importing `app`** — not in conftest; order matters
- New/edited test files are **baked into the `api` image** (`./tests/` not volume-mounted). After adding a test, run `make dev-build` before `make test`
- `asyncio_mode = auto` in `tests/pytest.ini` — no `@pytest.mark.asyncio` needed

## Dead code / gotchas
- **`app/api.py` is dead** — the `app/api/` *package* (same-named directory) shadows it. Edit `app/api/routes.py` + `app/api/ceo_routes.py` instead.
- **UI deps**: `npm install --legacy-peer-deps` (React 19 peer conflicts with drei/framer)
- **Compose `version:` field** is deprecated — omit it
- **MCP tools**: always call `COMPOSIO_SEARCH_TOOLS` before hardcoding a tool slug — schemas change

## Key conventions
- Python ≥3.11, black 100, ruff (E/F/I/N/W)
- TypeScript: `tsc --noEmit` for typecheck, no formatter
- Docker: always multi-stage, non-root `USER app`, health checks on all services
- Config: pydantic-settings in `app/config.py` + `.env.example`
- LangSmith tracing: `LANGCHAIN_TRACING_V2=true`, key in docker-compose

## Docker images
| Image | Size | Built from |
|-------|------|-----------|
| `luxor9-api` | 292MB (69MB compressed) | `infra/docker/Dockerfile.api` — Python 3.11 multi-stage |
| `luxor9-ui` | 104MB (29MB compressed) | `infra/docker/Dockerfile.ui` — Node 22 build → Nginx |

## Strategy docs (read-only, aspirational — code under `packages/` is ground truth)
`ULTRAPLAN.md` • `ULTRAPLAN2.md` • `DEEP_RESEARCH.md` • `NVIDIA_BLUEPRINT.md` • `CROSS_PLATFORM.md` • `OSS_SDK_ULTRAPLAN.md` • `SUCCESS_FAILURE_AUTOPSY.md` • `NEMOTRON_PLAN.md` • `ULTRASEARCH.md`
