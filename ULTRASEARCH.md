# LUXOR9 — Open-Source Integration Candidates
## UltraSearch Results: GitHub · HuggingFace · ModelScope · Gitee · GitLab
## June 2026

---

## Tier 1: 🔥 MUST INTEGRATE

### Local Inference Engines (replace costly API calls)

| Project | Stars | What | Integration |
|---------|-------|------|-------------|
| **[antirez/ds4](https://github.com/antirez/ds4)** | ★14,549 | DeepSeek 4 local inference — Metal, CUDA, ROCm. Runs on-device. | Replace AI ML API for sensitive/offline tasks. Zero cost inference. |
| **[opensquilla/opensquilla](https://github.com/opensquilla/opensquilla)** | ★4,361 | Token-Efficient AI Agent — same budget, higher intelligence density | Drop-in agent optimizer for LUXOR9's overseer. |

### Agent Frameworks (orchestration upgrades)

| Project | Stars | What | Integration |
|---------|-------|------|-------------|
| **[omnigent-ai/omnigent](https://github.com/omnigent-ai/omnigent)** | ★3,819 | Open-source meta-harness: orchestrate Claude Code, Codex, Cursor | LUXOR9 could run on top of Omnigent for multi-model orchestration |
| **[vercel/eve](https://github.com/vercel/eve)** | ★1,400 | Vercel's Agent Framework | Lightweight agent builder — use for LUXOR9 agent SDK |
| **[KunAgent/Kun](https://github.com/KunAgent/Kun)** | ★4,475 | AI agent workspace with Code + Write modes | UI layer for LUXOR9 |

### Open-Source Models (self-host, zero API cost)

| Model | Downloads | What | Pipeline |
|-------|-----------|------|----------|
| **[deepseek-ai/DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)** | 2.9M | Latest DeepSeek, permissive MIT license | Text generation |
| **[openai/gpt-oss-120b](https://huggingface.co/openai/gpt-oss-120b)** | 3.6M | OpenAI's open-source 120B model (Apache 2.0) | Text generation |
| **[hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M)** | 15.8M | **82M param TTS** — runs anywhere, ultra-fast | Text-to-speech |
| **[Tongyi-MAI/Z-Image-Turbo](https://huggingface.co/Tongyi-MAI/Z-Image-Turbo)** | 822K | SOTA image gen (Apache 2.0) | Image generation |

---

## Tier 2: 🎯 HIGH VALUE

### MCP Servers (drop-in tool extensions)

| Project | Stars | What | Why |
|---------|-------|------|-----|
| **[OpenOSINT/OpenOSINT](https://github.com/OpenOSINT/OpenOSINT)** | ★702 | AI-powered OSINT agent with MCP server, 16 tools | Add intelligence-gathering to RESEARCHER agent |
| **[usewhale/DeepSeek-Code-Whale](https://github.com/usewhale/DeepSeek-Code-Whale)** | ★662 | Terminal-first AI coding agent, 98% cache hit rate, 1M ctx | Supercharge DEVELOPER agent |
| **[sandiiarov/skill-creator](https://github.com/sandiiarov/skill-creator)** | ★638 | Turn MCP/OpenAPI/GraphQL → CLI at runtime | Auto-generate LUXOR9 agent skills |
| **[chubbyguan/chubbyskills](https://github.com/chubbyguan/chubbyskills)** | ★417 | Chinese content pipeline MCP (Douyin/B站/Xiaohongshu) + knowledge base | Content agent for Chinese markets |
| **[Lilac-Labs/gini-agent](https://github.com/Lilac-Labs/gini-agent)** | ★496 | Agent that remembers and learns | Upgrade LUXOR9 memory layer |
| **[EliasOulkadi/shokunin](https://github.com/EliasOulkadi/shokunin)** | ★97 | 62 agent skills for OpenCode with ChromaDB memory | Import skills directly |

### Agent Tools & Harnesses

| Project | Stars | What | Why |
|---------|-------|------|-----|
| **[shadcn/improve](https://github.com/shadcn/improve)** | ★5,488 | Use best model to audit → cheap model to execute | Perfect for LUXOR9's model router |
| **[BuilderIO/skills](https://github.com/BuilderIO/skills)** | ★1,310 | Skills for coding agents | Import as LUXOR9 agent capabilities |
| **[code-yeongyu/lazycodex](https://github.com/code-yeongyu/lazycodex)** | ★1,210 | Agent harness for complex codebases | LUXOR9 DEVELOPER agent upgrade |

### Open-Source Models (more)

| Model | Downloads | Pipeline | Why |
|-------|-----------|----------|-----|
| **black-forest-labs/FLUX.1-dev** | 931K | Text-to-image | VISIONARY agent image gen |
| **openai/whisper-large-v3** | 5.3M | Speech-to-text | COMMUNICATOR agent STT |
| **mistralai/Mixtral-8x7B-Instruct** | 787K | Text generation | Lightweight fallback model |
| **meta-llama/Llama-3.1-8B-Instruct** | 8.3M | Text generation | Fast local inference |
| **sentence-transformers/all-MiniLM-L6-v2** | 216M | Embeddings | Memory/Semantic search |
| **openbmb/AgentCPM-Explore** | 755 | Agent reasoning | Specialized agent model |

---

## Tier 3: 🔧 CHINESE ECOSYSTEM (ModelScope / Gitee)

| Project | Platform | What | Why |
|---------|----------|------|-----|
| **Qwen3 VL Plus** | ModelScope | Alibaba multimodal | VISIONARY agent |
| **Z-Image-Turbo** | ModelScope | SOTA image gen Apache2 | Free image generation |
| **Kimi K2.7 Code** | ModelScope | Coding model 1M ctx | DEVELOPER agent |
| **GLM-5.2** | ModelScope | Zhipu AI — coding/reasoning | Alternative LLM |
| **Step 3.7 Flash** | ModelScope | MoE multimodal 256K ctx | SPEEDSTER agent |

---

## 🎯 INTEGRATION PLAN FOR LUXOR9

### Phase 1: Self-Hosted Inference (zero-cost)

```
LUXOR9 agent needs text → local ds4 (DeepSeek 4) → 0 cost
LUXOR9 agent needs TTS → Kokoro-82M (82M params) → 0 cost
LUXOR9 agent needs embeddings → all-MiniLM-L6-v2 → 0 cost
LUXOR9 agent needs images → Z-Image-Turbo → 0 cost
```

### Phase 2: Smart Routing (shadcn/improve pattern)

```
Expensive model (GPT-4o via AI ML API) → audits & plans
Cheap model (Llama 3.1 local via ds4) → executes
Savings: ~80% on API costs
```

### Phase 3: MCP Ecosystem Integration

```
Install top MCP servers via skill-creator:
  OpenOSINT    → RESEARCHER agent
  chubbyskills → Chinese content pipeline
  gini-agent   → Memory layer
  shokunin     → 62 pre-built agent skills
```

### Phase 4: Model Fine-Tuning

```
Use RunPod GPU ($0.34/hr for A100) to fine-tune:
  - LUXOR9-specific agent models
  - Tool-use specialized models
  - Domain-specific (finance, code, creative)
```

---

## ⚡ QUICK START: Pull Models Locally

```bash
# DeepSeek 4 local inference
git clone https://github.com/antirez/ds4
cd ds4 && make
./ds4 --model deepseek-ai/DeepSeek-V4-Pro

# Kokoro TTS (82M params — runs on CPU)
pip install kokoro
python -c "from kokoro import generate; generate('Hello world', voice='af_heart')"

# Z-Image-Turbo (Apache 2.0)
pip install diffusers
python -c "from diffusers import ZImagePipeline; pipe = ZImagePipeline.from_pretrained('Tongyi-MAI/Z-Image-Turbo')"
```

---

**Total candidates found: 30+ across 5 platforms**
**Estimated savings vs API-only: 90-100% for inference**
**Zero-cost stack: ds4 + Kokoro + all-MiniLM + Z-Image-Turbo**
