import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const servicesTabs = [
  { id: 1, text: "Mobile App Development" },
  { id: 2, text: "Full-Stack Development" },
  { id: 3, text: "Cloud Services" },
  { id: 4, text: "AI/ML" },
  { id: 5, text: "Data Analytics" },
  { id: 6, text: "UI/UX Design & Prototyping" },
  { id: 7, text: "Odoo Development & Customisation" },
];

const Services = () => {
  const { t } = useTranslation();
  const [activeServiceTab, setActiveServiceTab] = useState(1);

  return (
    <section className="services_section">
      <Container>
        <div className="services_tab">
          {servicesTabs?.map(({ id, text }) => (
            <button
              type="button"
              key={id}
              className={`${id === activeServiceTab ? "active" : ""}`}
              onClick={() => setActiveServiceTab(id)}
            >
              {t(text)}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
