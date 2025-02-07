import { baseUrl, get } from "./httpClient.ts";

export const login: (email: string, password: string) => Promise<any> = (
  email,
  password
) => {
  return get(`${baseUrl}/users?email=${email}&password=${password}`);
};

export const getLink: (email: string) => Promise<any> = (email) => {
  // real case
  // return post(`${baseUrl}/users/getLink`);

  return new Promise((resolve, reject) => {
    resolve({ status: "success" });
  });
};


export const resetPassword: (password: string) => Promise<any> = (password) => {
  // real case
  // return post(`${baseUrl}/users/resetPassword`);

  return new Promise((resolve, reject) => {
    resolve({ status: "success" });
  });
};