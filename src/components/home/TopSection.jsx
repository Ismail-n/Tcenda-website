import Image from "next/image";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="top_section">
      <Container>
        <div className="top_row">
          <h1 className="top_section_title">
            {t("Empowering Saudi Businesses to Scale with Intelligent")} <br />
            <span>{t("Digital Solutions")}</span>
          </h1>
          <p className="top_section_sub_title">
            {t(
              "From custom mobile apps to AI systems, we build technology that transforms operations, elevates experiences, and unlocks growth."
            )}
          </p>
          <button
            className="main_btn"
            type="button"
            aria-label="Start a conversation"
            onClick={scrollToContact}
          >
            {t("Let's Talk")}
          </button>
        </div>
      </Container>
      <div className="top_bg">
        <Image
          src={"/images/home/topBg.webp"}
          width={1920}
          height={421}
          alt="bg image"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
