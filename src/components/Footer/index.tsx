import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterBottom from "@/components/Footer/FooterBottom";
import { FooterMenu } from "@/types/footerMenu";

const footerNavData: FooterMenu[] = [
  {
    title: "Home",
    navItems: [
      {
        label: "Product",
        route: "#",
      },
      {
        label: "Pricing",
        route: "#",
      },
      {
        label: "Business",
        route: "#",
      },
      {
        label: "Enterprise",
        route: "#",
      },
    ],
  },
  {
    title: "About Us",
    navItems: [
      {
        label: "Company",
        route: "#",
      },
      {
        label: "Leadership",
        route: "#",
      },
      {
        label: "Careers",
        route: "#",
      },
      {
        label: "Diversity",
        route: "#",
      },
    ],
  },
  {
    title: "Resources",
    navItems: [
      {
        label: "Andy Guide",
        route: "#",
      },
      {
        label: "Forum",
        route: "#",
      },
      {
        label: "Support",
        route: "#",
      },
      {
        label: "App Directory",
        route: "#",
      },
    ],
  },
  {
    title: "Tutorial",
    navItems: [
      {
        label: "10 Leadership Styles",
        route: "#",
      },
      {
        label: "Executive Summary Tips",
        route: "#",
      },
      {
        label: "Prevent Team Burnout",
        route: "#",
      },
      {
        label: "What are OKRs?",
        route: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <FooterBottom />
      </footer>
    </>
  );
};

export default Footer;
