import React from "react";
import "./styles.scss";

interface IInputProps {
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  value: string;
  name: string;
  label: string;
  placeholder?: string;
}

const SearchFilterInput = ({
  handleChange,
  handleBlur,
  value,
  name,
  label,
  placeholder,
}: IInputProps) => {
  return (
    <div className="search-filter-inp-wrapper">
      <label htmlFor={label}>{label}</label>
      <div className="filter-input-wrapper">
        <img src="/assets/svg/general-icons/search.svg" alt="Search icon" />
        <input
          id={name}
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          placeholder={placeholder ?? ""}
        />
      </div>
    </div>
  );
};

export default SearchFilterInput;
