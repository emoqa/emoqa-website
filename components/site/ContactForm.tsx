"use client";

import { Suspense, type ComponentProps } from "react";
import InquiryForm from "./InquiryForm";
import { useQuery } from "./use-query";

type Props = Omit<ComponentProps<typeof InquiryForm>, "interest" | "requirements">;

const MODULES: Record<string, string> = { vitals: "Vitals", poct: "Point-of-care testing", vision: "Vision", telemedicine: "Telemedicine", custom: "Custom module" };

/** Fills in the product and kiosk modules the visitor came from. */
function Prefilled(props: Props) {
  const params = useQuery();
  const wanted = params.get("interest") ?? "";
  const interest = props.groups.some((g) => g.options.some((o) => o.value === wanted)) ? wanted : "";
  const names = (params.get("modules") ?? "").split(",").map((m) => MODULES[m]).filter(Boolean);
  return (
    <InquiryForm
      key={`${interest}-${names.join()}`}
      {...props}
      interest={interest}
      requirements={names.length ? `Kiosk configuration: core kiosk with ${names.join(", ")}.\n\n` : ""}
    />
  );
}

export default function ContactForm(props: Props) {
  return <Suspense fallback={<InquiryForm {...props} interest="" requirements="" />}><Prefilled {...props} /></Suspense>;
}
