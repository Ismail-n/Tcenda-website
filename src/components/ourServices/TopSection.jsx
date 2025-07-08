import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  return (
    <section className="top_section">
      <Container>
        <div className="top_row text-center">
          <h1 className="top_section_title">
            {t("Innovative Services to Power Your Growth")}
          </h1>
          <p className="top_section_sub_title">
            {t(
              "Unlock new possibilities with us — through cutting-edge technology, expert guidance, and solutions tailored to your business goals."
            )}
          </p>
        </div>
      </Container>
      <div className="top_bg">
        <Image
          src={"/images/aboutUs/topBg.webp"}
          width={1920}
          height={247}
          alt="bg image"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
