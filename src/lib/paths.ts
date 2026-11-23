// Base-path helpers. The site can live at a domain root ("/") or under a
// sub-path such as GitHub Pages' "/EliBarberWebsite/". Every root-absolute
// link goes through these so both work. Set SITE.basePath in site.ts.
import { SITE } from "../config/site";

/** Base path without a trailing slash: "" at a domain root. */
export const BASE = SITE.basePath.replace(/\/+$/, "");

/** "/favicon.ico" -> "/EliBarberWebsite/favicon.ico" */
export function withBase(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Absolute URL for a site path: "/og-image.jpg" -> "https://…/EliBarberWebsite/og-image.jpg" */
export function absUrl(path: string): string {
  return `${SITE.url}${withBase(path)}`;
}

/** Remove the base path from a request pathname: "/EliBarberWebsite/" -> "/" */
export function stripBase(pathname: string): string {
  return BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) || "/" : pathname;
}
