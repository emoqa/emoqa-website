// Sample posts, inserted once when the database is first created. Edit or delete them in /admin.
export const seedPosts = [
  {
    "slug": "offline-first-digital-signage",
    "category": "Digital Signage",
    "accent": "#4B00A0",
    "icon": "signage",
    "title": "Why offline-first matters for digital signage",
    "excerpt": "Screens should keep playing when the network does not. A look at local playback, sync, and graceful recovery.",
    "date": "2026-11-18T04:30:00.000Z",
    "content": "<h2>The network will fail</h2><p>Retail floors, transit hubs and remote sites rarely have perfect connectivity. If a screen depends on a live connection, every outage becomes visible to customers.</p><h2>Play locally, sync quietly</h2><p>An offline-first player stores its playlist and media on the device, then syncs changes in the background. The audience never sees a loading state.</p><h2>Recover without a site visit</h2><p>Heartbeats, remote logs and over-the-air updates help teams find and fix problems from one dashboard instead of sending someone to the location.</p>"
  },
  {
    "slug": "health-kiosks-closer-to-patients",
    "category": "Healthcare",
    "accent": "#00A651",
    "icon": "health",
    "title": "Bringing diagnostics closer to patients with health kiosks",
    "excerpt": "How a self-contained kiosk can simplify screening at camps, clinics and schools, from first test to final report.",
    "date": "2026-11-11T04:30:00.000Z",
    "content": "<h2>Screening beyond the hospital</h2><p>Health camps and small clinics need equipment that is easy to move, easy to run and easy to understand. A kiosk brings several tests into one guided flow.</p><h2>Design for the person using it</h2><p>Clear steps, local languages and large touch targets matter as much as the sensors. A confident user gives a cleaner reading.</p><h2>From reading to report</h2><p>A digital report shared straight after the session makes follow-up easier and gives doctors the context they need for a consultation.</p>"
  },
  {
    "slug": "ai-agents-on-the-kiosk-floor",
    "category": "AI Agents",
    "accent": "#1B9FFF",
    "icon": "ai",
    "title": "What makes an AI agent useful on a kiosk floor",
    "excerpt": "Fast responses, grounded answers and natural voice. The building blocks of an agent people want to talk to.",
    "date": "2026-11-04T04:30:00.000Z",
    "content": "<h2>Speed sets the tone</h2><p>People walk away from silence. Streaming a response as it is generated makes a conversation feel natural, even when the full answer takes longer.</p><h2>Ground every answer</h2><p>Retrieval from your own catalogue or documents keeps the agent on topic and makes its answers easier to check.</p><h2>Know when to hand over</h2><p>A good agent recognises the limits of what it knows and offers a clear path to a person.</p>"
  },
  {
    "slug": "iot-prototype-to-production",
    "category": "IoT & Hardware",
    "accent": "#F7941D",
    "icon": "iot",
    "title": "From IoT prototype to production: what changes",
    "excerpt": "A working demo is only the beginning. Planning for power, connectivity, firmware updates and manufacturing.",
    "date": "2026-10-28T04:30:00.000Z",
    "content": "<h2>The demo is the easy part</h2><p>A prototype proves that an idea can work. Production asks whether it works every day, in every location, for years.</p><h2>Plan for updates on day one</h2><p>Secure over-the-air firmware updates are difficult to add later. Design the update and rollback path before the first device ships.</p><h2>Build for the assembly line</h2><p>Component availability, test points and enclosure tolerances decide how smoothly a design moves into volume.</p>"
  },
  {
    "slug": "designing-apps-for-unreliable-networks",
    "category": "Mobile Apps",
    "accent": "#7B2FBE",
    "icon": "offline",
    "title": "Designing mobile apps for unreliable networks",
    "excerpt": "Practical patterns for local storage, background sync and clear status messages that keep field teams moving.",
    "date": "2026-10-21T04:30:00.000Z",
    "content": "<h2>Save first, send later</h2><p>Write user actions to local storage immediately and queue them for upload. Field teams should never lose work because a signal dropped.</p><h2>Show what is happening</h2><p>Simple labels such as saved, syncing and sent remove doubt and cut down on repeated submissions.</p><h2>Plan for conflicts</h2><p>Decide early how the system handles two edits to the same record. The right answer depends on the business process.</p>"
  },
  {
    "slug": "choosing-hardware-for-kiosks",
    "category": "Kiosk Systems",
    "accent": "#4B00A0",
    "icon": "kiosk",
    "title": "Choosing the right hardware for your kiosk project",
    "excerpt": "Displays, compute, peripherals and enclosures: the questions worth asking before you order a single unit.",
    "date": "2026-10-14T04:30:00.000Z",
    "content": "<h2>Start with the environment</h2><p>Light, dust, heat and foot traffic shape almost every hardware decision. Visit the location before choosing the screen.</p><h2>Match compute to the workload</h2><p>Video playback, on-device AI and sensor processing have very different needs. Test the real workload on real hardware.</p><h2>Make servicing simple</h2><p>Accessible parts and remote monitoring keep downtime short once the kiosk is in the field.</p>"
  }
];
