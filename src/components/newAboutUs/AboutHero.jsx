import Link from "next/link";
import { Container } from "react-bootstrap";

const AboutHero = () => {
  return (
    <section
      className="new_about_hero"
      style={{ backgroundImage: "url(/images/newAboutUs/hero_image.webp)" }}
    >
      <div className="new_about_hero_overlay" />
      <Container className="new_about_hero_content">
        <h1 className="new_about_hero_title">About Us</h1>
        <p className="new_about_breadcrumb">
          <Link href="/">Home</Link> &nbsp;&gt;&nbsp; About Us
        </p>
      </Container>
    </section>
  );
};

export default AboutHero;
