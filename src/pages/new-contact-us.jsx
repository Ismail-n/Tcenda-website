import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import NewFooter from "@/components/newHome/NewFooter";
import ContactHero from "@/components/newContactUs/ContactHero";
import ContactFormSection from "@/components/newShared/ContactFormSection";
import FaqSection from "@/components/newShared/FaqSection";

const faqItems = [
  {
    question: "How big is your agency team?",
    answer:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  { question: "Can I get a quote for a custom package?" },
  { question: "What's your typical cost for a product?" },
  { question: "What is the typical timeline?" },
  { question: "What certifications does Agency has?" },
  { question: "Do you guarantee any results?" },
];

export default function NewContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Tacenda</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <ContactHero />
        <ContactFormSection />
        <FaqSection heading="Frequently Asked Questions" items={faqItems} />
        <NewFooter />
      </div>
    </>
  );
}
