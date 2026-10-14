import Link from "next/link";
import { Container } from "react-bootstrap";

const PortfolioHero = () => {
  return (
    <section
      className="new_portfolio_hero"
      style={{ backgroundImage: "url(/images/newAboutUs/hero_image.webp)" }}
    >
      <div className="new_portfolio_hero_overlay" />
      <Container className="new_portfolio_hero_content">
        <h1 className="new_portfolio_hero_title">Portfolio</h1>
        <p className="new_portfolio_breadcrumb">
          <Link href="/">Home</Link> &nbsp;&gt;&nbsp; Portfolio
        </p>
      </Container>
    </section>
  );
};

export default PortfolioHero;
