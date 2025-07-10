import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const InnovationSection = () => {
  const { t } = useTranslation();
  const router = useRouter()
  return (
    <section className="innovation_section common_section">
      <Container>
        <Row>
          <Col lg={6}>
            <h2>
              <span>{t("Tod")}</span>{" "}
              {t("Innovative IT Solutions for a Smarter Tomorrow")}
            </h2>
          </Col>
          <Col lg={6}>
            <h3>
              {t(
                "We design advanced digital solutions tailored to Saudi businesses — simplifying operations, enhancing performance, and supporting Vision 2030 goals."
              )}
            </h3>
            <button type="button" onClick={()=>router.push('/about-us')}>{t("Read More >>")}</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InnovationSection;
