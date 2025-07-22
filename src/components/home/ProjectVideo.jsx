import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";

const ProjectVideo = () => {
  const { t } = useTranslation();
  return (
    <section className="common_section project_video_section">
      <Container>
        <Row>
          <Title title={t("Explore Our Projects")} />
          <SubTitle subTitle={t("Where ideas meet execution")} />
          {/* DESKTOP */}
          <Col lg={12} className="d-none d-md-block">
            <div className="video_section">
              <video
                src="/video/desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="your-custom-class"
              />
            </div>
          </Col>
          {/* MOBILE */}
          <Col lg={12} className="d-md-none">
            <div className="video_section">
              <video
                src="/video/mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="your-custom-class"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectVideo;
