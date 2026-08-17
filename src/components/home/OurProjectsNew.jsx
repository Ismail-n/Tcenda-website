import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { portfolios } from "@/data/portfolioData";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function OurProjectsNew() {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const projectsToSHow = [
    "ashjar-space",
    "send",
    "ashjar-friends",
    "ease",
    "send",
  ];

  const filteredPortfolios = projectsToSHow
    .map((projectId) => portfolios.find((p) => p.id === projectId))
    .filter(Boolean);

  return (
    <section className="our_projects common_section home_slider">
      <Container>
        <Row>
          <Col lg={6}>
            <Title title={t("Explore Our Projects")} />
            <SubTitle subTitle={t("What Do We Offer?")} />
          </Col>
          <Col lg={6}>
            <Link
              href={"/portfolio"}
              className="main_btn text-center d-block mt-4 view_more_btn"
            >
              {t("View More")}
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="position-relative wrapper_section">
          <div className="portfolio_inner_section">
            <Swiper
              key={language}
              dir={language === "ar" ? "rtl" : "ltr"}
              slidesPerView={1.5}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 15,
                },
                // 575: {
                //   slidesPerView: 1.5,
                //   spaceBetween: 40,
                // },
                991: {
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },
                1400: {
                  slidesPerView: 1.5,
                  spaceBetween: 63,
                },
              }}
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
                  <SwiperSlide key={id}>
                    <div
                      className={`portfolio_inner ${
                        language === "ar" ? "rtl" : ""
                      }`}
                      style={{ background }}
                    >
                      {/* Left Section */}
                      <div className="left">
                        <div className="content">
                          {logoDetails.logo && (
                            <Image
                              src={`/images/portfolio/${logoDetails.logo}.svg`}
                              alt={`${title} Logo`}
                              className="logo_img"
                              width={logoDetails.logoWidth}
                              height={logoDetails.logoHeight}
                              priority={index === 0}
                            />
                          )}
                          <h3>{t(title)}</h3>
                          <p>{t(description)}</p>
                          <div className="store_btns d-none d-lg-flex">
                            {appStoreLink && (
                              <a
                                href={appStoreLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Image
                                  src={"/images/icons/appStore.svg"}
                                  width={140}
                                  height={44}
                                  alt="App Store"
                                />
                              </a>
                            )}
                            {playStoreLink && (
                              <a
                                href={playStoreLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <Image
                                  src={"/images/icons/playStore.svg"}
                                  width={140}
                                  height={44}
                                  alt="Google Play"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                        {caseStudyLink && (
                          <Link
                            href={`/portfolio/${caseStudyLink}`}
                            className={`case_study_btn  d-none d-lg-flex ${
                              language === "ar" ? "rotate_image" : ""
                            }`}
                          >
                            <span>{t("View Case Study")}</span>
                            <Image
                              src={"/images/icons/arrowRight.svg"}
                              width={14}
                              height={13}
                              className="arrow_icon"
                              alt="Arrow"
                            />
                          </Link>
                        )}
                      </div>

                      {/* Right Section */}
                      <div className="right">
                        <Image
                          src={`/images/portfolio/${
                            language === "en"
                              ? imageDetails.image
                              : imageDetails.imageAr || imageDetails.image
                          }.png`}
                          width={imageDetails.imageWidth}
                          height={imageDetails.imageHeight}
                          alt={`${title} Preview`}
                          className="preview_img"
                        />
                        <div className="store_btns d-lg-none ">
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
                          {caseStudyLink && (
                            <Link
                              href={`/portfolio/${caseStudyLink}`}
                              className={`case_study_btn_sm ${
                                language === "ar" ? "rotate_image" : ""
                              }`}
                            >
                              <span>{t("View Case Study")}</span>
                              <Image
                                src={"/images/icons/arrowRight.svg"}
                                width={14}
                                height={13}
                                className="arrow_icon"
                                alt="Get it on Google Play"
                              />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
              {/* <SwiperSlide>Slide 1</SwiperSlide> */}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}
