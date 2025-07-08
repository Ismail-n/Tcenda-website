import Services from "@/components/ourServices/Services";
import TopSection from "@/components/ourServices/TopSection";
import SEO from "@/components/SEO";
import React, { useState } from "react";

const OurServices = () => {
  const [activeServiceTab, setActiveServiceTab] = useState(1);

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the full range of services offered by TOD — from mobile app and full-stack development to AI/ML, cloud solutions, UI/UX design, and Odoo customisation tailored to your business needs."
      />
      <main className="our_services">
        <TopSection />
        <Services />
      </main>
    </>
  );
};

export default OurServices;
