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
        <Row className="mx-0">
          <div className="inner_section">
            <div className="left_content">
              <section className="contact_info_section">
                <div className="info_wrapper">
                  <h2 className="headline">
                    {t("Let's Build Something Great Here In Saudi Arabia")}

                    {/* <span className="highlight">{t("Saudi Arabia")}</span> */}
                  </h2>

                  <div className="location_block">
                    <h5>{t("Location")}</h5>
                    <div className="icon_text">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Prince+Mohammed+Ibn+Salman+Ibn+Abdulaziz+Rd,+Ar+Rabi,+Riyadh+13315"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon_text"
                      >
                        <Image
                          src="/images/icons/location.svg"
                          width={24}
                          height={24}
                          alt="location"
                        />
                        <p>
                          {t("Prince Mohammed Ibn Salman Ibn Abdulaziz Rd,")}
                          <br />
                          {t("Ar Rabi, Riyadh 13315")}
                        </p>
                      </a>
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
                      <a href="tel:+966554848908">+966 55 484 8908</a>
                    </div>
                    <div className="icon_text">
                      <Image
                        src={`/images/icons/sms.svg`}
                        width={24}
                        height={24}
                        alt="location"
                      />
                      <a href="mailto:business@tod.com.sa">
                        {t("business@tod.com.sa")}
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <Image
                src="/images/contactUs/mobileContactBg.webp"
                width={333}
                height={201}
                alt="bg vector"
                className="contact_bg_vector d-md-none"
              />
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
