import { expect, test } from "@playwright/test";

const names = ["ADESA HQ", "ADESA Media", "ADESA Energy", "ADESA Solutions", "ADESA Distribution"];
const currentSlide = (page) => page.locator('[aria-roledescription="slide"][aria-hidden="false"]');

test.beforeEach(async ({ page }) => {
  await page.clock.install();
  await page.addInitScript(() => sessionStorage.setItem("adesa-hq-intro-seen", "true"));
  await page.goto("/", { waitUntil: "domcontentloaded" });
});

test("all five slides expose their official logos, exact destinations and usable controls", async ({ page }) => {
  const carousel = page.getByRole("region", { name: "ADESA group companies" });
  await expect(carousel).toBeVisible();
  const destinations = ["/structure", "https://adesamedia.com/", "https://adesaenergy.com/", "https://www.instagram.com/adesasolution?igsh=YTU2ZnFhYTNvZTll&utm_source=qr", "https://www.instagram.com/adesadistribution?igsh=MTM0c3BvajlxaW80bg%3D%3D&utm_source=qr"];
  for (const [index, name] of names.entries()) {
    await carousel.getByRole("button", { name: `Show ${name}`, exact: true }).click();
    const slide = currentSlide(page);
    await expect(slide).toHaveAttribute("aria-label", `${index + 1} of 5: ${name}`);
    await expect(slide.getByRole("link")).toHaveAttribute("href", destinations[index]);
    if (index) await expect(slide.getByAltText(`${name} official logo`)).toBeVisible();
    await expect.poll(() => slide.locator("img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
    const viewport = page.viewportSize();
    const cta = await slide.getByRole("link").boundingBox();
    expect(cta.x).toBeGreaterThanOrEqual(0);
    expect(cta.x + cta.width).toBeLessThanOrEqual(viewport.width);
  }
  await carousel.getByRole("button", { name: "Next slide", exact: true }).click();
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "1 of 5: ADESA HQ");
  await page.keyboard.press("ArrowLeft");
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "5 of 5: ADESA Distribution");
  await expect(page.locator('[aria-hidden="true"][aria-roledescription="slide"]')).toHaveCount(4);
  await expect(page.locator('[aria-hidden="true"][aria-roledescription="slide"]').first()).toHaveAttribute("inert", "");
});

test("autoplay rotates, pauses over controls, and stops through the pause control", async ({ page }) => {
  await page.locator("footer").hover();
  await page.clock.runFor(7000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
  await page.getByRole("button", { name: "Next slide", exact: true }).hover();
  await page.clock.runFor(14000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
  await page.getByRole("button", { name: "Pause slideshow", exact: true }).click();
  await page.locator("footer").hover();
  await page.getByRole("button", { name: "Start slideshow", exact: true }).blur();
  await page.clock.runFor(14000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
});

test("reduced motion disables automatic rotation and logo animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.clock.runFor(15000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "1 of 5: ADESA HQ");
  const animations = await page.getByRole("img", { name: "ADESA HQ multicolored house logo" }).evaluate((element) => element.getAnimations({ subtree: true }).length);
  expect(animations).toBe(0);
  await page.getByRole("button", { name: "Next slide", exact: true }).click();
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
});

test("horizontal touch gestures navigate without disabling vertical scrolling", async ({ page }) => {
  const carousel = page.getByRole("region", { name: "ADESA group companies" });
  await carousel.dispatchEvent("touchstart", { touches: [{ clientX: 250, clientY: 300 }] });
  await carousel.dispatchEvent("touchend", { changedTouches: [{ clientX: 100, clientY: 310 }] });
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
  await carousel.dispatchEvent("touchstart", { touches: [{ clientX: 250, clientY: 300 }] });
  await carousel.dispatchEvent("touchend", { changedTouches: [{ clientX: 240, clientY: 100 }] });
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
});

test("tab visibility suspends autoplay", async ({ page }) => {
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, value: true });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.clock.runFor(15000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "1 of 5: ADESA HQ");
  await page.evaluate(() => {
    Object.defineProperty(document, "hidden", { configurable: true, value: false });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await page.clock.runFor(7000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
});


test("autoplay continues while the pointer rests over the hero artwork", async ({ page }) => {
  const logo = page.getByRole("img", { name: "ADESA HQ multicolored house logo" });
  await logo.hover();
  await page.clock.runFor(7000);
  await expect(currentSlide(page)).toHaveAttribute("aria-label", "2 of 5: ADESA Media");
});
