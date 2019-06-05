import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 2000
});

const baseURL = "/api";

/**
 * get 请求
 * @param url 请求资源地址
 * @param params 请求参数
 */
export function pget(url, params = {}) {
  url = baseURL + url;
  try {
    return axiosInstance
      .get(url, params)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  } catch (err) {
    console.error(err);
  }
}

/**
 * post 请求
 * @param url 请求资源地址
 * @param params 请求参数
 */
export function ppost(url, params = {}) {
  url = baseURL + url;
  try {
    return axios
      .post(url, params)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  } catch (err) {
    console.error(err);
  }
}

/**
 * 多个请求并发
 * @param requests
 */
export function asyncAll(requests = []) {
  try {
    return axios
      .all(requests)
      .then(resultArr => {
        return resultArr;
      })
      .catch(error => {
        throw error;
      });
  } catch (err) {
    console.error(err);
  }
}
