import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
const ContactFormSection = () => {
  const { t } = useTranslation();
  const initialValues = {
    name: "",
    company: "",
    email: "",
    code: "+966",
    mobile: "",
    reference: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    // company: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    mobile: Yup.string().required("Required"),
    // reference: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
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
        toast.error("Failed to send message. Please try again."); // Error toast
      });
  };
  return (
    <section className="contact_form">
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
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
                <div className="flex-1">
                  <label>{t("Company")}</label>
                  <Field
                    name="company"
                    type="text"
                    placeholder={t("Company")}
                    className="input"
                  />
                  <ErrorMessage
                    name="company"
                    component="div"
                    className="error"
                  />
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
                      type="text"
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
                <label>{t("Reference")}</label>
                <Field
                  name="reference"
                  type="text"
                  placeholder={t("Reference")}
                  className="input"
                />
                <ErrorMessage
                  name="reference"
                  component="div"
                  className="error"
                />
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
                className="submit-btn"
              >
                {t("Submit")}
              </button>
            </Form>
          )}
        </Formik>
      </Container>
    </section>
  );
};

export default ContactFormSection;
