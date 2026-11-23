import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config/site";

// `site` drives canonical URLs and the sitemap: set SITE.url in site.ts.
export default defineConfig({
  site: SITE.url,
  base: SITE.basePath, // "/EliBarberWebsite" on GitHub Pages, "/" on a custom domain
  output: "static",
  trailingSlash: "always", // every URL ends in "/" (matches canonicals + sitemap)
  // Inline the (~20 KB) CSS: one fewer render-blocking request on slow 4G.
  build: { format: "directory", inlineStylesheets: "always" },
  integrations: [sitemap()],
});
