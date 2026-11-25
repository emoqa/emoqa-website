import EditorLoader from "@/components/admin/EditorLoader";
import { requireAdmin } from "@/lib/server/auth";
import { listAllCategories } from "@/lib/server/posts";

export default async function NewPostPage() {
  await requireAdmin();
  return <EditorLoader key="new" post={null} categories={await listAllCategories()} />;
}
