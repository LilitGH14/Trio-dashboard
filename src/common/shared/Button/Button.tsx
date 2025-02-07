import React from "react";
import "./styles.scss";

type Variants = "submit" | "reset" | "button";
type ClassNames = "primary" | "secondary" | "light";

interface IButtonops {
  type: Variants;
  disabled: boolean;
  text: string;
  className: ClassNames;
  onClick?: () => void;
}

const Button = ({ type, disabled, text, onClick, className }: IButtonops) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default Button;
