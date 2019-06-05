import { ApiRes } from "declare/CommonInterface";
import { ppost } from "util/requestUtil";

const baseApi = {
  login: (username: string, password: string): Promise<ApiRes<string>> => {
    return ppost(`/user/login`, { username: username, password: password });
  }
};

export default baseApi;
