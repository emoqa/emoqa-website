import MediaLibrary from "@/components/admin/MediaLibrary";
import { requireAdmin } from "@/lib/server/auth";

export default async function MediaPage() {
  await requireAdmin();
  return (
    <>
      <h1 className="adm-h1">Media library</h1>
      <MediaLibrary />
    </>
  );
}
