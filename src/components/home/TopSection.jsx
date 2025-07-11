import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const TopSection = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const scrollToContact = () => {
    router.push("/contact-us");
    // const el = document.getElementById("contact");
    // if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const words = [
    "Digital Transformation",
    "Mobile Applications",
    "Web Applications",
    "Odoo Customisation",
    "Artificial Intelligence",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // 2.5 seconds per word

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="top_section">
      <Container>
        <div className="top_row">
          <h1 className="top_section_title">
            {t("Empowering Saudi Businesses to Scale with")} <br />
            <span className="animated-word" key={index}>
              {t(words[index])}
            </span>
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
          className="d-none d-lg-block"
        />
        <Image
          src={"/images/home/mobileTopBg.webp"}
          width={393}
          height={332}
          alt="bg image"
          className="d-lg-none"
          priority
        />
      </div>
    </section>
  );
};

export default TopSection;
