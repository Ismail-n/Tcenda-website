import { portfolios } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PortfoliosSection = () => {
  const { t } = useTranslation();
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
            },
            index
          ) => (
            <div
              className="portfolio_inner"
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
                  <div className="store_btns">
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
                  <Link href={caseStudyLink} className="case_study_btn">
                    <span>{t("View Case Study")}</span>
                    <ArrowRight />
                  </Link>
                )}
              </div>
              <div className="right">
                <Image
                  src={`/images/portfolio/${imageDetails.image}.webp`}
                  width={imageDetails.imageWidth}
                  height={imageDetails.imageHeight}
                  alt={`${title} Preview`}
                  className="preview_img"
                />
              </div>
            </div>
          )
        )}
      </Container>
    </section>
  );
};

export default PortfoliosSection;
