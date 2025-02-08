import React, { ReactNode } from "react";
import {
  IDepartmentData,
  IDepartmentHeader,
} from "../../../modules/Departments/common/models.ts";
import Typography from "../Typography/index.tsx";
import "./styles.scss";

interface ITabeleProps {
  headers: IDepartmentHeader[];
  data: IDepartmentData[];
  selectDep: (dep: IDepartmentData) => void;
  setData: (header: IDepartmentHeader, data: IDepartmentData) => ReactNode
}
const DesktopTable = ({ headers, data, selectDep, setData }: ITabeleProps) => {
  return (
    <>
      <div className="fixed-header">
        {headers.map((h: IDepartmentHeader) => (
          <div className={`header-item ${h.col}`} key={h.name}>
            {h.name}
          </div>
        ))}
        <div className="header-item action"></div>
      </div>

      {data.length === 0 && (
        <div className="no-data">
          <Typography variant={"title"} children={"No data"} />
        </div>
      )}

      {data.map((d: IDepartmentData) => (
        <div className="data-wrapper" key={d.name}>
          {headers.map((h: IDepartmentHeader) => setData(h, d))}
          <div
            className="data-item action"
            role="button"
            onClick={() => selectDep(d)}
          >
            ...
          </div>
        </div>
      ))}
    </>
  );
};
export default DesktopTable;
