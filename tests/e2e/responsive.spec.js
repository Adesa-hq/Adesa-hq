import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/structure",
  "/governance",
  "/subsidiaries",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

for (const route of routes) {
  test(`${route} stays within the viewport`, async ({ page }) => {
    const errors = [];
    const failedResources = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("response", (response) => {
      if (response.status() >= 400) {
        failedResources.push(`${response.status()} ${response.url()}`);
      }
    });

    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.locator("main")).toBeVisible();

    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      body: document.body.scrollWidth,
      root: document.documentElement.scrollWidth,
    }));

    expect(dimensions.body).toBeLessThanOrEqual(dimensions.viewport + 1);
    expect(dimensions.root).toBeLessThanOrEqual(dimensions.viewport + 1);
    expect(failedResources).toEqual([]);
    expect(errors.filter((message) => !message.includes("favicon"))).toEqual([]);
  });
}

test("homepage proof, artwork, and media caption remain visible", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /Building African businesses/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Best Multi-Sector Business Group 2026/i }).first()).toBeVisible();
  await expect(page.getByAltText(/ADESA HQ house architecture/i)).toBeVisible();

  const media = page.getByTestId("brochure-media");
  const caption = page.getByTestId("brochure-caption");
  await media.scrollIntoViewIfNeeded();
  const mediaBox = await media.boundingBox();
  const captionBox = await caption.boundingBox();
  expect(captionBox.y).toBeGreaterThanOrEqual(mediaBox.y + mediaBox.height - 1);
});

test("every public page hero loads a responsive background image", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative image loading check");

  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const background = page.locator("[data-hero-background]").first();
    await expect(background).toBeVisible();
    const image = background.locator("img");
    await expect.poll(() => image.evaluate((element) => element.complete && element.naturalWidth > 0)).toBe(true);
  }
});

test("mobile navigation is scroll-safe and keyboard dismissible", async ({ page }) => {
  test.skip(page.viewportSize().width >= 1024, "Mobile navigation only");
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.locator("body")).toHaveAttribute("data-menu-open", "true");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
});

test("reduced motion keeps the homepage usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: /Building African businesses/i })).toBeVisible();
  await expect(page.getByRole("link", { name: "Our approach" })).toBeVisible();
});

test("inner routes expose distinct editorial landmarks", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative content check");
  const expectations = [
    ["/about", "Built beyond the investment thesis."],
    ["/structure", "One governance core, four operating companies."],
    ["/governance", "Standards that apply before performance is celebrated."],
    ["/subsidiaries", "Distinct companies. One institutional standard."],
    ["/careers", "Choose where you want to build."],
  ];

  for (const [route, heading] of expectations) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
});

test("careers routes applicants to eligible operating companies", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative content check");
  await page.goto("/careers", { waitUntil: "domcontentloaded" });
  const main = page.getByRole("main");
  const careerLinks = main.getByRole("link", { name: /^View careers at Adesa/ });

  await expect(careerLinks).toHaveCount(2);
  await expect(main.getByRole("link", { name: "View careers at Adesa Media" })).toHaveAttribute("href", "https://www.adesamedia.com/careers");
  await expect(main.getByRole("link", { name: "View careers at Adesa Energy" })).toHaveAttribute("href", "https://www.adesaenergy.com/careers");

  for (const link of await careerLinks.all()) {
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
  }

  await expect(main.getByText("Adesa Solutions", { exact: true })).toHaveCount(0);
  await expect(main.getByText("Adesa Distribution", { exact: true })).toHaveCount(0);
  await expect(main.locator('a[href^="mailto:career@"]')).toHaveCount(0);
  await expect(main.getByText("Energy Analyst", { exact: true })).toHaveCount(0);

  await page.goto("/contact", { waitUntil: "domcontentloaded" });
  await expect(page.locator('option[value="careers"]')).toHaveCount(0);
});

test("portfolio dossiers retain subsidiary destinations", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative content check");
  await page.goto("/subsidiaries", { waitUntil: "domcontentloaded" });
  const portfolioLinks = page.getByRole("link", { name: /^Visit Adesa/ });
  await expect(portfolioLinks).toHaveCount(4);
  for (const link of await portfolioLinks.all()) {
    await expect(link).toHaveAttribute("target", "_blank");
  }
});

test("legal pages provide document navigation", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative interaction check");
  await page.goto("/privacy", { waitUntil: "domcontentloaded" });
  const contents = page.getByRole("navigation", { name: "Privacy Policy contents" });
  await expect(contents).toBeVisible();
  await contents.getByRole("link", { name: /Security/ }).click();
  await expect(page.locator("#security")).toBeVisible();
});

test("contact form preserves its successful submission state", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative interaction check");
  await page.route("**/api/contact", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true }) }));
  await page.goto("/contact", { waitUntil: "networkidle" });
  await page.getByLabel("First Name *").fill("Ada");
  await page.getByLabel("Last Name *").fill("Okafor");
  await page.getByLabel("Email Address *").fill("ada@example.com");
  await page.getByLabel("Inquiry Focus *").selectOption("partnership");
  await page.getByLabel("Executive Message *").fill("Institutional partnership inquiry.");
  await page.getByRole("button", { name: "Transmit Message" }).click();
  await expect(page.getByRole("heading", { name: "Inquiry Transmitted" })).toBeVisible();
});

test("unknown routes use the branded not-found state", async ({ page }) => {
  test.skip(page.viewportSize().width !== 390, "Representative content check");
  await page.goto("/route-that-does-not-exist", { waitUntil: "domcontentloaded" });
  await expect(page.getByRole("heading", { name: "There is no page at this address." })).toBeVisible();
});
