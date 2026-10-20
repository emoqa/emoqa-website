import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Emoqa — Where Emotion Meets Excellence",
  description:
    "Emoqa is a full-stack business solution company. From Defence to MNCs — 100+ products delivered across hardware, software, AI, IoT, and everything between.",
  keywords:
    "business solutions, IoT, AI agents, healthcare kiosk, digital signage, android app development, software development India",
  openGraph: {
    title: "Emoqa — Where Emotion Meets Excellence",
    description:
      "100+ innovative products delivered across Defence, Finance, Healthcare, Agriculture and more. Hardware + Software + AI, all under one roof.",
    url: "https://www.emoqa.in",
    siteName: "Emoqa",
    images: [{ url: "/logo-full.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1D1D1F]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
