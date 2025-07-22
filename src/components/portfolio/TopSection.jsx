import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  return (
    <section className="top_section">
      <Container>
        <div className="top_row text-md-center">
          <h1 className="top_section_title mx-auto">
            {t("Crafting Digital Success Stories in Saudi Arabia")}
          </h1>
          <p className="top_section_sub_title">
            {t(
              "A glimpse into how our innovative team has helped businesses across the Kingdom transform operations, enhance customer experience, and lead in their industries."
            )}
          </p>
        </div>
      </Container>
      <div className="top_bg">
        <Image
          src={"/images/aboutUs/topBg.webp"}
          width={1920}
          height={247}
          alt="Background of Saudi digital success"
          className="d-none d-lg-block"
          priority
        />
        <Image
          src={"/images/home/mobileTopBgNew1.webp"}
          width={393}
          height={144}
          alt="bg image"
          className="d-lg-none"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
