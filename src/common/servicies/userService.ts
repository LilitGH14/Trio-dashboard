import { get } from "./httpClient/httpClient.ts";

export const login: (email: string, password: string) => Promise<any> = (
  email,
  password
) => {
  // real case
  // return post(`${baseUrl}/users,{email, password}`);

  return get(`assets/mock/users.json`, false).then((res) => {
    let _user = res.users.find((user) => user.email === email);

    if (_user) {
      return new Promise((resolve, reject) => {
        if (_user.password === password) {
          // let assume we got this token from server
          _user.token =
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ";
          localStorage?.setItem("token", _user.token);

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
