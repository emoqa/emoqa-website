import type { Metadata } from "next";
import Link from "next/link";
import { ClosingCta, Head, inquire, PageHead, ProcessRail } from "@/components/site/ui";
import { pageMeta } from "@/lib/meta";

export const metadata: Metadata = pageMeta(
  "Custom Technology Solutions, Built From Scratch | EMOQA",
  "Bring an idea, a process, a device or a problem. EMOQA engineers custom software, AI and hardware solutions from discovery to deployment and scale.",
  "/custom-solutions/",
);

const starts = ["An idea", "A business problem", "A process to automate", "A device you want to develop", "A software requirement", "An AI use case", "A hardware concept", "A product you want to manufacture", "A system you want to modernize"];

export default function CustomSolutionsPage() {
  return (
    <>
      <PageHead title="Have a problem that doesn’t fit an existing product?" actions={<Link href={inquire("custom-solution")} className="btn">Tell Us What You Want to Build</Link>}>
        <p>EMOQA develops custom technology solutions from scratch. You don’t need to select a predefined product.</p>
      </PageHead>

      <section className="sec">
        <div className="wrap split">
          <Head title="You can come to us with">A clear brief helps, but it isn’t required. Discovery is part of the work.</Head>
          <ul className="lines lines-lg">{starts.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      <section className="sec sec-ink on-dark">
        <div className="wrap">
          <Head title="Our development process">Seven steps. Each one ends with something you can look at, use or decide on.</Head>
          <ProcessRail />
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <Head title="What can be combined" />
          <div className="prose">
            <p>A custom solution may be software alone. It may also be a physical product with an enclosure, a screen, sensors, peripherals, an AI model and a service behind it.</p>
            <p>Existing EMOQA platforms can be used as a starting point where they help: kiosk hardware, signage delivery, conversational AI, verification, offline operation. Where they don’t, we start fresh.</p>
          </div>
        </div>
      </section>

      <ClosingCta href={inquire("custom-solution")} secondary={{ label: "Explore Our Products", href: "/products" }} />
    </>
  );
}
