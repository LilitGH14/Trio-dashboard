import React from "react";
import Typography from "../Typography/index.tsx";
import Button from "../Button/Button.tsx";
import "./styles.scss";

interface ISuccessCardPros {
  title: string;
  subTitle: string;
  btnTitle: string;
  className?: string;
  handleClick: () => void;
}

const SuccessCard = ({
  title,
  subTitle,
  btnTitle,
  className,
  handleClick,
}: ISuccessCardPros) => {
  return (
    <div className={`${className} pass-change-success-wrapper`}>
      <img
        src="/assets/svg/auth/congretulations.svg"
        alt="Success icon"
        className="icon"
      />
      <Typography variant="title">{title}</Typography>
      <Typography variant="subTitle">{subTitle}</Typography>
      <Button
        type="button"
        disabled={false}
        text={btnTitle}
        className="primary"
        onClick={handleClick}
      />
    </div>
  );
};

export default SuccessCard;
