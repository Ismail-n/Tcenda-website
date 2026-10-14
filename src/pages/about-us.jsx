import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import NewFooter from "@/components/newHome/NewFooter";
import AboutHero from "@/components/newAboutUs/AboutHero";
import IdeasSection from "@/components/newAboutUs/IdeasSection";
import TeamSection from "@/components/newAboutUs/TeamSection";
import LocationsSection from "@/components/newAboutUs/LocationsSection";

export default function NewAboutUs() {
  return (
    <>
      <Head>
        <title>About Us - Tacenda</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <AboutHero />
        <IdeasSection />
        <TeamSection />
        <LocationsSection />
        <NewFooter />
      </div>
    </>
  );
}
