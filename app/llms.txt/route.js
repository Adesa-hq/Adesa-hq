import { INDEXABLE_ROUTES } from "@/config/seo";
import { siteConfig } from "@/config/site";

export function GET() {
  const pages = INDEXABLE_ROUTES.map(({ path, schemaName, description }) => {
    const url = path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString();
    return `- [${schemaName}](${url}): ${description}`;
  }).join("\n");

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is a governance-led builder-operator group headquartered in Lagos, Nigeria. This file lists the canonical public sources for information about the group.

## Canonical pages

${pages}

## Primary machine-readable sources

- [XML sitemap](${siteConfig.url}/sitemap.xml)
- [Crawler policy](${siteConfig.url}/robots.txt)

## Contact

- Email: ${siteConfig.contact.email}
- Website: ${siteConfig.url}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
