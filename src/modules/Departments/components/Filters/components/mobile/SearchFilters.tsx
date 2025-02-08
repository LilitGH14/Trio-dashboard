import React from "react";
import IconButton from "../../../../../../common/shared/IconButton/index.tsx";
import Button from "../../../../../../common/shared/Button/Button.tsx";
import { DEPARTMENT_FILTERS } from "../../../../../../common/constants/departments.ts";
import SearchFilterInput from "../../../SearchFilterInput/index.tsx";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useAppSelector } from "../../../../../../common/hooks/useAppSelector.tsx";
import {
  closeSearchFilterModal,
  resetFilterDepartments,
  setFilterBySearch,
} from "../../../../store/departmentsSlice.ts";
import { depSearchValidationSchema } from "../../../../common/depValidation.ts";
import "../../styles.scss";

const SearchFilters = () => {
  const dispatch = useDispatch();

  const { searchFilter } = useAppSelector((state) => state.departments);

  const closeModal = () => {
    dispatch(closeSearchFilterModal({ height: 0 }));
  };

  const filterDeps = (filters) => {
    dispatch(setFilterBySearch(filters));
  };

  return (
    <Formik
      initialValues={{
        name: searchFilter.name ?? "",
        description: searchFilter.description ?? "",
        head: searchFilter.head ?? "",
      }}
      validationSchema={depSearchValidationSchema}
      onSubmit={(values) => {
        filterDeps(values);
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} className="filter-inps">
          <div className="menu-bar" onClick={closeModal}></div>
          <div className="mobile-content-header">
            <h4>Search by</h4>
            <IconButton
              disabled={false}
              icon={"/assets/svg/general-icons/reset-arrow.svg"}
              name={"Clear all"}
              text="Clear all"
              onClick={() => {
                resetForm();
                dispatch(resetFilterDepartments());
              }}
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
            disabled={isSubmitting}
            text={"Show Results"}
            className={"secondary"}
          />
        </form>
      )}
    </Formik>
  );
};

export default SearchFilters;
