import api from "../../shared/api";
import { setToken } from "../../shared/helpers/utils";

import { LoginFormProps } from "./types";

export const signin = async (data: LoginFormProps) => {
  const res = await api.post("/login", data);
  setToken(res.data.token);
};