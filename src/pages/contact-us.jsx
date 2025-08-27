import ContactUsSection from "@/components/contactUs/ContactUsSection";
import TopSection from "@/components/contactUs/TopSection";
import Clients from "@/components/home/Clients";
import SEO from "@/components/SEO";
import React from "react";
import { ToastContainer } from "react-toastify";
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
