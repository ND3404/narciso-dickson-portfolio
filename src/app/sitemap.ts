import type { MetadataRoute } from "next";
import { siteNav, projects } from "@/config/profile";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = siteNav.map((item) => item.href);
  const projectRoutes = projects.map((project) => project.detailHref);
  return [...baseRoutes, ...projectRoutes].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-08-04"),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
