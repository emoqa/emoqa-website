import AdminNav from "@/components/admin/AdminNav";
import { requireAdmin } from "@/lib/server/auth";

export const dynamic = "force-dynamic";

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAdmin();
  return (
    <>
      <AdminNav user={user} />
      <div className="adm-page">{children}</div>
    </>
  );
}
