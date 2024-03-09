export type NavLinkType = {
  href: string;
  icon: JSX.Element;
  text: string;
};

export type JobData = {
  annual_salary: number;
  category_id: {
    _id: string;
    name: string;
    __v: number;
  };
  company_name: string;
  company_description: string;
  company_website: string;
  company_email: string;
  description: string;
  education_description: string;
  id: string;
  job_location_id: {
    _id: string;
    name: string;
    __v: number;
  };
  knowledge_description: string;
  nature: string;
  position: {
    name: string;
    salary_range: string;
  };
  vacancy: string;
  created_at: string;
  __v: number;
  _id: string;
};
export interface LoginFormProps {
  email: string;
  password: string;
}


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
  category_id: string;
  vacancy: string;
  nature: string;
  company_name: string;
  company_description: string;
  company_website: string;
  company_email: string;
}

export interface categoryDataType {
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