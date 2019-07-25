import axios, { AxiosError, AxiosResponse } from "axios";

const requestUtil = {
  configAxiosInstance: () => {
    axios.defaults.baseURL = "";
    axios.defaults.timeout = 2000;
    axios.defaults.auth = {
      username: window.localStorage.getItem("tk"),
      password: ""
    };
    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  },
  updateAxiosToken: (token: string): void => {
    if (token) {
      window.localStorage.setItem("tk", token);
    }

    axios.defaults.auth = {
      username: token,
      password: ""
    };
  }
};

// @ts-ignore
export default requestUtil;
