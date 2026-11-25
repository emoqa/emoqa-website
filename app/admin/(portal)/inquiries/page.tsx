import { formatDate } from "@/lib/blog-types";
import { interestLabel } from "@/lib/inquiry-options";
import { requireAdmin } from "@/lib/server/auth";
import { listInquiries } from "@/lib/server/inquiries";

export default async function InquiriesPage() {
  await requireAdmin();
  const rows = await listInquiries();
  return (
    <>
      <h1 className="adm-h1">Inquiries</h1>
      {rows.length === 0 && <p className="adm-card adm-empty">No inquiries yet. Messages from the contact form appear here.</p>}
      {rows.map((r) => (
        <article key={r.id} className="adm-card">
          <div className="adm-head">
            <h2>{r.name}{r.organization && `, ${r.organization}`}</h2>
            <span className="adm-hint">{formatDate(r.createdAt, true)}</span>
          </div>
          <p>
            <strong>{interestLabel(r.interest)}</strong>
            {r.timeline && <span className="adm-hint"> Timeline: {r.timeline}.</span>}
            {r.budget && <span className="adm-hint"> Budget: {r.budget}.</span>}
          </p>
          <p style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}>{r.requirements}</p>
          <div className="adm-row-actions">
            <a href={`mailto:${r.email}`}>{r.email}</a>
            {r.phone && <a href={`tel:${r.phone.replace(/[^+\d]/g, "")}`}>{r.phone}</a>}
          </div>
        </article>
      ))}
    </>
  );
}
