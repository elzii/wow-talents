import { BrowserWindow, ApplicationMenu, Updater } from "electrobun/bun";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

function showAboutDialog() {
  const script =
    'display alert "WoW Talent Calculator" message "Desktop World of Warcraft Talent Calculator with Custom Class Builder and Legacy Points Calculator.\n\nBuilt with ElectroBun & Bun." as informational buttons {"OK"} default button "OK"';
  execFileAsync("osascript", ["-e", script]).catch(() => {});
}

async function checkForUpdates(manual = true) {
  try {
    const info = await Updater.checkForUpdate();
    if (info.updateAvailable) {
      const script = `display dialog "A new version of WoW Talent Calculator (${info.version || "update"}) is available. Would you like to download and install it now?" with title "Update Available" buttons {"Later", "Update & Restart"} default button "Update & Restart" with icon note`;
      const { stdout } = await execFileAsync("osascript", ["-e", script]);
      if (stdout.includes("Update & Restart")) {
        execFileAsync("osascript", [
          "-e",
          'display notification "Downloading and applying WoW Talent Calculator update..." with title "Updating"',
        ]).catch(() => {});
        await Updater.downloadUpdate();
        await Updater.applyUpdate();
      }
    } else if (manual) {
      const script =
        'display alert "WoW Talent Calculator is Up to Date" message "You are currently running the latest version." as informational buttons {"OK"} default button "OK"';
      await execFileAsync("osascript", ["-e", script]);
    }
  } catch (error: any) {
    if (manual) {
      const msg = (error?.message || "Failed to check for updates.").replace(/"/g, '\\"');
      const script = `display alert "Update Check Failed" message "${msg}" as warning buttons {"OK"} default button "OK"`;
      await execFileAsync("osascript", ["-e", script]).catch(() => {});
    }
  }
}

Updater.onStatusChange((entry) => {
  console.log(`[Updater] ${entry.status}: ${entry.message}`);
});

// Setup standard macOS Application Menu with shortcuts and Updater action
ApplicationMenu.setApplicationMenu([
  {
    submenu: [
      {
        label: "About WoW Talent Calculator",
        action: "about"
      },
      {
        label: "Check for Updates...",
        action: "checkForUpdates"
      },
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

// Handle application menu actions
ApplicationMenu.on("action", (event: any) => {
  const action = event?.data?.action;
  if (!action) return;

  if (action === "about") {
    showAboutDialog();
  } else if (action === "checkForUpdates") {
    checkForUpdates(true);
  }
});

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

// Check for updates on startup silently in the background
setTimeout(() => {
  checkForUpdates(false).catch(() => {});
}, 3000);
