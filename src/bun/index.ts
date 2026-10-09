import { BrowserWindow } from "electrobun/bun";

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
