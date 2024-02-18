import api from "../../shared/api";

import { JobDataItem } from "./types";

export const categoryCard: () => Promise<JobDataItem[]> = async () => {
  const response = await api.get("/get-categories");
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