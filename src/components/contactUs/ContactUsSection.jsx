import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ContactFormSection from "./ContactFormSection";

const ContactUsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="our_values">
      <Container>
        <Row>
          <div className="inner_section">
            <div className="left_content">
              <section className="contact_info_section">
                <Container>
                  <div className="info_wrapper">
                    <h2 className="headline">
                      {t("Let's Build Something Great Here In")}

                      <span className="highlight">{t("Saudi Arabia")}</span>
                    </h2>

                    <div className="location_block">
                      <h5>{t("Location")}</h5>
                      <div className="icon_text">
                        <Image
                          src={`/images/icons/location.svg`}
                          width={24}
                          height={24}
                          alt="location"
                        />
                        <p>
                          {t("Eraija Dist.., P.O.Box : 6597,")}
                          <br />

                          {t("Riyadh Eraija Dist.")}
                        </p>
                      </div>
                    </div>

                    <div className="contact_block">
                      <h5>{t("Contact Us")}</h5>
                      <div className="icon_text">
                        <Image
                          src={`/images/icons/call.svg`}
                          width={24}
                          height={24}
                          alt="location"
                        />
                        <p>{t("+966 1 4323949")}</p>
                      </div>
                      <div className="icon_text">
                        <Image
                          src={`/images/icons/sms.svg`}
                          width={24}
                          height={24}
                          alt="location"
                        />
                        <p>{t("todinfo@tod.com")}</p>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
            <div className="contact_form_section">
              <ContactFormSection />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUsSection;
