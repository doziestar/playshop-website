import type { Metadata } from "next";
import HeroArea from "@/components/HeroArea";
import Features from "@/components/Features";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
// import Pricing from "@/components/Pricing";
import Screens from "@/components/Screens";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Playshop - Play with your friends",
  description: "Playshop is a platform for playing games with your friends",
};

export default function Home() {
  return (
    <div className="">
      <Image
        src="/images/hero/lines.png"
        alt="Playshop Landing page "
        width={100}
        height={100}
        unoptimized
        className=" absolute left-[45%] top-3 h-[130vh] w-full -translate-x-1/2 object-fill object-center "
      />
      <HeroArea />
      <Features />
      <About />
      <WorkProcess />
      <Screens />
      <Cta />
      {/* <Testimonials /> */}
      <Faq />
      <Clients />
      <Contact />
    </div>
  );
}
