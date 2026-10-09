import { BrowserWindow, ApplicationMenu } from "electrobun/bun";

// Setup standard macOS Application Menu with shortcuts
ApplicationMenu.setApplicationMenu([
  {
    submenu: [
      { label: "About WoW Talent Calculator", role: "about" },
      { type: "separator" },
      { label: "Hide WoW Talent Calculator", role: "hide", accelerator: "h" },
      { label: "Hide Others", role: "hideOthers" },
      { label: "Show All", role: "showAll" },
      { type: "separator" },
      { label: "Quit WoW Talent Calculator", role: "quit", accelerator: "q" }
    ]
  },
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "selectAll" }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "toggleFullScreen" }
    ]
  },
  {
    label: "Window",
    submenu: [
      { role: "minimize" },
      { role: "zoom" },
      { type: "separator" },
      { role: "close" }
    ]
  }
]);

const mainWindow = new BrowserWindow({
  title: "WoW Talent Calculator",
  url: "views://mainview/index.html",
  frame: {
    width: 1280,
    height: 860,
    x: 100,
    y: 80
  }
});

console.log("WoW Talent Calculator started with Electrobun!");
