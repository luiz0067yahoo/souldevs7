import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Layouts/Navbar"));
const MainBanner = dynamic(() => import("../components/ItAgency/MainBanner"));
const About = dynamic(() => import("../components/DefaultHome/About"));
const OurWorks = dynamic(() => import("../components/DefaultHome/OurWorks"));
const Services = dynamic(() => import("../components/DefaultHome/Services"));
const Feedback = dynamic(() => import("../components/Common/Feedback"));
const Team = dynamic(() => import("../components/Common/Team"));
const FunFacts = dynamic(() => import("../components/Common/FunFacts"));
const LatestNewsSlider = dynamic(
  () => import("../components/Common/LatestNewsSlider")
);
const CtaArea = dynamic(() => import("../components/Common/CtaArea"));
const Partner = dynamic(() => import("../components/Common/Partner"));
const Footer = dynamic(() => import("../components/Layouts/Footer"));
const WorkProcess = dynamic(
  () => import("../components/DefaultHome/WorkProcess")
);

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <Services />

      <About />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <Team />

     

      <Partner />

      <Footer />
    </>
  );
}
