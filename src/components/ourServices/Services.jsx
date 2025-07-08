import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services_section">
      <Container>
        <div className="services_tab">
          <button type="button">{t("Mobile App")}</button>
          <button type="button">{t("Full-Stack Development")}</button>
          <button type="button">{t("Cloud Services")}</button>
          <button type="button">{t("AI/ML")}</button>
          <button type="button">{t("Data Analytics")}</button>
          <button type="button">{t("UI/UX Design & Prototyping")}</button>
          <button type="button">{t("Odoo Development & Customisation")}</button>
        </div>
      </Container>
    </section>
  );
};

export default Services;
