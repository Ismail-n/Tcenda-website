import AboutUsSection from "@/components/aboutUs/AboutUsSection";
import OurValues from "@/components/aboutUs/OurValues";
import OurVisionMission from "@/components/aboutUs/OurVisionMission";
import TopSection from "@/components/aboutUs/TopSection";
import Clients from "@/components/home/Clients";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import SEO from "@/components/SEO";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about TOD — our vision, mission, and the passionate team behind our innovative digital experiences. We're committed to excellence and forward-thinking solutions."
      />
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
