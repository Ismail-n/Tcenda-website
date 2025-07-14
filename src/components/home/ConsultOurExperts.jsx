import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Loader from "../common/Loader";

const initialValues = {
  name: "",
  email: "",
  code: "+966",
  mobile: "",
  message: "",
};

const ConsultOurExperts = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("A valid work email is required")
      .required("Please enter your email address"),
    mobile: Yup.string()
      .required("Enter your 9-digit mobile number")
      .matches(/^[0-9]+$/, "Only numbers are allowed"),
    message: Yup.string().required("Briefly describe your project needs"),
  });

  const SERVICE_ID = "service_m1tsr4h";
  const TEMPLATE_ID = "template_6wl6bat";
  const PUBLIC_KEY = "W7aMVGuT0tr6SpaBw";

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY)
      .then((result) => {
        const { status, text } = result || {};
        if (status) {
          toast.success("Message sent successfully!");
          resetForm();
        } else {
          toast.error(text);
        }
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="common_section consult_our_experts">
      <Container>
        <div className="inner_row">
          <div className="left_section">
            <div className="content">
              <h2>
                {t("Book a Free Consultation with Our Technology Experts.")}
              </h2>
              <p>
                {t(
                  "Tell us about your requirements, and our team will get in touch with you within 24 hours."
                )}
              </p>
            </div>
            <Image
              src={"/images/home/contactOurExportVector.webp"}
              width={372}
              height={207}
              alt={t("Consult with our experts illustration")}
              className="vector_bg"
            />
          </div>

          <div className="right_section">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, isValid, dirty }) => (
                <Form className="common_form">
                  <div className="form_field">
                    <Field
                      name="name"
                      type="text"
                      placeholder={t("Name")}
                      className="input"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form_field">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t("Email Address")}
                      className="input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form_field">
                    <div className="phone_div">
                      <Field
                        as="select"
                        name="code"
                        className="input mw-80"
                        placeholder={t("Select County code")}
                      >
                        <option value="+966">+966</option>
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                      </Field>
                      <Field
                        name="mobile"
                        type="tel"
                        placeholder={t("Mobile Number")}
                        className="input"
                      />
                    </div>
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form_field">
                    <Field
                      as="textarea"
                      name="message"
                      placeholder={t("Describe Your Project")}
                      className="textarea"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-btn ${isValid && dirty ? "active" : ""}`}
                  >
                    {t("Request a Free Consultation")}
                    {isSubmitting && <Loader />}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* <div className="inner_section">
            <div className="content">
              <h2>{t("Let us move your business forward")}</h2>
              <h3>
                {t(
                  "Have a challenge to solve? A bold vision to bring to life?"
                )}
                <br />
                <span >
                  {t("Let's create a solution together.")}
                </span>
                <br />
                <span >{t("Right here in Saudi Arabia.")}</span>
              </h3>
              <Link href="#">
                <button
                  type="button"
                  className="service_btn"
                  onClick={() => router.push("/contact-us")}
                >
                  {t("Consult Our Experts")} <ArrowRight />
                </button>
              </Link>
            </div>
            <div className="vector_img">
              <Image
                src="/images/home/contactOurExportVector.webp"
                width={584}
                height={325}
                alt={t("Consult with our experts illustration")}
                className="d-none d-lg-block"
              />
              <Image
                src="/images/home/mobileContactOurExportVector.webp"
                width={323}
                height={270}
                alt={t("Consult with our experts illustration")}
                className="d-lg-none"
              />
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default ConsultOurExperts;
