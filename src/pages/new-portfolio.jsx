import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import NewFooter from "@/components/newHome/NewFooter";
import PortfolioHero from "@/components/newPortfolio/PortfolioHero";
import ProjectsGrid from "@/components/newPortfolio/ProjectsGrid";
import PortfolioCta from "@/components/newPortfolio/PortfolioCta";

export default function NewPortfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Tacenda</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <PortfolioHero />
        <ProjectsGrid />
        <PortfolioCta />
        <NewFooter />
      </div>
    </>
  );
}
