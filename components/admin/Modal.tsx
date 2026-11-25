"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Modal({ title, onClose, children, wide }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return (
    <dialog ref={ref} className={`adm-modal${wide ? " wide" : ""}`} aria-label={title} onCancel={(e) => { e.preventDefault(); onClose(); }}>
      <div className="adm-head">
        <h2>{title}</h2>
        <button type="button" className="adm-btn" onClick={onClose}>Close</button>
      </div>
      {children}
    </dialog>
  );
}
