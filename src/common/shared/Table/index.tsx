import React from "react";
import Chip from "../Chip/index.tsx";
import LinkText from "../Link/index.tsx";
import {
  IDepartmentData,
  IDepartmentHeader,
} from "../../../modules/Departments/models/index.ts";
import "./styles.scss";
import Typography from "../Typography/index.tsx";

interface ITabeleProps {
  headers: IDepartmentHeader[];
  data: IDepartmentData[];
  selectDep: (dep: IDepartmentData) => void;
}
const DataTable = ({ headers, data, selectDep }: ITabeleProps) => {
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

  return (
    <div className="table-wrapper">
      <div className="table-content">
        <div className="fixed-header">
          {headers.map((h: IDepartmentHeader) => (
            <div className={`header-item ${h.col}`} key={h.name}>
              {h.name}
            </div>
          ))}
          <div className="header-item action"></div>
        </div>
        {data.length === 0 && <div className="no-data"><Typography variant={"title"} children={"No data"}/></div>}
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
      </div>
    </div>
  );
};
export default DataTable;
