import api from "../../shared/api";

export const categoryList = async () => {
  const res = await api.get("/get-category-application/65c27c92ac4f8ffb8f2496f4");
  return res.data;
};