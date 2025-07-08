import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();

  return (
    <section className="top_section">
      <Container>
        <div className="top_row">
          <h1 className="top_section_title text-center">
            {t("Crafting Digital Success Stories in Saudi Arabia")}
          </h1>
          <p className="top_section_sub_title text-center">
            {t(
              "A glimpse into how our innovative team has helped businesses across the Kingdom transform operations, enhance customer experience, and lead in their industries."
            )}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TopSection;
