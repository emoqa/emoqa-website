import type { Product } from "./types";

export const digitalSignageCms: Product = {
  slug: "digital-signage-cms",
  name: "EMOQA Signage CMS",
  short: "Digital Signage CMS",
  menu: "Online, offline and USB signage",
  parts: ["software", "hardware", "deployment"],
  summary: "Control every screen from one place, and keep playing when the network doesn’t.",
  headline: "Every screen, with or without the internet.",
  positioning:
    "A flexible digital signage content management system that controls and distributes content across screens in many environments, with online, offline and USB-based deployment.",
  seo: {
    title: "Digital Signage CMS: Online, Offline & USB Deployment | EMOQA",
    description:
      "Manage playlists, schedules and screens with a digital signage CMS that keeps playing offline and can be updated by USB. Built for hospitals, campuses, retail and public spaces.",
  },
  image: { src: "/renders/signage", width: 1800, height: 1200, alt: "Digital displays of different sizes running content from EMOQA Signage CMS" },
  cta: {
    primary: "Deploy Your Signage Network",
    secondary: "Manage Your Digital Displays",
    closing: "Deploy Digital Signage",
    closingText: "Tell us how many locations you have, what you want to show and what the network is like. We will suggest the right mode for each site.",
  },
  overview: {
    heading: "One system for very different sites",
    paragraphs: [
      "A city hospital with fibre, a campus with patchy Wi-Fi and a factory floor with no network at all can run the same signage system.",
      "EMOQA Signage CMS gives you a media library, playlists, schedules and screen groups, then delivers content by whichever route a site can support.",
    ],
  },
  problem: {
    title: "Screens go dark when the connection does",
    text: "Cloud-only signage depends on a steady network. Sites without one end up with a person, a laptop and a folder of files, and nobody is sure what is on screen.",
  },
  solution: {
    title: "Three delivery modes, one way of working",
    text: "Online, offline and USB modes share the same content and playlist model, so each site uses what suits it and your team learns one system.",
  },
  blocks: [
    {
      type: "visual",
      id: "signage-network",
      heading: "How content reaches the screen",
      intro: "Switch modes to see the path change.",
    },
    {
      type: "columns",
      heading: "The three modes in detail",
      groups: [
        { title: "Online", text: "Centralized content management.", items: ["Remote content updates", "Screen management", "Playlist management", "Media scheduling", "Display grouping", "Content publishing", "Multiple-screen management", "Remote monitoring where supported"] },
        { title: "Offline", text: "Keeps operating when internet connectivity is unavailable.", items: ["Local content storage", "Local media playback", "Offline playlists", "Scheduled content", "Content caching", "Continued playback during network interruptions"] },
        { title: "USB", text: "For sites with no network, or no need for central management.", items: ["USB content transfer", "Local media playback", "Plug-and-play deployment where supported", "Simple update workflows"] },
      ],
    },
    {
      type: "list",
      heading: "Features",
      items: ["Content management", "Playlist management", "Screen scheduling", "Multi-display management", "Media library", "Content grouping", "Remote updates", "Offline playback", "USB content deployment", "Flexible deployment", "Custom layouts", "Multiple display environments"],
      dark: true,
    },
    {
      type: "steps",
      heading: "From file to screen",
      steps: [
        { title: "Upload", text: "Add images, videos and announcements to the media library." },
        { title: "Arrange", text: "Build playlists and layouts for each screen type." },
        { title: "Schedule", text: "Choose the times, days and screen groups." },
        { title: "Deliver", text: "Publish over the network, sync for offline play, or copy to USB." },
        { title: "Play", text: "Screens follow the schedule and keep going through interruptions." },
      ],
    },
    {
      type: "list",
      heading: "What you can show",
      items: ["Images", "Videos", "Promotional media", "Announcements", "Educational content", "Emergency messaging", "Information displays", "Schedules", "Custom media formats"],
    },
    {
      type: "decisions",
      heading: "Configured to your displays",
      items: ["Screen sizes, orientation and zones", "Custom layouts and branding", "Delivery mode per site", "User roles and approvals", "Links to your own data or schedules", "Player hardware selection"],
      note: "Custom configurations available. Hardware and software can be supplied together.",
    },
    {
      type: "specs",
      heading: "Architecture",
      rows: [
        ["Management console", "Media library, playlists, schedules, screens and groups."],
        ["Player", "Runs on the display device, stores content locally and follows the schedule."],
        ["Delivery", "Network publishing, local caching or USB transfer."],
        ["Monitoring", "Screen status and remote monitoring where supported."],
        ["Integration", "Custom data sources and formats on request."],
      ],
    },
    {
      type: "audience",
      heading: "Deployment scenarios",
      groups: [
        { title: "Care and education", items: ["Hospitals", "Colleges", "Schools"] },
        { title: "Business", items: ["Retail", "Corporate offices", "Reception areas", "Industrial facilities"] },
        { title: "Public", items: ["Government buildings", "Public spaces", "Transportation facilities"] },
      ],
    },
  ],
  faqs: [
    { q: "What happens when the internet drops?", a: "Screens continue playing locally stored content and schedules. Updates resume when the connection returns." },
    { q: "Can some sites be online and others USB only?", a: "Yes. The delivery mode can be chosen per site." },
    { q: "Do you supply the screens and players?", a: "We can deliver software only, or a complete installation with displays, players and mounting. Requirements decide which." },
  ],
  industries: ["retail", "healthcare", "education", "public-sector", "hospitality", "manufacturing"],
  services: ["custom-software", "hardware-engineering"],
  related: ["healthcare-kiosk", "virtual-try-on"],
};
