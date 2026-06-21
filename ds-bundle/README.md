# @luxor9/ui — LUXOR9 Agent UI

These components are the LUXOR9 "AI Agency OS" surface: a dark, HUD-style command
center. Build with the real exports below and match the dark, Orbitron-headed,
amber/cyan-accented look.

## Runtime & wrapping
- Components live on `window.Luxor9UI.*` (loaded from the root `_ds_bundle.js`):
  `AgentBuilder`, `MobileDashboard`, `AuditReportCard`, `TaskBoard`.
- **No provider/context is required.** `AgentBuilder` and `MobileDashboard` are fully
  self-contained (no props). `AuditReportCard` takes `{ report }`; `TaskBoard` takes
  `{ tasks, onToggleTask, onToggleSubTask, onAddSubTask, … }` — see each component's
  `.d.ts` / `.prompt.md` for the exact shapes.
- **Dark-first.** The brand look is dark mode (`darkMode: 'class'`). Wrap any tree that
  uses these components in an element with `class="dark"` over a near-black background
  (`#050505` / `#0a0a0f`). `AgentBuilder`/`MobileDashboard` hard-code their own dark
  inline styles; `AuditReportCard`/`TaskBoard` use `dark:` variants, so the `.dark`
  ancestor is required for them to look right.

## Styling idiom — Tailwind utilities (v3)
Write your own layout glue with Tailwind classes; the compiled utility set ships in
`styles.css`. Brand vocabulary:
- Fonts: `font-brand` (Orbitron — headings/labels; also exposed as the `.brand-font`
  class), `font-sans` (Inter — body), `font-mono` (JetBrains Mono — metadata/codes).
- Surfaces: near-black backgrounds — use an inline `#050505` (deep void) or `#0a0a0f`,
  or `bg-zinc-900`; overlays `bg-white/5` and `bg-black/40`; hairline borders
  `border-zinc-800` / `border-white/10`; `rounded-xl`; `backdrop-blur-md`.
- Accents: amber is the primary accent (`text-amber-500`, `bg-amber-500`); cyan =
  active/executing, emerald = success/complete; severity scale is red → orange →
  amber → blue (critical → high → medium → low).
- Headings are uppercase and letter-spaced (`uppercase tracking-wider` /
  `tracking-widest`).

## Where the truth lives
- `styles.css` (which `@import`s `_ds_bundle.css`) — the shipped utilities/tokens.
- `components/<group>/<Name>/<Name>.prompt.md` + `.d.ts` — exact per-component props.
- Brand fonts load at runtime via a remote Google Fonts `@import` in `styles.css`.

## Example
```tsx
// A LUXOR9-styled panel: a real component beside your own Tailwind layout glue.
<div className="dark min-h-screen p-6 font-sans text-zinc-200" style={{ background: '#050505' }}>
  <h1 className="font-brand uppercase tracking-widest text-amber-500 mb-4">
    Mission Control
  </h1>
  <AuditReportCard report={report} />
</div>
```

# Luxor9UI (@luxor9/ui@1.0.0)

This design system is the published @luxor9/ui React library, bundled as a single
browser global. All 4 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.Luxor9UI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.Luxor9UI.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AgentBuilder } = window.Luxor9UI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AgentBuilder />);
```

## Tokens

64 CSS custom properties from @luxor9/ui. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (9): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (49): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### general
- `AgentBuilder`
- `AuditReportCard`
- `MobileDashboard`
- `TaskBoard`
