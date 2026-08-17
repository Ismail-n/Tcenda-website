import Blogs from "@/components/home/Blogs";
import Clients from "@/components/home/Clients";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import EngagementModels from "@/components/home/EngagementModels";
import Industries from "@/components/home/Industries";
import InnovationSection from "@/components/home/InnovationSection";
import OurProjects from "@/components/home/OurProjects";
import OurProjectsNew from "@/components/home/OurProjectsNew";
import OurServices from "@/components/home/OurServices";
import ProjectVideo from "@/components/home/ProjectVideo";
import ThirdPartyServices from "@/components/home/ThirdPartyServices";
import TopSection from "@/components/home/TopSection";
import { metaData } from "@/data/metaInformationData";
import Head from "next/head";

export async function getStaticProps() {
  const path = "/";
  const meta = metaData.find(m => m.path === path)?.details || {};

  return {
    props: { meta },
  };
}


export default function Home({ meta }) {
  return (
    <>
      <main className="home">
        <TopSection ClientSection={Clients} />
        <InnovationSection />
        {/* <ProjectVideo /> */}
        <OurProjectsNew />
        {/* <OurProjects /> */}
        <OurServices />
        <EngagementModels />
        <ThirdPartyServices />
        <Industries />
        <ConsultOurExperts />
        {/* <Blogs /> */}
        {/* <ClientTestimonials /> */}
      </main>
    </>
  );
}
