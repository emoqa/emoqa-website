import type { Metadata } from "next";
import { blogFontVariables } from "@/lib/fonts";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin | EMOQA",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className={`adm ${blogFontVariables}`}>{children}</div>;
}
