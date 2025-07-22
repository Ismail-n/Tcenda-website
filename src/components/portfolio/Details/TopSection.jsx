import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = ({ data }) => {
  const { t } = useTranslation();

  const { background, appStoreLinks, title, subtitle, image } = data || {};

  return (
    <div className="top_section" style={{ background }}>
      <Container>
        <Row className="inner_row">
          {/* LEFT */}
          <Col lg={6}>
            <div className="left_section">
              <div className="top_row">
                <h1 className="top_section_title mx-auto">{t(title)}</h1>
                <p className="top_section_sub_title">{t(subtitle)}</p>
              </div>
              
              {/* DESKTOP STORE BUTTONS */}
              <div className="store_btns d-none d-md-block">
                <h2>{t("Available On -")}</h2>
                <div className="buttons">
                  {appStoreLinks?.ios && (
                    <a
                      href={appStoreLinks?.ios || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Download Ashjar Friend on the App Store")}
                    >
                      <Image
                        src="/images/icons/appStore.svg"
                        width={140}
                        height={44}
                        alt="Download on App Store"
                      />
                    </a>
                  )}
                  {appStoreLinks?.android && (
                    <a
                      href={appStoreLinks?.android || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Get Ashjar Friend on Google Play")}
                    >
                      <Image
                        src="/images/icons/playStore.svg"
                        width={140}
                        height={44}
                        alt="Get it on Google Play"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT */}
          <Col lg={6}>
            <div className="right_section">
              {image && (
                <Image
                  src={image}
                  width={550}
                  height={467}
                  alt={t("Ashjar Friend background image")}
                  priority
                />
              )}
              {/* MOBILE STORE BUTTON */}
              <div className="store_btns  d-md-none">
                <div className="buttons">
                  {appStoreLinks?.ios && (
                    <a
                      href={appStoreLinks?.ios || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Download Ashjar Friend on the App Store")}
                    >
                      <Image
                        src="/images/icons/appStore.svg"
                        width={140}
                        height={44}
                        alt="Download on App Store"
                      />
                    </a>
                  )}
                  {appStoreLinks?.android && (
                    <a
                      href={appStoreLinks?.android || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("Get Ashjar Friend on Google Play")}
                    >
                      <Image
                        src="/images/icons/playStore.svg"
                        width={140}
                        height={44}
                        alt="Get it on Google Play"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopSection;
