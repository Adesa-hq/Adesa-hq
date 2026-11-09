import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => sessionStorage.setItem("adesa-hq-intro-seen", "true"));
  await page.goto("/", { waitUntil: "domcontentloaded" });
});

test("navigation sticks after scrolling and includes Home on every breakpoint", async ({ page }) => {
  const header = page.locator("header");
  await expect(header).toHaveCSS("position", "sticky");
  const mobile = page.viewportSize().width < 1024;
  if (mobile) await page.getByRole("button", { name: "Open navigation" }).click();
  const nav = page.getByRole("navigation", { name: mobile ? "Mobile navigation" : "Main navigation", exact: true });
  await expect(nav.getByRole("link", { name: "Home", exact: true })).toHaveAttribute("href", "/");
  await expect(nav.getByRole("link", { name: "Home", exact: true })).toHaveAttribute("aria-current", "page");
  if (mobile) await page.keyboard.press("Escape");
  await page.evaluate(() => window.scrollTo(0, 600));
  await expect.poll(async () => Math.round((await header.boundingBox()).y)).toBe(0);
});

test("the first slide and logo surfaces blend with the dark site", async ({ page }) => {
  const first = page.locator('[aria-roledescription="slide"]').first();
  await expect(first).toHaveCSS("background-color", "rgb(5, 9, 18)");
  await expect(first).toHaveCSS("color", "rgb(248, 250, 252)");
  for (const logo of await page.locator("header figure, footer figure").all()) {
    await expect(logo).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  }
  await page.getByRole("button", { name: "Show ADESA Distribution", exact: true }).click();
  const distribution = page.locator('[aria-roledescription="slide"][aria-hidden="false"]');
  await expect(distribution.locator('[data-company="distribution"]')).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  await expect(distribution.getByRole("img", { name: "ADESA Distribution official logo" })).toHaveCSS("mix-blend-mode", "screen");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(page.viewportSize().width);
});

test("footer provides an aerial map and a location link using the configured address", async ({ page }) => {
  const frame = page.locator('footer iframe[title="Aerial map of ADESA HQ office location"]');
  const url = new URL(await frame.getAttribute("src"));
  expect(url.searchParams.get("t")).toBe("k");
  expect(url.searchParams.get("q")).toBe("2 Isheri Road, Ojudu-Berger, Lagos, Nigeria");
  await expect(frame).toHaveAttribute("loading", "lazy");
  await expect(page.getByRole("link", { name: "Open location in Google Maps" })).toHaveAttribute("href", /google\.com\/maps\/search\/.*query=/);
});
