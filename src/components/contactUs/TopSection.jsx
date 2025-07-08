import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  return (
    <section className="top_section">
      <Container>
        <div className="top_row">
          <h1 className="top_section_title text-center">{t("Contact Us")}</h1>
          <p className="top_section_sub_title text-center">
            {t(
              "Let's Connect and Build Something Amazing, Right Here in Saudi Arabia."
            )}
          </p>
        </div>
      </Container>
      <div className="top_bg">
        <Image
          src={"/images/aboutUs/topBg.webp"}
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
