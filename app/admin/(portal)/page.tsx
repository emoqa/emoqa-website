import PostsTable from "@/components/admin/PostsTable";
import { formatDate, stateOf } from "@/lib/blog-types";
import { requireAdmin } from "@/lib/server/auth";
import { countByState, listAll } from "@/lib/server/posts";

export default async function DashboardPage() {
  await requireAdmin();
  const posts = await listAll();
  return (
    <PostsTable
      counts={countByState(posts)}
      rows={posts.map((p) => ({
        id: p.id, title: p.title, slug: p.slug, category: p.category, author: p.author, state: stateOf(p),
        date: formatDate(p.status === "published" ? p.publishAt : p.updatedAt, true),
      }))}
    />
  );
}
