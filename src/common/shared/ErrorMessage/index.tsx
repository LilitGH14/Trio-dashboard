import React from "react";
import Typography from "../Typography/index.tsx";
import "./styles.scss";

type Variants = "general" | "specific";

interface IErrorProps {
  variant: Variants;
  error: any;
}

const ErrorMessage = ({ error, variant }: IErrorProps) => {
  if (variant === "general") {
    return (
      <div className="general-error-wrapper">
        <img src="./assets/svg/auth/general-error.svg" alt="Error icon" />
        <Typography variant="text">{error}</Typography>
      </div>
    );
  }

  return (
    <div className="error-wrapper">
      <img src="./assets/svg/auth/error-icon.svg" alt="Error icon" />
      <span>{error}</span>
    </div>
  );
};

export default ErrorMessage;
