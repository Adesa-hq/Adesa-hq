function safeJson(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function PageJsonLd({ data }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson(data) }}
    />
  );
}

