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
import ThirdPartyServices from "@/components/home/ThirdPartyServices";
import TopSection from "@/components/home/TopSection";
import { metaData } from "@/data/metaInformationData";
import Head from "next/head";

export async function getStaticProps() {
  const metaDetails = metaData.find((p) => p.path === "/");
  return {
    props: {
      meta: metaDetails?.details || null,
    },
  };
}

export default function Home({ meta }) {
  return (
    <>
      {/* ✅ Inject into head */}
      <Head>
        <title>{meta?.title || "Default Title"}</title>
        <meta
          name="description"
          content={meta?.description || "Default description"}
        />
        <meta name="keywords" content={meta?.keywords || ""} />

        {/* OG tags */}
        <meta property="og:title" content={meta?.title || ""} />
        <meta property="og:description" content={meta?.description || ""} />
        <meta
          property="og:image"
          content={meta?.image || "https://yourdomain.com/og-image.jpg"}
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="home">
        <TopSection ClientSection={Clients} />
        <InnovationSection />
        {/* <ProjectVideo /> */}
        <OurProjects />
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
