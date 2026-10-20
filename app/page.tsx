import Hero from "@/components/sections/Hero";
import MarqueeBar from "@/components/sections/MarqueeBar";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Stats from "@/components/sections/Stats";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <Products />
      <Services />
      <Industries />
      <Stats />
      <Process />
      <CTA />
    </>
  );
}
