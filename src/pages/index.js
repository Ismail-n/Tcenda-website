import Blogs from "@/components/home/Blogs";
import Clients from "@/components/home/Clients";
import ClientTestimonials from "@/components/home/ClientTestimonials";
import ConsultOurExperts from "@/components/home/ConsultOurExperts";
import EngagementModels from "@/components/home/EngagementModels";
import Industries from "@/components/home/Industries";
import InnovationSection from "@/components/home/InnovationSection";
import OurProjects from "@/components/home/OurProjects";
import OurServices from "@/components/home/OurServices";
import ProjectVideo from "@/components/home/ProjectVideo";
import TopSection from "@/components/home/TopSection";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Welcome to Tod — delivering innovative web solutions, high-performance apps, and exceptional user experiences tailored for your business success."
      />
      <main className="home">
        <TopSection />
        <InnovationSection />
        <ProjectVideo />
        {/* <OurProjects /> */}
        <OurServices />
        <EngagementModels />
        <Industries />
        <Clients />
        <ConsultOurExperts />
        {/* <Blogs /> */}
        {/* <ClientTestimonials /> */}
      </main>
    </>
  );
}
