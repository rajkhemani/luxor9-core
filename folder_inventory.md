# Folder inventory

Generated for the selected folder without moving files, because the folder appears to be an active multi-package code repository and direct reorganization would likely break imports, build paths, or tool integrations.

## Summary

- Files inspected: 757
- Total inspected size: 12,745,272 bytes
- This folder is best treated as a project workspace, not as a general file dump.
- Main pattern: a real application under `packages/`, plus many mirrored assistant/editor skill folders, generated design-sync output, screenshots, caches, and planning documents.

## Content categories

### Core application code

These are the files that look like the real working product and should stay structurally stable.

- `packages/ui/`
  - Main frontend application
  - Largest code area
  - Includes `src/components/`, `src/services/`, `src/hooks/`, `src/styles/`
- `packages/api/`
  - Python backend and agent orchestration
  - Includes `app/agents/`, `app/api/`, `app/db_models/`
- `packages/mcp/`
  - Python MCP client integrations
- `packages/desktop/`
  - Desktop shell using Tauri/Rust
- `packages/shared/`
  - Shared type definitions
- `tests/`
  - Automated tests for API, agents, and MCP
- `infra/`
  - Deployment and container config
- `scripts/`
  - Utility install/build scripts

### Project docs and plans

These are documentation and planning artifacts, mostly at the repo root.

- Root markdown docs such as:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `CROSS_PLATFORM.md`
  - `DEEP_RESEARCH.md`
  - `EXECUTION_BOARD.md`
  - `NEMOTRON_PLAN.md`
  - `NVIDIA_BLUEPRINT.md`
  - `OSS_SDK_ULTRAPLAN.md`
  - `SUCCESS_FAILURE_AUTOPSY.md`
  - `ULTRAPLAN.md`
  - `ULTRAPLAN2.md`
  - `ULTRASEARCH.md`
- Additional internal docs under:
  - `.trae/documents/`

### Environment and build config

These files control packaging, builds, runtime config, or local setup.

- Root config:
  - `.env`
  - `.env.example`
  - `.gitignore`
  - `.dockerignore`
  - `package.json`
  - `package-lock.json`
  - `pyproject.toml`
  - `setup.cfg`
  - `Makefile`
- Docker and compose:
  - `docker-compose.dev.yml`
  - `docker-compose.oss.yml`
  - `docker-compose.prod.yml`
  - `infra/docker/`

### Mirrored assistant/editor skill content

These folders contain near-identical copies of the same `ui-ux-pro-max` skill assets for multiple tools/editors.

- `.agent/`
- `.claude/`
- `.codebuddy/`
- `.codex/`
- `.continue/`
- `.cursor/`
- `.gemini/`
- `.github/prompts/`
- `.kiro/`
- `.opencode/`
- `.qoder/`
- `.roo/`
- `.trae/skills/`
- `.windsurf/`

These copies contain repeated CSV data files, repeated Python helper scripts, and repeated `SKILL.md` files.

### Generated previews and design-sync output

These look generated or derived from source assets rather than canonical source code.

- `.design-sync/`
  - Preview TSX components and conventions
- `.ds-sync/`
  - Sync/build tooling and generated library files
- `ds-bundle/`
  - Preview bundle output
  - Screenshot exports
  - Built HTML/JS/CSS
- `packages/ui/.ds-build/`
  - Generated design-sync build output

### Caches and compiled artifacts

These are safe cleanup candidates if you want a lighter workspace.

- `__pycache__/` directories
- `.pyc` files

Current cache count:

- `__pycache__` directories: 20
- `.pyc` files: 69
- `.pyc` size total: 1,387,480 bytes

## Top-level structure by purpose

- `packages/`: primary product code
- `infra/`: deployment/infrastructure config
- `tests/`: automated tests
- `scripts/`: helper scripts
- Root files: docs, plans, environment config
- Hidden tool folders (`.agent`, `.claude`, `.codex`, etc.): mirrored prompt/skill content
- `ds-bundle`, `.design-sync`, `.ds-sync`: generated design and preview assets

## Duplicate findings

I found 31 exact duplicate-content groups, representing about 6,533,228 bytes of removable duplicate copies if you intentionally deduplicate them.

### High-confidence duplicate clusters

These are real byte-for-byte duplicates:

- 14 copies each of shared skill assets across the assistant/editor folders:
  - `colors.csv`
  - `charts.csv`
  - `astro.csv`
  - `flutter.csv`
  - `jetpack-compose.csv`
  - `react-native.csv`
  - `web-interface.csv`
  - `core.py`
  - `design_system.py`
  - `search.py`
- 4 screenshot pairs duplicated under:
  - `ds-bundle/_screenshots/`
  - `ds-bundle/_screenshots/review/`
- `packages/ui/test.html` is identical to `packages/ui/src/index.html`
- `ds-bundle/_ds_bundle.css` is identical to `packages/ui/.ds-build/luxor9-tailwind.css`

### Same names that are not automatically duplicates

These should not be deleted just because the names match:

- `package.json`
- `package-lock.json`
- `index.html`
- `vite.config.ts`
- `pyproject.toml`
- `models.py`

They live in different packages and may serve different purposes.

## Suggested deletion review

These are the safest candidates to review first.

### Safe to clean

- All `__pycache__/` directories
- All `.pyc` files

These are compiled Python cache artifacts and are usually regenerated automatically.

### Probably removable if generated

- Duplicate screenshot copies in `ds-bundle/_screenshots/review/`
- `packages/ui/test.html` if it is only a temporary duplicate of `packages/ui/src/index.html`
- Generated design-sync outputs if they are reproducible from source:
  - `ds-bundle/`
  - `packages/ui/.ds-build/`
  - parts of `.ds-sync/`

### Review carefully before deleting

- Mirrored `ui-ux-pro-max` skill folders across the assistant/editor directories

These appear highly duplicated, but they may be intentionally present for compatibility with different tools. If this repo is moving toward one canonical skill source plus export/sync, these mirrors are the main place where cleanup would recover space and reduce maintenance overhead.

## Recommended safe organization

Instead of physically moving source files, the cleanest logical grouping for this repo is:

- `packages/`: application code
- `infra/`: deployment
- `tests/`: verification
- `docs/`: long-form project docs and plans
- `tools/`: generated sync/build helpers
- `mirrors/` conceptually:
  - `.agent`
  - `.claude`
  - `.codex`
  - similar hidden tool folders
- `generated/` conceptually:
  - `.design-sync`
  - `.ds-sync`
  - `ds-bundle`
- `cache/` conceptually:
  - `__pycache__`
  - `.pyc`

I did not apply these physical moves because doing that inside a working repo would be risky without updating configs and automation references.

## Bottom line

This folder is already organized as a codebase, but it also contains mirrored skill copies, generated preview output, and Python cache artifacts. If you want cleanup with low risk, start by removing cache files, then review duplicated screenshots, then decide whether the mirrored skill folders should be kept as-is or consolidated behind a single canonical source.
