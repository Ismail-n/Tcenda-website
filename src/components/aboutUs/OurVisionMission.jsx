import { ourVisionMission } from "@/data/aboutUsData";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const OurVisionMission = () => {
  const { t } = useTranslation();
  return (
    <section className="our_vision_mission">
      <Container>
        <Row className="inner_row">
          {ourVisionMission?.map(({ id, title, description, className }) => (
            <Col lg={6} key={id}>
              <div className={`inner_section ${className}`}>
                <h3>{t(title)}</h3>
                <p>{t(description)}</p>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="committed_row">
          <div className="inner_section">
            <p>
              <Image
                src="/images/icons/smallDoubleQuotes.svg"
                width={36}
                height={36}
                alt="Double Quotes"
                className="quotes_start"
              />
              {t(
                "At Tod-ul-Ufaq, we are committed to driving Saudi Arabia's digital transformation by delivering smart, scalable, and locally aligned solutions. Guided by Vision 2030, we combine innovation, agility, and a deep understanding of the market to empower businesses and build lasting partnerships. Together,"
              )}
              <br />
              {t("we are shaping what's next.")}
              <Image
                src="/images/icons/smallDoubleQuotes2.svg"
                width={36}
                height={36}
                alt="Double Quotes"
                className="quotes_end"
              />
            </p>
            <h3>{t(" Abdullah, CEO, Tod-ul-Ufaq")}</h3>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default OurVisionMission;
