import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import { portfolios } from "@/data/portfolioData";

const OurProjects = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, slider] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
    rtl: language === "ar",
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel);
    },
    defaultAnimation: {
      duration: 1000, // 1 second transition duration
      easing: (t) => 1 - Math.pow(1 - t, 3), // Smooth easing function
      // easing: (t) => t, // Smooth easing function
    },
    breakpoints: {
      "(max-width: 575px)": {
        slides: {
          perView: 1.2,
          spacing: 16,
          origin: "center",
        },
      },
    },
  });

  // Auto-scroll functionality with restart capability
  const [autoScrollKey, setAutoScrollKey] = useState(0); // Key to restart interval
  const totalSlides = portfolios?.length || 0;


  useEffect(() => {
    if (!slider.current) return;

    const interval = setInterval(() => {
      // Check if we're at the last slide
      if (currentSlide >= totalSlides - 1) {
        // Go back to first slide
        slider.current?.moveToIdx(0);
      } else {
        // Go to next slide
        slider.current?.next();
      }
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [slider, autoScrollKey, currentSlide, totalSlides]);

  // Calculate current group and bullets
  const bulletsPerGroup = 6;
  const totalGroups = Math.ceil(totalSlides / bulletsPerGroup);
  const currentGroup = Math.floor(currentSlide / bulletsPerGroup);
  
  // Calculate which bullets to show for current group
  const startIndex = currentGroup * bulletsPerGroup;
  const endIndex = Math.min(startIndex + bulletsPerGroup, totalSlides);
  const currentGroupBullets = Array.from(
    { length: endIndex - startIndex },
    (_, i) => startIndex + i
  );

  const handleBulletClick = (slideIndex) => {
    slider.current?.moveToIdx(slideIndex);
    // Reset auto-scroll timer by changing the key
    setAutoScrollKey(prev => prev + 1);
  };

  return (
    <section className="our_projects common_section">
      <Container>
        <Title title={t("Explore Our Projects")} />
        <SubTitle subTitle={t("What Do We Offer?")} />
      </Container>
      <Container fluid="sm">
        <div className="position-relative wrapper_section">
          <div
            className="keen-slider portfolio_inner_section"
            ref={sliderInstanceRef}
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
                <div
                  className={`portfolio_inner keen-slider__slide ${
                    currentSlide === index ? "active" : ""
                  }`}
                  key={id}
                  id={id}
                  style={{
                    background,
                  }}
                >
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
                            aria-label={`Download ${title} on the App Store`}
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
                            aria-label={`Download ${title} on the App Store`}
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
              )
            )}
          </div>

          {/* Pagination Bullets - Show 5 at a time */}
          <div className="pagination_bullets">
            <div className="bullets_container">
              {currentGroupBullets.map((bulletIndex) => (
                <button
                  key={bulletIndex}
                  className={`bullet ${
                    currentSlide === bulletIndex ? "active" : ""
                  }`}
                  onClick={() => handleBulletClick(bulletIndex)}
                  aria-label={`Go to slide ${bulletIndex + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Custom Slider Buttons */}
          {/* <div className="project_slider_controls">
            <Image
              src={"/images/icons/sliderLeft.svg"}
              width={56}
              height={56}
              alt="Previous"
              className="slider_btn"
              id="left-btn"
              onClick={() => slider.current?.prev()}
            />
            <Image
              src={"/images/icons/sliderRight.svg"}
              width={56}
              height={56}
              alt="Next"
              id="right-btn"
              className="slider_btn"
              onClick={() => slider.current?.next()}
            />
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default OurProjects;