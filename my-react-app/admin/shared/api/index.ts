import axios, { AxiosError, AxiosResponse } from "axios";
import { clientConfig, handleAxiosError } from "../../../src/shared/helpers/utils";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/`,
});

api.interceptors.request.use(
  (config) => {
    return clientConfig(config);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (err: AxiosError) => {
    if (err.response?.status === 401) {
      handleAxiosError();
    }

    return Promise.reject(err);
  }
);

export default api;
