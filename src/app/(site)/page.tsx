import type { Metadata } from "next";
import HeroArea from "@/components/HeroArea";
import Features from "@/components/Features";
import About from "@/components/About";
import WorkProcess from "@/components/WorkProcess";
import Screens from "@/components/Screens";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Image from "next/image";

export const metadata: Metadata = {
  title: "PlayShop - Play, Shop, and Earn",
  description:
    "PlayShop is an innovative platform merging sports gaming with interactive shopping experiences.",
};

export default function Home() {
  return (
    <div className="">
      <Image
        src="/images/hero/lines.png"
        alt="PlayShop background"
        width={100}
        height={100}
        unoptimized
        className="absolute left-[45%] top-3 h-[130vh] w-full -translate-x-1/2 object-fill object-center"
      />
      <HeroArea />
      <Features />
      <About />
      <WorkProcess />
      <Screens />
      <Cta />
      <Faq />
      <Clients />
      <Contact />
    </div>
  );
}
