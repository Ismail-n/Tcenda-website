import React from "react";
import { Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const clientsLogo = ["HM", "ashjar", "send", "sign", "ease", "appex"];

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section className="clients common_section">
      <Container>
        <Title title={t("Clients")} />
        <SubTitle subTitle={t("10+ collaborations with top-tier partners")} />
        <Row>
          <div className="clients_logos">
            {clientsLogo?.map((logo) => (
              <Image
                key={logo}
                src={`/images/icons/clients/${logo}.svg`}
                width={160}
                height={80}
                alt={`${logo} logo`}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Clients;
