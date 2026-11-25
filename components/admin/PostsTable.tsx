"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { PostState } from "@/lib/blog-types";
import { callApi, messageOf } from "./client-api";

type Row = { id: number; title: string; slug: string; category: string; author: string; state: PostState; date: string };
type Tab = "all" | PostState;

const TABS: { key: Tab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "scheduled", label: "Scheduled" },
  { key: "draft", label: "Drafts" },
  { key: "trash", label: "Trash" },
];

export default function PostsTable({ rows, counts }: { rows: Row[]; counts: Record<PostState, number> }) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("all");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(0);

  const q = query.trim().toLowerCase();
  const shown = rows.filter((r) =>
    (tab === "all" ? r.state !== "trash" : r.state === tab) &&
    (!q || `${r.title} ${r.category} ${r.author}`.toLowerCase().includes(q)));
  const total = (t: Tab) => (t === "all" ? counts.published + counts.scheduled + counts.draft : counts[t]);

  async function run(row: Row, action: "trash" | "restore" | "duplicate" | "delete") {
    if (action === "delete" && !window.confirm(`Permanently delete “${row.title}”? This cannot be undone.`)) return;
    setBusy(row.id);
    setError("");
    try {
      if (action === "delete") await callApi(`posts/${row.id}`, "DELETE");
      else await callApi(`posts/${row.id}`, "PATCH", { action });
      router.refresh();
    } catch (e) {
      setError(messageOf(e));
    }
    setBusy(0);
  }

  return (
    <>
      <div className="adm-head">
        <h1 className="adm-h1">Posts</h1>
        <input className="adm-search" type="search" placeholder="Search posts" aria-label="Search posts" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className="adm-tabs">
        {TABS.map((t) => (
          <button key={t.key} aria-pressed={tab === t.key} onClick={() => setTab(t.key)}>{t.label} <span>{total(t.key)}</span></button>
        ))}
      </div>
      {error && <p role="alert" className="adm-error">{error}</p>}
      <div className="adm-card adm-table-wrap">
        <table className="adm-table">
          <thead><tr><th>Title</th><th>Category</th><th>Status</th><th>Date (IST)</th><th>Actions</th></tr></thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.id}>
                <td>
                  {r.state === "trash" ? <strong>{r.title}</strong> : <Link href={`/admin/posts/${r.id}`}><strong>{r.title}</strong></Link>}
                </td>
                <td>{r.category || "—"}</td>
                <td><span className={`adm-badge ${r.state}`}>{r.state}</span></td>
                <td>{r.date}</td>
                <td>
                  <div className="adm-row-actions">
                    {r.state === "trash" ? (
                      <>
                        <button disabled={busy === r.id} onClick={() => run(r, "restore")}>Restore</button>
                        <button disabled={busy === r.id} className="danger" onClick={() => run(r, "delete")}>Delete forever</button>
                      </>
                    ) : (
                      <>
                        <Link href={`/admin/posts/${r.id}`}>Edit</Link>
                        {r.state === "published" && <a href={`/blogs/${r.slug}/`} target="_blank" rel="noopener">View</a>}
                        <button disabled={busy === r.id} onClick={() => run(r, "duplicate")}>Duplicate</button>
                        <button disabled={busy === r.id} className="danger" onClick={() => run(r, "trash")}>Trash</button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {shown.length === 0 && <tr><td colSpan={5} className="adm-empty">Nothing here yet.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}
