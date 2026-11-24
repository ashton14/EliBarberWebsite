// Resolves photo file names from site.ts to optimized Astro image assets.
// Any .jpg/.jpeg/.png/.webp/.avif dropped in src/assets/photos/ is available
// by its file name. A missing file fails the build loudly instead of shipping
// a broken image.
import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/photos/*.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

const byName = new Map<string, ImageMetadata>(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop() ?? path, mod.default]),
);

export function photo(name: string): ImageMetadata {
  const img = byName.get(name);
  if (!img) {
    throw new Error(
      `Photo "${name}" not found in src/assets/photos/. Available: ${[...byName.keys()].join(", ")}`,
    );
  }
  return img;
}

/** True for the labeled placeholder images that ship with the template. */
export function isPlaceholder(name: string): boolean {
  return name.startsWith("placeholder-");
}

/** Responsive widths/sizes for the hero photo (shared by Hero.astro and the
 *  <link rel="preload"> in the home page head so both pick the same file). */
export const HERO_WIDTHS = [480, 768, 1080];
export const HERO_SIZES = "(min-width: 60rem) 24rem, 100vw";
