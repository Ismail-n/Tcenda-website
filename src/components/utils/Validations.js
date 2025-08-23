import * as Yup from "yup";
import i18next from "i18next";

export const getContactUsValidationSchema = (t) =>
  Yup.object({
    name: Yup.string()
      .matches(
        /^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]+$/,
        t("Only Arabic, English letters, and spaces are allowed")
      )
      .required(t("Please enter your name")),

    email: Yup.string()
      .email(t("A valid work email is required"))
      .matches(
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
        t("Email must have a valid top-level domain")
      )
      .required(t("Please enter your email address")),

    code: Yup.string().required(),

    mobile: Yup.string()
      .when("code", {
        is: "+966",
        then: (schema) =>
          schema
            .required(t("Enter your 9-digit Saudi mobile number"))
            .matches(/^[0-9\u0660-\u0669]+$/, t("Only numbers are allowed"))
            .length(9, t("Mobile number must be exactly 9 digits")),
      })
      .when("code", {
        is: "+91",
        then: (schema) =>
          schema
            .required(t("Enter your 10-digit Indian mobile number"))
            .matches(/^[0-9\u0660-\u0669]+$/, t("Only numbers are allowed"))
            .length(10, t("Mobile number must be exactly 10 digits")),
      })
      .when("code", {
        is: "+1",
        then: (schema) =>
          schema
            .required(t("Enter a valid US mobile number"))
            .matches(/^[0-9\u0660-\u0669]+$/, t("Only numbers are allowed"))
            .min(7, t("Mobile number is too short"))
            .max(15, t("Mobile number is too long")),
      }),

    message: Yup.string()
      .required(t("Briefly describe your project needs"))
      .min(5, t("Message must be at least 5 characters"))
      .max(1000, t("Message must be at most 1000 characters")),
  });


export const isArabicText = (text) => {
  const arabicRegex = /^[\u0600-\u06FF\s]+$/;
  return arabicRegex.test(text.trim());
};
