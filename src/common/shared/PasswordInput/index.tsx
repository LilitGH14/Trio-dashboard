import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/index.tsx";
import "./styles.scss";

interface IInputProps {
  label: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  value: string;
  errors: any;
  touched: any;
  name: string;
  placeholder: string;
  hideError?: boolean;
  hasError?: boolean;
}

const PasswordInput = ({
  label,
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
  name,
  placeholder,
  hideError = false,
  hasError = false,
}: IInputProps) => {
  const [isEyeClosed, setIsEyeClosed] = useState(true);
  const [inpType, setInpType] = useState<"text" | "password">("password");

  const imagePath = isEyeClosed
    ? "/assets/svg/auth/closed-eye.svg"
    : "/assets/svg/auth/open-eye.svg";

  const changeInpType = () => {
    setInpType((prevVal) => (prevVal === "text" ? "password" : "text"));
    setIsEyeClosed(!isEyeClosed);
  };

  return (
    <div className={`input-wrapper ${errors[name] || hasError ? "error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <div className="input-icon-wrapper">
        <input
          id={name}
          type={inpType}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
          placeholder={placeholder}
        />
        <img
          src={imagePath}
          alt={isEyeClosed ? "Closed Eye" : "Open Eye"}
          onClick={changeInpType}
          role="button"
        />
      </div>
      {!hideError && errors[name] && touched[name] && errors[name] && (
        <ErrorMessage error={errors[name]} variant="specific" />
      )}
    </div>
  );
};

export default PasswordInput;
