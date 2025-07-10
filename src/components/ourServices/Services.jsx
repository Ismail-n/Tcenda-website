import { servicesTabs } from "@/data/servicesData";
import Image from "next/image";
import React, { useEffect, useState, useTransition } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = ({ selectedService, servicesData, setSelectedService }) => {
  const { t } = useTranslation();
  const [activeServiceTab, setActiveServiceTab] = useState(
    servicesData?.[0]?.id
  );

  const { overview, categories, techStack } = selectedService || {};

  const handleTabChange = (id) => {
    setActiveServiceTab(id);
    const newService =
      servicesData?.find((service) => service?.id === id) || {};
    setSelectedService(newService);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedService]);

  return (
    <section
      className={`services_section`}
      id={`${selectedService?.id}_service`}
    >
      <Container>
        <div className="services_tab">
          {servicesTabs?.map(({ id, text }) => (
            <button
              type="button"
              key={id}
              className={`${id === activeServiceTab ? "active" : ""}`}
              onClick={() => handleTabChange(id)}
              aria-label={`${t("Switch to")} ${t(text)} ${t("services")}`}
            >
              {t(text)}
            </button>
          ))}
        </div>

        <div className="services_inner">
          <div className="text-center">
            <h2 className="top_section_title">{t(selectedService?.title)}</h2>
            <p className="top_section_sub_title">
              {t(selectedService?.subtitle)}
            </p>
          </div>
        </div>

        {/* TECH CATEGORIES */}
        <div className="service_categories">
          <Row>
            {categories?.map((item) => (
              <ServiceTechCard key={item?.title} item={item} />
            ))}
          </Row>
        </div>

        {/* TECH STACKS */}
        <div className="tech_stack_titles">
          <div className="text-center">
            <h2 className="top_section_title">{t(techStack?.title)}</h2>
            <p className="top_section_sub_title">{t(techStack?.subtitle)}</p>
          </div>
        </div>
        <div className="tech_stacks">
          <Row>
            {techStack?.technologies?.map((item) => (
              <TechCard key={item?.title} item={item} />
            ))}
          </Row>
        </div>

        {/* OVERVIEW */}
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
              {overview?.isShowUlList && (
                <ul>
                  {overview?.ulList?.map((list) => (
                    <li key={list}>{t(list)}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Services;

const ServiceTechCard = ({ item }) => {
  const { icon, title, subtitle, titleMaxWidth } = item || {};
  const { t } = useTranslation();
  return (
    <Col lg={4}>
      <div className="single_tech_card">
        <Image
          src={`/images/services/${icon}.svg`}
          width={48}
          height={48}
          alt={title}
        />
        <h2 style={{ maxWidth: titleMaxWidth ? titleMaxWidth : "auto" }}>
          {t(title)}
        </h2>
        <p>{t(subtitle)}</p>
      </div>
    </Col>
  );
};

const TechCard = ({ item }) => {
  const { icon, title } = item || {};
  const { t } = useTranslation();
  return (
    <Col lg={3}>
      <div className="single_tech">
        <Image
          src={`/images/services/${icon}.svg`}
          alt={title}
          width={48}
          height={48}
        />
        <h2>{t(title)}</h2>
      </div>
    </Col>
  );
};
