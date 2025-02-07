export interface IDepartmentHeader {
  name: string;
  headerId: string;
  col: string;
}

export interface IDepartmentMobileHeader {
  main: Partial<IDepartmentHeader>[];
  details: Partial<IDepartmentHeader>[];
}

export interface IDepartmentData {
  id: number;
  name: string;
  description: string;
  head: string|null;
  branches: number;
  status: "disabled" | "pending" | "active";
}

export interface IFilter {
  name: string;
  description: string;
  head: string|null;
}
