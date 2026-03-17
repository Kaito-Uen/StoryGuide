import type { MetadataRoute } from "next";
import { featuredWorks, latestArticles } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://story-explained.com";

  const workRoutes = featuredWorks.map((work) => ({
    url: `${base}/works/${work.slug}`,
    lastModified: new Date("2026-03-17")
  }));

  const articleRoutes = latestArticles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified: new Date("2026-03-17")
  }));

  return [
    { url: `${base}/`, lastModified: new Date("2026-03-17") },
    { url: `${base}/works`, lastModified: new Date("2026-03-17") },
    { url: `${base}/articles`, lastModified: new Date("2026-03-17") },
    { url: `${base}/genres`, lastModified: new Date("2026-03-17") },
    ...workRoutes,
    ...articleRoutes
  ];
}
