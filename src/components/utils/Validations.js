import * as Yup from "yup";

export const ContactUsValidationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces are allowed")
    .required("Please enter your name"),

  email: Yup.string()
    .email("A valid work email is required")
    .required("Please enter your email address"),
  mobile: Yup.string()
    .required("Enter your 9-digit mobile number")
    .matches(/^[0-9]+$/, "Only numbers are allowed"),
  message: Yup.string().required("Briefly describe your project needs"),
});
