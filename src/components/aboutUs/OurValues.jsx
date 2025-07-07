import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const coreValues = [
  {
    id: 1,
    icon: "innovation",
    title: "Innovation with Purpose",
    description: "We build smart solutions that solve real problems.",
  },
  {
    id: 2,
    icon: "customerFirstApproach",
    title: "Customer-First Approach",
    description: "Your goals guide everything we create.",
  },
  {
    id: 3,
    icon: "quality",
    title: "Quality-Driven",
    description: "We focus on performance, reliability, and clean design.",
  },
  {
    id: 4,
    icon: "agile",
    title: "Agile & Adaptive",
    description: "We focus on performance, reliability, and clean design.",
  },
  {
    id: 5,
    icon: "transparent",
    title: "Transparent & Honest",
    description: "Clear communication, always.",
  },
  {
    id: 6,
    icon: "customerFirst",
    title: "Customer First",
    description: "We listen, respond, and deliver with integrity.",
  },
];

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <section className="our_values">
      <Container>
        <Row>
          <div className="inner_section">
            <h2>{t("Our Values")}</h2>
            <h3>
              {t(
                "At TOD, our work is driven by a strong set of core values that define who we are and how we deliver:"
              )}
            </h3>
            <div className="core_values">
              {coreValues?.map((item) => (
                <CoreValueCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default OurValues;

const CoreValueCard = ({ item }) => {
  const { t } = useTranslation();
  const { icon, title, description } = item || {};
  return (
    <div className="single_value">
      <div className="icon">
        <Image
          src={`/images/icons/ourValues/${icon}.svg`}
          width={40}
          height={40}
          alt=""
        />
      </div>
      <div className="content">
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
      </div>
    </div>
  );
};
