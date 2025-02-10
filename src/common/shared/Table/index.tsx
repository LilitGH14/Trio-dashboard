import React, { lazy } from "react";
import {
  IDepartmentData,
  IDepartmentHeader,
  IDepartmentMobileHeader,
} from "../../../modules/Departments/common/models.ts";
import Chip from "../Chip/index.tsx";
import LinkText from "../Link/index.tsx";
import "./styles.scss";

const MobileTable = lazy(() => import("./MobileTable.tsx"));
const DesktopTable = lazy(() => import("./DesktopTable.tsx"));

interface ITabeleProps {
  headers: IDepartmentHeader[];
  mobileHeaders: IDepartmentMobileHeader;
  data: IDepartmentData[];
  selectDep: (dep: IDepartmentData) => void;
}
const DataTable = ({
  headers,
  mobileHeaders,
  data,
  selectDep,
}: ITabeleProps) => {
  const setData = (h: IDepartmentHeader, d: IDepartmentData) => {
    if (h.headerId === "status") {
      return (
        <div className={`data-item ${h.col}`} key={h.headerId}>
          <Chip variant={d[h.headerId]} value={d[h.headerId]} />
        </div>
      );
    } else if (h.headerId === "branches") {
      return (
        <div className={`data-item ${h.col}`} key={h.headerId}>
          <LinkText value={`${d[h.headerId]}`} link={"/"} variant={"primary"} />
        </div>
      );
    } else {
      return (
        <div className={`data-item ${h.col}`} key={h.headerId}>
          {d[h.headerId]}
        </div>
      );
    }
  };

  if (window.innerWidth > 768) {
    return (
      <div className="table-wrapper">
        <div className="table-content">
          <DesktopTable
            headers={headers}
            data={data}
            selectDep={selectDep}
            setData={setData}
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="table-wrapper">
      <div className="mobile-table-content">
        <MobileTable
          headers={mobileHeaders}
          data={data}
          selectDep={selectDep}
          setData={setData}
        />
      </div>
    </div>
  );
};
export default DataTable;
