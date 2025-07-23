import React from "react";
import TopSection from "./TopSection";
import AboutUsSection from "./AboutUsSection";
import { portfolioDetails } from "@/data/portfolioDetailsData";
import ProjectGoalsSection from "./ProjectGoalsSection";
import ExecutionSection from "./ExecutionSection";
import FeaturesOverview from "./FeaturesOverview";
import HighLightBanner from "./HighLightBanner";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";


const PortfolioDetails = ({ slug }) => {
  const matchedPortfolio = portfolioDetails.find((item) => item.id === slug);
  

  if (!matchedPortfolio) return <div>Portfolio not found</div>;

  const {
    top,
    aboutUs,
    projectGoals,
    execution,
    featuresOverview,
    highlightBanner,
  } = matchedPortfolio.sections || {};

  return (
    <>
      <TopSection data={top} />
      <AboutUsSection data={aboutUs} />
      <ProjectGoalsSection data={projectGoals} />
      <ExecutionSection data={execution} />
      <FeaturesOverview data={featuresOverview} />
      <HighLightBanner data={highlightBanner} />
      <ConsultOurExperts />
    </>
  );
};

export default PortfolioDetails;
