import {
  baseUrl,
  get,
} from "../../../common/servicies/httpClient/httpClient.ts";

export const getDepartments: (user) => Promise<any> = (user) => {
  return get(`${baseUrl}/assets/mock/departments.json`).then((res) => {
    return new Promise((resolve, reject) => {
      resolve({
        departments: res.departments.filter((f) => f.userId === user.id),
        status:200
      });
    });
  });
};

export const createDepartments: (payload, departments) => Promise<any> = (
  payload,
  departments
) => {
  // return post(`${baseUrl}/departments/createDepartment`, payload, true);

  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      departments: [
        ...departments,
        {
          ...payload,
          branches: 0,
          status: "pending",
        },
      ],
    });
  });
};

export const updateDepartments: (payload, departments) => Promise<any> = (
  payload,
  departments
) => {
  // return put(`${baseUrl}/departments/updateDepartment/${payload.id}`, payload, true);

  let _deps = departments.map((f) => {
    if (f.id === payload.id) {
      return { ...f, ...payload };
    }
    return f;
  });

  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      departments: _deps,
    });
  });
};
