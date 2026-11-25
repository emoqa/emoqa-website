"use client";

import { useState, type FormEvent } from "react";
import { callApi, messageOf } from "./client-api";

export default function PasswordForm() {
  const [status, setStatus] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("next") !== data.get("again")) {
      setStatus({ ok: false, text: "The new passwords do not match." });
      return;
    }
    setBusy(true);
    try {
      await callApi("password", "POST", { current: data.get("current"), next: data.get("next") });
      form.reset();
      setStatus({ ok: true, text: "Password changed. Other devices have been signed out." });
    } catch (err) {
      setStatus({ ok: false, text: messageOf(err) });
    }
    setBusy(false);
  }

  return (
    <form className="adm-card" style={{ maxWidth: 440 }} onSubmit={submit}>
      <h2>Change password</h2>
      <label className="adm-field"><span>Current password</span><input name="current" type="password" autoComplete="current-password" required /></label>
      <label className="adm-field"><span>New password (12 characters or more)</span><input name="next" type="password" autoComplete="new-password" minLength={12} required /></label>
      <label className="adm-field"><span>New password again</span><input name="again" type="password" autoComplete="new-password" required /></label>
      {status && <p role="status" className={status.ok ? "adm-ok" : "adm-error"}>{status.text}</p>}
      <button className="adm-btn primary" disabled={busy}>Change password</button>
    </form>
  );
}
