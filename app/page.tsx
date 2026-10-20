import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Services />
      <Industries />
      <Process />
      <CTA />
    </>
  );
}
