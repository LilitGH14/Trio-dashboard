import axios from "axios";

export const baseUrl = window.location.origin;

const instance = axios.create({});
const headers = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
};

const setHeaders = (needToken: boolean): void => {
  const token = localStorage?.getItem("token");

  if (token && needToken) {
    instance.defaults.headers["authorization"] = token;
  } else {
    delete instance.defaults.headers["authorization"];
  }
};

const onFulfilled = (response: any): any => response?.data;

const get = async <T>(url: string, config?: any, needToken?: boolean) => {
  setHeaders((needToken = true));
  return await instance
    .get<T>(url, { ...config, ...headers })
    .then(onFulfilled);
};

const post = async <T, D>(
  url: string,
  data: any,
  config?: any,
  needToken?: boolean
): Promise<any> => {
  setHeaders((needToken = true));
  return await instance
    .post<T, D>(url, data, { ...config, ...headers })
    .then(onFulfilled);
};

const put = async <T, D>(
  url: string,
  data?: any,
  config?: any,
  needToken?: boolean
): Promise<any> => {
  setHeaders((needToken = true));
  return await instance
    .put<T, D>(url, data, { ...config, ...headers })
    .then(onFulfilled);
};

export { get, post, put };
