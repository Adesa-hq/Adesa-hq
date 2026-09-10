import { defineConfig } from "@playwright/test";

const viewports = [
  ["mobile-360", { width: 360, height: 800 }],
  ["mobile-390", { width: 390, height: 844 }],
  ["tablet", { width: 768, height: 1024 }],
  ["desktop", { width: 1280, height: 800 }],
  ["wide", { width: 1440, height: 900 }],
];

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  fullyParallel: false,
  workers: 2,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:3000",
    trace: "retain-on-failure",
    launchOptions: {
      executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    },
  },
  projects: viewports.map(([name, viewport]) => ({ name, use: { viewport } })),
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
    timeout: 120_000,
  },
});
