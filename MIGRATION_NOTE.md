# Context Migration & Architecture Handover Note

**Date:** 2026-10-13  
**Project:** WoW Talent Calculator (`wow-talents`)  
**Stack:** ElectroBun, Bun, React 19, TypeScript, Tailwind CSS

---

## 1. Executive Summary

This project is a high-performance desktop World of Warcraft Talent Calculator supporting:
1. **WoW - Classic** (Level 60, 51 points)
2. **WoW - The Burning Crusade** (Level 70, 61 points)
3. **WoW - Forever** (Custom server with all 9 classes, 1,314 unique rank tooltips, 10 races with racials, and a 16-point Legacy Points Calculator)
4. **10th "Custom" Class Builder** (Mage topology with empty '?' unchosen slots, dynamic row-based virtual talent picker, spec copying, and RGBA tree color customization)

---

## 2. Recent Major Changes & Solved Issues

### A. Authentic Wowhead Forever Tooltips Restored
- **Problem**: A previous attempt to hydrate multi-rank descriptions inadvertently overwrote custom Forever talents with Classic descriptions or artificial percentage multipliers (e.g. Pandemic becoming 100%/200%/300% instead of 33%/67%/100%).
- **Fix**: Re-scraped all 1,314 rank tooltips across all 9 classes from live Wowhead Forever (`nether.wowhead.com/forever/tooltip/spell/<id>?def=<defId>&rank=<rank>`).
- **Files**: `src/mainview/talents/forever/*.ts`, `src/mainview/components/allTalentsPool.json`, and `src/mainview/talents/forever/allTreesCatalog.json`.

### B. Race Selector Bar Refactoring (`ClassSelector.tsx`)
- **DOM/CSS Structure**: Refactored `ClassSelector` into a flex container with:
  - **Left-Justified**: Custom 'Race' selector dropdown (defaults to **Undead**, with race artwork and names for all 10 races). Persisted to `localStorage` under `wow_selected_race`.
  - **Right-Justified**: Class selector buttons (`Druid` through `Custom`).
- **Playable Races**: Scraped from Wowhead Forever (`Human`, `Gnome`, `Night Elf`, `High Order Skyborne`, `Orc`, `Undead`, `Tauren`, `Troll`, `Windshaper Skyborne`, `Dwarf`). Data stored in `src/mainview/talents/forever/racesData.json`.

### C. Racial Benefits Panel (`RacialBenefits.tsx`)
- Placed directly below the 3 talent trees inside the main calculator container.
- Dynamically displays all 4 racial traits of the currently selected race, including official spell icons, trait names, and full ability descriptions.
- Synchronized all 46 racial and character icons in `src/mainview/assets/icons/all/` in both `.jpg` and `.png` formats.

### D. Main Calculator Inset Container & Virtual Scroller
- Main calculator layout matches `LegacyCalculator`: wrapped inside an inset container (`bg-neutral-950/90 border border-gray-800 rounded-2xl shadow-2xl p-6`).
- `TalentPickerModal.tsx` implements a virtual scroller (`ITEM_HEIGHT = 80`) rendering 728 abilities smoothly and remembering the active class filter in `localStorage`.

### E. Custom Slot Selection & Live Tooltip Rank Updates
- **Custom Slot Application**: Fixed an issue where slot replacement preserved `isUnchosen: true`; setting `isUnchosen: false` now reveals the selected ability and allows point allocation.
- **Live Tooltip Updates**: `<Tooltip>` now dynamically pulls active rank from `points[tooltipData.talent.id] || 0` and recalculates tree points reactively, updating rank descriptions live on click without unhovering.

---

## 3. Key Files Reference

| File | Purpose |
|------|---------|
| `src/mainview/App.tsx` | Main application shell, state management, top navigation bar, inset container |
| `src/mainview/components/ClassSelector.tsx` | Left-justified race dropdown + right-justified class buttons |
| `src/mainview/components/RacialBenefits.tsx` | Racial traits panel rendering active race's 4 traits |
| `src/mainview/components/TalentTree.tsx` | Renders a talent tree column, nodes, connector arrows, and context menus |
| `src/mainview/components/TalentPickerModal.tsx` | Virtualized row list talent picker for Custom class slots |
| `src/mainview/components/LegacyCalculator.tsx` | WoW Forever 16-point account-wide Legacy Points calculator |
| `src/mainview/components/Tooltip.tsx` | Dynamic rank-interpolating tooltip with next-rank previews |
| `src/mainview/talents/forever/racesData.json` | 10 races with all 40 racial spells and full descriptions |
| `scripts/build_static.ts` | Builds zero-dependency static web app into `build/static/` |

---

## 4. Verification Commands

```bash
# Static webapp build (bundles JS & Tailwind CSS)
bun run static

# TypeScript validation (skipLibCheck)
bunx tsc --noEmit --skipLibCheck

# Development server
bun run dev
```

---

## 5. Upcoming Roadmap Tasks

1. **GitHub Actions Release Workflow**: Set up `.github/workflows/release.yml` for multi-platform binary packaging on tag pushes.
2. **Hutch OTA Updates**: Configure `electrobun.config.ts` release bucket endpoint and auto-updater in `src/bun/index.ts`.
