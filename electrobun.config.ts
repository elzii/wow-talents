export default {
  app: {
    name: "WoW Talent Calculator",
    identifier: "com.zizzo.wowtalents",
    version: "1.0.0"
  },
  build: {
    bun: {
      entrypoint: "src/bun/index.ts",
      external: []
    },
    views: {
      mainview: {
        entrypoint: "src/mainview/index.tsx",
        external: []
      }
    },
    copy: {
      "src/mainview/index.html": "views/mainview/index.html",
      "src/mainview/index.css": "views/mainview/index.css",
      "src/mainview/assets": "views/mainview/assets"
    },
    mac: {
      bundleCEF: false,
      icons: "assets/appIcon.iconset"
    },
    linux: {
      bundleCEF: false
    },
    win: {
      bundleCEF: false
    }
  }
};
