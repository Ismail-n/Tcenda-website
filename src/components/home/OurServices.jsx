import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/homeData";
import { useKeenSlider } from "keen-slider/react";

const OurServices = () => {
  const { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
      spacing: 30,
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const groupedSlides = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedSlides.push(services.slice(i, i + 3));
  }

  return (
    <section className="common_section our_services">
      <Container>
        <Title title={t("Our Services")} />
        <SubTitle subTitle={t("Solutions Designed for the Saudi Market")} />
        {/* <div className="sub_title_2_div">
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
        </div> */}
        {/* DESKTOP */}
        <div className="d-none d-md-block">
          <Row className="services_row">
            {services?.map((item) => (
              <ServiceCard item={item} t={t} key={item.title} />
            ))}
            <Col lg={4}>
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
        </div>
        {/* MOBILE */}
        <div className="d-md-none">
          <div className="services_row mobile_services_row">
            <div className="services_slider_wrapper">
              <div ref={sliderRef} className="keen-slider">
                {groupedSlides.map((group, idx) => (
                  <div className="keen-slider__slide" key={idx}>
                    <div className="slide_group_row">
                      {group.map((item) => (
                        <ServiceCard item={item} t={t} key={item.title} />
                      ))}
                      {idx === 2 && (
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
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="common_dots">
                {groupedSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => instanceRef.current?.moveToIdx(idx)}
                    className={`dot ${currentSlide === idx ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
