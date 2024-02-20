export interface JobDataItem {
  _id: string;
  link: string | null;
  category: string;
  applicationCount: number;
}

export interface JobFormType {
  title: string;
  description: string;
  education_description: string;
  knowledge_description: string;
  job_location_id: string;
  vacancy: string;
  nature: string;
  company_name: string;
  company_description: string;
  company_website: string;
  company_email: string;
}

export interface JobApplicationType {
  _id: string;
  job_id: string;
  category_id: string;
  first_name: string;
  last_name: string;
  email: string;
  pan_number: string;
  mobile_number: number;
  education: string;
  ctc: number;
  expected_ctc: number;
  notice_period: number;
  total_work_experience: number;
  gender: string;
  state: string;
  resume_file: string;
  __v: number;
}