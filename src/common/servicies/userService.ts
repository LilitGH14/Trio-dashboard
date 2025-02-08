import { get } from "./httpClient/httpClient.ts";

export const login: (email: string, password: string) => Promise<any> = (
  email,
  password
) => {
  // real case
  // return post(`${baseUrl}/users,{email, password}`);

  return get(`assets/mock/users.json`).then((res) => {
    let _user = res.users.find((user) => user.email === email);

    if (_user) {
      return new Promise((resolve, reject) => {
        if (_user.password === password) {
          resolve({ status: 200, data: _user });
        } else {
          reject({ error: "Password is Invalid" });
        }
      });
    } else {
      return new Promise((resolve, reject) => {
        reject({ error: "Email is Invalid" });
      });
    }
  });
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
