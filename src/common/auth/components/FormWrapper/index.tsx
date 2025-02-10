import React, { lazy, ReactNode } from "react";
import Typography from "../../../shared/Typography/index.tsx";
import Terms from "../Terms/index.tsx";
import "./styles.scss";

const ErrorMessage = lazy(
  () => import("../../../shared/ErrorMessage/index.tsx")
);

interface IFormWrapperProps {
  title?: string;
  subTitle?: string;
  children: ReactNode;
  generalError?: { hasError: boolean; error: string };
  hasTerms?: boolean;
}

const FormWrapper = ({
  title,
  subTitle,
  children,
  generalError,
  hasTerms = true,
}: IFormWrapperProps) => {
  return (
    <div className="form-wrapper">
      <div className="left-wrapper">
        <img src="/assets/svg/auth/login-banner.svg" alt="Login banner" />
      </div>
      <div className="right-wrapper">
        <div className="inner-wrapper">
          <div className="form-header">
            {title && <Typography variant="title">{title}</Typography>}
            {subTitle && <Typography variant="text">{subTitle}</Typography>}
            {generalError?.hasError && (
              <ErrorMessage error={generalError.error} variant="general" />
            )}
            {children}
          </div>
          {hasTerms && <Terms />}
        </div>
      </div>
    </div>
  );
};
export default FormWrapper;
