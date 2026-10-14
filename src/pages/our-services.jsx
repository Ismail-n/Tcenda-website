import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import NewFooter from "@/components/newHome/NewFooter";
import ServicesHero from "@/components/newServices/ServicesHero";
import IdeasSection from "@/components/newAboutUs/IdeasSection";
import ServiceSolutions from "@/components/newServices/ServiceSolutions";
import ServicesCta from "@/components/newServices/ServicesCta";

export default function NewOurServices() {
  return (
    <>
      <Head>
        <title>Services - Tacenda</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <ServicesHero />
        <IdeasSection />
        <ServiceSolutions />
        <ServicesCta />
        <NewFooter />
      </div>
    </>
  );
}
