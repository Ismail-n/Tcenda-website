import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import Services from "@/components/ourServices/Services";
import TopSection from "@/components/ourServices/TopSection";
import SEO from "@/components/SEO";
import { metaData } from "@/data/metaInformationData";
import { servicesData } from "@/data/servicesData";
import React, { useState } from "react";
export async function getStaticProps() {
  const path = "/our-services/";
  const meta = metaData.find(m => m.path === path)?.details || {};

  return {
    props: { meta },
  };
}

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
