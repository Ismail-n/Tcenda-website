import * as Yup from "yup";

export const ContactUsValidationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[\u0621-\u064A\u0660-\u0669a-zA-Z\s]+$/,
      "Only Arabic, English letters, and spaces are allowed"
    )
    .required("Please enter your name"),

  email: Yup.string()
    .email("A valid work email is required")
    .required("Please enter your email address"),
  mobile: Yup.string()
    .required("Enter your 9-digit mobile number")
    .matches(/^[0-9\u0660-\u0669]+$/, "Only numbers are allowed"),
  message: Yup.string().required("Briefly describe your project needs"),
});

export const isArabicText = (text) => {
  const arabicRegex = /^[\u0600-\u06FF\s]+$/;
  return arabicRegex.test(text.trim());
};
