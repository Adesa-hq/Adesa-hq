import { siteConfig } from "@/config/site";
import { INDEXABLE_ROUTES } from "@/config/seo";

export default function sitemap() {
  return INDEXABLE_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString(),
    changeFrequency,
    priority,
  }));
}
