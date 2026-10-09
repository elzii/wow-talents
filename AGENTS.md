# AGENTS.md — Development History & Architecture Guide

## Mandatory Agent Instruction
> [!IMPORTANT]
> **RULE:** Every AI agent working on this repository **MUST** update this file (`AGENTS.md`) at the end of every prompt session / set of changes to document what was done, architecture updates, and current project status.

---

## Overview

This repository (`wow-talents`) is a desktop World of Warcraft Talent Calculator built using **ElectroBun**, **Bun**, **React 19**, **TypeScript**, and **Tailwind CSS**. It was ported from an Electron-based application (`wow-talent-calc`) with major additions including the **"WoW - Forever"** game version and a **10th "Custom" Class Builder**.

---

## What Was Done

### 1. Porting from Electron to ElectroBun
- **Project Structure**:
  - `src/bun/index.ts`: Electrobun main process creating the native `BrowserWindow` loading `views://mainview/index.html`.
  - `src/mainview/`: React 19 frontend application bundled with Bun and styled with Tailwind CSS and Radix UI.
  - `electrobun.config.ts`: Configuration defining entrypoints, asset copy mapping, and target platform settings.
- **Asset Migration & Icon Generation**:
  - Copied 33MB of spell icons, class crests, and background tree textures from the legacy Electron repository into `src/mainview/assets/`.
  - Configured high-resolution macOS application icons (`appIcon.iconset` & `AppIcon.icns`).

### 2. Talent Tree Schema Refinements
- Unified schemas under `src/types/index.ts`:
  - `ClassData`, `TalentTreeData`, and `TalentData`.
  - Added structured prerequisites: `requirements: { talentId, talentRank, talentName }`.
  - Normalized tier constraints (`minPointsRequired = y * 5`).
  - Added cross-tree and custom class metadata support (`sourceClass`, `sourceTree`).

### 3. Crawled and Implemented "WoW - Forever"
- Used `chrome-devtools-mcp` to inspect and crawl the live Wowhead Forever talent calculators across all 9 original classes:
  1. Druid (`https://www.wowhead.com/forever/talent-calc/druid`)
  2. Hunter (`https://www.wowhead.com/forever/talent-calc/hunter`)
  3. Mage (`https://www.wowhead.com/forever/talent-calc/mage`)
  4. Paladin (`https://www.wowhead.com/forever/talent-calc/paladin`)
  5. Priest (`https://www.wowhead.com/forever/talent-calc/priest`)
  6. Rogue (`https://www.wowhead.com/forever/talent-calc/rogue`)
  7. Shaman (`https://www.wowhead.com/forever/talent-calc/shaman`)
  8. Warlock (`https://www.wowhead.com/forever/talent-calc/warlock`)
  9. Warrior (`https://www.wowhead.com/forever/talent-calc/warrior`)
- Extracted talent nodes (`.ctc-tree-box` & `.ctc-tree-talent`), coordinates (`data-row`, `data-col`), max ranks, spell descriptions from `window.g_spells`, and resolved prerequisite trees.
- Downloaded and saved all missing Forever icons into `src/mainview/assets/icons/all/`.
- Generated typed datasets under `src/mainview/talents/forever/`.

### 4. 10th "Custom" Class Builder & Dynamic Ability Picker
- Added a 10th selectable class: **Custom** (`src/mainview/talents/custom/custom.ts`).
- **Mage Template Architecture**:
  - Expanded all 3 custom trees (*Martial Power*, *Arcane & Shadow*, *Holy & Nature*) to match the full Mage tree topology (17–19 abilities per tree across 7 tiers).
  - Uses standard tier unlocks (`minPointsRequired = y * 5`) and prerequisites matching the Mage template.
- **Interactive Ability Replacement & Long-Press Picker**:
  - **Long-Press Detection**: Holding any talent node in the Custom class for ~450ms opens the dynamic ability picker popup (`TalentPickerModal.tsx`).
  - **Combobox Search**: Live keyword search across ability names, classes, or specializations, with a class dropdown filter.
  - **6x4 Grid of Abilities**: Renders a 24-item paged grid with hover tooltips showing rank info and spell descriptions from the 728-ability master pool (`allTalentsPool.json`).
  - **Slot Replacement**: Clicking an ability swaps it into that exact tree slot, preserving coordinates, tier constraints, and automatically saving the configuration to `localStorage`.
  - Includes a "Reset Tree Layout" button to restore the base template at any time.

### 5. macOS Native Menu & System Shortcuts
- Configured native `ApplicationMenu` in `src/bun/index.ts`:
  - `⌘Q` / Quit with application role and accelerator.
  - `⌘H` / Hide application, Hide Others, Show All.
  - Standard Edit menu (`⌘Z`, `⇧⌘Z`, `⌘X`, `⌘C`, `⌘V`, `⌘A`), View (`^⌘F`), and Window controls (`⌘M`, `⌘W`).

### 6. Icon Auditing & Comprehensive Asset Ingestion
- Executed automated cross-check across all 504 unique talent references across Classic, TBC, Forever, and Custom datasets.
- Downloaded all missing icons (including Warlock, Priest, Shaman, Rogue, Warrior, Paladin, and Druid icons like `ability_deathknight_hemorrhagicfever`, `spell_shadow_unstableaffliction_2`, `inv_elemental_primal_shadow`, `spell_holy_penance`, `spell_shaman_lavaburst`, etc.) using `chrome-devtools-mcp` browser execution directly from Wowhead asset servers.
- Verified **0 remaining missing icons** across all classes and game versions.

### 7. Desktop Application Packaging
- Configured application icon in `electrobun.config.ts` using `assets/appIcon.iconset` (retina resolutions from 16x16 to 512x512).
- Successfully verified native compilation producing `build/dev-macos-arm64/WoWTalentCalculator-dev.app`.

---

## TODO / Roadmap

### 1. GitHub Actions Release Workflow
- [ ] Create `.github/workflows/release.yml` triggered on git tag pushes (e.g., `v*.*.*`).
- [ ] Set up multi-platform CI build runners (`macos-latest`, `ubuntu-latest`, `windows-latest`).
- [ ] Run `bun run build` / `electrobun build --env stable` on each runner.
- [ ] Automatically package DMG / Zip / Tarball artifacts.
- [ ] Generate and upload release assets to GitHub Releases using `softprops/action-gh-release`.

### 2. Hutch Integration for Over-the-Air (OTA) Updates
- [ ] Configure `electrobun.config.ts` release bucket endpoint (`config.release.bucketUrl`).
- [ ] Implement `hutch` updater ingestion logic in `src/bun/index.ts` to check for new versions on startup.
- [ ] Generate `update.json` and bsdiff delta patches during CI workflow.
- [ ] Add in-app update notification and prompt for seamless user downloads and app restart.
