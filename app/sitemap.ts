import type { MetadataRoute } from "next";
import { siteBaseUrl } from "./seo";
import { servicePages } from "@/app/lib/servicePages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const baseEntries = [
    {
      url: siteBaseUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];

  const serviceEntries = servicePages.map((page) => ({
    url: `${siteBaseUrl}${page.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...baseEntries, ...serviceEntries];
}
