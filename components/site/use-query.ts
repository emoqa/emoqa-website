"use client";

import { useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";

const never = () => () => {};

/**
 * The address's query, empty until the page has hydrated. A static page is built without a query,
 * so reading it any earlier would not match the HTML that was sent.
 */
export function useQuery(): URLSearchParams {
  const params = useSearchParams();
  const ready = useSyncExternalStore(never, () => true, () => false);
  return new URLSearchParams(ready ? params.toString() : "");
}
