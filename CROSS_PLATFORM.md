# LUXOR9 — Cross-Platform Mobile & Desktop Strategy
## Lightweight Agent Runtime for iOS • Android • Desktop

---

## THE PROBLEM

Current LUXOR9 = Docker Compose stack (PostgreSQL, Redis, FastAPI, React). 
Requires server, Docker, 2GB+ RAM. Won't run on a phone.

**Goal:** Same 12 agents, 5-tier hierarchy, 121 models, 50+ tools — on any device.

---

## THE SOLUTION: 3-Layer Architecture

```
┌─────────────────────────────────────────────────────┐
│                   CLIENT LAYER                       │
│  iOS App • Android App • Desktop App • PWA           │
│  (React Native or Tauri + Svelte)                    │
│  Size: ~5-15MB                                       │
├─────────────────────────────────────────────────────┤
│                 SYNC LAYER (Optional)                 │
│  Cloud sync • State backup • Multi-device            │
│  (Supabase or Firebase, $0-10/mo)                    │
├─────────────────────────────────────────────────────┤
│                  AGENT RUNTIME                        │
│  Local: agent logic + tool routing + memory          │
│  ~10MB Python/Go binary (compiled)                   │
│  OR: calls cloud agent API                           │
├─────────────────────────────────────────────────────┤
│                  INFERENCE LAYER                      │
│  Online: NVIDIA NIM API (121 free models)            │
│  Offline: llama.cpp 3B-8B model (1.5-4GB download)  │
│  Fallback: GroqCloud (free, fast)                    │
└─────────────────────────────────────────────────────┘
```

---

## PHASE 1: PWA (Progressive Web App) — Ship This Week

### Why PWA First
- One codebase → iOS + Android + Desktop (Win/Mac/Linux)
- No app store approval needed
- Can install to home screen like native app
- Service worker for offline support
- ~1MB download vs 50MB+ for native

### Architecture
```
PWA (React + Tailwind)
  ├── Online Mode (default):
  │     PWA → Cloud LUXOR9 API → NVIDIA NIM/Groq/etc
  │     All 12 agents, all models, all tools
  │
  ├── Offline Mode (limited):
  │     PWA → WebLLM (in-browser ML, ~500MB model)
  │     Basic chat agent only, no tools
  │     Or: cached responses for common tasks
  │
  └── Installation:
        Browser: "Add to Home Screen"
        Desktop: Chromium → "Install LUXOR9"
        iOS Safari → Share → "Add to Home Screen"
        Android Chrome → "Install App"
```

### Key PWAs That Prove This Works
- **Claude.ai** — full agent chat in browser
- **ChatGPT** — full app experience via PWA
- **Excalidraw** — complex drawing app, 1MB
- **LUXOR9 PWA target:** ~2MB, all features

### PWA Build Plan
```bash
# packages/ui/ → add PWA manifest + service worker
npm install vite-plugin-pwa

# vite.config.ts → add PWA config
pwa: {
  registerType: 'autoUpdate',
  manifest: {
    name: 'LUXOR9 AI Agency',
    short_name: 'LUXOR9',
    display: 'standalone',
    start_url: '/',
    icons: [...]
  }
}

# Result: 2MB installable app on all platforms
```

---

## PHASE 2: Desktop App (Tauri) — Ship in 2 Weeks

### Why Tauri (not Electron)
| Factor | Electron | Tauri |
|--------|----------|-------|
| App size | 150-250MB | **3-10MB** |
| RAM usage | 200-500MB | **30-80MB** |
| Language | JS/TS | **Rust + JS** |
| Mobile | ❌ | **✅ iOS + Android** |
| Startup | 2-5s | **<1s** |

### Tauri Architecture
```
┌──────────────────────┐
│   Tauri Shell (Rust)  │  ← System tray, notifications, file system
├──────────────────────┤
│   WebView (React)     │  ← Agent UI, same as PWA
├──────────────────────┤
│   Sidecar (optional)  │  ← Local agent runtime (compiled Go binary)
│   llama.cpp (opt)     │  ← Local 3B model for offline
└──────────────────────┘
```

### Desktop Features
- System tray agent (always-on assistant)
- Global keyboard shortcut (Alt+Space)
- Native notifications
- File system access (read/write code files)
- Offline mode with local llama.cpp

---

## PHASE 3: Mobile Native (React Native) — Ship in 1 Month

### Cross-Platform Strategy
```
React Native  ←  iOS + Android (one codebase)
Expo          ←  Easy builds, no Xcode/Android Studio needed
```

### Mobile Architecture
```
┌──────────────────────┐
│   React Native App    │
│   (Expo managed)      │  ← Single codebase
├──────────────────────┤
│   Cloud API Layer     │  ← All agents run on cloud
│   (offline: cached)   │
├──────────────────────┤
│   Push Notifications  │  ← Agent completes → phone buzzes
│   Widgets             │  ← iOS widget: agent status
│   Siri/Assistant      │  ← "Hey Siri, ask LUXOR9..."
└──────────────────────┘
```

### Mobile Screen
```
┌────────────────────────────┐
│  🔷 LUXOR9          ⚡ 3↑  │  ← Status bar
├────────────────────────────┤
│                            │
│  ┌──────────────────────┐  │
│  │ OVERSEER  ● Active   │  │
│  │ "Planning Q3 strat." │  │  ← Agent cards (scrollable)
│  └──────────────────────┘  │
│  ┌──────────────────────┐  │
│  │ DEVELOPER ● Coding   │  │
│  │ "auth module done"   │  │
│  └──────────────────────┘  │
│  ┌──────────────────────┐  │
│  │ SPEEDSTER ● Idle     │  │
│  └──────────────────────┘  │
│                            │
│  [💬 Chat] [📊 Dashboard]  │  ← Bottom tabs
└────────────────────────────┘
```

---

## PLATFORM COMPARISON

| Feature | PWA | Tauri Desktop | React Native |
|---------|-----|---------------|--------------|
| **iOS** | ✅ Limited | ❌ | ✅ Full |
| **Android** | ✅ Full | ❌ | ✅ Full |
| **Windows** | ✅ Full | ✅ Full | ⚠️ via Electron |
| **macOS** | ✅ Full | ✅ Full | ⚠️ via Electron |
| **Linux** | ✅ Full | ✅ Full | ❌ |
| **App size** | ~2MB | ~8MB | ~30MB |
| **Offline AI** | ⚠️ WebLLM | ✅ llama.cpp | ❌ |
| **Notifications** | ✅ Web Push | ✅ Native | ✅ Native |
| **App Store** | ❌ | ✅ | ✅ |
| **Dev speed** | Days | 2 weeks | Month |

---

## LIGHTWEIGHT RUNTIME — THE KEY INNOVATION

### How to Run Agents on a Phone

The secret: **Agents don't need to run on the device.**

```
Phone/Desktop App
    │
    ├── Send: {"task": "research competitors", "model": "free"}
    │
    ▼
Cloud LUXOR9 API (one shared instance per user)
    │
    ├── 1. OVERSEER decomposes task (NVIDIA NIM free)
    ├── 2. RESEARCHER searches web (Exa free)
    ├── 3. DATA ANALYST processes results (DeepSeek V4 free)
    ├── 4. DEVELOPER formats report (NVIDIA NIM free)
    │
    └── Return: {"result": "...", "cost": "$0.00"}
```

**The phone never runs a model.** It's a thin client to the cloud agent runtime.

### Free Cloud Hosting for the Runtime

| Host | Free Tier | Limits |
|------|-----------|--------|
| **Fly.io** | 3 shared VMs | 256MB RAM each |
| **Railway** | $5 credit/mo | ~500 hrs |
| **Render** | Free tier | 750 hrs/mo |
| **Oracle Cloud** | **4 ARM cores, 24GB** ⭐ | Always free |
| **Google Cloud Run** | 2M requests/mo | Free tier |

**Recommendation:** Oracle Cloud free tier (4 ARM cores, 24GB RAM) → runs the entire LUXOR9 stack for $0.

---

## ZERO-COST CROSS-PLATFORM STACK

```
User Device (PWA / Tauri / RN)       ← $0
    ↓
Cloud LUXOR9 API (Oracle Cloud free) ← $0
    ↓
NVIDIA NIM (121 free models)          ← $0
GroqCloud (free Llama 3)              ← $0
Exa (free search)                     ← $0
All other toolkits (free tiers)       ← $0
```

**Total infrastructure cost: $0/mo**
**Platform coverage: iOS + Android + Windows + macOS + Linux**

---

## IMPLEMENTATION PLAN

### Week 1: PWA
```bash
# packages/ui/ → add PWA support
npm install vite-plugin-pwa
# → Installable on all platforms in 2MB
# → Full agent access via cloud API
```

### Week 2: Tauri Desktop
```bash
# New package: packages/desktop/
npm create tauri-app luxor9-desktop
# → 8MB native desktop app
# → System tray + global shortcut
```

### Week 3: Cloud Backend
```bash
# Deploy API to Oracle Cloud free tier
# Or Fly.io / Railway
docker compose -f docker-compose.prod.yml up
# → 24/7 agent runtime
```

### Week 4: React Native (if needed)
```bash
# Only if PWA isn't enough
npx create-expo-app luxor9-mobile
# → App Store + Play Store
```

---

## BOTTOM LINE

**One codebase (React) → Four platforms (PWA/Desktop/iOS/Android) → Zero infrastructure cost → All 121 models, 50+ tools, 12 agents.**

The PWA alone covers 90% of use cases and ships in days, not months.
