import fs from "fs";
import path from "path";

export function getAllRoutes(basePath: string): string[] {
  const pages: string[] = [];

  function scan(dir: string, route = "") {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const itemPath = path.join(dir, item);

      if (item.startsWith("(") || item === "api") continue;

      if (fs.statSync(itemPath).isDirectory()) {
        scan(itemPath, `${route}/${item}`);
      } else if (item === "page.tsx" || item === "page.jsx") {
        pages.push(route || "/");
      }
    }
  }

  scan(basePath);
  return [...new Set(pages)];
}
