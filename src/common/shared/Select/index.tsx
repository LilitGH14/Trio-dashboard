import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/index.tsx";
import "./styles.scss";

interface IOption  { label: string; value: string };

interface ISelectProps {
  label: string;
  handleChange: (e: any) => void;
  value: string|null;
  errors: any;
  touched: any;
  name: string;
  placeholder?: string;
  options: IOption[]; 
}

const Select = ({
  label,
  handleChange,
  value,
  errors,
  touched,
  name,
  placeholder,
  options,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleDropdownToggle = () => setIsOpen((prev) => !prev);

  const handleSelectOption = (option: IOption) => {
    handleChange({
      target: { name, value: option.value },
    });
    setIsOpen(false);
  };

  return (
    <div
      className={`select-wrapper ${
        errors[name] && touched[name] ? "error" : ""
      }`}
    >
      <label htmlFor={name}>{label}</label>
      <div className="select-container">
        <div className="select-button" onClick={handleDropdownToggle}>
          <div className="select-input">
            <div>
              {!!value ? (
                <span className="value">{value}</span>
              ) : (
                <span className="placeholder">{placeholder}</span>
              )}
            </div>
            <img
              src="/assets/svg/general-icons/fill-arrow.svg"
              alt="Arrow down"
            />
          </div>
        </div>
        {isOpen && (
          <div className="select-content">
            {options.map((option) => (
              <div
                key={option.value}
                className="select-item"
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {errors[name] && touched[name] && (
        <ErrorMessage error={errors[name]} variant="specific" />
      )}
    </div>
  );
};

export default Select;
