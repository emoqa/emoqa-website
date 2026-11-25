import { products } from "@/content/products";
import { services } from "@/content/services";

export const INTEREST_GROUPS = [
  { label: "Products", options: products.map((p) => ({ value: p.slug, label: p.name })) },
  {
    label: "Solutions",
    options: [...services.map((s) => ({ value: s.slug, label: s.name })), { value: "custom-solution", label: "Custom solution" }, { value: "other", label: "Something else" }],
  },
];

const all = INTEREST_GROUPS.flatMap((g) => g.options);

export const isValidInterest = (value: string) => all.some((o) => o.value === value);
export const interestLabel = (value: string) => all.find((o) => o.value === value)?.label ?? value;

export const TIMELINES = ["As soon as possible", "Within 1 to 3 months", "Within 3 to 6 months", "More than 6 months", "Still exploring"];
