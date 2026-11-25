import type { Product } from "./types";

export const healthcareKiosk: Product = {
  slug: "healthcare-kiosk",
  name: "EMOQA Healthcare Kiosk",
  short: "Healthcare Kiosk",
  menu: "Modular screening and telemedicine",
  parts: ["software", "hardware", "deployment"],
  summary: "A configurable screening and telemedicine platform. You choose the devices, the tests and the workflow.",
  headline: "A health kiosk you configure, not one you settle for.",
  positioning:
    "A configurable, intelligent healthcare screening and telemedicine platform that combines medical devices, diagnostic peripherals, screening software, digital health workflows and remote consultation in one integrated system.",
  seo: {
    title: "Healthcare Kiosk Development: Modular Screening & Telemedicine | EMOQA",
    description:
      "A configurable healthcare kiosk with vitals, point-of-care testing, vision screening, telemedicine and medical kiosk software, engineered around your workflow.",
  },
  image: { src: "/renders/kioskfull", width: 1300, height: 1500, alt: "EMOQA Healthcare Kiosk fitted with vitals, point-of-care, vision and telemedicine modules" },
  cta: {
    primary: "Configure Your Healthcare Kiosk",
    secondary: "Discuss Your Healthcare Deployment",
    closing: "Configure Your Healthcare Solution",
    closingText: "Tell us the setting, the tests you need and the people who will use it. We will come back with a configuration.",
  },
  overview: {
    heading: "One platform, many possible kiosks",
    paragraphs: [
      "EMOQA Healthcare Kiosk is a customizable screening platform for hospitals, clinics, corporates, institutions, communities, public health programs and remote screening locations.",
      "It can be fitted with different medical devices, diagnostic modules, software workflows, telemedicine features and integrations. We handle the whole build: kiosk hardware, device integration, medical peripherals, software, interface, data management, telemedicine workflows, custom modules and deployment.",
    ],
  },
  problem: {
    title: "Screening is spread across rooms, devices and paper",
    text: "Each test sits on its own device, results are copied by hand, and a doctor may be hours away. Fixed kiosks solve part of this, then get in the way when a site needs a different test, language or workflow.",
  },
  solution: {
    title: "A core kiosk with interchangeable modules",
    text: "Start with the core kiosk and add only what the deployment needs. Compatible devices feed one patient record, the software follows your workflow, and a remote doctor can be brought into the same session.",
  },
  blocks: [
    {
      type: "steps",
      heading: "How a visit works",
      intro: "A typical flow. Each step can be changed, removed or reordered for your site.",
      steps: [
        { title: "Register", text: "The patient checks in on the touchscreen, or a staff member does it for them." },
        { title: "Screen", text: "Guided instructions lead them through the tests fitted on this kiosk." },
        { title: "Collect", text: "Readings come straight from connected devices into the patient profile." },
        { title: "Consult", text: "Where telemedicine is included, a doctor joins by video with the results in view." },
        { title: "Report", text: "A digital report is generated, and referrals follow your own rules." },
      ],
    },
    {
      type: "catalog",
      heading: "What the platform can include",
      intro: "This catalog grows as compatible devices are added. What a given kiosk offers depends on the devices and configuration you select.",
      groups: [
        {
          title: "Vital signs",
          status: "configurable",
          items: ["Blood pressure", "Pulse rate", "Oxygen saturation (SpO₂)", "Body temperature", "Height", "Weight", "BMI", "Body composition", "Other compatible physiological parameters"],
        },
        {
          title: "Blood and point-of-care testing",
          status: "configurable",
          text: "Through compatible POCT devices.",
          items: ["Blood glucose", "HbA1c", "Hemoglobin", "Lipid profile", "Total cholesterol", "Triglycerides", "HDL", "LDL", "Uric acid", "Liver-related screening parameters", "Kidney-related screening parameters", "Additional compatible blood-based tests"],
        },
        {
          title: "Additional diagnostic modules",
          status: "optional",
          items: ["Fundus camera", "Digital retinal imaging", "Vision screening", "Eye examination modules", "ECG", "Spirometry", "Digital stethoscope", "Audiometry", "Dental imaging or oral screening", "Other diagnostic peripherals", "Medical devices you request"],
        },
        {
          title: "Telemedicine",
          status: "optional",
          items: ["Doctor video consultation", "Remote physician access", "Patient registration", "Digital health profile", "Test result sharing", "Consultation history", "Doctor dashboard", "Patient guidance", "Remote health screening", "Referral workflows", "Digital prescriptions where appropriate", "External healthcare platforms where supported"],
        },
        {
          title: "Healthcare software",
          status: "platform",
          items: ["Patient registration", "Patient profiles", "Test management", "Device data collection", "Result dashboard", "Health reports", "Medical history", "Digital report generation", "Doctor dashboard", "Admin dashboard", "Role-based access", "Analytics", "Configurable workflows", "Data export", "APIs and integrations where required"],
        },
      ],
      note: "Available configurations may vary. Integration availability depends on compatible hardware and technical requirements. Screening results support, and do not replace, clinical judgement.",
    },
    {
      type: "decisions",
      heading: "You decide what goes in",
      intro: "Hardware and software configurations can be tailored to your workflow, budget and deployment environment.",
      items: [
        "Which medical devices are installed",
        "Which tests are included",
        "Which peripherals are left out",
        "Whether telemedicine is included",
        "Hospital, corporate, rural, school or public setting",
        "Standalone or network connected",
        "Custom software modules",
        "Additional AI modules",
      ],
    },
    {
      type: "specs",
      heading: "Architecture",
      intro: "Final specifications are set per project, once devices and environment are agreed.",
      rows: [
        ["Enclosure", "Floor-standing core kiosk with touchscreen. Form, finish and mounting are designed for the site."],
        ["Devices", "Compatible medical devices and peripherals, connected through a device integration layer."],
        ["Kiosk software", "Guided patient interface, test management and device data collection."],
        ["Back office", "Patient records, doctor and admin dashboards, roles, reports and analytics."],
        ["Connectivity", "Standalone operation or network connected, with data export and APIs where required."],
        ["Extension", "Custom hardware modules, software modules and AI modules."],
      ],
    },
    {
      type: "audience",
      heading: "Where it can be deployed",
      groups: [
        { title: "Care settings", items: ["Hospitals", "Clinics", "Community health centers", "Diagnostic networks", "Pharmacies"] },
        { title: "Workplaces and campuses", items: ["Corporate wellness", "Employee health screening", "Schools and colleges"] },
        { title: "Public and remote", items: ["Rural healthcare", "Public health programs", "Health camps", "Smart cities", "Remote healthcare deployments"] },
      ],
    },
  ],
  faqs: [
    { q: "Is there a standard model?", a: "There is a core kiosk, and everything around it is configurable. We start from your workflow and required tests, then propose the modules." },
    { q: "Can you integrate devices we already use?", a: "Often, yes. It depends on whether the device can communicate with our software and on its technical documentation. We assess this during discovery." },
    { q: "Does it need an internet connection?", a: "The kiosk can be configured as standalone or network connected. Remote consultation needs connectivity for the duration of the call." },
    { q: "Can it match our language and branding?", a: "Yes. The interface, language, workflow and enclosure finish can all be customized." },
  ],
  industries: ["healthcare", "enterprise", "public-sector", "education"],
  services: ["hardware-engineering", "complete-solution-development"],
  related: ["ai-teacher", "digital-signage-cms"],
};
