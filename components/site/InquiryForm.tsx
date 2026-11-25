"use client";

import { useEffect, useRef, useState } from "react";

type Group = { label: string; options: { value: string; label: string }[] };
type Errors = Partial<Record<"name" | "email" | "phone" | "interest" | "requirements", string>>;

// Set for the static copy on emoqa.in, which posts to the copy on Render.
const REMOTE = process.env.NEXT_PUBLIC_INQUIRY_URL;
const ENDPOINT = REMOTE || "/api/inquiry/";

function check(d: FormData): Errors {
  const v = (k: string) => String(d.get(k) ?? "").trim();
  const e: Errors = {};
  if (!v("name")) e.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) e.email = "Enter a valid email address, like name@company.com.";
  if (v("phone") && !/^[+()\d\s.-]{6,40}$/.test(v("phone"))) e.phone = "Enter a valid phone number.";
  if (!v("interest")) e.interest = "Choose a product or service.";
  if (!v("requirements")) e.requirements = "Tell us a little about the project.";
  return e;
}

export default function InquiryForm({ groups, timelines, interest, requirements, email, whatsapp, direct }: {
  groups: Group[]; timelines: string[]; interest: string; requirements: string; email: string; whatsapp: string;
  /** The site cannot store messages, so the visitor sends this one by WhatsApp or email. */
  direct: boolean;
}) {
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [message, setMessage] = useState("");
  const [failure, setFailure] = useState("");
  const [slow, setSlow] = useState(false);

  // The free host sleeps when idle. Wake it while the visitor types.
  useEffect(() => {
    if (REMOTE) fetch(new URL("/robots.txt", REMOTE), { mode: "no-cors", cache: "no-store" }).catch(() => {});
  }, []);

  function compose(data: FormData) {
    const label = groups.flatMap((g) => g.options).find((o) => o.value === data.get("interest"))?.label ?? "";
    const rows: [string, unknown][] = [
      ["Name", data.get("name")], ["Organization", data.get("organization")], ["Email", data.get("email")], ["Phone", data.get("phone")],
      ["Interest", label], ["Timeline", data.get("timeline")], ["Budget", data.get("budget")], ["Requirements", data.get("requirements")],
    ];
    return rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  }

  async function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const found = check(data);
    setErrors(found);
    setFailure("");
    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      form.current?.querySelector<HTMLElement>(`[name="${firstBad}"]`)?.focus();
      return;
    }
    if (direct) {
      setMessage(compose(data));
      return;
    }
    setState("sending");
    const timer = setTimeout(() => setSlow(true), 5000);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(data)) });
      const body = await res.json().catch(() => ({}));
      // The message could not be stored. Offer it back, ready to send another way.
      if (res.status === 502 || res.status === 503) {
        setFailure(body.error ?? "");
        setMessage(compose(data));
        setState("idle");
        return;
      }
      if (!res.ok) throw new Error(body.error ?? "Your inquiry could not be sent. Please try again.");
      setState("sent");
    } catch (e) {
      // The other server could not be reached at all. Nothing was saved, so offer the message back.
      if (REMOTE && e instanceof TypeError) {
        setFailure("We could not save your inquiry. Please send it by WhatsApp or email.");
        setMessage(compose(data));
        setState("idle");
        return;
      }
      setFailure(e instanceof TypeError ? "We could not reach the server. Check your connection and try again." : (e as Error).message);
      setState("idle");
    } finally {
      clearTimeout(timer);
      setSlow(false);
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done" role="status">
        <h2>Inquiry sent</h2>
        <p>Thank you. We will reply to the email address you gave us.</p>
        <p>Need an answer sooner? <a href={whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>.</p>
        <button type="button" className="btn btn-line" onClick={() => setState("idle")}>Send another inquiry</button>
      </div>
    );
  }

  if (message) {
    const text = encodeURIComponent(`Inquiry from the EMOQA website\n\n${message}`);
    return (
      <div className="form-done" role="status">
        <h2>Choose how to send it</h2>
        {failure && <p className="f-err">{failure}</p>}
        <p>Your inquiry is ready. It is sent when you press send in WhatsApp or your email app.</p>
        <div className="actions">
          <a href={`${whatsapp}?text=${text}`} target="_blank" rel="noopener noreferrer" className="btn">Send by WhatsApp</a>
          <a href={`mailto:${email}?subject=${encodeURIComponent("Website inquiry")}&body=${text}`} className="btn btn-line">Send by email</a>
        </div>
        <pre className="form-text">{message}</pre>
      </div>
    );
  }

  const bad = (k: keyof Errors) => (errors[k] ? { "aria-invalid": true, "aria-describedby": `err-${k}` } : {});
  const err = (k: keyof Errors) => errors[k] && <span className="f-err" id={`err-${k}`}>{errors[k]}</span>;

  return (
    <form ref={form} onSubmit={submit} noValidate className="form" aria-label="Project inquiry">
      <label className="f-half"><span>Name</span><input name="name" autoComplete="name" maxLength={120} required {...bad("name")} />{err("name")}</label>
      <label className="f-half"><span>Organization <small>optional</small></span><input name="organization" autoComplete="organization" maxLength={160} /></label>
      <label className="f-half"><span>Email</span><input name="email" type="email" autoComplete="email" maxLength={200} required {...bad("email")} />{err("email")}</label>
      <label className="f-half"><span>Phone <small>optional</small></span><input name="phone" type="tel" autoComplete="tel" maxLength={40} {...bad("phone")} />{err("phone")}</label>
      <label>
        <span>Product or service of interest</span>
        <select name="interest" defaultValue={interest} required {...bad("interest")}>
          <option value="">Choose one</option>
          {groups.map((g) => (
            <optgroup key={g.label} label={g.label}>{g.options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</optgroup>
          ))}
        </select>
        {err("interest")}
      </label>
      <label>
        <span>Project requirements</span>
        <textarea name="requirements" rows={6} maxLength={4000} defaultValue={requirements} required {...bad("requirements")} />
        {err("requirements")}
      </label>
      <label className="f-half">
        <span>Expected timeline <small>optional</small></span>
        <select name="timeline" defaultValue="">
          <option value="">Choose one</option>
          {timelines.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="f-half"><span>Budget <small>optional</small></span><input name="budget" maxLength={120} /></label>
      <label className="f-trap" aria-hidden>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="f-end">
        <button type="submit" className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : direct ? "Continue" : "Send inquiry"}</button>
        {slow && <p className="fine" role="status">Still sending. This can take up to a minute.</p>}
        <p className="fine">Or write to <a href={`mailto:${email}`}>{email}</a></p>
      </div>
      <p className="f-fail" role="alert">{failure}</p>
    </form>
  );
}
