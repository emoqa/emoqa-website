import type { Discipline } from "@/components/site/Logo";

export const SITE_URL = "https://www.emoqa.in";

export const contact = {
  company: "Emoqa Pvt. Ltd.",
  email: "sales@emoqa.in",
  phone: "+91 7400040673",
  phoneHref: "tel:+917400040673",
  whatsapp: "https://wa.me/917400040673",
  address: ["Lane No. 04, Opp. Jack & Jill School", "Gokul Nagar, Katraj", "Pune, Maharashtra 411046"],
};

export const process = [
  { title: "Discover", text: "Understand the problem, users, environment and requirements." },
  { title: "Architect", text: "Design the complete solution: hardware, software, AI, integrations and deployment." },
  { title: "Prototype", text: "Create a proof of concept, MVP, prototype hardware, software demonstration or technical validation." },
  { title: "Engineer", text: "Build the production software, hardware, AI modules, integrations and workflows." },
  { title: "Integrate", text: "Connect devices, APIs, software systems, sensors, databases and third-party platforms." },
  { title: "Deploy", text: "Install, configure, test and launch in the real operating environment." },
  { title: "Scale", text: "Support customization, more deployments, maintenance, upgrades and future development." },
];

/** The four parts of the logo, as the four things EMOQA builds. */
export const disciplines: { id: Discipline; title: string; text: string; items: string[]; href: string; link: string }[] = [
  {
    id: "software",
    title: "Custom Software Engineering",
    text: "Applications and platforms built to run alongside devices, AI and the systems you already have.",
    items: ["Web applications", "Mobile applications", "Enterprise software", "SaaS platforms", "Management systems", "API development", "Workflow automation", "Backend architecture"],
    href: "/services/custom-software",
    link: "Custom software",
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    text: "AI with a job to do, grounded in your data and placed where the work happens, online or offline.",
    items: ["AI assistants", "Conversational AI", "Multilingual AI", "AI-powered education", "Computer vision", "Intelligent automation", "AI integration into existing systems", "Offline AI systems"],
    href: "/services/ai-development",
    link: "AI development",
  },
  {
    id: "hardware",
    title: "Hardware & Product Engineering",
    text: "Physical products, from a connected sensor to a complete kiosk, engineered with the software that runs them.",
    items: ["Custom hardware integration", "Embedded systems", "IoT devices", "Kiosk development", "Touchscreen systems", "Sensor integration", "Device communication", "Custom product architecture"],
    href: "/services/hardware-engineering",
    link: "Hardware engineering",
  },
  {
    id: "deployment",
    title: "Complete Solution Development",
    text: "One team carrying a requirement all the way to a working system on site, and looking after it.",
    items: ["Requirement analysis", "Product architecture", "UI/UX design", "Software development", "Hardware integration", "AI integration", "Testing", "Deployment", "Maintenance"],
    href: "/services/complete-solution-development",
    link: "Complete product development",
  },
];

export const technology: { title: string; discipline: Discipline; items: string[] }[] = [
  { title: "Software", discipline: "software", items: ["Web development", "Android applications", "Mobile applications", "Backend systems", "APIs", "Enterprise platforms", "SaaS", "Offline applications"] },
  { title: "AI", discipline: "ai", items: ["LLM integration", "Conversational AI", "AI agents", "Computer vision", "Knowledge-based AI", "Voice AI", "Multilingual systems", "Offline AI", "AI inference systems"] },
  { title: "Hardware", discipline: "hardware", items: ["Embedded systems", "IoT", "Sensors", "Medical devices", "Kiosks", "Touchscreen systems", "Hardware integration", "Device communication"] },
  { title: "Systems engineering", discipline: "deployment", items: ["System architecture", "Product development", "Prototyping", "Integration", "Testing", "Deployment", "Custom engineering"] },
];

export type Industry = { id: string; name: string; text: string; products: string[]; services: string[] };

export const industries: Industry[] = [
  { id: "healthcare", name: "Healthcare", text: "Screening kiosks, device integration, telemedicine workflows and patient-facing information.", products: ["healthcare-kiosk", "digital-signage-cms"], services: ["hardware-engineering"] },
  { id: "education", name: "Education", text: "Attendance, AI learning, campus information and interactive kiosks for schools, colleges and universities.", products: ["smart-student-system", "ai-teacher", "digital-signage-cms"], services: ["ai-development"] },
  { id: "defence", name: "Defence & Specialized Training", text: "Offline-first learning and examination systems for controlled and restricted-network environments.", products: ["defence-learning-system"], services: ["offline-ai-systems"] },
  { id: "retail", name: "Retail", text: "Virtual try-on, in-store signage, assistants and interactive product experiences.", products: ["virtual-try-on", "digital-signage-cms"], services: ["ai-development"] },
  { id: "enterprise", name: "Enterprise", text: "Management systems, workflow automation, internal AI assistants and employee health screening.", products: ["healthcare-kiosk", "ai-teacher"], services: ["custom-software"] },
  { id: "manufacturing", name: "Manufacturing", text: "Connected devices, floor displays, technical training and systems that keep working without a network.", products: ["digital-signage-cms", "defence-learning-system"], services: ["hardware-engineering"] },
  { id: "smart-infrastructure", name: "Smart Infrastructure", text: "Sensors, IoT devices, public kiosks and displays joined into one managed system.", products: ["digital-signage-cms", "healthcare-kiosk"], services: ["hardware-engineering"] },
  { id: "public-sector", name: "Public Sector", text: "Citizen-facing kiosks, public health screening, information displays and multilingual assistance.", products: ["healthcare-kiosk", "digital-signage-cms", "ai-teacher"], services: ["complete-solution-development"] },
  { id: "digital-transformation", name: "Digital Transformation", text: "Replacing paper and disconnected tools with software, automation and integrated devices.", products: ["smart-student-system"], services: ["custom-software"] },
  { id: "hospitality", name: "Hospitality", text: "Guest information, signage, self-service kiosks and conversational assistants.", products: ["digital-signage-cms", "virtual-try-on"], services: ["complete-solution-development"] },
  { id: "financial-services", name: "Financial Services", text: "Self-service kiosks, document workflows, internal tools and on-premise AI.", products: ["digital-signage-cms"], services: ["custom-software", "offline-ai-systems"] },
  { id: "consumer-technology", name: "Consumer Technology", text: "New devices, companion apps and AI-powered product experiences, from concept onward.", products: ["virtual-try-on"], services: ["complete-solution-development"] },
];

export type Project = { title: string; sector: string; challenge: string; built: string; disciplines: Discipline[]; href: string };

/** Anonymized by design: no client names, figures or performance claims. */
export const projects: Project[] = [
  { title: "Healthcare technology platform", sector: "Healthcare", challenge: "Bring device readings, patient records and doctor access into one workflow.", built: "Patient and admin software, device data collection, digital reports and telemedicine workflows.", disciplines: ["software", "deployment"], href: "/products/healthcare-kiosk" },
  { title: "Medical screening kiosk", sector: "Healthcare", challenge: "Run different tests at different sites without redesigning the kiosk each time.", built: "A modular kiosk with integrated devices, a guided interface and configurable test sets.", disciplines: ["software", "hardware", "deployment"], href: "/products/healthcare-kiosk" },
  { title: "Smart attendance system", sector: "Education", challenge: "Reduce proxy attendance without installing hardware in every classroom.", built: "Student and faculty applications combining BLE proximity, session verification and live face checks.", disciplines: ["software", "ai"], href: "/products/smart-student-system" },
  { title: "Digital signage", sector: "Multi-site", challenge: "Keep screens running at locations with very different connectivity.", built: "A content management system with online, offline and USB delivery.", disciplines: ["software", "hardware", "deployment"], href: "/products/digital-signage-cms" },
  { title: "AI-powered education", sector: "Education", challenge: "Give learners patient explanations in their own language.", built: "A conversational teaching assistant with voice, knowledge retrieval and guardrails.", disciplines: ["software", "ai"], href: "/products/ai-teacher" },
  { title: "Offline AI learning kiosk", sector: "Defence-related institution", challenge: "Deliver learning and examination where networks are restricted.", built: "A self-contained system for map reading, geography and assessment. Further details are not disclosed.", disciplines: ["software", "ai", "hardware", "deployment"], href: "/products/defence-learning-system" },
  { title: "Virtual try-on", sector: "Retail", challenge: "Help shoppers picture apparel and jewellery on themselves.", built: "AI visualization for kiosks and web, with brand-specific catalogs.", disciplines: ["software", "ai"], href: "/products/virtual-try-on" },
  { title: "Enterprise software", sector: "Enterprise", challenge: "Replace manual processes and disconnected tools.", built: "Management systems, dashboards, APIs and workflow automation.", disciplines: ["software"], href: "/services/custom-software" },
  { title: "Hardware-integrated systems", sector: "Cross-industry", challenge: "Make sensors, peripherals and software behave as one product.", built: "Embedded and IoT devices, device communication layers and touchscreen systems.", disciplines: ["software", "hardware", "deployment"], href: "/services/hardware-engineering" },
  { title: "Custom AI projects", sector: "Cross-industry", challenge: "Apply AI to a specific process, on the client’s own data and infrastructure.", built: "Assistants, computer vision and AI integration into existing systems, in the cloud or on premise.", disciplines: ["software", "ai"], href: "/services/ai-development" },
];
