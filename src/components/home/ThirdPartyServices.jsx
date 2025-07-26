import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { thirdPartyServicesData } from "@/data/homeData"; // import your array

const ThirdPartyServices = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <section className="thirdPartyServices common_section">
      <Container>
        <Title title={t("Vision Meets Enablement")} />
        <SubTitle
          subTitle={t(
            "Powering real-world impact by integrating mission-critical services — securely and seamlessly."
          )}
        />

        <Row className="thirdPartyServicesCards">
          {thirdPartyServicesData.map((service, index) => (
            <Col md={6} xs={12} key={index}>
              <div className="service-card-wrapper">
                <h5>{t(service.title)}</h5>
                <div className="single_service_logo">
                  {service.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className="logo-item">
                      <Image
                        src={`/images/home/thirdPartyServices/${service.rootfolder}/${logo}.svg`}
                        alt={`${logo} logo`}
                        width={144}
                        height={80}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ThirdPartyServices;
