.PHONY: dev dev-down dev-logs test lint build push prod prod-down prod-logs clean db-shell redis-cli \
	oss-up oss-down oss-logs oss-pull oss-models oss-status

dev:
	docker compose -f docker-compose.dev.yml up

# ── Open-Source / Zero-API-Key stack (Ollama, Whisper, Kokoro, SearXNG, Chroma) ──
OSS := -f docker-compose.dev.yml -f docker-compose.oss.yml

oss-up:
	docker compose $(OSS) up

oss-down:
	docker compose $(OSS) down

oss-logs:
	docker compose $(OSS) logs -f

oss-pull:
	docker compose $(OSS) pull

# Pull the default local models into the running Ollama container.
oss-models:
	docker compose $(OSS) exec ollama ollama pull llama3.1:8b
	docker compose $(OSS) exec ollama ollama pull qwen2.5:3b
	docker compose $(OSS) exec ollama ollama pull all-minilm

# Show which provider currently serves each capability.
oss-status:
	docker compose $(OSS) exec api python -c "import asyncio,json; from packages.mcp.universal import get_universal; print(json.dumps(asyncio.run(get_universal().status()), indent=2))"

dev-build:
	docker compose -f docker-compose.dev.yml up --build

dev-down:
	docker compose -f docker-compose.dev.yml down

dev-logs:
	docker compose -f docker-compose.dev.yml logs -f

test:
	docker compose -f docker-compose.dev.yml exec api pip install pytest pytest-asyncio httpx
	docker compose -f docker-compose.dev.yml exec api pytest tests/ -v

test-api:
	docker compose -f docker-compose.dev.yml exec api pip install pytest pytest-asyncio httpx
	docker compose -f docker-compose.dev.yml exec api pytest tests/test_api.py -v

test-unit:
	docker compose -f docker-compose.dev.yml exec api pip install pytest pytest-asyncio httpx
	docker compose -f docker-compose.dev.yml exec api pytest tests/ -v --ignore=tests/test_api.py

coverage:
	docker compose -f docker-compose.dev.yml exec api pip install pytest pytest-asyncio httpx pytest-cov
	docker compose -f docker-compose.dev.yml exec api pytest tests/ --cov=packages --cov-report=html

lint-py:
	docker compose -f docker-compose.dev.yml exec api black packages/
	docker compose -f docker-compose.dev.yml exec api ruff check packages/ --fix

lint-ts:
	docker compose -f docker-compose.dev.yml exec ui npm run lint

build:
	docker build -f infra/docker/Dockerfile.api -t luxoranova/luxor9-api:latest .
	docker build -f infra/docker/Dockerfile.ui -t luxoranova/luxor9-ui:latest .

push:
	docker push luxoranova/luxor9-api:latest
	docker push luxoranova/luxor9-ui:latest

prod:
	docker compose -f docker-compose.prod.yml up -d

prod-down:
	docker compose -f docker-compose.prod.yml down

prod-logs:
	docker compose -f docker-compose.prod.yml logs -f

prod-restart:
	docker compose -f docker-compose.prod.yml restart

install:
	curl -fsSL https://raw.githubusercontent.com/luxoranova/luxor9-core/main/scripts/install.sh | sh

# PWA — installable on all platforms
pwa-build:
	cd packages/ui && npm run build

pwa-preview:
	cd packages/ui && npm run preview

# Tauri Desktop
desktop-dev:
	cd packages/desktop && npm run tauri dev

desktop-build:
	cd packages/desktop && npm run tauri build

# Cloud deploy
deploy-fly:
	cd infra/fly && fly deploy

deploy-railway:
	railway up

clean:
	docker system prune -af
	docker volume prune -f

# LangSmith Debugging
debug-traces:
	docker compose -f docker-compose.dev.yml exec api langsmith-fetch traces --last-n-minutes 5 --limit 10 --format pretty

debug-trace:
	docker compose -f docker-compose.dev.yml exec api langsmith-fetch trace $(id) --format pretty

debug-errors:
	docker compose -f docker-compose.dev.yml exec api bash -c "langsmith-fetch traces --last-n-minutes 30 --limit 50 --format raw | grep -i 'error\|failed\|exception' || echo 'No errors found'"

# Strata / Klavis AI
strata:
	docker compose -f docker-compose.dev.yml up strata -d

strata-logs:
	docker compose -f docker-compose.dev.yml logs -f strata

strata-tools:
	curl -s http://localhost:8081/tools | python -m json.tool

klavis-install:
	npm install klavis

klavis-create:
	@echo "Usage: node scripts/klavis-create.js <userId>"
	node scripts/klavis-create.js $(or $(user),demo)

db-shell:
	docker compose -f docker-compose.dev.yml exec postgres psql -U dev -d luxor9

redis-cli:
	docker compose -f docker-compose.dev.yml exec redis redis-cli
