import { object, string } from "yup";
export const ApplicationModalSchema = object({
  job_id: string().required('Job ID is required'),
  category_id: string().required('Category ID is required'),
  first_name: string().required('First name is required'),
  last_name: string().required('Last name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  pan_number: string().required('PAN number is required'),
  mobile_number: string().required('Mobile number is required'),
  education: string().required('Education details are required'),
  ctc: string().required('Current CTC is required'),
  expected_ctc: string().required('Expected CTC is required'),
  notice_period: string().required('Notice period is required'),
  total_work_experience: string().required('Total work experience is required'),
  gender: string().required('Gender is required'),
  state: string().required('State is required'),
  resume_file: string().required('Resume file is required'),
});
