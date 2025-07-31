import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { thirdPartIntegrationsLogos, thirdPartyServicesData } from "@/data/homeData";

const ThirdPartyServices = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  // Track hovered logo as a combination of index and logoIndex
  const [hovered, setHovered] = useState({ serviceIdx: null, logoIdx: null });

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
          <Col lg={12} md={12} xs={12}>
            <div className="integrations_cards_wrapper">
              <div className="single_service_logo">
                {thirdPartIntegrationsLogos.map((service, serviceIdx) => (
                 
                    service.logos.map((logo, logoIdx) => {
                      const isHovered =
                        hovered.serviceIdx === serviceIdx &&
                        hovered.logoIdx === logoIdx;

                      const imageSrc = isHovered
                        ? `/images/home/thirdPartyServices/${service.rootfolder}/${logo}Hover.svg`
                        : `/images/home/thirdPartyServices/${service.rootfolder}/${logo}.svg`;

                      return (
                        <div
                          key={logoIdx}
                          className={`logo-item`}
                          onMouseEnter={() => setHovered({ serviceIdx, logoIdx })}
                          onMouseLeave={() => setHovered({ serviceIdx: null, logoIdx: null })}
                        >
                          <Image
                            src={imageSrc}
                            alt={`${logo} logo`}
                            width={140}
                            height={40}
                          />
                        </div>
                      );
                    })
                ))}
              </div>
              <a href="#" className="main_btn text-center d-block mx-auto">{t('See More')}</a>
            </div>
          </Col>
          {/* {thirdPartyServicesData.map((service, serviceIdx) => (
            <Col md={6} xs={12} key={serviceIdx} className="service_card_grid_item">
              <div className="service-card-wrapper">
                <h5 className={language === "ar" ? "rtl" : ""}>{t(service.title)}</h5>
                <div className="single_service_logo">
                  {service.logos.map((logo, logoIdx) => {
                    const isHovered =
                      hovered.serviceIdx === serviceIdx &&
                      hovered.logoIdx === logoIdx;

                    const imageSrc = isHovered
                      ? `/images/home/thirdPartyServices/${service.rootfolder}/${logo}Hover.svg`
                      : `/images/home/thirdPartyServices/${service.rootfolder}/${logo}.svg`;

                    return (
                      <div
                        key={logoIdx}
                        className={`logo-item`}
                        onMouseEnter={() => setHovered({ serviceIdx, logoIdx })}
                        onMouseLeave={() => setHovered({ serviceIdx: null, logoIdx: null })}
                      >
                        <Image
                          src={imageSrc}
                          alt={`${logo} logo`}
                          width={140}
                          height={40}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          ))} */}
        </Row>


      </Container>
    </section>
  );
};

export default ThirdPartyServices;
