import ContactUsSection from "@/components/contactUs/ContactUsSection";
import TopSection from "@/components/contactUs/TopSection";
import Clients from "@/components/home/Clients";
import SEO from "@/components/SEO";
import React from "react";
import { metaData } from "@/data/metaInformationData";

import { ToastContainer } from "react-toastify";

export async function getStaticProps() {
  const path = "/contact-us/";
  const meta = metaData.find(m => m.path === path)?.details || {};

  return {
    props: { meta },
  };
}
const ContactUs = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="contact_us">
        <TopSection />
        <ContactUsSection />
        <Clients />
      </main>
    </>
  );
};

export default ContactUs;
