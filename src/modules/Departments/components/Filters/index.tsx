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

  return (
    <div className="filters-wrapper">
      <Formik
        initialValues={{
          name: "",
          description: "",
          head: null,
        }}
        onSubmit={(values) => {
          if (
            values.name.length > 2 ||
            values.description.length > 2 ||
            values.head
          ) {
            filterDeps(values);
          }
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
          <>
            <div className="header">
              <div className="header-btns">
                <IconButton
                  disabled={false}
                  icon={"/assets/svg/general-icons/search.svg"}
                  name={"Search icon"}
                  text="Search"
                  onClick={handleDropdownToggle}
                />
                <Dropdown
                  icon={
                    <StatusIcon
                      fillColor={isStatusOpen ? "#2D6CDF" : "#212529"}
                    />
                  }
                  handleToggle={() => setIsStatusOpen((prev) => !prev)}
                  handleChange={handleFilterByStatus}
                  name={"Status"}
                  options={DEPARTMENT_STATUSES}
                  open={isStatusOpen}
                />
                <IconButton
                  disabled={false}
                  icon={"/assets/svg/general-icons/reset-arrow.svg"}
                  name={"Reset"}
                  text="Reset"
                  onClick={() => {
                    resetDepsFilters();
                    resetForm();
                  }}
                />
              </div>
            </div>
            {isOpen && (
              <div className="content">
                <form onSubmit={handleSubmit} className="filter-inps">
                  {DEPARTMENT_FILTERS.map((m) => (
                    <SearchFilterInput
                      key={m.name}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values[m.value]}
                      name={m.value}
                      label={m.name}
                    />
                  ))}
                  <IconButton
                    disabled={false}
                    icon={"/assets/svg/general-icons/light-search.svg"}
                    name={"Search icon"}
                    variant="secondary"
                    type="submit"
                  />
                </form>
                <div className="close-btn">
                  <IconButton
                    disabled={false}
                    icon={"/assets/svg/general-icons/close.svg"}
                    name={""}
                    variant="primary"
                    shape="circle"
                    onClick={handleDropdownToggle}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
