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

### 8. Static WebApp Generator (`build/static`)
- Created `scripts/build_static.ts` (`bun run static`) to compile the application as a standalone, zero-dependency static web application into `build/static/`:
  - Compiles minified CSS via Tailwind CSS CLI.
  - Bundles browser-targeted, minified JavaScript via `Bun.build` (`build/static/index.js`).
  - Copies `index.html` and the full `assets/` directory (icons, crests, textures).
  - Can be served with `bun run serve` or hosted on GitHub Pages, Cloudflare Pages, S3, or any static HTTP web server.

### 9. Custom Class Overhaul, Color Wheel, Spec Copy, & Legacy Points Calculator
- **Header & Subheader Restyle**:
  - Replaced blue tones with pure dark neutral black/gray styling (`bg-neutral-900/90`, `border-neutral-800/90`, `bg-black/60`).
- **Custom Class Unchosen Slots ('?')**:
  - Preserved Mage topology (18, 17, 19 slots matching row/column & tier constraints).
  - Slots start as empty square '?' unchosen nodes (`isUnchosen: true`).
  - Regular left-click on an unchosen slot directly opens the ability picker without requiring a long press.
  - Long-press (450ms) applies once an ability has been chosen for that slot.
- **Custom Tree Color Customization & RGBA Picker**:
  - Removed default background textures in Custom mode, replaced with contrasting solid background and white border (`border-2 border-white/70`).
  - Created `ColorPickerModal.tsx` featuring an HTML5 color wheel, RGBA sliders, presets, and live preview.
  - Right-click context menu on tree container offers "Change Color" and "Copy Class Tree".
  - Color persists per tree in `localStorage`.
- **Editable Tree Titles & Whole-Tree Spec Copy ('+')**:
  - Tree titles ("Martial Power", etc.) are inline content-editable.
  - Added a '+' button next to the reset button opening `TreeCopyModal.tsx`.
  - Searchable list of all 27 class specs across all 9 classes with class crests and spec icons (`allTreesCatalog.json`).
  - Copies all talents, positions, ranks, and tree name into the chosen custom slot.
- **Legacy Points Calculator (WoW Forever)**:
  - Added header toggle button (toggled ON by default for WoW Forever): `[⚡ Legacy Points Calculator]`.
  - Scraped live node data and prerequisite edges from `https://www.wowhead.com/forever/legacy-calculator` into `src/mainview/talents/forever/legacyCalculatorData.json`.
  - Downloaded all missing legacy icon assets (`achievement_profession_chefhat`, `inv_misc_basket_04`, `ability_hunter_huntervswild`, `inv_fishingchair`, `achievement_guild_ridelikethewind`, `achievement_bg_winwsg`, `spell_misc_emotionhappy`).
  - Created `LegacyCalculator.tsx` rendering all 3 trees (*Professions*, *Adventure*, *Resourcefulness*) with 16 total account-wide points, 5/10 pt tier gating, edge prerequisite dependencies, and dynamic SVG connector arrows.

### 10. Talent Chooser Virtual Scroller, Tooltip Rank Interpolation & Inset Container Layout
- **Virtualized Row-Based Talent Picker (`TalentPickerModal.tsx`)**:
  - Replaced the 6x4 icon grid / pagination with a row-based list matching the `TreeCopyModal` visual language (class crest, spell icon, title, class/spec badge, rank badge, and spell description).
  - Implemented a custom lightweight virtual scroller (`ITEM_HEIGHT = 80`, container height 460px, overscan 4) to smoothly render all 728 abilities without DOM strain.
  - Automatically persists the active class filter to `localStorage` under `wow_custom_picker_class_filter` across modal closures and app reloads.
- **Dynamic Tooltip Multi-Rank Text Fix (`Tooltip.tsx`)**:
  - Fixed rank interpolation so multi-rank talents dynamically display and scale percentage and numeric increments (e.g. 2%, 4%, 6%, 8%, 10%) per rank.
  - Hydrated all 356 multi-rank talents across Forever dataset (`druid.ts`, `hunter.ts`, `mage.ts`, etc.), `allTalentsPool.json`, and `allTreesCatalog.json` with multi-rank descriptions.
  - `Tooltip.tsx` now correctly previews the current rank description and "Next Rank:" description as points are allocated or unallocated.
- **Padded & Inset Calculator Container Layout (`App.tsx`)**:
  - Unified the main talent calculator with the visual aesthetic of the Legacy Points Calculator: styled in a padded, inset container (`bg-neutral-950/90 border border-gray-800 rounded-2xl shadow-2xl p-6`).
  - Placed the `ClassSelector` at the top of the container and relocated the 'Custom Class Builder' toolbar to the bottom inside the container.

### 11. Authentic Forever Tooltips Re-Scraping, Race Selector & Racial Benefits
- **Exact Wowhead Forever Tooltips Re-Scraped**:
  - Re-scraped all 1,314 rank tooltips across all 9 classes directly from live Wowhead Forever (`nether.wowhead.com/forever/tooltip/spell/<id>?def=<defId>&rank=<rank>`).
  - Restored true Forever-specific talent values and percentages (e.g. Warlock *Pandemic* 33%/67%/100%, Druid *Improved Wrath* 10%/20%/30%/40%/50% Mana cost reduction, *Nature's Grace*, etc.).
  - Synchronized descriptions into `allTalentsPool.json` and `allTreesCatalog.json`.
- **Race Selector Dropdown (`ClassSelector.tsx`)**:
  - Refactored the Class Selector bar: classes right-justified, and a new custom Race dropdown left-justified.
  - Defaults to "Undead" and persists choice in `localStorage`.
  - Scraped all 10 playable races from Wowhead Forever (`Human`, `Gnome`, `Night Elf`, `High Order Skyborne`, `Orc`, `Undead`, `Tauren`, `Troll`, `Windshaper Skyborne`, `Dwarf`) with official race icons and male portrait artwork.
- **Racial Benefits Panel (`RacialBenefits.tsx`)**:
  - Created a dedicated racial benefits component positioned directly below the 3 talent trees inside the main inset container.
  - Dynamically renders all 4 racial traits for the selected race with authentic spell icons, trait names, and full ability descriptions.
  - Downloaded and synchronized all 46 racial ability icons into `src/mainview/assets/icons/all/` supporting both `.jpg` and `.png` extensions.

### 12. Custom Slot Selection Fix & Live Tooltip Rank Updating
- **Custom Ability Slot Application Fix (`App.tsx`)**:
  - Fixed an issue where selecting an ability from `TalentPickerModal` did not visually replace the slot because the template's `isUnchosen: true` flag was preserved during replacement.
  - Added explicit `isUnchosen: false` flag assignment in `handleReplaceCustomTalent`, enabling immediate slot update, icon display, hover tooltip, and point allocation.
- **Real-Time Live Tooltip Updates on Point Allocation (`App.tsx`)**:
  - Fixed an issue where tooltip text did not reflect rank increments or tree point changes without mouseout/hovering again.
  - Made `<Tooltip>` derive its active `rank` directly and reactively from `points[tooltipData.talent.id] || 0` and compute dynamic `treePoints`, enabling real-time tooltip text, rank, and next-rank updates as points are clicked.

### 13. Hutch Integration & GitHub Actions OTA Release Workflow
- **Electrobun Updater Ingestion (`src/bun/index.ts`)**:
  - Imported `Updater` from `electrobun/bun`.
  - Added native updater status listener (`Updater.onStatusChange`) and auto-check on startup.
  - Added "Check for Updates..." to macOS Application Menu with interactive osascript dialogs for download, delta patch application, and restart prompts.
- **Hutch Configuration (`hutch.config.ts` & `electrobun.config.ts`)**:
  - Configured `release.baseUrl: "https://github.com/elzii/wow-talents/releases/latest/download"`.
  - Enabled `generatePatch: true` for automatic binary delta patching across versions.
- **GitHub Actions Release Workflow (`.github/workflows/release.yml`)**:
  - Created automated release pipeline triggered on `v*` git tag pushes or manual workflow dispatch.
  - Prepares Cottontail environment (`cottontail-core` symlinks and `cottontail-stdlib`).
  - Generates DMG installer, compressed tarball update archive (`.app.tar.zst`), manifest (`update.json`), and ZIP bundle.
  - Signs bundles and publishes release assets directly to GitHub Releases.
  - Eliminated headless launcher blocking execution by cleanly ad-hoc signing after cleaning `.cottontail-tmp`.

### 14. Custom Mode Prerequisite Decoupling & Legacy Calculator Tooltips
- **Prerequisite Decoupling in Custom Mode (`custom.ts`, `App.tsx`, `TalentTree.tsx`, `Tooltip.tsx`)**:
  - Decoupled Custom Class Mode from hard-coded prerequisite dependencies (previously inherited from Mage template).
  - Prerequisites are now dynamically determined solely by tier points spent (`y * 5`), allowing any talent to be placed and ranked without prerequisite blocking.
  - Prerequisite requirement warning badges are hidden in Custom Mode tooltips.
- **Legacy Points Calculator Tooltip Styling (`LegacyCalculator.tsx`)**:
  - Unified the visual presentation of Legacy Points tooltips with the main talent calculator tooltips.
  - Includes rank indicators, green rank effect descriptions, Next Rank previews, and tier point requirement indicators.

### 15. Automated Semver Bumping & Production OTA Release Deployment
- **Automated Semver Release Script (`scripts/release.ts` / `bun run release`)**:
  - Script automatically increments semver patch in `package.json` and `electrobun.config.ts`.
  - Stages, commits, tags, and pushes branch and tag to GitHub origin.
- **Verified Production Release (`v1.0.3`)**:
  - Successfully triggered GitHub Actions runner completing in 1m22s.
  - Published release assets to GitHub Releases (`v1.0.3`):
    - `macos-arm64-WoWTalentCalculator.dmg` (55.98 MiB)
    - `stable-macos-arm64-update.json` (222 B)
    - `stable-macos-arm64-WoWTalentCalculator.tar.zst` (53.84 MiB)
    - `WoWTalentCalculator-macos-arm64.zip` (54.62 MiB)
  - Verified remote update manifest queryable via `https://github.com/elzii/wow-talents/releases/latest/download/stable-macos-arm64-update.json`.

---

## TODO / Roadmap

### 1. GitHub Actions Release Workflow
- [x] Create `.github/workflows/release.yml` triggered on git tag pushes (e.g., `v*.*.*`).
- [x] Automatically package DMG / Zip / Tarball artifacts.
- [x] Generate and upload release assets to GitHub Releases using `softprops/action-gh-release`.

### 2. Hutch Integration for Over-the-Air (OTA) Updates
- [x] Configure `electrobun.config.ts` release bucket endpoint (`config.release.baseUrl`).
- [x] Implement `hutch` updater ingestion logic in `src/bun/index.ts` to check for new versions on startup.
- [x] Generate `update.json` and bsdiff delta patches during CI workflow.
- [x] Add in-app update notification and prompt for seamless user downloads and app restart.
- [x] Verify release pipeline and OTA manifest deployment with automated patch bump (`v1.0.3`).
