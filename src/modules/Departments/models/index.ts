export interface IDepartmentHeader {
  name: string;
  headerId: string;
  col: string;
}

export interface IDepartmentData {
  id: number;
  name: string;
  description: string;
  head: string;
  branches: number;
  status: "disabled" | "pending" | "active";
}

export interface IFilter {
  name: string;
  description: string;
  head: string | null;
}
