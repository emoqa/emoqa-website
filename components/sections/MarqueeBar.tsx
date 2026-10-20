"use client";

const tags = [
  "Android Development",
  "iOS Development",
  "Web Applications",
  "IoT Solutions",
  "Artificial Intelligence",
  "Blockchain",
  "AR / VR",
  "Desktop Apps",
  "Healthcare Tech",
  "Digital Signage",
  "Defence Grade",
  "Agricultural Tech",
  "Fintech",
  "Edge Computing",
  "AI Agents",
  "Custom Hardware",
];

export default function MarqueeBar() {
  const doubled = [...tags, ...tags];

  return (
    <div
      className="py-4 overflow-hidden"
      style={{ background: "#F5F5F7", borderTop: "1px solid #E5E5EA", borderBottom: "1px solid #E5E5EA" }}
    >
      <div className="flex marquee-track whitespace-nowrap">
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 mx-4 text-sm font-medium flex-shrink-0"
            style={{ color: "#6E6E73" }}
          >
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: "#3B0F8C" }}
            />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
