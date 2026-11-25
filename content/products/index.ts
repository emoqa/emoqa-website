import { aiTeacher } from "./ai-teacher";
import { defenceLearningSystem } from "./defence-learning-system";
import { digitalSignageCms } from "./digital-signage-cms";
import { healthcareKiosk } from "./healthcare-kiosk";
import { smartStudentSystem } from "./smart-student-system";
import type { Product } from "./types";
import { virtualTryOn } from "./virtual-try-on";

/**
 * To add a product: write its content file, add it to this list, and it gets a page, menu entry,
 * sitemap entry and form option. A custom hero is optional, see components/product/Hero.tsx.
 */
export const products: Product[] = [healthcareKiosk, smartStudentSystem, digitalSignageCms, aiTeacher, virtualTryOn, defenceLearningSystem];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export type { Block, Group, Product, Status, Step } from "./types";
export { STATUS_LABEL } from "./types";
