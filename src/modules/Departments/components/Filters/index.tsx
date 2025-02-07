import React, { useState } from "react";
import { Formik } from "formik";
import IconButton from "../../../../common/shared/IconButton/index.tsx";
import Dropdown from "../../../../common/shared/Dropdown/index.tsx";
import StatusIcon from "../../../../common/icons/StatusIcon.tsx";
import {
  DEPARTMENT_FILTERS,
  DEPARTMENT_STATUSES,
} from "../../../../common/constants/departments.ts";
import SearchFilterInput from "../SearchFilterInput/index.tsx";
import { IFilter } from "../../models/index.ts";
import "./styles.scss";
import DesktopFilters from "./components/DesktopFilters.tsx";
import MobileFilters from "./components/MobileFilters.tsx";

interface IFiltersProps {
  filterDeps: (filters: IFilter) => void;
  filterByStatus: (status: string) => void;
  resetDepsFilters: () => void;
}
const Filters = ({
  filterDeps,
  filterByStatus,
  resetDepsFilters,
}: IFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatusOpen, setIsStatusOpen] = useState(false);

  const handleDropdownToggle = () => setIsOpen((prev) => !prev);

  const handleFilterByStatus = (status: string) => {
    filterByStatus(status);
    setIsStatusOpen((prev) => !prev);
  };

  if (window.innerWidth > 768) {
    return (
      <div className="filters-wrapper">
        <DesktopFilters
          filterDeps={filterDeps}
          filterByStatus={filterByStatus}
          resetDepsFilters={resetDepsFilters}
        />
      </div>
    );
  }

  return (
    <div className="mobile-filters-wrapper">
      <MobileFilters
        filterDeps={filterDeps}
        filterByStatus={filterByStatus}
        resetDepsFilters={resetDepsFilters}
      />
    </div>
  );
};

export default Filters;
