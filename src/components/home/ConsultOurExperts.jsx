import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const ConsultOurExperts = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section consult_our_experts">
      <Container>
        <Row>
          <div className="inner_section">
            <div className="content">
              <h2>{t("Let us move your business forward")}</h2>
              <h3>
                {t(
                  "Have a challenge to solve? A bold vision to bring to life?"
                )}
                <br />
                <span className="px-2">
                  {t("Let's create a solution together.")}
                </span>
                <br />
                <span className="px-2">{t("Right here in Saudi Arabia.")}</span>
              </h3>
              <Link href="#">
                <button type="button" className="service_btn">
                  {t("Consult Our Experts")} <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="vector_img">
              <Image
                src="/images/home/contactOurExportVector.webp"
                width={584}
                height={325}
                alt={t("Consult with our experts illustration")}
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ConsultOurExperts;
