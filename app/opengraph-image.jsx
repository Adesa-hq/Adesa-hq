import {
  createSocialImage,
  SOCIAL_IMAGE_SIZE,
} from "@/components/seo/social-image";
import { SEO_PAGES } from "@/config/seo";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} social preview`;
export const size = SOCIAL_IMAGE_SIZE;
export const contentType = "image/png";

export default function OpenGraphImage() {
  const page = SEO_PAGES["/"];

  return createSocialImage({
    headline: page.imageHeadline,
    summary: page.imageSummary,
  });
}
