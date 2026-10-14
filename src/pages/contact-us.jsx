import Head from "next/head";
import NewHeader from "@/components/newHome/NewHeader";
import NewFooter from "@/components/newHome/NewFooter";
import ContactFormSection from "@/components/newShared/ContactFormSection";
import FaqSection from "@/components/newShared/FaqSection";

const faqItems = [
  {
    question: "What size companies do you work with?",
    answer:
      "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
  },
  { question: "How long does a typical project take?" },
  { question: "Do you work with international clients?" },
  { question: "Can you integrate with our existing systems?" },
  { question: "How do we get started?" },
  { question: "Do you offer ongoing support after launch?" },
];

export default function NewContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us - Tacenda</title>
      </Head>
      <div className="new_page">
        <NewHeader />
        <ContactFormSection />
        <FaqSection heading="Common Questions" items={faqItems} />
        <NewFooter />
      </div>
    </>
  );
}
