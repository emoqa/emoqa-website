"use client";

import { useState, type FormEvent } from "react";
import Logo, { Mark } from "@/components/site/Logo";
import { callApi, messageOf } from "./client-api";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setBusy(true);
    setError("");
    try {
      await callApi("login", "POST", { username: data.get("username"), password: data.get("password") });
      window.location.assign("/admin/");
    } catch (err) {
      setError(messageOf(err));
      setBusy(false);
    }
  }

  return (
    <div className="adm-login">
      <div className="adm-login-mark" aria-hidden><Mark mono="currentColor" size={900} /></div>
      <form className="adm-card" onSubmit={submit}>
        <Logo />
        <h1 className="adm-h1">Blog admin</h1>
        <label className="adm-field">
          <span>Username</span>
          <input name="username" autoComplete="username" required autoFocus />
        </label>
        <label className="adm-field">
          <span>Password</span>
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        {error && <p role="alert" className="adm-error">{error}</p>}
        <button className="adm-btn primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      </form>
    </div>
  );
}
