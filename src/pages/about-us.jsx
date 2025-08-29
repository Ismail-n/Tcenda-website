import AboutUsSection from "@/components/aboutUs/AboutUsSection";
import OurValues from "@/components/aboutUs/OurValues";
import OurVisionMission from "@/components/aboutUs/OurVisionMission";
import TopSection from "@/components/aboutUs/TopSection";
import Clients from "@/components/home/Clients";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import { metaData } from "@/data/metaInformationData";
import React from "react";
export async function getStaticProps() {
  const path = "/about-us/";
  const meta = metaData.find(m => m.path === path)?.details || {};

  return {
    props: { meta },
  };
}

const AboutUs = () => {
  return (
    <>
      <main className="about_us">
        <TopSection />
        <AboutUsSection />
        <OurVisionMission />
        <OurValues />
        <Clients />
        <ConsultOurExperts />
      </main>
    </>
  );
};

export default AboutUs;
