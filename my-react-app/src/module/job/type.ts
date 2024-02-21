import React from "react";

export type JobData = {
  annual_salary: number;
  category_id: {
    _id: string;
    name: string;
    __v: number;
  };
  company_id: {
    _id: string;
    name: string;
    logo_url: string;
    description: string;
    website: string;
  };
  description: string;
  education_description: string[];
  id: string;
  job_location_id: {
    _id: string;
    name: string;
    __v: number;
  };
  knowledge_description: string[];
  nature: string;
  position: {
    name: string;
    salary_range: string;
  };
  vacancy: number;
  __v: number;
  _id: string;
};


export type JobDetails = {
  jobData: {
    company_id: {
      name: string;
      description: string;
      email_id?: string;
      website?: string;
    };
    description: string;
    knowledge_description: [
      "knowledge description 1",
      "knowledge description 2",
      "knowledge description 3",
      "knowledge description 4",
      "knowledge description 5",
    ],
    education_description: [
      'education description 1',
      'education description 2',
      'education description 3',
      'education description 4',
      'education description 5',
    ],
    job_location_id: {
      name: string;
    },
    vacancy: number;
    nature: string;
    annual_salary: number;
  }
}


export type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setApplyJobData: React.Dispatch<React.SetStateAction<{
    job_id: string;
    category_id: string;
  }>>
}

export type SingleJobProps = {
  id: string;
  title: string;
  location: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  companyName: string;
  description: string;
  categoryId: string;
  setApplyJobData: React.Dispatch<React.SetStateAction<{
    job_id: string;
    category_id: string;
  }>>
}