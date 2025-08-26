import { portfolios } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PortfoliosSection = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  return (
    <section className="portfolio_inner_section">
      <Container>
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
              backgroundAr,
            },
            index
          ) => (
            <div
              className="portfolio_inner"
              key={id}
              id={id}
              style={{
                background:
                  language === "ar" && backgroundAr ? backgroundAr : background,
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
                  {/* DESKTOP BUTTON & LINKS */}
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
                    className={`case_study_btn ${language === 'ar' ? 'rotate_image' : ""}`}

                  >
                    <span>{t("View Case Study")}</span>
                    <Image
                      src={"/images/icons/arrowRight.svg"}
                      width={14}
                      height={13}
                      alt="Get it on Google Play"
                    />
                  </Link>
                )}
              </div>
              <div className="right">
                <Image
                  src={`/images/portfolio/${language == 'en' ? imageDetails.image : (imageDetails.imageAr ?? imageDetails.image)}.png`}
                  width={imageDetails.imageWidth}
                  height={imageDetails.imageHeight}
                  alt={`${title} Preview`}
                  className="preview_img"
                />

                {/* MOBILE LINKS & BUTTONS */}
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
                        alt="Get it on Google Play"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </Container>
    </section>
  );
};

export default PortfoliosSection;
