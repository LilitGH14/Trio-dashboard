import React, { useState } from "react";
import IconButton from "../../../../../../common/shared/IconButton/index.tsx";
import { DEPARTMENT_STATUSES } from "../../../../../../common/constants/departments.ts";
import Button from "../../../../../../common/shared/Button/Button.tsx";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../../../../common/hooks/useAppSelector.tsx";
import {
  closeStatusFilterModal,
  setFilterByStatus,
} from "../../../../store/departmentsSlice.ts";
import "../../styles.scss";

const StatusFilter = () => {
  const dispatch = useDispatch();

  const { statusFilter } = useAppSelector((state) => state.departments);

  const [selectedStatus, setSelectedStatus] = useState(
    statusFilter.filter ?? "all"
  );

  const closeModal = () => {
    dispatch(closeStatusFilterModal({ height: 0, filter: selectedStatus }));
  };

  const setFilters = () => {
    dispatch(setFilterByStatus(selectedStatus));
  };

  const resetFilters = () => {
    dispatch(setFilterByStatus("all"));
    setSelectedStatus("all");
  };

  return (
    <div className="filter-inps">
      <div className="menu-bar" onClick={closeModal}></div>
      <div className="mobile-content-header">
        <h4>Filters</h4>
        <IconButton
          disabled={false}
          icon={"/assets/svg/general-icons/reset-arrow.svg"}
          name={"Reset"}
          text="Reset"
          onClick={resetFilters}
        />
      </div>
      <div className="status-wrapper">
        <h5>Status</h5>
        <div className="statuses">
          {DEPARTMENT_STATUSES.map((m) => (
            <span
              key={m.label}
              onClick={() => setSelectedStatus(m.value)}
              className={`status ${
                (selectedStatus ?? statusFilter.filter) === m.value
                  ? "active"
                  : ""
              }`}
            >
              {m.label}
            </span>
          ))}
        </div>
      </div>
      <Button
        type="button"
        disabled={false}
        text={"Show Results"}
        className={"secondary"}
        onClick={setFilters}
      />
    </div>
  );
};

export default StatusFilter;
