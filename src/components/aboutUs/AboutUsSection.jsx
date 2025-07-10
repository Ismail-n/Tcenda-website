import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { riseValues } from "@/data/aboutUsData";

const AboutUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="about_us_section common_section">
      <Container>
        <Title title={t("About Us")} />
        <SubTitle
          subTitle={t("Tod Innovative IT Solutions for a Smarter Tomorrow")}
        />
        <div className="inner_desc">
          <p>
            {t(
              "At TOD, we specialize in delivering innovative, scalable, and intelligent technology solutions designed to fuel real business growth. Our team thrives on solving complex challenges with clarity and creativity — blending cutting-edge tech with strategic thinking. We believe great solutions start with great understanding, which is why we take a user-centric approach to everything we build."
            )}
          </p>
          <p>
            {t(
              "From digital transformation to automation and product development, we partner with forward-thinking companies to craft experiences that not only perform but also evolve with the changing demands of the digital world. With TOD, you're not just investing in technology — you're investing in a smarter, more adaptable future."
            )}
          </p>
          <p>
            {t(
              "Whether it's custom software, AI integration, or enterprise solutions"
            )}
          </p>
          <p>{t("— We're here to build what's next.")}</p>
        </div>
        <div className="rise_section">
          <p>
            {t(
              "Our core strategic pillars are defined by R.I.S.E., reflecting our mission to elevate Saudi enterprises with responsible, intelligent, and sustainable digital innovation:"
            )}
          </p>
          <Row className="rise_row">
            {riseValues?.map((item) => (
              <RiseCard key={item.id} item={item} />
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsSection;

const RiseCard = ({ item }) => {
  const { t } = useTranslation();
  const { letter, title, description } = item || {};
  return (
    <Col lg={3} md={6}>
      <article className="single_rise">
        <Image
          src={`/images/aboutUs/${letter}.svg`}
          width={102}
          height={115}
          alt={`${letter} - ${t(title)}`}
        />
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </article>
    </Col>
  );
};
