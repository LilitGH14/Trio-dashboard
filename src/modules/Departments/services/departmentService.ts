import {
  baseUrl,
  get,
  post,
  put,
} from "../../../common/httpClient/httpClient.ts";
import { IFilter } from "../models/index.ts";

export const getDepartments: () => Promise<any> = () => {
  return get(`${baseUrl}/departments`);
};

export const createDepartments: (payload) => Promise<any> = (payload) => {
  return post(`${baseUrl}/departments`, {
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
