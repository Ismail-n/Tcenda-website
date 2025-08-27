import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import Services from "@/components/ourServices/Services";
import TopSection from "@/components/ourServices/TopSection";
import SEO from "@/components/SEO";
import { servicesData } from "@/data/servicesData";
import React, { useState } from "react";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0] || {});

  return (
    <>
      <main className="our_services">
        <TopSection selectedService={selectedService} />
        <Services
          servicesData={servicesData}
          setSelectedService={setSelectedService}
          selectedService={selectedService}
        />
        <Industries />
        <ConsultOurExperts />
      </main>
    </>
  );
};

export default OurServices;
