import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import Loader from "../common/Loader";
import { ContactUsValidationSchema } from "../utils/Validations";
import Title from "../common/Title";

const ContactFormSection = () => {
  const { t } = useTranslation();

  const initialValues = {
    name: "",
    email: "",
    code: "+966",
    mobile: "",
    message: "",
  };

  const SERVICE_ID = "service_o1vmwom";
  const TEMPLATE_ID = "template_ciaxgel";
  const PUBLIC_KEY = "R-k8S0O-yOiGJFhKw";

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        values,
        PUBLIC_KEY
      );
      const { status, text } = result || {};

      if (status) {
        toast.success("Thank You! We'll get back to you soon.");
        resetForm();
      } else {
        toast.error(text || "Failed to send message.");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact_form">
      <Title title={t("Get In Touch")} />
      <p>
        {t(
          "Have a project in mind or need expert guidance? Our team is here to help you move forward."
        )}
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactUsValidationSchema}
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
            <div className="btn_div">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-btn ${isValid && dirty ? "active" : ""}`}
              >
                {t("Request a Free Consultation")}
                {isSubmitting && <Loader />}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactFormSection;
