import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import Industries from "@/components/home/Industries";
import PortfoliosSection from "@/components/portfolio/PortfoliosSection";
import TopSection from "@/components/portfolio/TopSection";
import SEO from "@/components/SEO";
import React from "react";
import { metaData } from "@/data/metaInformationData";

export async function getStaticProps() {
  const path = "/portfolio/";
  const meta = metaData.find(m => m.path === path)?.details || {};

  return {
    props: { meta },
  };
}

const Portfolio = () => {
  return (
    <>
      <main className="portfolio">
        <TopSection />
        <PortfoliosSection />
        <Industries />
        <ConsultOurExperts />
      </main>
    </>
  );
};

export default Portfolio;
