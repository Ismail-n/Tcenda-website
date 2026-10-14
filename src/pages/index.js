import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import HeroSection from "@/components/newHome/HeroSection";
import TrustedBrands from "@/components/newHome/TrustedBrands";
import LifecycleSection from "@/components/newHome/LifecycleSection";
import WhyChooseUs from "@/components/newHome/WhyChooseUs";
import CtaSection from "@/components/newHome/CtaSection";
import NewFooter from "@/components/newHome/NewFooter";

export default function NewHome() {
  return (
    <>
      <Head>
        <title>Tacenda - We Build the Technology That Moves Your Business Forward</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <HeroSection />
        <TrustedBrands />
        <LifecycleSection />
        <WhyChooseUs />
        <CtaSection />
        <NewFooter />
      </div>
    </>
  );
}
