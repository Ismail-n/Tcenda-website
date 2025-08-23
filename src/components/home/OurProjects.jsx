import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick"; // ✅ slick slider import
import { portfolios } from "@/data/portfolioData";

const OurProjects = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const projectsToSHow = [
    "ashjar-space",
    "send",
    "half-million",
    "sign",
    "real-estate",
  ];

  const testingDivSetting = {
    arrows: false,
    infinite: true,
    dots: true,
    centerMode: false,
  };

  // Filter and sort portfolios in the specified order
  const filteredPortfolios = projectsToSHow.map(projectId =>
    portfolios.find(portfolio => portfolio.id === projectId)
  ).filter(Boolean); // Remove any undefined items

  const settings = {
    arrows: false,
    infinite: true,
    dots: true,
    centerMode: window.innerWidth <= 991 ? false : true,
    centerPadding: '15%', // Show partial slides on sides
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: language === "ar",
    focusOnSelect: true,
    speed: 300,
    initialSlide: 0, // Start from the first slide
    beforeChange: (_, next) => setCurrentSlide(next),
    customPaging: () => <button />,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          centerPadding: '100%',
          centerMode: true,
        },
      },
      {
        breakpoint: 992, // Large tablets and small desktops
        settings: {
          centerPadding: '0%',
          slidesToShow: 1,
          centerMode: false,


        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          centerPadding: '0%',
          slidesToShow: 1,
          centerMode: false,


        },
      },
      {
        breakpoint: 576, // Mobile devices
        settings: {
          centerMode: false,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <section className="our_projects common_section">
      <Container>
        <Row>
          <Col lg={6}>
            <Title title={t("Explore Our Projects")} />
            <SubTitle subTitle={t("What Do We Offer?")} />
          </Col>
          <Col lg={6}>
            <Link
              href={"/portfolio"}
              className="main_btn text-center d-block mt-4"
            >
              {t("View More")}
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="position-relative wrapper_section">
          <Slider
            {...settings}
            ref={sliderRef}
            className="keen-slider portfolio_inner_section portfolio_slider"
          >
            {filteredPortfolios.map(
              (
                {
                  id,
                  logoDetails,
                  title,
                  description,
                  appStoreLink,
                  playStoreLink,
                  caseStudyLink,
                  imageDetails,
                  background,
                },
                index
              ) => (
                <div key={id} className="slide-wrapper">
                  {console.log(id)}
                  <div
                    className={`portfolio_inner keen-slider__slide ${currentSlide === index ? "active" : ""
                      }`}

                    id={id}
                    style={{
                      background
                    }}
                  >

                    {/* Left Section */}
                    <div className="left">
                      <div className="content">
                        {logoDetails.logo && (
                          <Image
                            src={`/images/portfolio/${logoDetails.logo}.svg`}
                            alt={`${title} Logo`}
                            className={`logo_img`}
                            width={logoDetails.logoWidth}
                            height={logoDetails.logoHeight}
                            priority={index === 0}
                          />
                        )}
                        <h3>{t(title)}</h3>
                        <p>{t(description)}</p>
                        <div className="store_btns d-none d-md-flex">
                          {appStoreLink && (
                            <a
                              href={appStoreLink}
                              aria-label={`Download ${title} on the App Store`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={"/images/icons/appStore.svg"}
                                width={140}
                                height={44}
                                alt="Download on the App Store"
                              />
                            </a>
                          )}
                          {playStoreLink && (
                            <a
                              href={playStoreLink}
                              aria-label={`Download ${title} on the Play Store`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={"/images/icons/playStore.svg"}
                                width={140}
                                height={44}
                                alt="Get it on Google Play"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                      {caseStudyLink && (
                        <Link
                          href={`/portfolio/${caseStudyLink}`}
                          className="case_study_btn"
                        >
                          <span>{t("View Case Study")}</span>
                          <ArrowRight />
                        </Link>
                      )}
                    </div>

                    {/* Right Section */}
                    <div className="right">
                      <Image
                        src={`/images/portfolio/${language === "en"
                          ? imageDetails.image
                          : imageDetails.imageAr || imageDetails.image
                          }.png`}
                        width={imageDetails.imageWidth}
                        height={imageDetails.imageHeight}
                        alt={`${title} Preview`}
                        className="preview_img"
                      />

                      <div className="store_btns d-md-none ">
                        <div className="d-flex mt-4 inner_btn_div flex-wrap">
                          {appStoreLink && (
                            <a
                              href={appStoreLink}
                              aria-label={`Download ${title} on the App Store`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={"/images/icons/appStore.svg"}
                                width={108}
                                height={33}
                                alt="Download on the App Store"
                              />
                            </a>
                          )}
                          {playStoreLink && (
                            <a
                              href={playStoreLink}
                              aria-label={`Download ${title} on the Play Store`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={"/images/icons/playStore.svg"}
                                width={108}
                                height={33}
                                alt="Get it on Google Play"
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;