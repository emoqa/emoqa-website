import { notFound } from "next/navigation";
import EditorLoader from "@/components/admin/EditorLoader";
import { requireAdmin } from "@/lib/server/auth";
import { getPost, listAllCategories } from "@/lib/server/posts";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const post = /^\d{1,12}$/.test(id) ? await getPost(Number(id)) : null;
  if (!post || post.status === "trash") notFound();
  return <EditorLoader key={post.id} post={post} categories={await listAllCategories()} />;
}
