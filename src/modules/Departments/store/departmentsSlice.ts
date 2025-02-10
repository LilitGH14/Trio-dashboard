import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    filter: null,
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
      state.searchFilter = {
        filter: null,
        height: state.searchFilter.height,
      };
      state.statusFilter = {
        filter: "all",
        height: state.statusFilter.height,
      };
    },
    setFilterBySearch(state, action) {
      state.filteredDepartments = state.departments.filter((item: any) => {
        return (
          (action.payload.name === "" ||
            item.name
              .replaceAll(" ", "")
              .toLowerCase()
              .includes(
                action.payload.name.replaceAll(" ", "").toLowerCase()
              )) &&
          (action.payload.description === "" ||
            item.description
              .replaceAll(" ", "")
              .toLowerCase()
              .includes(
                action.payload.description.replaceAll(" ", "").toLowerCase()
              )) &&
          (action.payload.head === null ||
            item.head
              .replaceAll(" ", "")
              .toLowerCase()
              .includes(action.payload.head.replaceAll(" ", "").toLowerCase()))
        );
      });

      state.searchFilter = {
        ...state.statusFilter,
        filter: action.payload,
      };
    },
    setFilterByStatus(state, action) {
      if (action.payload === "all") {
        state.filteredDepartments = state.departments;
      } else {
        state.filteredDepartments = state.departments.filter(
          (f) => f.status === action.payload
        );
      }

      state.statusFilter = {
        ...state.statusFilter,
        filter: action.payload,
      };
    },
    openSearchFilterModal(state, action) {
      state.searchFiltersModalIsOpen = true;
      state.searchFilter = {
        ...state.searchFilter,
        ...action.payload,
      };
    },
    openStatusFilterModal(state, action) {
      state.statusFiltersModalIsOpen = true;
      state.statusFilter = {
        ...state.statusFilter,
        ...action.payload,
      };
    },
    closeStatusFilterModal(state, action) {
      state.statusFiltersModalIsOpen = false;
      state.statusFilter = {
        ...state.statusFilter,
        ...action.payload,
      };
    },
    closeSearchFilterModal(state, action) {
      state.searchFiltersModalIsOpen = false;
      state.searchFilter = {
        ...state.searchFilter,
        ...action.payload,
      };
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
  closeStatusFilterModal,
  closeSearchFilterModal,
  setFilterBySearch,
} = departmentsSlice.actions;

export default departmentsSlice;
