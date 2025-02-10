import React from "react";
import "./styles.scss";

type Variant = "disabled" | "active" | "pending";

interface IChipProps {
  variant: Variant;
  value: string;
}

const Chip = ({ variant, value }: IChipProps) => {
  return (
    <span className={`chip ${variant}`}>
      <span>{value}</span>
    </span>
  );
};
export default Chip;
