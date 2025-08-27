import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "@/data/portfolioData";
import { useKeenSlider } from "keen-slider/react";

const OurProjects = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const delay = 3000;
  const animation = { duration: 1000, easing: (t) => t };

  // Autoplay plugin to avoid stacking timeouts
  function Autoplay(slider) {
    let timeout;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        slider.next();
      }, delay);
    }
    slider.on("created", () => {
      setLoaded(true);
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  }

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      rubberband: false,
      renderMode: "performance",
      slides: {
        origin: "center",
        perView: 1.5,
        spacing: 15,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      breakpoints: {
        "(max-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
      },
    },
    [Autoplay]
  );

  const projectsToSHow = [
    "ashjar-space",
    "send",
    "half-million",
    "sign",
    "real-estate",
  ];

  const filteredPortfolios = projectsToSHow
    .map((projectId) => portfolios.find((p) => p.id === projectId))
    .filter(Boolean);

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
              className="main_btn text-center d-block mt-4 view_more_btn"
            >
              {t("View More")}
            </Link>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="position-relative wrapper_section">
          <div
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
                <div key={id} className="slide-wrapper keen-slider__slide">
                  <div
                    className={`portfolio_inner ${language === "ar" ? "rtl" : ""
                      } ${currentSlide === index ? "active" : ""}`}
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
                        <div className="store_btns d-none d-md-flex">
                          {appStoreLink && (
                            <a href={appStoreLink} target="_blank" rel="noreferrer">
                              <Image
                                src={"/images/icons/appStore.svg"}
                                width={140}
                                height={44}
                                alt="App Store"
                              />
                            </a>
                          )}
                          {playStoreLink && (
                            <a href={playStoreLink} target="_blank" rel="noreferrer">
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
                          className={`case_study_btn ${language === "ar" ? "rotate_image" : ""
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
                        {caseStudyLink && (
                          <Link
                            href={`/portfolio/${caseStudyLink}`}
                            className={`case_study_btn_sm ${language === 'ar' ? 'rotate_image' : ""}`}
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
                </div>
              )
            )}
          </div>

          {/* Dots */}
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(instanceRef.current.track.details.slides.length).keys(),
              ].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current.moveToIdx(idx)}
                  className={currentSlide === idx ? "active" : ""}
                ></button>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
