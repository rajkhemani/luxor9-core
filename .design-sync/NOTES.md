# design-sync notes — @luxor9/ui

This package is the LUXOR9 **application** UI (`packages/ui`), not a published
component library. The sync is deliberately scoped to a self-contained subset.
Everything below is what made the converter work here; read it before re-syncing.

## Environment
- **No native Linux Node in this WSL host** — `node`/`npm` on PATH are Windows
  (`/mnt/c/Program Files/nodejs`). The converter (`.mjs` + esbuild/ts-morph/
  playwright) is run inside a Linux container with the repo bind-mounted:
  `docker run -d --name luxor-dssync -v /mnt/e/projects/luxor9-core:/work -w /work node:22-slim sleep infinity`
  then `docker exec luxor-dssync …`. Converter deps live in `.ds-sync/node_modules`
  (installed in-container so esbuild/chromium are linux binaries). Repo is `/work` in-container.

## Build shape (package, synth-entry, hand-written entry)
- `@luxor9/ui` is `private`, has **no `dist`/`main`/`module`/`exports` and no `.d.ts`**.
  The converter's synth-entry would `export * from <every src .tsx>`, which pulls in
  `App.tsx`/`main.tsx` (top-level `ReactDOM.render`) and the Three.js screens → the
  IIFE crashes on load. So we ship a **hand-written entry**: `packages/ui/.ds-build/entry.tsx`
  re-exports only the 4 scoped components, passed via `--entry`.
- Scoping is via `cfg.componentSrcMap`: the 4 keepers get src paths (added to the
  component list even with no `.d.ts`), the other 8 are `null`.
- Props contracts: with no `.d.ts`, `cfg.dtsPropsFor` hand-supplies the `AuditReportCard`
  and `TaskBoard` prop bodies (the shapes are mirrored from `src/types.ts`).

## Styling (Tailwind Play CDN → compiled static CSS)
- The app has **no Tailwind dependency**; it styles via the Play CDN `<script>` in
  `packages/ui/index.html` with an inline `tailwind.config` (darkMode:'class', custom
  zinc/primary colors, `brand`=Orbitron / `sans`=Inter / `mono`=JetBrains Mono) and a
  `<style>` block (`.brand-font` etc.). None of that is shippable as-is.
- We compile a **static** stylesheet that mirrors that config:
  `.ds-sync/tw/{tailwind.config.cjs,input.css}` → `packages/ui/.ds-build/luxor9-tailwind.css`
  (`cfg.cssEntry`). Re-run after any class changes:
  `docker exec luxor-dssync bash -c 'cd /work && .ds-sync/node_modules/.bin/tailwindcss -c .ds-sync/tw/tailwind.config.cjs -i .ds-sync/tw/input.css -o packages/ui/.ds-build/luxor9-tailwind.css --minify'`
- `tailwindcss-animate` is included (AuditReport/TaskBoard use `animate-in fade-in …`).
- Brand fonts (Orbitron/Inter/JetBrains Mono) load via a **remote `@import`** in
  `input.css` → validate reports `[FONT_REMOTE]` (expected, non-blocking).
- AuditReportCard & TaskBoard are dark-first; their preview cells wrap content in
  `<div className="dark">` so `dark:` variants resolve.

## Component coupling
- AgentBuilder, MobileDashboard: self-contained, inline-styled, no props.
- MobileDashboard reads `import.meta.env.VITE_LUXOR9_API` at module top → crashes the
  IIFE. The entry imports a **sanitized copy** `packages/ui/.ds-build/MobileDashboard.tsx`
  (generated `sed 's#import\.meta\.env#({})#g'`).
- TaskBoard imports `AgentType` (a runtime enum) from `../types`, which imports
  `@google/genai` — it bundles fine (one inlined npm package, ~73 KB total).

## Re-sync risks (watch-list)
- **`packages/ui/.ds-build/MobileDashboard.tsx` is a generated sanitized copy** — if the
  real `src/components/MobileDashboard.tsx` changes, regenerate it (the sed above).
- **`packages/ui/.ds-build/entry.tsx`** is hand-written — update it if the scoped
  component set changes (add/remove exports).
- **`luxor9-tailwind.css` is compiled** — recompile (command above) whenever the
  components' class usage changes, or the cards render unstyled.
- If `index.html`'s inline `tailwind.config` changes (colors/fonts/darkMode), mirror it
  into `.ds-sync/tw/tailwind.config.cjs`.
- The whole sync runs in the `luxor-dssync` container; recreate it on a fresh clone.
