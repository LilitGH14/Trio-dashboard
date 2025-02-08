import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HEIGHTS } from "../common/constants.ts";

const initialState: any = {
  departments: null,
  filteredDepartments: [],
  filters: {},
  statusFiltersModalIsOpen: false,
  statusFilter: {
    filter: "all",
    height: 0,
  },
  searchFiltersModalIsOpen: false,
  searchFilter: {
    filter: "",
    height: 0,
  },
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    setAllDepartments(state, action) {
      state.filteredDepartments = action.payload;
      state.departments = action.payload;
    },
    setFilterDepartments(state, action: PayloadAction<any>) {
      state.filteredDepartments = action.payload;
    },
    resetFilterDepartments(state) {
      state.filteredDepartments = state.departments;
    },
    setFilterByStatus(state, action) {
      if (action.payload === "all") {
        state.filteredDepartments = state.departments;
      } else {
        state.filteredDepartments = state.departments.filter(
          (f) => f.status === action.payload
        );
      }
      state.searchFiltersModalIsOpen = false;
    },
    openSearchFilterModal(state) {
      state.searchFiltersModalIsOpen = true;
      state.searchFilter = { height: HEIGHTS.search, ...state.searchFilter };
    },
    openStatusFilterModal(state) {
      state.statusFiltersModalIsOpen = true;
      state.statusFilter = { height: HEIGHTS.filters, ...state.statusFilter };
    },
  },
});

export const {
  setFilterDepartments,
  setAllDepartments,
  resetFilterDepartments,
  setFilterByStatus,
  openSearchFilterModal,
  openStatusFilterModal,
} = departmentsSlice.actions;

export default departmentsSlice;
