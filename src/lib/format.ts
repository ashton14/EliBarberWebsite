// Small, pure helpers shared by components. No DOM, no dependencies.
import { DAYS, SITE, type DayHours } from "../config/site";

/** "19:00" → "7pm", "09:30" → "9:30am" */
export function formatTime(hhmm: string): string {
  const [hStr, mStr = "00"] = hhmm.split(":");
  const h = Number(hStr);
  const suffix = h >= 12 && h < 24 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return mStr === "00" ? `${h12}${suffix}` : `${h12}:${mStr}${suffix}`;
}

/** Human text for one day's hours, or null when unknown. */
export function formatDayHours(day: DayHours): string | null {
  if (day === null) return null;
  if (day === "closed") return SITE.ui.closed;
  return `${formatTime(day.opens)} – ${formatTime(day.closes)}`;
}

export const hoursKnown = DAYS.every((d) => SITE.hours[d] !== null);

/** "$40" / "From $40" or null when unknown */
export function formatPrice(price: number | null, from = false): string | null {
  if (price === null) return null;
  const amount = Number.isInteger(price) ? String(price) : price.toFixed(2);
  return from ? `${SITE.ui.priceFrom} $${amount}` : `$${amount}`;
}

export function formatMinutes(minutes: number | null): string | null {
  return minutes === null ? null : `${minutes} ${SITE.ui.minutesShort}`;
}

export function telHref(phone: string | null): string | null {
  return phone ? `tel:${phone}` : null;
}

/** One-line address, or null when the street address is still TODO. */
export function addressLine(): string | null {
  const a = SITE.business.address;
  if (!a.street || !a.postalCode) return null;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
}

/** Google Maps directions link. Prefers the address; never invents one. */
export function directionsUrl(): string | null {
  const line = addressLine();
  if (!line) return null;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${SITE.name}, ${line}`,
  )}`;
}

/** Keyless Google Maps embed URL for the click-to-load map facade. */
export function mapEmbedUrl(): string | null {
  const line = addressLine();
  if (!line) return null;
  return `https://www.google.com/maps?q=${encodeURIComponent(`${SITE.name}, ${line}`)}&output=embed`;
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? "");
}
