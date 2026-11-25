import type { Product } from "./types";

export const aiTeacher: Product = {
  slug: "ai-teacher",
  name: "EMOQA AI Teacher",
  short: "AI Teacher",
  menu: "Multilingual conversational learning",
  parts: ["software", "ai", "hardware"],
  summary: "A multilingual assistant that explains properly, answers follow-ups and stays within your syllabus.",
  headline: "Ask it anything. Then ask it why.",
  positioning:
    "An interactive multilingual AI education assistant that explains topics, answers questions, guides students and provides contextual support through conversation.",
  seo: {
    title: "AI Teacher: Multilingual AI Education System & Kiosk | EMOQA",
    description:
      "A conversational AI education assistant with voice, multilingual explanations and your own knowledge base. Deploy it on kiosks, interactive screens and websites.",
  },
  image: { src: "/renders/tutor", width: 1200, height: 1500, alt: "EMOQA AI Teacher running on a floor-standing touchscreen kiosk" },
  cta: {
    primary: "Build Your AI Teacher",
    secondary: "Deploy AI Teacher",
    closing: "Build Your AI Learning Assistant",
    closingText: "Send us a syllabus, a set of manuals or a list of the questions people keep asking. That is enough to start.",
  },
  overview: {
    heading: "A patient explainer, in the learner’s language",
    paragraphs: [
      "EMOQA AI Teacher can be deployed on kiosks, interactive screens, educational devices, websites and other digital interfaces.",
      "It is built for explanation first. Learners can speak or type, ask for an example, switch language and keep going until it makes sense.",
    ],
  },
  problem: {
    title: "Short answers don’t teach",
    text: "Search gives links and most chatbots give a paragraph. Neither knows your syllabus, adjusts to the learner’s level or stays inside the material you approved.",
  },
  solution: {
    title: "Explanation, grounded in your content",
    text: "AI Teacher works step by step, adapts to age and level, and can be configured to answer within a defined knowledge context and guardrails.",
  },
  blocks: [
    {
      type: "columns",
      heading: "What it does well",
      groups: [
        { title: "Converses in many languages", text: "Supported languages depend on the selected models and deployment configuration.", items: ["Multilingual conversation", "Natural language questions", "Voice-based interaction", "Speech recognition", "AI-generated responses", "Text-to-speech", "Language switching"] },
        { title: "Explains in detail", text: "Built for depth, with follow-ups expected.", items: ["Complex topics, step by step", "Simpler versions for different age groups", "Concepts through examples", "Follow-up questions", "Contextual explanations", "Conversational teaching", "Adapts to the learner’s knowledge level"] },
        { title: "Learns your material", text: "Customized with a specific knowledge base.", items: ["College syllabus", "Institution-specific information", "Course material", "Training modules", "FAQs", "Manuals", "Institutional documents", "Subject-specific content", "Local information"] },
      ],
    },
    {
      type: "steps",
      heading: "How an answer is made",
      steps: [
        { title: "Listen", text: "Speech or text is captured in the chosen language." },
        { title: "Understand", text: "The question is read in the context of the session, where configured." },
        { title: "Retrieve", text: "Relevant passages are found in your approved knowledge base." },
        { title: "Explain", text: "The model composes an answer at the learner’s level, within guardrails." },
        { title: "Speak", text: "The reply is shown and read aloud, ready for a follow-up." },
      ],
    },
    {
      type: "visual",
      id: "tutor-kiosk",
      heading: "Kiosk mode",
      intro: "Designed for interactive public and institutional environments, where people walk up and ask.",
    },
    {
      type: "decisions",
      heading: "Make it yours",
      items: ["Knowledge base and source documents", "Persona, name and tone", "Languages and voices", "Guardrails and out-of-scope behaviour", "Cloud, on-premise or offline AI models", "Custom workflows and handover"],
      note: "Built around your operational requirements.",
    },
    {
      type: "specs",
      heading: "Technical capabilities",
      rows: [
        ["Language models", "LLM integration, with the model selected per deployment."],
        ["Voice", "Speech-to-text and text-to-speech."],
        ["Memory", "Conversational memory and session context where configured."],
        ["Knowledge", "Knowledge retrieval from your documents."],
        ["Safety", "Guardrails and configurable personas."],
        ["Delivery", "Kiosk deployment, web embedding, API integration and custom workflows."],
      ],
    },
    {
      type: "audience",
      heading: "Where people use it",
      groups: [
        { title: "Students", items: ["Student guidance", "Course information", "Educational assistance", "Digital learning"] },
        { title: "Campus visitors", items: ["College admissions", "Internship guidance", "Campus information", "Visitor information"] },
        { title: "Training", items: ["Skill training", "Interactive demonstrations", "Institutional training"] },
      ],
    },
  ],
  faqs: [
    { q: "Which languages does it support?", a: "That depends on the models and voices selected for your deployment. Share the languages you need and we will confirm what is practical." },
    { q: "Can it be limited to our syllabus?", a: "It can be configured to answer within a defined knowledge context and guardrails, and to say when something is out of scope." },
    { q: "Can it run without internet?", a: "Offline AI configurations are possible with suitable hardware and models. See our offline AI work for details." },
    { q: "Is it always right?", a: "AI-generated answers can contain mistakes. Grounding in approved material, guardrails and review help reduce them." },
  ],
  industries: ["education", "enterprise", "public-sector"],
  services: ["ai-development", "offline-ai-systems"],
  related: ["defence-learning-system", "smart-student-system"],
};
