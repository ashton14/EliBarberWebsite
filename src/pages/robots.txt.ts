// robots.txt, generated from SITE.url + basePath so the sitemap link can't drift.
import type { APIRoute } from "astro";
import { absUrl } from "../lib/paths";

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absUrl("/sitemap-index.xml")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
