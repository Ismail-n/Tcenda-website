import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import Services from "@/components/ourServices/Services";
import TopSection from "@/components/ourServices/TopSection";
import SEO from "@/components/SEO";
import React, { useState } from "react";

const servicesData = [
  {
    id: "mobile-app",
    mainTitle: "Mobile Solutions Built for Growth in Saudi Arabia",
    mainSubTitle:
      "Empower your business with expertly crafted mobile applications tailored to the needs, goals, and digital ambitions of Saudi enterprises.",
    title: "Mobile App Development",
    subtitle: "Mobile Apps That Drive Real Impact in the Kingdom",
    description:
      "Unleash the power of custom-built mobile solutions made for Saudi businesses. At TOD, we specialize in designing secure, scalable mobile apps that reflect local user behavior, support Arabic UX, and comply with KSA's digital and data privacy standards.",
    categories: [],
    techStack: [],
    overview: {
      image: "mobileAppOverviewBg",
      heading: "Mobile Apps to have Real Impact in the Kingdom",
      paragraphs: [
        "Unleash the power of custom-built mobile solutions made for Saudi businesses. At TOD, we specialize in delivering secure, scalable mobile apps that reflect local user behavior, support Arabic UI, and comply with KSA’s digital and data privacy standards.",
        "From digital banking to food delivery, government portals to ecommerce platforms — we develop mobile apps that are more than functional — they are strategic assets in your digital transformation journey.",
      ],
    },
  },
  {
    id: "full-stack",
    mainTitle: "Innovative Services to Power Your Growth",
    mainSubTitle:
      "Unlock new possibilities with us — through cutting-edge technology, expert guidance, and solutions tailored to your business goals.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
  {
    id: "cloud-services",
    mainTitle: "Power your business with smart, scalable cloud services.",
    mainSubTitle:
      "Modernize your infrastructure and accelerate digital transformation with end-to-end cloud consulting, deployment, and management.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
  {
    id: "ai-ml",
    mainTitle: "AI & ML Solutions That Drive Innovation in Saudi Arabia",
    mainSubTitle:
      "We help Saudi organizations harness Artificial Intelligence and Machine Learning to accelerate transformation, automate workflows, and lead in a data-first economy.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
  {
    id: "data-analytics",
    mainTitle: "Transforming Data into Strategic Value",
    mainSubTitle:
      "Leverage the power of analytics to make informed decisions, uncover hidden opportunities, and lead with confidence.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
  {
    id: "ui-ux",
    mainTitle: "Digital Interfaces Designed for local Audience",
    mainSubTitle:
      "Crafted experiences that are beautiful, functional, and culturally aligned.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
  {
    id: "odoo",
    mainTitle: "Flexible Odoo Solutions Tailored for Saudi Business Needs",
    mainSubTitle:
      "Unlock operational efficiency, automate workflows, and stay fully compliant with local regulations all on Odoo.",
    title: "",
    subtitle: "",
    description: "",
    categories: [],
    techStack: [],
    overview: {},
  },
];

const OurServices = () => {
  const [activeServiceTab, setActiveServiceTab] = useState("mobile-app");
  const [selectedService, setSelectedService] = useState(servicesData[0] || {});

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore the full range of services offered by TOD — from mobile app and full-stack development to AI/ML, cloud solutions, UI/UX design, and Odoo customisation tailored to your business needs."
      />
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
