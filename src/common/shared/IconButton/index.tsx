import React from "react";
import "./styles.scss";

type Variant = "primary" | "secondary";
type Shape = "circle" | "square";
type Type = "submit" | "button";

interface IIconButtonProps {
  shape?: Shape;
  variant?: Variant;
  disabled: boolean;
  icon: string;
  name: string;
  text?: string;
  type?: Type;
  onClick?: () => void;
}

const IconButton = ({
  disabled,
  icon,
  name,
  text = "",
  onClick,
  variant = "primary",
  shape = "square",
  type = "button",
}: IIconButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inp-button ${variant} ${shape}`}
      onClick={onClick}
    >
      <img src={icon} alt={name} />
      {text && <span>{text}</span>}
    </button>
  );
};
export default IconButton;
