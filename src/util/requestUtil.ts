import axios, { AxiosError, AxiosResponse } from "axios";

const requestUtil = {
  configAxiosInstance: () => {
    axios.defaults.baseURL = "";
    axios.defaults.timeout = 2000;
    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }
};

// @ts-ignore
export default requestUtil;
