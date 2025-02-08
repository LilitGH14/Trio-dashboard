import {
  baseUrl,
  get,
} from "../../../common/servicies/httpClient/httpClient.ts";

export const getDepartments: () => Promise<any> = () => {
  return get(`${baseUrl}/assets/mock/departments.json`);
};

export const createDepartments: (payload) => Promise<any> = (payload) => {
  return get(`assets/mock/departments.json`).then((res) => {
    let _deps = res.departments;

    return new Promise((resolve, reject) => {
      resolve({
        status: 200,
        departments: [
          ..._deps,
          {
            ...payload,
            branches: 0,
            status: "pending",
          },
        ],
      });
    });
  });
};

export const updateDepartments: (payload) => Promise<any> = (payload) => {
  return get(`assets/mock/departments.json`).then((res) => {
    let _deps = res.departments.map((f) => {
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
  });
};
