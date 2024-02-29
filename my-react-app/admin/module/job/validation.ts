import * as Yup from "yup";

export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const createJobSchema = Yup.object().shape({
  title: Yup.string().required("Please provide a title for the job posting."),
  description: Yup.string().required("Please provide a description for the job posting."),
  education_description: Yup.string(),
  knowledge_description: Yup.string(),
  vacancy: Yup.number().min(0, "Vacancy should be a non-negative number."),
  nature: Yup.string(),
  company_name: Yup.string().required("Please provide the name of the company."),
  company_description: Yup.string(),
  company_website: Yup.string().url("Please provide a valid company website URL."),
  company_email: Yup.string()
    .required("Email is required.")
    .matches(EMAIL_REGEX, "Invalid Email Address"),
});
