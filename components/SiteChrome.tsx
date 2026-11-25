"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/** The admin portal has its own header, so the public navbar and footer are left out there. */
export default function SiteChrome({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const isAdmin = /^\/admin(\/|$)/.test(usePathname());
  return (
    <>
      {!isAdmin && header}
      <main id="main" tabIndex={-1}>{children}</main>
      {!isAdmin && footer}
    </>
  );
}
