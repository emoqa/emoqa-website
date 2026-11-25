import Link from "next/link";
import { products } from "@/content/products";
import { Render } from "./ui";

/** The product range. Each tile takes its colour and proportions from the product itself. */
export default function ProductShelf() {
  return (
    <ul className="shelf">
      {products.map((p) => (
        <li key={p.slug} data-p={p.slug}>
          <Link href={`/products/${p.slug}`}>
            <span className="shelf-text">
              <strong>{p.name}</strong>
              <span>{p.summary}</span>
            </span>
            <span className="shelf-pic"><Render {...p.image} alt="" sizes="(max-width: 900px) 90vw, 560px" /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
