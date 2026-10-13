import { BrowserWindow, ApplicationMenu, Updater } from "electrobun/bun";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

async function showAboutDialog() {
  let version = "1.0.3";
  try {
    const info = await Updater.getLocalInfo();
    if (info?.version) {
      version = info.version;
    }
  } catch {
    try {
      const vFile = Bun.file("../Resources/version.json");
      if (await vFile.exists()) {
        const json = (await vFile.json()) as any;
        if (json?.version) version = json.version;
      }
    } catch {}
  }

  const script = `display alert "WoW Talent Calculator" message "Version: v${version}\\n\\nDesktop World of Warcraft Talent Calculator with Custom Class Builder and Legacy Points Calculator.\\n\\nBuilt with ElectroBun & Bun." as informational buttons {"OK"} default button "OK"`;
  execFileAsync("osascript", ["-e", script]).catch(() => {});
}

async function checkForUpdates(manual = true) {
  try {
    const localInfo = await Updater.getLocalInfo();
    console.log(`[Updater] Local Status: Version ${localInfo.version} | Hash ${localInfo.hash}`);

    const info = await Updater.checkForUpdate();
    console.log(`[Updater] Remote Status: Available? ${info.updateAvailable} | Latest: ${info.version}`);

    if (info.updateAvailable) {
      const script = `display dialog "A new version of WoW Talent Calculator (${info.version || "update"}) is available. Would you like to download and install it now?" with title "Update Available" buttons {"Later", "Update & Restart"} default button "Update & Restart" with icon note`;
      const { stdout } = await execFileAsync("osascript", ["-e", script]);
      if (stdout.includes("Update & Restart")) {
        try {
          execFileAsync("osascript", [
            "-e",
            'display notification "Downloading and applying WoW Talent Calculator update..." with title "Updating"',
          ]).catch(() => {});
          await Updater.downloadUpdate();
          await Updater.applyUpdate();
        } catch (applyError: any) {
          console.error("[Updater] Failed to apply update:", applyError);
          const errMsg = (applyError?.message || "Failed to download or apply update.").replace(/"/g, '\\"');
          const script = `display alert "Update Failed" message "${errMsg}" as warning buttons {"OK"} default button "OK"`;
          await execFileAsync("osascript", ["-e", script]).catch(() => {});
        }
      }
    } else if (manual) {
      const script = `display alert "WoW Talent Calculator is Up to Date" message "You are currently running the latest version (v${localInfo.version})." as informational buttons {"OK"} default button "OK"`;
      await execFileAsync("osascript", ["-e", script]);
    }
  } catch (error: any) {
    console.error("[Updater] Check error:", error);
    if (manual) {
      const msg = (error?.message || "Failed to check for updates.").replace(/"/g, '\\"');
      const script = `display alert "Update Check Failed" message "${msg}" as warning buttons {"OK"} default button "OK"`;
      await execFileAsync("osascript", ["-e", script]).catch(() => {});
    }
  }
}

Updater.onStatusChange((entry) => {
  console.log(`[Updater Status Change] State: ${entry.status} | Msg: ${entry.message}`);
});

// Setup standard macOS Application Menu with shortcuts and Updater action
ApplicationMenu.setApplicationMenu([
  {
    label: "WoW Talent Calculator",
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
  },
  {
    label: "Help",
    submenu: [
      {
        label: "About WoW Talent Calculator",
        action: "about"
      },
      {
        label: "Check for Updates...",
        action: "checkForUpdates"
      }
    ]
  }
]);

// Handle application menu actions
const handleMenuAction = (event: any) => {
  const action = event?.data?.action || event?.action;
  if (!action) return;

  if (action === "about") {
    showAboutDialog();
  } else if (action === "checkForUpdates") {
    checkForUpdates(true);
  }
};

ApplicationMenu.on("application-menu-clicked", handleMenuAction);
ApplicationMenu.on("action", handleMenuAction);

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
