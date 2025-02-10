import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

type Variant = "primary" | "light";

interface ILinkText {
  value: string;
  link: string;
  variant: Variant;
}
const LinkText = ({ variant, value, link }: ILinkText) => {
  return (
    <Link to={link} className={variant}>
      {value !== "undefined" ? `${value} Branches` : "No Branches"}
    </Link>
  );
};
export default LinkText;
