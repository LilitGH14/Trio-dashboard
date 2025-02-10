export const DEPARTMENT_HEADERS = [
  { name: "Department Name", headerId: "name", col: "col-2" },
  { name: "Description", headerId: "description", col: "col-4" },
  { name: "Head", headerId: "head", col: "col-2" },
  { name: "Branches", headerId: "branches", col: "col-1" },
  { name: "Status", headerId: "status", col: "col-1" },
];

export const DEPARTMENT_MOBILE_HEADERS = {
  main: [
    { name: "Name", headerId: "name", col: "col-4" },
    { name: "Branches", headerId: "branches", col: "col-4" },
    { name: "Status", headerId: "status", col: "col-4" },
  ],
  details: [
    { name: "Head", headerId: "head", col: "col-4" },
    { name: "Description", headerId: "description", col: "col-4" },
  ],
};

export const DEPARTMENT_HEADS = [
  { label: "Armen Harutyunyan", value: "Armen Harutyunyan" },
  { label: "Manuk Manukyan", value: "Manuk Manukyan" },
  { label: "Lilit Gevorgyan", value: "Lilit Gevorgyan" },
  { label: "Anna Mkhitaryan", value: "Anna Mkhitaryan" },
];

export const DEPARTMENT_STATUSES = [
  { label: "All statuses", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Active", value: "active" },
];

export const DEPARTMENT_FILTERS = [
  { name: "Department Name", value: "name" },
  { name: "Description", value: "description" },
  { name: "Head", value: "head" },
];
