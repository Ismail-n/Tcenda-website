import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const servicesTabs = [
  { id: "mobile-app", text: "Mobile App Development" },
  { id: "full-stack", text: "Full-Stack Development" },
  { id: "cloud-services", text: "Cloud Services" },
  { id: "ai-ml", text: "AI/ML" },
  { id: "data-analytics", text: "Data Analytics" },
  { id: "ui-ux", text: "UI/UX Design & Prototyping" },
  { id: "odoo", text: "Odoo Development & Customisation" },
];

const Services = ({ selectedService, servicesData, setSelectedService }) => {
  const { t } = useTranslation();
  const [activeServiceTab, setActiveServiceTab] = useState(
    servicesData?.[0]?.id
  );

  const { overview } = selectedService || {};

  const handleTabChange = (id) => {
    setActiveServiceTab(id);
    const newService =
      servicesData?.find((service) => service?.id === id) || {};
    setSelectedService(newService);
  };

  return (
    <section className={`services_section`}>
      <Container>
        <div className="services_tab">
          {servicesTabs?.map(({ id, text }) => (
            <button
              type="button"
              key={id}
              className={`${id === activeServiceTab ? "active" : ""}`}
              onClick={() => handleTabChange(id)}
            >
              {t(text)}
            </button>
          ))}
        </div>

        {Object?.keys(overview || {})?.length > 0 && (
          <div className="overview_section common_section">
            <div className="img_section">
              <Image
                src={`/images/services/${overview?.image}.webp`}
                width={500}
                height={556}
                alt="mobile app background"
              />
            </div>

            <div className="content">
              <h2>{t(overview?.heading)}</h2>
              {overview?.paragraphs?.map((para) => (
                <p key={para}>{t(para)}</p>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;
