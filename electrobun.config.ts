import type { ElectrobunConfig } from "electrobun";

export default {
  app: {
    name: "WoW Talent Calculator",
    identifier: "com.zizzo.wowtalents",
    version: "1.0.0",
  },
  release: {
    baseUrl: "https://github.com/elzii/wow-talents/releases/latest/download",
    generatePatch: true,
  },
  build: {
    bun: {
      entrypoint: "src/bun/index.ts",
      external: [],
    },
    views: {
      mainview: {
        entrypoint: "src/mainview/index.tsx",
        external: [],
      },
    },
    copy: {
      "src/mainview/index.html": "views/mainview/index.html",
      "src/mainview/index.css": "views/mainview/index.css",
      "src/mainview/assets": "views/mainview/assets",
    },
    mac: {
      bundleCEF: false,
      icons: "assets/appIcon.iconset",
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
    },
  },
} satisfies ElectrobunConfig;
