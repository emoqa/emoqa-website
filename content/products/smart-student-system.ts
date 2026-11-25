import type { Product } from "./types";

export const smartStudentSystem: Product = {
  slug: "smart-student-system",
  name: "Smart Student System",
  short: "Smart Student System",
  menu: "Phone-based campus attendance",
  parts: ["software", "ai"],
  summary: "Three verification layers on the phones people already carry. No cards, and no hardware in every classroom.",
  headline: "Attendance that checks more than a code.",
  positioning:
    "An intelligent, multi-layer student attendance and verification platform designed to reduce proxy attendance without relying on permanent classroom hardware.",
  seo: {
    title: "Smart Attendance Software with Bluetooth & Face Verification | EMOQA",
    description:
      "A phone-based Bluetooth attendance system for colleges and universities, with proximity, session and live face verification. No RFID cards or classroom cameras required.",
  },
  image: { src: "/renders/phones", width: 1500, height: 1100, alt: "Faculty and student phones showing an open session, a live face check and confirmed attendance" },
  cta: {
    primary: "Request Attendance System Demo",
    secondary: "Request a Campus Demo",
    closing: "Modernize Campus Attendance",
    closingText: "Share your campus size, timetable structure and current process. We will show you how the three layers fit.",
  },
  overview: {
    heading: "Attendance for campuses where people move",
    paragraphs: [
      "Smart Student System is primarily phone-based. It can be deployed across colleges, universities, training centers and multi-building campuses without fitting out each room.",
      "Attendance is confirmed through a combination of verification layers instead of a single QR code or check-in mechanism.",
    ],
  },
  problem: {
    title: "A shared code is not proof of presence",
    text: "QR codes get forwarded, cards get lent, and roll calls use up teaching time. Fixed classroom hardware helps, but it is costly to install and maintain in every room.",
  },
  solution: {
    title: "Three checks, one short tap",
    text: "The system looks for proximity, a valid live session and a live face match together. Each layer makes replay, sharing and unauthorized participation harder.",
  },
  blocks: [
    {
      type: "visual",
      id: "attendance-flow",
      heading: "See where each attempt stops",
      intro: "Choose a situation and follow it through the three layers.",
    },
    {
      type: "columns",
      heading: "Inside each layer",
      groups: [
        {
          title: "Bluetooth Low Energy proximity",
          text: "Establishes contextual proximity between participating devices. It supports proximity verification and is not, on its own, a guarantee of exact location.",
          items: ["Proximity signals between devices", "Session-specific verification", "Classroom context"],
        },
        {
          title: "Session and context",
          text: "Sessions use dynamic context and cryptographic mechanisms. The architecture may incorporate:",
          items: ["Dynamic session tokens", "Session-specific nonces", "Teacher-controlled session start", "Device validation", "Time-sensitive windows", "Server validation where connectivity is available", "Offline-capable mechanisms where supported"],
        },
        {
          title: "Live face verification",
          text: "An additional layer that helps confirm the right person is holding the phone. Capabilities may include:",
          items: ["Face verification", "Live camera verification", "Identity matching", "Attendance confirmation", "Suspicious attempt detection"],
        },
      ],
      note: "Layered verification reduces proxy attendance. No verification method removes every possibility of misuse.",
    },
    {
      type: "statements",
      heading: "What you don’t need",
      items: ["Dedicated RFID cards", "Permanent classroom cameras", "Fixed attendance hardware in every classroom"],
      note: "The platform uses student and faculty smartphones with intelligent verification.",
    },
    {
      type: "columns",
      heading: "Features by role",
      groups: [
        { title: "Students", items: ["Student mobile application", "Multi-step attendance validation", "Student attendance history", "Elective course support", "Movement between classrooms"] },
        { title: "Faculty", items: ["Teacher-controlled attendance", "Dynamic attendance sessions", "Faculty dashboard", "Course and subject management", "Classroom management", "Timetable integration"] },
        { title: "Administration", items: ["Admin dashboard", "Real-time attendance overview", "Attendance reports", "Campus-level analytics", "Logs and audit trail", "API integration", "Offline-first architecture where supported"] },
      ],
    },
    {
      type: "list",
      heading: "Modules that can extend the platform",
      intro: "These are optional or future modules. We confirm status, scope and timing with you before anything is committed.",
      items: ["Timetable broadcasting", "Student announcements", "Notes broadcasting", "Campus communication", "YouTube and content broadcasting", "Campus notifications", "Classroom scheduling", "Student communication systems"],
      note: "Optional modules can be integrated. Availability is confirmed per project.",
    },
    {
      type: "decisions",
      heading: "Shaped around your campus",
      items: ["Which verification layers apply to which courses", "Length of the attendance window", "Elective and cross-department rules", "Links to your timetable or ERP", "Roles, approvals and correction process", "Reports and exports"],
      note: "Custom configurations available.",
    },
    {
      type: "specs",
      heading: "Architecture",
      rows: [
        ["Student app", "Mobile application with proximity, session and live camera steps."],
        ["Faculty app", "Starts and closes sessions, and shows the live overview."],
        ["Verification service", "Validates sessions and devices where connectivity is available."],
        ["Admin console", "Courses, classrooms, timetables, reports, logs and analytics."],
        ["Integration", "APIs for existing campus systems."],
        ["Connectivity", "Online, with offline-first behaviour where supported."],
      ],
    },
    {
      type: "audience",
      heading: "Designed for",
      groups: [
        { title: "Higher education", items: ["Universities", "Engineering colleges", "Colleges with elective courses"] },
        { title: "Large sites", items: ["Multi-building campuses", "Large educational institutions"] },
        { title: "Training and schools", items: ["Training institutes", "Schools with advanced attendance requirements"] },
      ],
    },
  ],
  faqs: [
    { q: "Does Bluetooth prove a student is in the room?", a: "It provides a proximity signal, not an exact location. That is why it is combined with session checks and live face verification." },
    { q: "Can it stop proxy attendance completely?", a: "No system can promise that. Combining layers makes proxy attendance harder and leaves an audit trail." },
    { q: "Do students need special hardware?", a: "No cards or tags are required. The platform uses students’ and faculty members’ smartphones." },
    { q: "What about electives and shared rooms?", a: "Course, classroom and timetable management support electives and students moving between classrooms." },
  ],
  industries: ["education", "enterprise", "digital-transformation"],
  services: ["custom-software", "ai-development"],
  related: ["ai-teacher", "digital-signage-cms"],
};
