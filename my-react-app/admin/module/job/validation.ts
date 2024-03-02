import * as Yup from "yup";

export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const createJobSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("job description is required"),
  education_description: Yup.string().required("Education is required"),
  knowledge_description: Yup.string().required("Knowledge description is required"),
  vacancy: Yup.number().min(0, "Vacancy is required"),
  nature: Yup.string().required("Nature is a required"),
  company_name: Yup.string().required("Company name is required"),
  company_description: Yup.string().required("Company description is required"),
  company_website: Yup.string().required("Website url is required"),
  locationSelect: Yup.string().required("Location is required"),
  categorySelect: Yup.string().required("Category is required"),
  company_email: Yup.string()
    .required("Email is required.")
    .matches(EMAIL_REGEX, "Invalid Email Address"),
});
