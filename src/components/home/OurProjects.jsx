import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
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

  const settings = {
    // slidesToShow: 3,
    // autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // infinite: true,
    // autoplaySpeed: 3000,
    // speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: language === "ar", // ✅ RTL support for Arabic
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.2,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="our_projects common_section">
      <Container>
        <Title title={t("Explore Our Projects")} />
        <SubTitle subTitle={t("What Do We Offer?")} />
      </Container>
      <Container fluid="sm">
        <div className="position-relative wrapper_section">
          {/* ✅ Replace keen-slider with Slick */}
          <Slider
            {...settings}
            ref={sliderRef}
            className="keen-slider portfolio_inner_section"
          >
            {portfolios?.map(
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
                <div key={id}>
                  <div
                    className={`portfolio_inner keen-slider__slide ${currentSlide === index ? "active" : ""
                      }`}

                    id={id}
                    style={{
                      // background: `${background} !important` 
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

          {/* ✅ Custom Navigation Buttons with Slick */}
          {/* <div className="project_slider_controls">
            <Image
              src={"/images/icons/sliderLeft.svg"}
              width={56}
              height={56}
              alt="Previous"
              className="slider_btn"
              id="left-btn"
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <Image
              src={"/images/icons/sliderRight.svg"}
              width={56}
              height={56}
              alt="Next"
              id="right-btn"
              className="slider_btn"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;
