import Title from "@/components/common/Title";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const AboutUsSection = ({ data }) => {
    const { t } = useTranslation();
  const { image, title, description, tags } = data || {};
  return (
    <section className="common_section about_us_section">
      <Container>
        <Row className="inner_row">
          <Col lg={5}>
            <div className="left_section">
              {image && (
                <Image src={image} width={446} height={390} alt={title} />
              )}
            </div>
          </Col>
          <Col lg={7}>
            <div className="right_section">
              <Title title={t("About Us")} />
              {description?.length > 0 &&
                description?.map((item) => (
                  <p key={item} className="desc">
                    {t(item)}
                  </p>
                ))}
              {/* TAGS */}
              <div className="tags">
                {tags?.map((item) => (
                  <div key={item?.label} className="single_tag">
                    <h2>{t(item?.label)}</h2>
                    <p style={{maxWidth:item?.maxSubTitleWidth ? item?.maxSubTitleWidth : "auto"}}>{t(item?.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsSection;
