"use client";

import dynamic from "next/dynamic";

// Browser only: the editor needs the DOM, and dates are shown in the admin's own time zone.
const EditorLoader = dynamic(() => import("./PostEditor"), {
  ssr: false,
  loading: () => <p className="adm-empty">Loading editor…</p>,
});

export default EditorLoader;
