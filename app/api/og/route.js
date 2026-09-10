import { createSocialImage } from "@/components/seo/social-image";
import { getSeoPage } from "@/config/seo";

export const runtime = "edge";

export function GET(request) {
  const path = new URL(request.url).searchParams.get("path") || "/";
  const page = getSeoPage(path);

  return createSocialImage({
    headline: page.imageHeadline,
    summary: page.imageSummary,
  });
}
