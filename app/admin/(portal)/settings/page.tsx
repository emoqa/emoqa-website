import PasswordForm from "@/components/admin/PasswordForm";
import { requireAdmin } from "@/lib/server/auth";

export default async function SettingsPage() {
  await requireAdmin();
  return (
    <>
      <h1 className="adm-h1">Settings</h1>
      <PasswordForm />
    </>
  );
}
