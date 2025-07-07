import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: "mobileApp",
    title: "Mobile App Development",
    description:
      "We transform your ideas into sleek, high-performance mobile apps built for scale. Whether iOS or Android, our solutions are tailored to deliver seamless user experiences and drive business results.",
  },
  {
    icon: "web",
    title: "Full Stack Development",
    description:
      "From complex enterprise systems to cloud-based SaaS platforms, we build robust, scalable software that simplifies operations, enhances agility, and supports long-term growth.",
  },
  {
    icon: "cloudService",
    title: "Cloud Services",
    description:
      "Secure your digital ecosystem with our end-to-end cybersecurity services—vulnerability assessments, threat monitoring, data protection, and regulatory compliance tailored to your industry.",
    maxTitleWidth: 115,
  },
  {
    icon: "ai",
    title: "AI & Machine Learning",
    description:
      "Leverage the power of AI to make smarter decisions, personalize customer experiences, and automate critical workflows. Our solutions turn data into intelligent action.",
  },
  {
    icon: "dataAnalytics",
    title: "Data Analytics",
    description:
      "Make sense of your data with powerful dashboards, real-time reporting, and predictive analytics. We help you uncover insights that inform strategy and improve performance.",
    maxTitleWidth: 115,
  },
  {
    icon: "ui",
    title: "UI/UX Design and Prototyping",
    description:
      "We design user-focused digital interfaces and experiences that combine visual appeal with ease of use, enhancing engagement and increasing conversion rates.",
    maxTitleWidth: 211,
  },
  {
    icon: "odoo",
    title: "Odoo Development and Customization",
    description:
      "Adapt Odoo to your business with tailored modules, features, and workflows for better efficiency and control.",
  },
];

const OurServices = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section our_services">
      <Container>
        <Title title={t("Our Services")} />
        <SubTitle subTitle={t("Solutions Designed for the Saudi Market")} />
        <div className="sub_title_2_div">
          <p className="sub_title_2">
            {t(
              "Partner with us to bring your ideas to life, overcome tech challenges, and keep your systems running strong."
            )}
          </p>
          <p className="sub_title_2">
            {t(
              "From ideation to execution, we partner with Saudi brands to deliver digital excellence."
            )}
          </p>
        </div>
        <Row className="services_row">
          {services?.map((item) => (
            <ServiceCard item={item} t={t} key={item.title} />
          ))}
          <Col lg={8}>
            <div className="explore_services">
              <div className="gradient_effect"></div>
              <div className="content">
                <h2>{t("Let's Build Something Amazing")}</h2>
                <Link href="/our-services">
                  <button type="button" className="service_btn">
                    {t("Explore Services")} <ArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurServices;

const ServiceCard = ({ item, t }) => {
  const { icon, title, description, maxTitleWidth } = item || {};
  return (
    <Col lg={4}>
      <div className="single_service">
        <Image
          src={`/images/icons/services/${icon}.svg`}
          width={48}
          height={48}
          alt={t(title)}
        />
        <h2 style={item.maxTitleWidth ? { maxWidth: item.maxTitleWidth } : {}}>
          {t(title)}
        </h2>
        <p>{t(description)}</p>
      </div>
    </Col>
  );
};
