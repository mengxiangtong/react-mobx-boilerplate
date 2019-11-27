import axios, { AxiosPromise } from "axios";
import { ApiResponse } from "type/common";

const userApi = {
  login: (
    username: string,
    password: string
  ): AxiosPromise<ApiResponse<string>> => {
    return axios.post(`/user/login`, {
      username: username,
      password: password
    });
  }
};

export default userApi;
