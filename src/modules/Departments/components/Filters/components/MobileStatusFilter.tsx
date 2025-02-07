import React from "react";
import IconButton from "../../../../../common/shared/IconButton/index.tsx";
import Button from "../../../../../common/shared/Button/Button.tsx";
import { DEPARTMENT_STATUSES } from "../../../../../common/constants/departments.ts";
import "../styles.scss";

interface IMobileStatusFiltersProps {
  handleFilterByStatus: (status: string) => void;
  close: () => void;
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
}
const MobileStatusFilters = ({
  handleFilterByStatus,
  close,
  setSelectedStatus,
  selectedStatus,
}: IMobileStatusFiltersProps) => {
  return (
    <div className="filter-inps">
      <div className="menu-bar" onClick={close}></div>
      <div className="mobile-content-header">
        <h4>Filters</h4>
        <IconButton
          disabled={false}
          icon={"/assets/svg/general-icons/reset-arrow.svg"}
          name={"Reset"}
          text="Reset"
          onClick={() => setSelectedStatus("all")}
        />
      </div>
      <div className="status-wrapper">
        <h5>Status</h5>
        <div className="statuses">
          {DEPARTMENT_STATUSES.map((m) => (
            <span
              key={m.label}
              onClick={() => setSelectedStatus(m.value)}
              className={`status ${selectedStatus === m.value ? "active" : ""}`}
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
        onClick={() => handleFilterByStatus(selectedStatus)}
      />
    </div>
  );
};

export default MobileStatusFilters;
