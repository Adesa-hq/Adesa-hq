import { expect, test } from "@playwright/test";

const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["structure", "/structure"],
  ["governance", "/governance"],
  ["subsidiaries", "/subsidiaries"],
  ["careers", "/careers"],
  ["contact", "/contact"],
  ["privacy", "/privacy"],
  ["terms", "/terms"],
];

test("captures the full public route set for visual review", async ({ page }, testInfo) => {
  test.setTimeout(180_000);
  test.skip(!["mobile-390", "tablet", "desktop"].includes(testInfo.project.name), "Visual review breakpoints");

  for (const [name, route] of routes) {
    await page.goto(route, { waitUntil: "networkidle" });
    await expect(page.locator("main")).toBeVisible();
    await page.screenshot({
      path: testInfo.outputPath(`${name}-full-page.png`),
      fullPage: true,
      animations: "disabled",
    });
  }
});
