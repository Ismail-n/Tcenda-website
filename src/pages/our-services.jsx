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
        "Unleash the power of custom-built mobile solutions made for Saudi businesses. At TOD, we specialize in delivering secure, scalable mobile apps that reflect local user behavior, support Arabic UI, and comply with KSA's digital and data privacy standards.",
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
    overview: {
      image: "fullStackOverview",
      heading: "Mobile Solutions that Deliver — With Us",
      paragraphs: [
        "Unlock the power of mobile with expertly crafted, high-performance applications tailored to your business needs. At TOD, we specialize in designing and developing custom mobile apps that are intuitive, scalable, and built to deliver real results.Whether you're launching a new product, streamlining internal operations, or enhancing customer engagement, our mobile solutions are designed to meet your goals. We work across iOS and Android platforms, using the latest technologies and frameworks to ensure speed, stability, and stunning UI/UX. From strategy and prototyping to development and deployment — we guide you at every step. With TOD, your mobile app isn't just a tool, it's a growth engine.",
      ],
    },
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
    overview: {
      image: "cloudServiceOverview",
      heading: "Mobile-First Cloud Solutions for the Saudi Market",
      paragraphs: [
        "Our mobile solutions are designed to support digital-native users and enterprise workflows across sectors like finance, logistics, and retail. With full Arabic UI support, offline functionality, and data protection by default — your app becomes a strategic business tool.",
      ],
    },
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
    overview: {
      image: "aimlOverview",
      heading: "Mobile AI for designed specially for Saudi Consumers",
      paragraphs: [
        "AI isn't limited to dashboards. We embed it into mobile apps for finance, eCommerce, and logistics across Saudi Arabia — delivering intelligent, real-time decisioning and on-device ML that scales with your business needs.",
      ],
    },
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
    overview: {
      image: "dataAnalyticsOverview",
      heading: "Why Data Analytics Matters in Saudi Arabia?",
      paragraphs: [
        "In a data-rich economy like the Kingdom, successful businesses don't just collect data — they know how to use it.",
        "Our solutions are designed for Saudi enterprises, enabling:",
      ],
      isShowUlList: true,
      ulList: [
        "Real-time performance monitoring",
        "Customer behavior insights across Arabic & English platforms",
        "Strategic dashboards for executives",
        "Regulatory reporting tailored to Saudi compliance standards",
      ],
    },
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
    overview: {
      image: "uiuxOverview",
      heading: "Design an Experience That Speaks to local Users",
      paragraphs: [
        "Your digital product isn't global unless it's locally relevant. Let us help you build it right.",
      ],
    },
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
    overview: {
      image: "odooOverview",
      heading: "Odoo Solutions That Empower",
      paragraphs: [
        "Unlock the full potential of your business operations with expertly tailored Odoo solutions. At TOD, we specialize in implementing and customizing Odoo ERP systems designed to match the unique needs of Saudi businesses",
        "Whether you're streamlining accounting, optimizing inventory, managing sales, or integrating HR and payroll — our Odoo services are built for speed, flexibility, and compliance with local regulations. We work across industries, supporting Arabic language, RTL layouts, and integrations with Saudi payment gateways and logistics providers",
        "From discovery and customization to deployment and ongoing support — we guide you at every step. With TOD, your ERP system isn't just software — it's a foundation for sustainable growth in the Kingdom.",
      ],
    },
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
