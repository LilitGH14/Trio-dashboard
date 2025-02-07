import React from "react";
import IconButton from "../../../../../common/shared/IconButton/index.tsx";
import Button from "../../../../../common/shared/Button/Button.tsx";
import { DEPARTMENT_FILTERS } from "../../../../../common/constants/departments.ts";
import SearchFilterInput from "../../SearchFilterInput/index.tsx";
import "../styles.scss";

interface IDepSearchFiltersProps {
  resetFilters: () => void;
  handleBlur: (e: any) => void;
  values: any;
  handleChange: (e: any) => void;
  handleSubmit: () => void;
  isValid: boolean;
  close: () => void;
}
const DepSearchFilters = ({
  resetFilters,
  handleBlur,
  values,
  handleChange,
  handleSubmit,
  isValid,
  close,
}: IDepSearchFiltersProps) => {
  return (
    <form onSubmit={handleSubmit} className="filter-inps">
      <div className="menu-bar" onClick={close}></div>
      <div className="mobile-content-header">
        <h4>Search by</h4>
        <IconButton
          disabled={false}
          icon={"/assets/svg/general-icons/reset-arrow.svg"}
          name={"Clear all"}
          text="Clear all"
          onClick={resetFilters}
        />
      </div>
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
      <Button
        type="submit"
        disabled={isValid}
        text={"Show Results"}
        className={"secondary"}
      />
    </form>
  );
};

export default DepSearchFilters;
