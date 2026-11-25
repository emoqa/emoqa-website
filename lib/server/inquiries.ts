import "server-only";
import { interestLabel, isValidInterest, TIMELINES } from "@/lib/inquiry-options";
import { ApiError } from "./api-error";
import { all, run, storageLasts } from "./db";
import { addToSheet, sheetConnected } from "./google-sheet";
import { clientIp, limit } from "./rate-limit";

const SEND_DIRECT = "We could not save your inquiry. Please send it by WhatsApp or email.";

export type Inquiry = {
  id: number;
  name: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  requirements: string;
  timeline: string;
  budget: string;
  createdAt: string;
};

const guard = (req: Request) =>
  limit(
    [{ key: `inquiry:${clientIp(req)}`, max: 5 }, { key: "inquiry:*", max: 100 }],
    10 * 60 * 1000,
    "Too many messages just now. Please wait a few minutes, or email us instead.",
  );

function field(body: Record<string, unknown>, key: string, label: string, max: number, required = false) {
  const value = typeof body[key] === "string" ? body[key].trim() : "";
  if (required && !value) throw new ApiError(400, `Enter ${label}.`);
  if (value.length > max) throw new ApiError(400, `Shorten ${label} to ${max} characters or fewer.`);
  return value;
}

export async function createInquiry(req: Request, body: Record<string, unknown>) {
  // Never accept a message that would be lost.
  if (!storageLasts && !sheetConnected()) throw new ApiError(503, SEND_DIRECT);

  // Hidden field that people never see. Anything in it came from a bot, so accept and drop it.
  if (typeof body.website === "string" && body.website) return;

  const name = field(body, "name", "your name", 120, true);
  const organization = field(body, "organization", "your organization", 160);
  const email = field(body, "email", "your email", 200, true);
  const phone = field(body, "phone", "your phone number", 40);
  const interest = field(body, "interest", "a product or service", 80, true);
  const requirements = field(body, "requirements", "your project requirements", 4000, true);
  const timeline = field(body, "timeline", "a timeline", 60);
  const budget = field(body, "budget", "your budget", 120);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ApiError(400, "Enter a valid email address, like name@company.com.");
  if (phone && !/^[+()\d\s.-]{6,40}$/.test(phone)) throw new ApiError(400, "Enter a valid phone number.");
  if (!isValidInterest(interest)) throw new ApiError(400, "Choose a product or service from the list.");
  if (timeline && !TIMELINES.includes(timeline)) throw new ApiError(400, "Choose a timeline from the list.");

  await guard(req);

  const timestamp = new Date().toISOString();
  if (storageLasts) {
    await run("INSERT INTO inquiries (name, organization, email, phone, interest, requirements, timeline, budget, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      name, organization, email, phone, interest, requirements, timeline, budget, timestamp);
  }
  if (!sheetConnected()) return;

  const inSheet = await addToSheet({ timestamp, name, organization, email, phone, interest: interestLabel(interest), requirements, timeline, budget });
  // With a database the message is already safe. Without one, the sheet was the only copy.
  if (!inSheet && !storageLasts) throw new ApiError(502, SEND_DIRECT);
}

export async function listInquiries(): Promise<Inquiry[]> {
  const rows = await all("SELECT id, name, organization, email, phone, interest, requirements, timeline, budget, created_at AS createdAt FROM inquiries ORDER BY id DESC LIMIT 500");
  return rows.map((r) => ({ ...r })) as unknown as Inquiry[];
}
