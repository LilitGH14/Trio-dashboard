import React, { ReactNode, useState } from "react";
import {
  IDepartmentData,
  IDepartmentHeader,
  IDepartmentMobileHeader,
} from "../../../modules/Departments/common/models.ts";
import IconButton from "../IconButton/index.tsx";
import Typography from "../Typography/index.tsx";
import "./styles.scss";

interface ITabeleProps {
  headers: IDepartmentMobileHeader;
  data: IDepartmentData[];
  selectDep: (dep: IDepartmentData) => void;
  setData: (header: IDepartmentHeader, data: IDepartmentData) => ReactNode;
}
const MobileTable = ({ headers, data, setData, selectDep }: ITabeleProps) => {
  const [depDetailsIsOpen, setDepDetailsIsOpen] = useState<number | null>(null);

  const openDepDetails = (depId: number) => {
    setDepDetailsIsOpen(depDetailsIsOpen === depId ? null : depId);
  };

  return (
    <div className="mobile-table-content">
      <div className="mobile-table-header">
        {headers.main.map((h: Partial<IDepartmentHeader>) => (
          <div className={`header-item ${h.col}`} key={h.name}>
            {h.name}
          </div>
        ))}
      </div>

      {!data.length && (
        <div className="no-results">
          <Typography variant={"subTitle"} children={"No Results"} />
        </div>
      )}

      {data.map((d: IDepartmentData) => (
        <div key={d.id} className="card">
          <div className="accordion" onClick={() => openDepDetails(d.id)}>
            {headers.main.map((h: Partial<IDepartmentHeader>) => (
              <div className={`header-item`} key={h.name}>
                {setData(h as IDepartmentHeader, d)}
              </div>
            ))}
            <img
              src="/assets/svg/general-icons/fill-arrow.svg"
              alt="Arrow down"
              className={`arrow ${depDetailsIsOpen === d.id ? "up" : "down"}`}
            />
          </div>
          <div
            className={`panel ${depDetailsIsOpen === d.id ? "open" : "closed"}`}
          >
            {headers.details.map((h: Partial<IDepartmentHeader>) => (
              <div className={`data-item`} key={h.name}>
                {setData(h as IDepartmentHeader, d)}
              </div>
            ))}
            <div className="btn-wrapper">
              <IconButton
                disabled={false}
                icon={"/assets/svg/general-icons/edit.svg"}
                name={"Edit"}
                onClick={() => selectDep(d)}
              />
              <IconButton
                disabled={false}
                icon={"/assets/svg/general-icons/view.svg"}
                name={"View"}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MobileTable;
