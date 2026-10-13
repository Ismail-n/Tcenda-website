import Link from "next/link";

const PortfolioHero = () => {
  return (
    <section
      className="new_portfolio_hero"
      style={{ backgroundImage: "url(/images/newAboutUs/hero-team.jpg)" }}
    >
      <div className="new_portfolio_hero_overlay" />
      <div className="new_portfolio_hero_content">
        <h1 className="new_portfolio_hero_title">Portfolio</h1>
        <p className="new_portfolio_breadcrumb">
          <Link href="/">Home</Link> &nbsp;&gt;&nbsp; Portfolio
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
