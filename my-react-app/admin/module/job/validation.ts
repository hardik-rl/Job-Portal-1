import { object, string, number } from "yup";
export const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const createJobSchema = object({
  title: string().required("Title is required"),
  description: string().required("job description is required"),
  education_description: string().required("Education is required"),
  knowledge_description: string().required("Knowledge description is required"),
  vacancy: string().required('Vacancy is required'),
  nature: string()
    .matches(/^[a-zA-Z\s]*$/, 'Nature should only contain letters and spaces')
    .required('Nature is required'),
  company_name: string().required("Company name is required"),
  company_description: string().required("Company description is required"),
  company_website: string().required("Website url is required"),
  // locationSelect: string().required("Location is required"),
  // categorySelect: string().required("Category is required"),
  company_email: string()
    .required("Email is required.")
    .matches(EMAIL_REGEX, "Invalid Email Address"),
});
