import "server-only";

const TIMEOUT_MS = 10_000;

/** The Apps Script address, or null when it is missing or not a safe address. See GOOGLE_SHEET_SETUP.md */
function webhook(): string | null {
  const value = process.env.GOOGLE_SHEET_WEBHOOK_URL?.trim();
  if (!value) return null;
  try {
    const url = new URL(value);
    const google = url.protocol === "https:" && url.hostname === "script.google.com" && !value.includes("YOUR_SCRIPT_ID");
    return google || url.hostname === "localhost" ? value : null;
  } catch {
    return null;
  }
}

export const sheetConnected = () => webhook() !== null;

/**
 * A spreadsheet runs text that starts with one of these as a formula.
 * A leading apostrophe makes it plain text, and the sheet does not show it.
 */
const plainText = (value: string) => (/^[\s]*[=+\-@\t\r]/.test(value) ? `'${value}` : value);

/** Adds a row. Returns true only when Google confirms that it was saved. */
export async function addToSheet(row: Record<string, string>): Promise<boolean> {
  const url = webhook();
  if (!url) return false;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(Object.entries(row).map(([k, v]) => [k, plainText(v)]))),
      signal: AbortSignal.timeout(TIMEOUT_MS),
      cache: "no-store",
    });
    // Apps Script answers 200 with a sign-in or error page when it is misconfigured, so read the reply.
    const reply = res.ok ? await res.json().catch(() => null) : null;
    if (reply?.status === "success") return true;
    console.error(`Google Sheet did not save an inquiry (HTTP ${res.status}).`);
  } catch (e) {
    console.error("Google Sheet could not be reached:", e instanceof Error ? e.name : "unknown error");
  }
  return false;
}
