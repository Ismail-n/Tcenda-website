import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { serviceModels } from "@/data/homeData";

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
