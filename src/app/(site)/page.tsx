import type { Metadata } from "next";
import HeroArea from "@/components/HeroArea";
import Features from "@/components/Features";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Screens from "@/components/Screens";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Playshop - Play with your friends",
  description: "Playshop is a platform for playing games with your friends",
};

export default function Home() {
  return (
    <>
      <HeroArea />
      <Features />
      <About />
      <WorkProcess />
      <Screens />
      <Cta />
      <Testimonials />
      <Faq />
      <Clients />
      <Contact />
    </>
  );
}
