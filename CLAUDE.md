# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`AGENTS.md` is the canonical, detailed reference (per-tier model maps, MCP endpoints/keys, Docker image sizes, CI/CD secrets). This file is the orientation layer — read `AGENTS.md` for specifics rather than duplicating them here.

## Repo identity

- **`/mnt/e/projects/luxor9-core`** is the canonical monorepo (active dev). **`/mnt/e/projects/LUXOR9`** is legacy — reference only, never edit.
- `luxor9-core` is a git repo (branch `master`, a single `Initial commit`, **no remote configured yet**); legacy `LUXOR9` is *not* a repo. There is no project README (only the generated `ds-bundle/README.md` artifact); strategy lives in the root `*ULTRAPLAN*.md` / `*PLAN*.md` / `DEEP_RESEARCH.md` docs, which are **aspirational and have drifted from the code** — they reference agent personas (overseer/developer/visionary) and a `pip install luxor9` SDK that don't exist. Treat them as vision; code under `packages/` is ground truth. Commit/push only when explicitly asked.
- Everything runs in Docker. The host Python interpreter has **no project deps installed** — do not expect `pytest`/`httpx`/`pydantic` locally. Use the `make` targets, which exec inside the `api` container. Pure-syntax/logic checks (`python3 -m py_compile`, importing `packages.mcp` — its clients import `httpx` lazily) are the only things that run host-side.

## Commands

```sh
make dev            # dev stack (API:8000, UI:5173, PG:5432, Redis:6379, Strata:8081), hot-reload
make dev-build      # same, rebuilding images (needed after changing the Dockerfile/baked deps)
make dev-logs / make dev-down

# OSS / zero-API-key stack — dev stack + Ollama/Whisper/Kokoro/SearXNG/Chroma
make oss-up         # = docker compose -f docker-compose.dev.yml -f docker-compose.oss.yml up
make oss-down       # stop OSS services
make oss-logs       # follow logs of OSS services
make oss-pull       # pull OSS service images
make oss-models     # pull local models into Ollama (llama3.1:8b, qwen2.5:3b, all-minilm)
make oss-status     # print which provider serves each capability (calls UniversalMCP.status())

make test           # all pytest in api container (auto-installs pytest/pytest-asyncio/httpx)
make test-api       # tests/test_api.py only
make test-unit      # everything except test_api.py (agents + mcp + universal)
make coverage       # HTML pytest-cov report
make lint-py        # black (line 100) + ruff (E,F,I,N,W) --fix on packages/
make lint-ts        # tsc/eslint in ui container

make build / make push          # multi-stage prod images → luxoranova/ on Docker Hub
make pwa-build                  # installable PWA → packages/ui/dist
make pwa-preview                # preview PWA build locally
make desktop-dev / desktop-build # Tauri native app

# Debugging and utilities
make debug-traces       # fetch recent LangSmith traces
make debug-trace <id>   # fetch a specific LangSmith trace by ID
make debug-errors       # fetch recent LangSmith errors
make strata             # start Strata service (for Klavis AI)
make strata-logs        # follow Strata logs
make strata-tools       # list Strata tools
make klavis-install     # install Klavis CLI
make klavis-create <userId> # create a Klavis user
make db-shell           # open PostgreSQL shell
make redis-cli          # open Redis CLI
make install            # run the install script (curl to GitHub)
make clean              # WARNING: docker system prune -af + volume prune -f (removes ALL unused Docker images/volumes on host)

# Run a single test (pytest runs from `/app` in the container, `asyncio_mode = "auto"` so async tests need no decorator):
docker compose -f docker-compose.dev.yml exec api pytest tests/test_universal.py::TestRouting::test_auto_prefers_local -v
```

## Architecture (the cross-file big picture)

**Two-stage startup.** `packages/api/app/main.py` builds the FastAPI app — CORS (allow-all in dev, *blocked* in prod when `cors_origins` is empty), an in-memory sliding-window `RateLimiter` middleware, and six routers (`agents/streams/categories/system/metrics` from `routes.py` + `ceo_router`). Its lifespan **only initializes and seeds the database** — it does **not** spawn agents. The agent hierarchy is booted separately by `Orchestrator.boot()` (`app/orchestrator.py`), reached via the `get_orchestrator()` singleton through API calls. `boot()` also starts a metrics loop and `_warm_mcp_connections()` (pre-pings Langbase / AI ML API / NVIDIA / NIM).

**OSS overlay.** `make oss-up` applies `docker-compose.oss.yml` on top of `docker-compose.dev.yml` — adds OSS provider services (Ollama, Whisper, Kokoro, SearXNG, Chroma) and sets their URLs as API container environment variables.

**Agent hierarchy (5 tiers, message-passing).** `app/agents/factory.py` constructs it: T0 `LUXOR-PRIME` → T1 C-Suite (`Cortex`/`Treasury`/`Sentinel`) → T2 ten VPs (FORGE, NEXUS, MUSE, ATLAS, VAULT, MARKET, TERRA, SIGNAL, TITAN, ORACLE — one per business category) → T3 managers (ACQ/DEL/RET per VP) → T4 workers. Every agent subclasses `BaseAgent` (ABC), runs its own async `_run_loop`/`think()` cycle, and coordinates by passing messages up/down (`send_report_up`, `send_directive_down`, `escalate`, `broadcast_to_children`) — not by direct calls. Tools are assigned per tier via `app/agents/tools/__init__.py` (`TIER_TOOLS`, `WORKER_TYPE_TOOLS`).

**LLM routing has three coexisting paths — know which you're touching:**
1. `app/agents/llm_engine.py` — the **legacy LangChain** engine (OpenAI→Anthropic→Groq→stub). This is what `BaseAgent.reason()` actually calls today (`base_agent.py:246`). Because it's LangChain, agent reasoning is traced to **LangSmith** — `make debug-traces` / `make debug-errors` tail recent traces/errors from inside the `api` container.
2. `packages/mcp/nvidia_nim.py` (`get_nim`) — direct NVIDIA NIM HTTP, used by the orchestrator's MCP warm-up; "new code uses MCP clients directly."
3. `packages/mcp/universal.py` (`UniversalMCP` / `get_universal`) — the **OSS-direction router** (`OSS_SDK_ULTRAPLAN.md`). Serves `llm/embed/stt/tts/search` from the best available provider, local-first: `local → self → free → paid`, controlled by `OSS_MODE` (`auto`/`local`/`hybrid`/`cloud`). `chat(messages, tier=N)` returns an OpenAI-shaped dict and is a drop-in for `get_nim().chat`, but is **not yet wired into `BaseAgent.reason()`** — wiring it in is the live next step.

**MCP transport layer** (`packages/mcp/`, imported as a top-level package — container sets `PYTHONPATH=/app/packages/api` and code uses `from packages.mcp import …`). Cloud clients: composio, strata, langbase, aiml, nvidia, nvidia_nim, dockerhub. Local OSS clients (zero API key, all HTTP via lazy `httpx`, each a `XClient` + `get_x()` singleton): ollama (LLM+embed), whisper (STT), kokoro (TTS), searxng (search), chroma (vectors). `universal.py` routes across them.

**Database** (`app/database.py`): SQLAlchemy with both sync and async engines; categories/streams are auto-seeded on init.

**Frontend** (`packages/ui/`): React 19 + Vite + Three.js, also built as a `vite-plugin-pwa` installable app. A separate `packages/desktop/` is a Tauri (Rust) shell.

## Conventions & gotchas

- **`test_api.py` env ordering**: it sets `ENVIRONMENT=test`, `DATABASE_URL=sqlite://`, `RATE_LIMIT_ENABLED=false` at module level *before* `from packages.api.app.main import app` — order matters; preserve it. (This env setup lives in the test module itself, not in `tests/conftest.py`; conftest only puts `/app/packages` + `/app` on `sys.path` so `from packages.mcp …` / `from packages.api …` imports resolve, mirrored by `tests/pytest.ini`'s `asyncio_mode = auto`.)
- **`tests/` is now volume-mounted** into the `api` container (`./tests:/app/tests` in `docker-compose.dev.yml`), so edited/added tests are picked up live — no `make dev-build` needed just for a test change. (Older note said tests were baked into the image; that was true before the mount was added. A rebuild is still required when you change the Dockerfile or baked-in deps.)
- **`app/api.py` is dead code — edit the `app/api/` *package* instead.** `main.py` imports routers from `app/api/routes.py` + `app/api/ceo_routes.py`, and the `app/api/` package shadows the same-named `app/api.py` module, so changes to `app/api.py` never load. (`tests/{unit,integration,e2e}`, `packages/{agents,cli,core}`, and `packages/api/{routes,schemas,middleware}` are likewise empty placeholders — the real routers live in the `app/api/` package, and the real tests are the four `tests/test_*.py` files.)
- **UI installs need `npm install --legacy-peer-deps`** (React 19 peer conflicts with drei/framer).
- **Compose `version:` field is deprecated — omit it.** The OSS stack is an overlay: `docker-compose.oss.yml` adds services + sets the `api` service's provider-URL env on top of `docker-compose.dev.yml`.
- **`make clean` is destructive beyond this project** — it runs `docker system prune -af` + `docker volume prune -f`, wiping *all* unused images/volumes on the host (other projects' included), not just LUXOR9's. (Other handy targets not listed above: `make coverage` for an HTML pytest-cov report, `make db-shell` / `make redis-cli`, `make debug-trace id=<id>` for one LangSmith trace.)
- **MCP tools: always call `COMPOSIO_SEARCH_TOOLS` before hardcoding a tool slug** — schemas change.
- New backend config goes in `app/config.py` (pydantic-settings, snake_case, `.env`-backed) **and** `.env.example`; the OSS provider knobs are `OSS_MODE` + `OLLAMA_URL`/`WHISPER_URL`/`KOKORO_URL`/`SEARXNG_URL`/`CHROMA_URL`.
- Python ≥3.11, black line-length 100, ruff `E,F,I,N,W`. TypeScript uses `tsc --noEmit`, no formatter.
- **Development workflow**: The `make dev` command uses Docker Compose with volume mounts (see `docker-compose.dev.yml`) for live reloading of backend and frontend code. Changes to `packages/` are synchronized without rebuilding images, except when dependencies change (then run `make dev-build`).
- **Environment variables**: The API container in development uses environment variables defined in `docker-compose.dev.yml`, including `LANGCHAIN_TRACING_V2=true` for LangSmith tracing. Override or add variables in the compose file as needed.