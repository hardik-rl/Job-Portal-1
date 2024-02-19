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