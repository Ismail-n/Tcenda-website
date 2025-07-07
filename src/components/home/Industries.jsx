import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

const industries = [
  { icon: "foodBeverage", title: "Food & Beverage" },
  { icon: "eCommerce", title: "eCommerce & Retail" },
  { icon: "transportation", title: "Transportation" },
  { icon: "realEstate", title: "Real Estate" },
  { icon: "government", title: "Government" },
  { icon: "healthCare", title: "Healthcare" },
];

const Industries = () => {
  const { t } = useTranslation();

  return (
    <section className="industries common_section">
      <Container>
        <Title title={t("Industries")} />
        <SubTitle subTitle={t("Industry Solutions Built for local Market")} />
        <div className="sub_title_2_div">
          <p className="sub_title_2">
            {t(
              "We understand the unique digital needs of the Saudi market — from food delivery apps to secure healthcare systems to Real Estate Solutions or the ever growing local market."
            )}
          </p>
        </div>
        <Row className="industries_row">
          {industries.map((item) => (
            <IndustryCard item={item} key={item.title} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Industries;

const IndustryCard = ({ item }) => {
  const { icon, title } = item || {};
  const { t } = useTranslation();
  return (
    <Col lg={4}>
      <div className="single_industry">
        <Image
          src={`/images/icons/industries/${icon}.svg`}
          width={64}
          height={64}
          alt={t(title)}
        />
        <h3>{t(title)}</h3>
      </div>
    </Col>
  );
};
