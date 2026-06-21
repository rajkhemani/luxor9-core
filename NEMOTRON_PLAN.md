# 🧠 NEMOTRON 3 ULTRA → LUXOR9 INTEGRATION PLAN
## 550B MoE Hybrid Mamba-Transformer | 1M ctx | Tool Calling | NVFP4

---

## Phase 1: Deploy (RunPod)

The model requires 4× B200 GPUs. Since we don't have them locally, use RunPod:

```bash
# 1. Rent 4× B200 pod on RunPod (via already-discovered RunPod toolkit)
# Or use any cloud with Blackwell GPUs

# 2. Deploy via SGLang (recommended for tool calling + reasoning)
docker run -d --name nemotron-ultra \
  --gpus all --ipc=host --network=host --shm-size=16g \
  -v /path/to/model:/model:ro \
  lmsysorg/sglang:v0.5.11 \
  python3 -m sglang.launch_server \
  --model-path /model \
  --host 0.0.0.0 --port 8000 \
  --served-model-name nvidia/nemotron-3-ultra \
  --tp-size 4 --ep-size 4 \
  --context-length 262144 \
  --kv-cache-dtype nvfp4 \
  --tool-call-parser qwen3_coder \
  --reasoning-parser nemotron_3 \
  --trust-remote-code
```

## Phase 2: Wire into LUXOR9 LLM Engine

```python
# packages/api/app/agents/llm_engine.py — add Nemotron provider

class NemotronProvider:
    """Local/self-hosted Nemotron 3 Ultra via OpenAI-compatible API."""
    
    def __init__(self, base_url="http://<runpod-ip>:8000/v1"):
        from openai import OpenAI
        self.client = OpenAI(base_url=base_url, api_key="EMPTY")
        self.model = "nvidia/nemotron-3-ultra"
    
    async def generate(self, messages, tools=None, max_tokens=32000):
        kwargs = {
            "model": self.model,
            "messages": messages,
            "max_tokens": max_tokens,
            "temperature": 1.0,
            "top_p": 0.95,
            "extra_body": {
                "chat_template_kwargs": {
                    "enable_thinking": True,
                    "force_nonempty_content": True
                }
            }
        }
        if tools:
            kwargs["tools"] = tools
            kwargs["tool_choice"] = "auto"
        return self.client.chat.completions.create(**kwargs)
```

## Phase 3: Agent Routing

```
LUXOR9 Agent Task → Model Router:
  ├── Strategic planning    → Nemotron 3 Ultra (1M ctx, deep reasoning)
  ├── Code generation       → Nemotron 3 Ultra (tool calling)
  ├── Quick responses       → GroqCloud (free, 480 tok/s)
  ├── Image generation      → AI ML API / Replicate
  └── Simple chat           → AI ML API (GPT-4o mini, $0)
```

## Phase 4: LUXOR9 opencode.json for Local Development

```json
{
  "model": "local/nvidia-nemotron-3-ultra",
  "provider": {
    "local": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "nemotron",
      "options": {
        "baseURL": "http://localhost:8000/v1",
        "apiKey": "EMPTY"
      },
      "models": {
        "nvidia-nemotron-3-ultra": {
          "name": "nvidia/nemotron-3-ultra",
          "limit": { "context": 1000000, "output": 32768 }
        }
      }
    }
  }
}
```

---

## Cost Analysis

| Setup | GPUs | Cost/hr | Cost/day | vs GPT-4o API |
|-------|------|---------|----------|---------------|
| RunPod 4× B200 | 4 B200 | ~$8-12/hr | ~$192-288 | Unlimited tokens |
| API (AI ML API) | — | $0.65/1M tokens | ~$10-50 | Metered |
| **Breakeven**: ~40M tokens/day | | | | |

With MTP speculative decoding (5 tokens), effective throughput is ~3-5x higher than raw token count suggests.

---

## Why Nemotron > GPT-4o for LUXOR9

| Feature | Nemotron 3 Ultra | GPT-4o |
|---------|-----------------|--------|
| Context | 1M tokens | 128K |
| Cost | $8-12/hr (unlimited) | $2.50/1M input |
| Tool calling | Native (qwen3_coder parser) | Native |
| Reasoning | Thinking mode + budget control | Limited |
| Open source | ✅ Apache 2.0 weights | ❌ |
| Self-hostable | ✅ Any B200+ cluster | ❌ |
| MoE efficiency | 55B active of 550B total | Dense |
| Mamba hybrid | ✅ Long-context optimized | ❌ |

## Next Step

Deploy on RunPod via the `runpod` toolkit (already discovered but not connected). One-click pod with 4× B200 → point LUXOR9 at it → OVERSEER agent uses it for strategic reasoning automatically.
