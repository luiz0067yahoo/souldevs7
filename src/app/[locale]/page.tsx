"use client";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"));
const MainBanner = dynamic(() => import("./components/MainBanner"));
const About = dynamic(() => import("./components/About"));
const OurWorks = dynamic(() => import("./components/OurWorks"));
const Services = dynamic(() => import("./components/Services"));

const Team = dynamic(() => import("./components/Team"));

const GoTop = dynamic(() => import("./components/GoTop"));

const Partner = dynamic(() => import("./components/Partner"));
const Footer = dynamic(() => import("./components/Footer"));

//@ts-ignore
export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <Team />

      <OurWorks />

      <Partner />
      <GoTop />
      <Footer />
    </>
  );
}
