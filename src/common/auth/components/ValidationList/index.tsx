import React, { useCallback } from "react";
import "./styles.scss";

interface IValidationListProps {
  validations: { isValid: boolean; validation: string }[];
  startChecking: boolean;
}

const ValidationList = ({
  validations,
  startChecking,
}: IValidationListProps) => {
  const isValid = useCallback((m: { isValid: any }) => {
    return m.isValid
      ? "/assets/svg/auth/valid.svg"
      : "/assets/svg/auth/invalid.svg";
  }, []);

  return (
    <ul className="validation-list-wrapper">
      {validations.map((m: any) => (
        <li key={m.validation}>
          {!startChecking ? (
            <img
              src="/assets/svg/general-icons/dot.svg"
              alt="Default icon"
              className="icon"
            />
          ) : (
            <img src={isValid(m)} alt="Validation icon" className="icon" />
          )}
          {m.validation}
        </li>
      ))}
    </ul>
  );
};

export default ValidationList;
