import {
  baseUrl,
  get,
  post,
  put,
} from "../../../common/servicies/httpClient/httpClient.ts";
import { IFilter } from "../common/models.ts";

export const getDepartments: () => Promise<any> = () => {
  return get(`${baseUrl}/assets/mock/departments.json`);
};

export const createDepartments: (payload) => Promise<any> = (payload) => {
  return post(`${baseUrl}/departments.json`, {
    ...payload,
    branches: 0,
    status: "pending",
  });
};

export const updateDepartments: (payload) => Promise<any> = (payload) => {
  return put(`${baseUrl}/departments/${payload.id}`, payload);
};

export const getFilteredDepartments: (filters: IFilter) => Promise<any> = (
  filters
) => {
  return get(
    `${baseUrl}/departments?name=${filters.name}&description=${filters.description}&head=${filters.head}`
  );
};
