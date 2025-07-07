import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const OurProjects = () => {
  const { t } = useTranslation();
  return (
    <section className="our_projects common_section">
      <Container>
        <Title title={t("Explore Our Projects")} />
        <SubTitle subTitle={t("What Do We Offer?")} />
        <div className="inner_section">
          
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
