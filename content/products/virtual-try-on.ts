import type { Product } from "./types";

export const virtualTryOn: Product = {
  slug: "virtual-try-on",
  name: "EMOQA Virtual Try-On",
  short: "Virtual Try-On",
  menu: "Apparel and jewellery preview",
  parts: ["software", "ai"],
  summary: "Let shoppers see apparel and jewellery on themselves, in store or online, before they buy.",
  headline: "See it on before you buy it.",
  positioning:
    "An AI-powered visual product experience that lets customers digitally visualize apparel, jewellery and fashion products before purchasing.",
  seo: {
    title: "AI Virtual Try-On for Apparel & Jewellery | EMOQA",
    description:
      "AI virtual try-on for fashion and jewellery virtual try-on for stores, kiosks and e-commerce. Brand-specific UI, product catalogs and platform integration.",
  },
  image: { src: "/renders/tryon", width: 1100, height: 1400, alt: "A dress form with a digitally applied garment" },
  cta: {
    primary: "Explore Virtual Try-On",
    secondary: "Create a Virtual Shopping Experience",
    closing: "Create a Virtual Shopping Experience",
    closingText: "Tell us what you sell and where you sell it. We will scope a try-on experience around your catalog.",
  },
  overview: {
    heading: "Between the product photo and the fitting room",
    paragraphs: [
      "Virtual Try-On helps shoppers picture a product on themselves instead of on a model, then compare options without changing clothes or opening a display case.",
      "It can run on an in-store kiosk, a shopping website or at an exhibition, with your own catalog and brand.",
    ],
  },
  problem: {
    title: "Shoppers are asked to imagine",
    text: "A hanger, a tray or a catalog photo leaves the hard part to the customer. Fitting rooms take time, and fine jewellery can’t always leave the case.",
  },
  solution: {
    title: "A preview they can act on",
    text: "The customer takes or uploads a picture, chooses a product and sees it applied. They compare, refine and decide with more confidence.",
  },
  blocks: [
    {
      type: "steps",
      heading: "How it works",
      steps: [
        { title: "Capture", text: "Upload a picture or take one at the kiosk." },
        { title: "Choose", text: "Pick an item from your product catalog." },
        { title: "Transform", text: "AI applies the product to the customer’s image." },
        { title: "Compare", text: "Switch between products and styles side by side." },
        { title: "Continue", text: "Move to a product page, a cart or an assistant in store." },
      ],
    },
    {
      type: "columns",
      heading: "Two experiences, one platform",
      groups: [
        { title: "Apparel", items: ["Upload or capture a user image", "Select clothing", "Preview apparel on the user", "Visual transformation", "Product comparison", "Style discovery", "Interactive shopping experience"] },
        { title: "Jewellery", items: ["Virtual jewellery visualization", "Jewellery placement", "Product preview", "Style comparison", "Digital shopping experience"] },
      ],
    },
    {
      type: "columns",
      heading: "Categories",
      groups: [
        { title: "Apparel", items: ["Shirts", "T-shirts", "Dresses", "Traditional clothing", "Jackets", "Fashion collections", "Other supported apparel"] },
        { title: "Jewellery", items: ["Earrings", "Necklaces", "Chains", "Pendants", "Other supported jewellery"] },
      ],
      note: "Supported categories depend on the product imagery and models selected. Previews are visualizations and do not represent exact fit.",
    },
    {
      type: "decisions",
      heading: "Customization",
      items: ["Brand-specific interface", "Product catalogs", "Custom product categories", "E-commerce platform integration", "Custom user experience", "Kiosk configuration", "API integration where supported"],
      note: "Custom configurations available.",
    },
    {
      type: "specs",
      heading: "Technical capabilities",
      rows: [
        ["Input", "Uploaded image, or camera capture on kiosk and web."],
        ["Visualization", "AI image transformation for apparel, placement for jewellery."],
        ["Catalog", "Your product data and imagery, organized by category."],
        ["Interfaces", "Touch kiosk, web and custom front ends."],
        ["Integration", "E-commerce platforms and APIs where supported."],
      ],
    },
    {
      type: "audience",
      heading: "Where it can be deployed",
      groups: [
        { title: "In store", items: ["Retail stores", "Jewellery stores", "Shopping malls", "Interactive kiosks"] },
        { title: "Online", items: ["E-commerce websites"] },
        { title: "Events", items: ["Brand experiences", "Fashion exhibitions"] },
      ],
    },
  ],
  faqs: [
    { q: "Does it show exact fit?", a: "It shows how a product may look. It is a visualization and does not measure size or guarantee fit." },
    { q: "Can it use our catalog?", a: "Yes. Product catalogs and categories are customized per brand. Image quality affects results." },
    { q: "Is it only for kiosks?", a: "No. It can be configured for stores, websites, kiosks and events." },
  ],
  industries: ["retail", "consumer-technology", "hospitality"],
  services: ["ai-development", "custom-software"],
  related: ["digital-signage-cms", "ai-teacher"],
};
