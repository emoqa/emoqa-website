import Link from "next/link";
import { PageHead } from "@/components/site/ui";

export default function NotFound() {
  return (
    <PageHead title="This page isn’t here." actions={<><Link href="/" className="btn">Go to Home</Link><Link href="/products" className="btn btn-line">Explore Our Products</Link></>}>
      <p>The address may have changed. The links below will get you back on track.</p>
    </PageHead>
  );
}
