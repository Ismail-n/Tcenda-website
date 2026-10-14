import Link from "next/link";
import { Container } from "react-bootstrap";

const ServicesHero = () => {
  return (
    <section
      className="new_services_hero"
      style={{ backgroundImage: "url(/images/newAboutUs/hero_image.webp)" }}
    >
      <div className="new_services_hero_overlay" />
      <Container className="new_services_hero_content">
        <h1 className="new_services_hero_title">Services</h1>
        <p className="new_services_breadcrumb">
          <Link href="/">Home</Link> &nbsp;&gt;&nbsp; Services
        </p>
      </Container>
    </section>
  );
};

export default ServicesHero;
