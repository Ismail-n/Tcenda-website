import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const ProjectVideo = () => {
  const { t } = useTranslation();
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    const desktopVideo = desktopVideoRef.current;
    const mobileVideo = mobileVideoRef.current;

    // Try playing immediately on desktop (or any device)
    const tryPlay = (video) => {
      if (video) {
        video.play().catch((err) => {
          // Autoplay might be blocked; we'll handle mobile separately
          console.log("Autoplay was blocked:", err);
        });
      }
    };

    tryPlay(desktopVideo);
    tryPlay(mobileVideo);

    const isMobile = typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const handleTouchStart = () => {
        tryPlay(desktopVideo);
        tryPlay(mobileVideo);
        document.removeEventListener("touchstart", handleTouchStart);
      };
      document.addEventListener("touchstart", handleTouchStart);
      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
      };
    }
  }, []);

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
                ref={desktopVideoRef}
                src="/video/desktop.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="your-custom-class"
              />
            </div>
          </Col>

          {/* MOBILE */}
          <Col lg={12} className="d-md-none">
            <div className="video_section">
              <video
                ref={mobileVideoRef}
                src="/video/mobile.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="your-custom-class"
              />
            </div>
          </Col>

          <Col lg={12}>
            <Link
              href={"/portfolio"}
              className="main_btn text-center d-block mx-auto mt-4"
            >
              {t("View All")}
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectVideo;
