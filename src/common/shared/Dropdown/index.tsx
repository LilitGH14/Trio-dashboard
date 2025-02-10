import React, { ReactNode } from "react";
import FilledArrowIcon from "../../icons/FilledArrowIcon.tsx";
import "./styles.scss";

interface IOption {
  label: string;
  value: string;
}

interface ISelectProps {
  icon: ReactNode;
  handleChange: (e: any) => void;
  handleToggle: (e: any) => void;
  name: string;
  options: IOption[];
  open: boolean;
  selectedOption: string;
}

const Dropdown = ({
  icon,
  name,
  options,
  open,
  selectedOption,
  handleToggle,
  handleChange,
}: ISelectProps) => {
  return (
    <div className="dropdown">
      <div className="dropdown-container">
        <div
          className={`dropdown-button ${open ? "open" : ""}`}
          onClick={handleToggle}
        >
          <div className="inner">
            {icon}
            <span>{name}</span>
          </div>
          <FilledArrowIcon
            fillColor={open ? "#2D6CDF" : "#212529"}
            className={`arrow ${open ? "open" : ""}`}
          />
        </div>
        {open && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${
                  selectedOption === option.value ? "active" : ""
                }`}
                onClick={() => handleChange(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
