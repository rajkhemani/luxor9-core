# LUXOR9 × NVIDIA — Zero-Cost Frontier AI Blueprint
## 139 Free NIM Models + Free GPU Compute = $0 AI Agency

---

## 📡 THE NVIDIA NIM FREE TIER (77 Free Endpoints)

All accessible via OpenAI-compatible API at `https://integrate.api.nvidia.com/v1` with a free API key.

### 🧠 Reasoning & Agentic Models (Free API)

| Model | Calls/Mo | Context | Best For | 
|-------|----------|---------|----------|
| **nemotron-3-ultra-550b-a55b** | 7.73M | 1M | OVERSEER strategic reasoning, tool calling |
| **deepseek-v4-pro** | 7.5M | 1M | DEVELOPER coding, agentic tasks |
| **deepseek-v4-flash** | 15.16M | 1M | SPEEDSTER fast inference, coding |
| **kimi-k2.6** (1T MoE) | 7.09M | 128K | Long-horizon coding, multimodal |
| **mistral-medium-3.5-128b** | 3.76M | 128K | General purpose, coding |
| **gemma-4-31b-it** | 5.49M | 8K | Lightweight reasoning |
| **minimax-m2.7** | 4.36M | 1M | Coding, reasoning, office tasks |
| **glm-5.1** | 27.59M | 128K | Agentic workflows, long-horizon |
| **step-3.7-flash** | 4.34M | 256K | MoE multimodal, agentic |
| **nemotron-3-nano-omni-30b** | 7.54M | — | Omni-modal: image, video, speech, text |

### 🎨 Vision & Image Models (Free API)

| Model | Use | 
|-------|-----|
| **cosmos3-nano** | Text-to-video generation |
| **cosmos3-nano-reasoner** | Video understanding + reasoning |
| **diffusiongemma-26b-a4b-it** | Parallel token generation |
| **qwen-image** | Text-to-image (Chinese optimized) |

### 🎤 Speech & Audio Models (Free API)

| Model | Use |
|-------|-----|
| **Active Speaker Detection** | Identify who's speaking in video |
| **LipSync** | Lip-sync video to audio |
| **chatterbox-multilingual-tts** | 23 languages TTS |

### 🛡️ Safety & Content (Free API)

| Model | Use |
|-------|-----|
| **nemotron-3.5-content-safety** | Multilingual toxicity detection |
| **nemotron-3-content-safety** | Content moderation |
| **synthetic-video-detector** | AI-generated video detection |

---

## 🆓 FREE GPU COMPUTE PLATFORMS

| Platform | GPU | Limit | How to Access |
|----------|-----|-------|---------------|
| **Kaggle** | P100 or T4 (16GB) | 30 hrs/week | kaggle.com → Notebooks → GPU |
| **Google Colab** | T4 (16GB) | Free tier limited | colab.research.google.com |
| **NVIDIA LaunchPad** | A100/H100 | Temporary labs | nvidia.com/launchpad |
| **Brev.dev** | L4, A100 | Free tier | brev.nvidia.com |
| **NVIDIA NGC** | — | Container registry | ngc.nvidia.com |

---

## 🔥 THE BLUEPRINT: LUXOR9 × NVIDIA

### Architecture

```
                     ┌─────────────────────────────┐
                     │     NVIDIA NIM API FREE      │
                     │  integrate.api.nvidia.com/v1  │
                     └──────────┬──────────────────┘
                                │
                    ┌───────────┴───────────┐
                    │   LUXOR9 Model Router  │
                    │  (smartest → cheapest) │
                    └───┬───────┬───────┬───┘
                        │       │       │
              ┌─────────┘       │       └──────────┐
              ▼                 ▼                  ▼
     ┌────────────────┐ ┌────────────┐ ┌─────────────────┐
     │ Nemotron 3     │ │ DeepSeek   │ │ Kaggle/Colab    │
     │ Ultra (550B)   │ │ V4 Flash   │ │ Self-host via   │
     │ 1M ctx, agentic│ │ 1M ctx,    │ │ free GPU credits │
     │ Tool calling   │ │ fast       │ │ (model fine-tune) │
     └───────┬────────┘ └─────┬──────┘ └─────────────────┘
             │                │
             ▼                ▼
     ┌─────────────────────────────────────────────┐
     │         OpenAI-Compatible API Layer          │
     │  LUXOR9 llm_engine.py → NemotronProvider     │
     └─────────────────────────────────────────────┘
```

### LLM Engine Integration

```python
# packages/api/app/agents/llm_engine.py — add NVIDIA NIM provider

class NvidiaNIMProvider:
    """Free NVIDIA NIM API — 77 models, zero cost."""
    
    def __init__(self, api_key=None):
        self.api_key = api_key or os.getenv("NVIDIA_API_KEY", "")
        self.base_url = "https://integrate.api.nvidia.com/v1"
        self.client = OpenAI(base_url=self.base_url, api_key=self.api_key)
    
    MODEL_MAP = {
        # Agent tier → best NVIDIA model for the job
        0: "nvidia/nemotron-3-ultra-550b-a55b",   # OVERSEER: strategic, tool calling
        1: "nvidia/nemotron-3-ultra-550b-a55b",   # C-Suite: reasoning
        2: "deepseek-ai/deepseek-v4-pro",          # VPs: coding + analysis
        3: "deepseek-ai/deepseek-v4-flash",        # Managers: fast decisions
        4: "mistralai/mistral-medium-3.5-128b",    # Workers: quick tasks
    }
    
    SPECIALIST_MAP = {
        "visionary": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
        "communicator": "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning",
        "developer": "deepseek-ai/deepseek-v4-pro",
        "researcher": "deepseek-ai/deepseek-v4-flash",
    }
```

### Agent Routing Table

| LUXOR9 Agent | NVIDIA Model | Why |
|-------------|-------------|-----|
| **OVERSEER** | Nemotron 3 Ultra 550B | 1M ctx, tool calling, strategic reasoning |
| **DEVELOPER** | DeepSeek V4 Pro | 1M ctx, code generation, MoE |
| **SPEEDSTER** | DeepSeek V4 Flash | Fast inference, 15M calls/mo |
| **RESEARCHER** | DeepSeek V4 Flash | Fast web research |
| **VISIONARY** | Nemotron Nano Omni | Image/video understanding |
| **COMMUNICATOR** | Nemotron Nano Omni | Speech + text multimodal |
| **DIRECTOR** | Cosmos3 Nano | Video generation |
| **DATA_ANALYST** | Kimi K2.6 | 1T MoE, data analysis |
| **SAFETY** | Nemotron Content Safety | Moderation, toxicity check |

### Self-Hosted Fine-Tuning (Free GPU via Kaggle)

```
Kaggle Notebook (30 hrs/week free P100):
  1. Load base model: deepseek-v4-flash
  2. LoRA fine-tune on LUXOR9 agent trajectories
  3. Export adapters → load on RunPod ($0.34/hr)
  
Result: LUXOR9-specific fine-tuned agent models at ZERO training cost
```

### Fallback Chain

```
LUXOR9 Agent Request →
  1. NVIDIA NIM Free API (77 models, free)
  2. GroqCloud (free Llama 3, 480 tok/s)
  3. AI ML API (599 models, pay-as-you-go)
  4. Local ds4 (DeepSeek 4 on CPU/GPU)
```

---

## ⚡ QUICK START: NVIDIA + LUXOR9

```bash
# 1. Get free NVIDIA API key
#    → build.nvidia.com → "Get API Key" → free tier instantly

# 2. Set it in LUXOR9
export NVIDIA_API_KEY="nvapi-xxxxxxxx"

# 3. Run LUXOR9 — it auto-discovers NVIDIA NIM models
make dev
# → OVERSEER uses Nemotron 3 Ultra
# → DEVELOPER uses DeepSeek V4 Pro
# → All at $0 inference cost
```

### Verify Integration

```python
from openai import OpenAI
client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key="nvapi-xxxx"
)
# Test: Nemotron 3 Ultra (OVERSEER)
r = client.chat.completions.create(
    model="nvidia/nemotron-3-ultra-550b-a55b",
    messages=[{"role": "user", "content": "Plan a 3-step agent workflow"}],
    temperature=1.0, max_tokens=1024,
    extra_body={"chat_template_kwargs": {"enable_thinking": True}}
)
print(r.choices[0].message.content)
```

---

## 📊 COST COMPARISON: BEFORE vs AFTER

| Service | Before (AI ML API) | After (NVIDIA NIM) | Savings |
|---------|-------------------|-------------------|---------|
| OVERSEER reasoning | $0.65/1M (Nemotron via AI ML) | **$0.00** (Nemotron via NIM) | **100%** |
| DEVELOPER coding | $0.15/1M (GPT-4o mini) | **$0.00** (DeepSeek V4 Pro) | **100%** |
| SPEEDSTER chat | $0.15/1M | **$0.00** (DeepSeek V4 Flash) | **100%** |
| VISIONARY image | $0.01/image | **$0.00** (Nemotron Nano Omni) | **100%** |
| Fine-tuning GPU | $0.34/hr (RunPod) | **$0.00** (Kaggle 30 hrs/wk free) | **100%** |
| **Total monthly** | **~$50-200** | **~$0** | **∞** |

---

## 🏆 THE UNFAIR ADVANTAGE

LUXOR9 now has **zero-cost access** to:
- **1+ trillion parameter models** (Kimi K2.6)
- **1M token context** (Nemotron, DeepSeek)
- **Tool calling + reasoning** (native support)
- **Vision + speech + video** (omni-modal)
- **Free GPU for fine-tuning** (Kaggle 120 hrs/month)
- **All via OpenAI-compatible API** (drop-in, no code changes)

**Tagline:** *"The world's most capable AI agency, running on free NVIDIA inference."*
