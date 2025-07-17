import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ProjectVideo = () => {
  return (
    <section className="common_section project_video_section">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="video_section">
              <video
                src="/video/dummyVideo.mp4"
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
