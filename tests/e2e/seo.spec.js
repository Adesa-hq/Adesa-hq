import { expect, test } from "@playwright/test";

const canonicalOrigin = "https://www.adesahq.com";
const publicRoutes = [
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

function absoluteUrl(route) {
  return route === "/" ? canonicalOrigin : new URL(route, canonicalOrigin).toString();
}

function flattenJsonLd(value) {
  if (Array.isArray(value)) return value.flatMap(flattenJsonLd);
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value["@graph"])) return [value, ...value["@graph"]];
  return [value];
}

test.describe("Cross-platform crawl and indexing signals", () => {
  test.skip(({ viewport }) => viewport?.width !== 390, "One SEO pass is sufficient");

  test("every public page has complete, unique discovery metadata", async ({ page }) => {
    const descriptions = new Set();
    const socialImages = new Set();

    for (const route of publicRoutes) {
      const response = await page.goto(route, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);

      const expectedCanonical = absoluteUrl(route);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        expectedCanonical,
      );
      await expect(page.locator('meta[name="robots"][content*="noindex"]')).toHaveCount(0);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /index, follow.*max-image-preview:large.*max-snippet:-1/,
      );
      await expect(page.locator('meta[name="googlebot"]')).toHaveAttribute(
        "content",
        /index, follow.*max-image-preview:large.*max-snippet:-1/,
      );
      await expect(page.locator("html")).toHaveAttribute("lang", "en-NG");
      await expect(page.locator("h1")).toHaveCount(1);

      const title = await page.title();
      expect(title.match(/ADESA HQ/gi)?.length ?? 0).toBe(1);

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(description?.length).toBeGreaterThanOrEqual(110);
      expect(description?.length).toBeLessThanOrEqual(180);
      expect(descriptions.has(description)).toBe(false);
      descriptions.add(description);

      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
        "content",
        title,
      );
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute(
        "content",
        description,
      );
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        "content",
        expectedCanonical,
      );
      await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
        "content",
        "1200",
      );
      await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute(
        "content",
        "630",
      );
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
      );

      const socialImage = await page
        .locator('meta[property="og:image"]')
        .getAttribute("content");
      expect(socialImage).toContain("/api/og?path=");
      expect(socialImages.has(socialImage)).toBe(false);
      socialImages.add(socialImage);

      const jsonLd = await page.locator('script[type="application/ld+json"]').allTextContents();
      const nodes = jsonLd.flatMap((value) => flattenJsonLd(JSON.parse(value)));
      const webPage = nodes.find((node) => node["@id"] === `${expectedCanonical}#webpage`);

      expect(webPage).toBeTruthy();
      expect(webPage.description).toBe(description);
      expect(webPage.inLanguage).toBe("en-NG");

      const breadcrumb = nodes.find(
        (node) => node["@id"] === `${expectedCanonical}#breadcrumb`,
      );
      if (route === "/") {
        expect(breadcrumb).toBeUndefined();
      } else {
        expect(breadcrumb?.["@type"]).toBe("BreadcrumbList");
        expect(breadcrumb?.itemListElement).toHaveLength(2);
      }
    }

    expect(descriptions.size).toBe(publicRoutes.length);
    expect(socialImages.size).toBe(publicRoutes.length);
  });

  test("robots and sitemap expose canonical public URLs to discovery crawlers", async ({
    request,
  }) => {
    const robotsResponse = await request.get("/robots.txt");
    expect(robotsResponse.status()).toBe(200);
    const robots = await robotsResponse.text();
    expect(robots).toContain("Allow: /");
    expect(robots).toContain(`Sitemap: ${canonicalOrigin}/sitemap.xml`);
    expect(robots).toContain(`Host: ${canonicalOrigin}`);
    expect(robots).toContain("User-Agent: Bingbot");
    expect(robots).toContain("User-Agent: Applebot");
    expect(robots).toContain("User-Agent: OAI-SearchBot");

    const sitemapResponse = await request.get("/sitemap.xml");
    expect(sitemapResponse.status()).toBe(200);
    const sitemap = await sitemapResponse.text();
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      ([, location]) => location,
    );

    expect(locations).toEqual(publicRoutes.map(absoluteUrl));
    expect(sitemap).not.toContain("http://adesahq.com");
    expect(sitemap).not.toContain("<lastmod>");
    expect(sitemap.match(/<priority>/g)).toHaveLength(publicRoutes.length);
  });

  test("social images and AI-readable site directory are available", async ({ request }) => {
    for (const route of publicRoutes) {
      const imageResponse = await request.get(
        `/api/og?path=${encodeURIComponent(route)}`,
      );
      expect(imageResponse.status()).toBe(200);
      expect(imageResponse.headers()["content-type"]).toContain("image/png");
    }

    const llmsResponse = await request.get("/llms.txt");
    expect(llmsResponse.status()).toBe(200);
    expect(llmsResponse.headers()["content-type"]).toContain("text/markdown");
    const llms = await llmsResponse.text();

    expect(llms).toContain("# ADESA HQ");
    expect(llms).toContain(`${canonicalOrigin}/sitemap.xml`);
    for (const route of publicRoutes) {
      expect(llms).toContain(absoluteUrl(route));
    }
  });

  test("legacy and non-canonical homepage URLs permanently redirect", async ({ request }) => {
    const legacyResponse = await request.get("/?p=98", { maxRedirects: 0 });
    expect(legacyResponse.status()).toBe(308);
    const legacyLocation = new URL(
      legacyResponse.headers().location,
      "http://127.0.0.1:3000",
    );
    expect(legacyLocation.searchParams.has("p")).toBe(false);

    const apexResponse = await request.get("/about", {
      headers: {
        "x-forwarded-host": "adesahq.com",
        "x-forwarded-proto": "https",
      },
      maxRedirects: 0,
    });
    expect(apexResponse.status()).toBe(308);
    expect(apexResponse.headers().location).toBe(`${canonicalOrigin}/about`);
  });

  test("unknown URLs return a genuine non-indexable 404", async ({ page }) => {
    const response = await page.goto("/definitely-not-a-real-route", {
      waitUntil: "domcontentloaded",
    });
    expect(response?.status()).toBe(404);
    await expect(page.locator('meta[name="robots"]')).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
  });
});
