import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ProjectsCarousel from "@/components/sections/ProjectsCarousel";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ProjectsCarousel />
      <Services />
      <Testimonials />
      <Industries />
      <Process />
      <CTA />
    </>
  );
}
