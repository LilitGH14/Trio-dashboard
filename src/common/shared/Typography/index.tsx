import { createElement } from "react";
import "./styles.scss";

type Variants =
  | "title"
  | "titleMd"
  | "subTitle"
  | "text"
  | "textSm"
  | "textBold"
  | "textSMBold";

interface ITypographyProps {
  variant: Variants;
  children: string;
}

const Tags = {
  title: "h1",
  subTitle: "h3",
  text: "h6",
  textSm: "p",
  textSMBold:"p",
  textBold: "h6",
  titleMd: "h4",
};

const Typography = ({ variant = "text", children }: ITypographyProps) => {
  return createElement(Tags[variant], { children, className: variant });
};

export default Typography;
