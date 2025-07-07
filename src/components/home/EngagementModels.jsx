import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const serviceModels = [
  {
    icon: "project",
    title: "Fixed Scope Projects",
    description:
      "Ideal for well-scoped initiatives with clear timelines and budgets",
    points: [
      "Skilled experts across all technologies and domains",
      "Transparent execution with detailed milestones",
      "Time-bound delivery that ensures long-term impact",
    ],
  },
  {
    icon: "managedService",
    title: "Managed Services",
    description: "Perfect for businesses seeking round-the-clock reliability",
    points: [
      "24/7 monitoring for seamless uptime",
      "Cost-efficient innovation for evolving needs",
      "Scalable support tailored to your operational goals",
    ],
  },
  {
    icon: "staff",
    title: "Staff Augmentation",
    description:
      "Best suited for teams needing expert skills without long hiring cycles",
    points: [
      "On-demand specialists across roles and tech stacks",
      "Seamless integration into your existing teams",
      "Transparent management and measurable outcomes",
    ],
  },
];

const EngagementModels = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section engagement_models">
      <Container>
        <Title title={t("Our Engagement Models")} />
        <SubTitle
          subTitle={t(
            "Choose how you work with us — flexible, scalable, and always aligned with your needs."
          )}
        />
        <Row className="models_cards">
          {serviceModels?.map((item, index) => (
            <EngagementCard item={item} key={index} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default EngagementModels;

const EngagementCard = ({ item }) => {
  const { t } = useTranslation();
  const { icon, title, description, points } = item || {};
  return (
    <Col lg={4}>
      <div className="single_card">
        <div className="gradient_effect"></div>
        <Image
          src={`images/icons/engagementModels/${icon}.svg`}
          width={64}
          height={64}
          alt={icon || "engagement icon"}
        />
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
        <div className="points">
          {points?.map((point, index) => (
            <div className="single_point" key={index}>
              <Image
                src={"/images/icons/tick.svg"}
                width={24}
                height={24}
                alt="tick"
              />
              <h3>{t(point)}</h3>
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};
