import React from "react";
import ErrorMessage from "../ErrorMessage/index.tsx";
import "./styles.scss";

type Variants = "text" | "number" | "textarea";

interface IInputProps {
  variant: Variants;
  label: string;
  handleChange: (e: any) => void;
  handleBlur: (e: any) => void;
  value: string;
  errors: any;
  touched: any;
  name: string;
  placeholder: string;
}

const Input = ({
  variant,
  label,
  handleChange,
  handleBlur,
  value,
  errors,
  touched,
  name,
  placeholder,
}: IInputProps) => {
  return (
    <div className={`input-wrapper ${errors[name] ? "error" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <div>
        {variant === "textarea" ? (
          <textarea
            id={name}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            name={name}
            placeholder={placeholder}
          ></textarea>
        ) : (
          <input
            id={name}
            type={variant}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
            name={name}
            placeholder={placeholder}
          />
        )}
      </div>
      {errors[name] && touched[name] && (
        <ErrorMessage error={errors[name]} variant="specific" />
      )}
    </div>
  );
};

export default Input;
