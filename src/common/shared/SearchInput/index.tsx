import React from "react";
import "./styles.scss";

interface IInputProps {
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  value: string;
  name: string;
  placeholder: string;
}

const SearchInput = ({
  handleChange,
  handleBlur,
  value,
  name,
  placeholder,
}: IInputProps) => {
  return (
    <div className="search-input-wrapper">
      <input
        id={name}
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
        placeholder={placeholder}
      />
      <span className="divider"></span>
      <img src="/assets/svg/general-icons/search.svg" alt="Search icon" />
    </div>
  );
};

export default SearchInput;
