# LUXOR9 — Open-Source SDK Ultraplan
## Zero API Keys. Zero External Dependencies. 100% Self-Hosted.

---

## THE PROBLEM

Current LUXOR9 requires users to:
1. Sign up for 10+ services
2. Generate API keys for each
3. Authorize via OAuth flows
4. Manage expiring keys

**This kills adoption.** Users want one command → everything works.

---

## THE SOLUTION: Open-Source Replacement Map

```
Composio Service         → Open-Source Alternative       → How
──────────────────────────────────────────────────────────────────
GroqCloud (Llama 3)      → Ollama + llama.cpp            → docker run ollama/ollama
OpenAI / AI ML API       → vLLM + open-weight models     → docker run vllm/vllm
Deepgram (STT)           → Whisper (faster-whisper)      → pip install faster-whisper
ElevenLabs (TTS)         → Kokoro 82M / Coqui TTS        → pip install kokoro
Exa / Tavily (search)    → SearXNG / Meilisearch         → docker run searxng/searxng
Browser automation       → Playwright (already OSS)      → pip install playwright
Replicate (OSS models)   → Self-hosted Docker images     → docker pull <model>
NVIDIA NIM API           → vLLM + Nemotron weights       → docker run vllm/vllm
Langbase (pipes)         → Custom Python implementation  → Built into LUXOR9
Resend (email)           → Smtp2Go / local sendmail      → Built-in SMTP
Klavis Strata (50+ MCP)  → Custom MCP server             → Built with Python
PostgreSQL               → Already self-hosted ✅         → docker compose
Redis                    → Already self-hosted ✅         → docker compose
```

---

## THE ULTRA PLAN: 3 SDK Layers

### Layer 1: LUXOR9 Core SDK (Python) — `pip install luxor9`

```python
# Zero-config. Auto-detects local vs cloud.

from luxor9 import LUXOR9

# Auto-mode: tries local first, falls back to cloud
app = LUXOR9()  # No API keys needed

# Or explicit local-only mode (air-gapped)
app = LUXOR9(mode="local")

# Or hybrid (local LLM + cloud search)
app = LUXOR9(mode="hybrid")

# Deploy 12 agents
app.deploy("overseer", "developer", "researcher", "communicator")
```

### Layer 2: Self-Healing Backend — `docker compose up`

```yaml
# docker-compose.yml — Everything self-hosted, zero API keys
services:
  # LLM Inference (replaces GroqCloud, OpenAI, NVIDIA NIM)
  ollama:
    image: ollama/ollama:latest
    ports: ["11434:11434"]
    volumes: [ollama-models:/root/.ollama]
    command: serve

  # Speech-to-Text (replaces Deepgram)
  whisper:
    image: onerahmet/openai-whisper-asr-webservice:latest
    ports: ["9000:9000"]

  # Text-to-Speech (replaces ElevenLabs)
  kokoro:
    build: https://github.com/remsky/kokoro-fastapi.git
    ports: ["8880:8880"]

  # Web Search (replaces Exa, Tavily)
  searxng:
    image: searxng/searxng:latest
    ports: ["8888:8080"]

  # Browser Automation (replaces Hyperbrowser)
  playwright:
    image: mcr.microsoft.com/playwright:latest
    command: npx @playwright/mcp@latest

  # Embeddings / Vector Search (replaces OpenAI embeddings)
  chroma:
    image: chromadb/chroma:latest
    ports: ["8001:8000"]

  # LUXOR9 Core
  api:
    build: .
    depends_on: [ollama, whisper, kokoro, searxng, chroma]
    environment:
      LLM_PROVIDER: ollama       # local, no API key
      STT_PROVIDER: whisper       # local, no API key
      TTS_PROVIDER: kokoro        # local, no API key
      SEARCH_PROVIDER: searxng    # local, no API key
```

### Layer 3: Universal MCP SDK — One SDK to Rule All Tools

```python
# packages/mcp/universal.py — Auto-detects best provider

class UniversalMCP:
    """
    One SDK. Every tool. Zero config.
    
    Priority: Local OSS → Self-hosted → Free cloud → Paid cloud
    """
    
    PROVIDERS = {
        "llm": {
            "local": "ollama://llama3.1:8b",      # 4GB, runs on any GPU
            "self": "vllm://nemotron-3-ultra",      # Requires B200
            "free": "nvidia://nemotron-3-ultra",     # NVIDIA NIM API
            "paid": "openai://gpt-4o",               # Last resort
        },
        "stt": {
            "local": "whisper://large-v3",           # 3GB, runs on GPU
            "free": "deepgram://nova-3",             # $200 credit
        },
        "tts": {
            "local": "kokoro://82m",                 # 82M params, runs on CPU!
            "free": "elevenlabs://multilingual",     # 10k chars/mo
        },
        "search": {
            "local": "searxng://",                   # Meta-search engine
            "free": "exa://search",                  # 1k/mo free
        },
        "browser": {
            "local": "playwright://",                # Fully local
            "free": "hyperbrowser://",               # Free tier
        },
        "embed": {
            "local": "chroma://all-MiniLM-L6-v2",    # 80MB, runs on CPU
        },
    }
    
    def get_best(self, capability: str):
        """Returns the best available provider for a capability."""
        for tier in ["local", "self", "free", "paid"]:
            provider = self.PROVIDERS.get(capability, {}).get(tier)
            if provider and self._is_available(provider):
                return provider
        return None  # Should never happen with local fallbacks
```

---

## THE OPEN-SOURCE MODEL STACK (All Free, All Self-Hosted)

| Capability | Model | Size | Hardware | Quality |
|-----------|-------|------|----------|---------|
| **LLM** | Llama 3.1 8B (via Ollama) | 4.7GB | Any GPU/CPU | Good |
| **LLM** | Qwen 2.5 14B | 8.5GB | 8GB+ VRAM | Very Good |
| **LLM** | DeepSeek V4 Flash (via vLLM) | 284B MoE | 4× B200 | Frontier |
| **STT** | Whisper Large V3 | 3GB | Any GPU | Excellent |
| **TTS** | Kokoro 82M | 160MB | **CPU only!** | Good |
| **TTS** | Coqui XTTS v2 | 1.2GB | 4GB VRAM | Very Good |
| **Search** | SearXNG | 200MB | Any | Excellent |
| **Browser** | Playwright | 500MB | Any | Excellent |
| **Embed** | all-MiniLM-L6-v2 | 80MB | CPU only | Good |
| **Vision** | Florence-2 (via Ollama) | 1.2GB | 6GB VRAM | Good |
| **Code** | Qwen2.5-Coder 7B | 4.2GB | 8GB VRAM | Excellent |
| **Total** | | **~20GB** | **16GB RAM + GPU** | |

---

## ONE COMMAND — ZERO API KEYS

```bash
# Before (needs 10+ API keys):
curl -fsSL https://luxor9.sh | sh
# → Edit .env, get API keys for NVIDIA, Groq, Exa, Deepgram...

# After (zero API keys):
curl -fsSL https://luxor9.sh | sh
# → Everything runs locally:
#   - Ollama for LLM (Llama 3.1 8B)
#   - Whisper for STT
#   - Kokoro for TTS (CPU!)
#   - SearXNG for search
#   - Playwright for browser
#   - Chroma for embeddings
# → Zero API keys. Zero signups. Zero cost.
```

```dockerfile
# docker-compose.offline.yml — Air-gapped mode
# Works without internet after initial pull
```

---

## SDK ROADMAP

### Phase 1: Python SDK — `pip install luxor9` (Week 1)
```python
# pip install luxor9
from luxor9 import Agent, Task, LUXOR9

# Create agents (uses local Ollama by default)
app = LUXOR9()
agent = app.create_agent("dev", role="developer")

# Run a task
result = agent.run("Write a Python script")
```

### Phase 2: TypeScript SDK — `npm install luxor9` (Week 2)
```typescript
import { LUXOR9 } from 'luxor9';
const app = new LUXOR9({ mode: 'local' });
const agent = app.createAgent({ name: 'dev', role: 'developer' });
const result = await agent.run('Write a Python script');
```

### Phase 3: REST API — `docker run luxor9/api` (Already Done ✅)
```
GET  /api/v2/agents          → List agents
POST /api/v2/tasks           → Execute task
WS   /api/v2/tasks/{id}/stream → Real-time stream
```

### Phase 4: MCP Server — `npx luxor9-mcp` (Week 3)
```json
// Add to any MCP client:
{
  "mcpServers": {
    "luxor9": {
      "command": "npx",
      "args": ["luxor9-mcp"]
    }
  }
}
// → Your Claude/Cursor/Codex gets 12 LUXOR9 agents as MCP tools
```

---

## COMPETITIVE MOAT

| Feature | LUXOR9 OSS | Dify | n8n | CrewAI |
|---------|-----------|------|-----|--------|
| **Self-hosted LLM** | ✅ Ollama | ✅ | ❌ | ✅ |
| **Self-hosted STT** | ✅ Whisper | ❌ | ❌ | ❌ |
| **Self-hosted TTS** | ✅ Kokoro (CPU!) | ❌ | ❌ | ❌ |
| **Self-hosted Search** | ✅ SearXNG | ❌ | ❌ | ❌ |
| **Self-hosted Browser** | ✅ Playwright | ❌ | ❌ | ❌ |
| **Zero API keys** | ✅ | ❌ | ❌ | ❌ |
| **Offline mode** | ✅ | ❌ | ❌ | ❌ |
| **Air-gapped** | ✅ | ❌ | ❌ | ❌ |
| **pip install** | ✅ | ❌ | ❌ | ✅ |

**LUXOR9 is the only AI agent platform that runs fully offline with zero API keys.**

---

## THE TAGLINE

> **"LUXOR9: The AI Agency OS that runs on your laptop. No API keys. No cloud. No cost."**

or for enterprises:

> **"Air-gapped AI agent orchestration. Classified data never leaves your network."**

---

## ONE COMMAND TO RULE THEM ALL

```bash
# Full power (needs GPU)
curl -fsSL https://luxor9.sh | sh

# Lightweight (CPU only — Kokoro TTS + Ollama 3B + Chroma)
curl -fsSL https://luxor9.sh | sh -s -- --cpu

# Air-gapped (no internet after install)
curl -fsSL https://luxor9.sh | sh -s -- --offline

# Cloud turbo (uses NVIDIA NIM free API for heavy models)
curl -fsSL https://luxor9.sh | sh -s -- --cloud
```
