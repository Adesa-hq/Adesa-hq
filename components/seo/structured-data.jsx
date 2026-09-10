import { buildOrganizationJsonLd, buildWebsiteJsonLd } from "@/lib/seo";

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const organization = buildOrganizationJsonLd();
  const website = buildWebsiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(website) }}
      />
    </>
  );
}

