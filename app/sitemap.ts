import { MetadataRoute } from "next";
import { getAllRoutes } from "@/lib/getRoutes";
import path from "path";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = getAllRoutes(path.join(process.cwd(), "app"));

  return routes.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: url === "/" ? 1.0 : 0.8,
  }));
}
