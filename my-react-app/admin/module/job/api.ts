import api from "../../shared/api";

import { JobDataItem } from "./types";

export const categoryCard = async (category: string): Promise<JobDataItem[]> => {
  const response = await api.get(`/get-categories?filter=${category}`);
  return response.data;
};

export const categoryList = async (id: string | undefined) => {
  const res = await api.get(`/get-category-application/${id}`);
  return res.data;
};

export const categoryView = async (id: string | undefined) => {
  const res = await api.get(`/get-application/${id}`);
  return res.data;
};

export const getPdf = async (fileName: string | undefined) => {
  const res = await api.get(`/pdf/${fileName}`, {
    responseType: 'blob',
  });
  return res.data;
}


export const getAllJob = async () => {
  const res = await api.get("/get-jobs");
  return res.data;
};
export const addJob = async (data:any) => {
  const res = await api.post("/add-job", data);
  return res;
};

export const updateJob = async (id:number|string) => {
  const res = await api.put(`/edit-job/${id}`);
  return res;
};

export const deleteJob = async (id:number|string) => {
  const res = await api.delete(`/delete-job/${id}`);
  return res;
};

export const getAllCategories = async () => {
  const res = await api.get(`/jobs-categories`);
  return res.data;
};

export const getAllLocations = async () => {
  const res = await api.get(`/jobs-locations`);
  return res.data;
};

