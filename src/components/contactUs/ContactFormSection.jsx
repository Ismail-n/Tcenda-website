import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Loader from "../common/Loader";

const ContactFormSection = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    email: "",
    code: "+966",
    mobile: "",
    message: "",
  };

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
    <section className="contact_form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form>
              <div className="mb-25-gap-15">
                <div className="flex-1">
                  <label>{t("Name")}</label>
                  <Field
                    name="name"
                    type="text"
                    placeholder={t("Name")}
                    className="input"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
              </div>

              <div className="mb-25-gap-15">
                <div className="flex-1">
                  <label>{t("Email Address")}</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder={t("Email Address")}
                    className="input"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
              </div>
              <div className="mb-25-gap-15">
                <div className="flex-1">
                  <label>{t("Mobile Number")}</label>
                  <div className="flex-gap-10">
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
                    className="error"
                  />
                </div>
              </div>

              <div className="mb-25">
                <label>{t("Describe Your Project")}</label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder={t("Write here...")}
                  className="textarea"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
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
    </section>
  );
};

export default ContactFormSection;
