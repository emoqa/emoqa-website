import type { Discipline } from "@/components/site/Logo";

export type Service = {
  slug: string;
  name: string;
  menu: string;
  discipline: Discipline;
  headline: string;
  summary: string;
  seo: { title: string; description: string };
  intro: string[];
  capabilities: { title: string; text: string }[];
  deliver: string[];
  fit: string[];
  products: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "ai-development",
    name: "AI Development",
    menu: "Assistants, vision and voice AI",
    discipline: "ai",
    headline: "AI that does a job, in your environment.",
    summary: "Assistants, computer vision, voice and automation, grounded in your data and placed where the work happens.",
    seo: { title: "AI Development Company: Conversational AI, Vision & Voice | EMOQA", description: "AI development for conversational assistants, multilingual AI, computer vision, intelligent automation and AI integration, deployed in the cloud, on premise or offline." },
    intro: ["A model is only one part of an AI product. The rest is knowledge, interface, guardrails, integration and the place it runs.", "We build the whole system, whether that is an assistant on a kiosk, an agent inside your software or a vision model beside a machine."],
    capabilities: [
      { title: "AI assistants", text: "Task-focused assistants for staff, students and customers." },
      { title: "Conversational AI", text: "Dialogue by text or voice, with context and guardrails." },
      { title: "Multilingual AI", text: "Interaction in the languages your users speak, as models allow." },
      { title: "AI-powered education", text: "Explanation, practice and assessment." },
      { title: "Computer vision", text: "Verification, detection and visual experiences." },
      { title: "Intelligent automation", text: "Reading, sorting and acting on information." },
      { title: "AI integration", text: "Adding AI to systems you already run." },
      { title: "Offline AI systems", text: "Local inference for private or disconnected sites." },
    ],
    deliver: ["Use-case assessment", "Model selection and evaluation", "Knowledge base and retrieval", "Guardrails and interface", "Integration, deployment and monitoring"],
    fit: ["People answer the same questions every day", "Knowledge is locked in documents", "Images or speech need to become data", "Data can’t leave your premises"],
    products: ["ai-teacher", "virtual-try-on", "smart-student-system"],
    cta: "Tell Us What You Want to Build",
  },
  {
    slug: "custom-software",
    name: "Custom Software",
    menu: "Web, mobile, enterprise and SaaS",
    discipline: "software",
    headline: "Software shaped to the way you work.",
    summary: "Web, mobile and enterprise software, built to run alongside devices, AI and the systems you already have.",
    seo: { title: "Custom Software Development: Web, Mobile & Enterprise | EMOQA", description: "Custom software development for web applications, mobile apps, SaaS, management systems, APIs and workflow automation, with hardware and AI under one roof." },
    intro: ["Off-the-shelf tools ask you to change your process. We start from the process, the people and the environment, then build software that fits.", "Because we also build hardware and AI, our software is designed from the start to talk to devices, work offline and take on intelligent features."],
    capabilities: [
      { title: "Web applications", text: "Portals, dashboards and customer-facing products." },
      { title: "Mobile applications", text: "Mobile and Android apps, including device-connected ones." },
      { title: "Enterprise software", text: "Systems that carry roles, approvals, audit trails and reporting." },
      { title: "SaaS platforms", text: "Multi-tenant products, from first version onward." },
      { title: "Management systems", text: "Operations, people, content and records." },
      { title: "API development", text: "Clean interfaces between your systems, partners and devices." },
      { title: "Workflow automation", text: "Replacing repeated manual steps with dependable software." },
      { title: "Backend architecture", text: "Data models, services and infrastructure that can grow." },
    ],
    deliver: ["Requirements and architecture", "Interface design and prototypes", "Production software and APIs", "Testing and deployment", "Maintenance and further development"],
    fit: ["A process still lives in spreadsheets or paper", "An existing system needs replacing or connecting", "You have a product idea that needs a first version", "Software has to work with devices or without a network"],
    products: ["digital-signage-cms", "smart-student-system"],
    cta: "Tell Us What You Want to Build",
  },
  {
    slug: "hardware-engineering",
    name: "Hardware Engineering",
    menu: "Kiosks, embedded systems and IoT",
    discipline: "hardware",
    headline: "Devices that behave like one product.",
    summary: "Kiosks, embedded systems, sensors and connected devices, engineered together with the software that runs them.",
    seo: { title: "Hardware Development Company: Kiosks, Embedded & IoT | EMOQA", description: "Hardware development, custom kiosk development, embedded systems, custom IoT development and device integration, engineered with the software and AI that run on it." },
    intro: ["Most hardware projects fail at the seams, where a device meets a driver, a cable meets an enclosure or a screen meets a user.", "We engineer across those seams: architecture, components, enclosure, device communication and the interface people touch."],
    capabilities: [
      { title: "Custom hardware integration", text: "Combining devices, boards and peripherals into one unit." },
      { title: "Embedded systems", text: "Controllers and firmware for dedicated tasks." },
      { title: "IoT devices", text: "Connected sensing, control and reporting." },
      { title: "Kiosk development", text: "Enclosure, screen, peripherals and kiosk software." },
      { title: "Touchscreen systems", text: "Interactive displays for public and institutional use." },
      { title: "Sensor integration", text: "Selecting, reading and calibrating sensors." },
      { title: "Device communication", text: "Protocols and links between devices and software." },
      { title: "Custom product architecture", text: "Planning a physical product end to end." },
    ],
    deliver: ["Product architecture", "Component and device selection", "Prototype hardware", "Firmware and device software", "Integration testing and deployment"],
    fit: ["You need a kiosk or terminal built around a workflow", "Several devices must feed one system", "A device idea needs a working prototype", "Existing equipment should become connected"],
    products: ["healthcare-kiosk", "defence-learning-system"],
    cta: "Tell Us What You Want to Build",
  },
  {
    slug: "complete-solution-development",
    name: "Complete Product Development",
    menu: "From requirement to deployment",
    discipline: "deployment",
    headline: "One team, from requirement to working system.",
    summary: "Architecture, design, software, hardware, AI, testing and deployment handled by one engineering partner.",
    seo: { title: "End-to-End Product Development & Engineering | EMOQA", description: "End-to-end product development and product engineering: requirements, architecture, UI/UX, software, hardware and AI integration, testing, deployment and maintenance." },
    intro: ["Splitting a product between a software vendor, a hardware vendor and an installer leaves you to manage the gaps.", "We take responsibility for the complete solution, so decisions about screens, sensors, models and mounting are made together."],
    capabilities: [
      { title: "Requirement analysis", text: "Users, environment, constraints and success criteria." },
      { title: "Product architecture", text: "Hardware, software, AI and data planned as one." },
      { title: "UI/UX design", text: "Interfaces for kiosks, phones, web and operators." },
      { title: "Software development", text: "Device, server and user-facing software." },
      { title: "Hardware integration", text: "Devices, peripherals, power and enclosure." },
      { title: "AI integration", text: "Models, knowledge and guardrails where they add value." },
      { title: "Testing", text: "Bench, integration and on-site testing." },
      { title: "Deployment and maintenance", text: "Installation, support, upgrades and further sites." },
    ],
    deliver: ["A single plan and point of contact", "Prototype or proof of concept", "Production-ready product", "On-site installation", "Ongoing support"],
    fit: ["The product has both physical and digital parts", "You want one accountable partner", "You are taking a concept toward manufacture", "Several sites need the same solution"],
    products: ["healthcare-kiosk", "digital-signage-cms", "defence-learning-system"],
    cta: "Tell Us What You Want to Build",
  },
  {
    slug: "offline-ai-systems",
    name: "Offline AI Systems",
    menu: "Local inference, no cloud required",
    discipline: "ai",
    headline: "Intelligence that stays on site.",
    summary: "AI that runs on local hardware, for places where connectivity is limited or data must stay put.",
    seo: { title: "Offline AI Solutions: Local Inference & On-Premise AI | EMOQA", description: "Offline AI solutions with local inference, on-device knowledge and self-contained kiosks for restricted networks, private data and unreliable connectivity." },
    intro: ["Some sites have no dependable network. Others have one and are not allowed to use it for this. Both can still benefit from AI.", "We design local inference, local knowledge and the hardware to carry them, sized to the task and the environment."],
    capabilities: [
      { title: "Local AI inference", text: "Models selected and tuned for on-site hardware." },
      { title: "Offline knowledge", text: "Retrieval from documents stored on the system." },
      { title: "Local voice", text: "On-site speech recognition and synthesis where supported." },
      { title: "Self-contained kiosks", text: "Compute, content and interface in one enclosure." },
      { title: "Controlled operation", text: "Kiosk mode, access control and managed updates." },
      { title: "Hybrid designs", text: "Works offline, and syncs when a connection is allowed." },
    ],
    deliver: ["Feasibility and hardware sizing", "Model selection and evaluation", "Offline application and content pipeline", "Integrated hardware", "Deployment and update process"],
    fit: ["Networks are restricted or isolated", "Data privacy rules out external services", "Sites are remote or connectivity is unreliable", "Predictable running cost matters"],
    products: ["defence-learning-system", "ai-teacher"],
    cta: "Discuss Offline AI Deployment",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
