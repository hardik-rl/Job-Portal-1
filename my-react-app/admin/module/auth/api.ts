import { setToken } from "../../../src/shared/helpers/utils";
import api from "../../shared/api";

import { LoginFormProps } from "./types";

export const login = async (data: LoginFormProps) => {
  const res = await api.post("/login", data);
  setToken(res.data.token);
  return res;
};