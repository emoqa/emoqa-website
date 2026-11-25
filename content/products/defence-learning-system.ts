import type { Product } from "./types";

export const defenceLearningSystem: Product = {
  slug: "defence-learning-system",
  name: "EMOQA Defence Learning System",
  short: "Defence Learning System",
  menu: "Offline-first AI training kiosk",
  parts: ["software", "ai", "hardware", "deployment"],
  summary: "Offline-first AI learning and examination for controlled environments, starting with map reading.",
  headline: "AI training that works without a network.",
  positioning:
    "A specialized offline-first AI learning and training kiosk for controlled environments, where connectivity, data privacy and reliable access to educational material matter.",
  seo: {
    title: "Offline AI Learning Kiosk for Defence & Controlled Training | EMOQA",
    description:
      "An offline AI solution for map reading, geography, examination and structured training. Self-contained kiosk deployment for restricted-network environments.",
  },
  image: { src: "/renders/rugged", width: 1600, height: 1200, alt: "A rugged self-contained training kiosk showing a map reading exercise" },
  cta: {
    primary: "Discuss Offline AI Deployment",
    secondary: "Discuss a Specialized Deployment",
    closing: "Build an Offline AI System",
    closingText: "Share only what you can. We can begin with general requirements and agree on confidentiality before going further.",
  },
  overview: {
    heading: "Built for places without a cloud",
    paragraphs: [
      "We have developed an Army-oriented examination and learning software system for map reading, geographical understanding and related training workflows. The product has been delivered for a defence-related institutional deployment.",
      "Client-specific information, deployment details and confidential functionality are not disclosed here.",
    ],
  },
  problem: {
    title: "Modern learning tools assume a connection",
    text: "In controlled environments, networks may be restricted or absent, and sending content or questions to outside services may not be acceptable.",
  },
  solution: {
    title: "Everything needed, inside the kiosk",
    text: "Content, assessments and, where configured, AI inference run locally. The platform does not necessarily depend on continuous cloud connectivity.",
  },
  blocks: [
    {
      type: "columns",
      heading: "Core capabilities",
      groups: [
        { title: "Maps and geography", items: ["Map-reading education", "Geography learning", "Interactive maps"] },
        { title: "Learning and assessment", items: ["Examination and assessment software", "Learning modules", "Structured educational content", "Interactive training", "Self-paced learning"] },
        { title: "AI assistance", items: ["AI-supported learning assistance", "Question answering", "Kiosk-based access"] },
      ],
    },
    {
      type: "visual",
      id: "rugged",
      heading: "Self-contained by design",
      intro: "Compute, content, interface and storage travel together. The enclosure and hardware are selected for the operating environment.",
    },
    {
      type: "list",
      heading: "Offline AI architecture",
      intro: "Designed to function where internet access may be unavailable or restricted.",
      items: ["Local AI inference where configured", "Offline knowledge access", "Locally available content", "Offline learning workflows", "Self-contained deployment", "Kiosk environment", "Controlled system operation"],
      dark: true,
    },
    {
      type: "steps",
      heading: "A training session",
      steps: [
        { title: "Sign in", text: "The learner starts a session on the kiosk." },
        { title: "Study", text: "Structured modules and interactive maps, at their own pace." },
        { title: "Ask", text: "AI-supported assistance answers from locally available material, where configured." },
        { title: "Practise", text: "Exercises give immediate feedback." },
        { title: "Assess", text: "Examinations are taken and recorded on the system." },
      ],
    },
    {
      type: "decisions",
      heading: "Adapted to your requirements",
      items: ["Subjects and training content", "Examination format and rules", "AI model and compute", "Access control and operation", "Kiosk form and enclosure", "Content update process"],
      note: "Available configurations may vary. Details are agreed under confidentiality where required.",
    },
    {
      type: "specs",
      heading: "Technical capabilities",
      rows: [
        ["Compute", "Local processing sized to the selected AI model and content."],
        ["AI", "On-device inference and knowledge retrieval where configured."],
        ["Content", "Structured modules, maps, question banks and assessments stored locally."],
        ["Operation", "Kiosk mode with controlled system access."],
        ["Network", "No continuous connectivity required. Integration considered case by case."],
      ],
    },
    {
      type: "audience",
      heading: "Can be adapted for",
      groups: [
        { title: "Training", items: ["Defence training", "Institutional training", "Technical training", "Industrial training"] },
        { title: "Education", items: ["Geography education", "Specialized learning environments"] },
        { title: "Environment", items: ["Restricted-network deployments"] },
      ],
    },
  ],
  faqs: [
    { q: "Does it work with no internet at all?", a: "The system is designed for environments where internet access is unavailable or restricted. AI features run locally where the hardware is configured for it." },
    { q: "Can it be used outside defence?", a: "Yes. The same approach suits institutional, technical and industrial training, and other restricted-network sites." },
    { q: "Can you share details of the existing deployment?", a: "No. We do not disclose client-specific information or deployment details." },
  ],
  industries: ["defence", "education", "public-sector", "manufacturing"],
  services: ["offline-ai-systems", "complete-solution-development"],
  related: ["ai-teacher", "smart-student-system"],
};
