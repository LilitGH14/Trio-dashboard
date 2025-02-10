import React from "react";
import Button from "../../../../common/shared/Button/Button.tsx";
import Typography from "../../../../common/shared/Typography/index.tsx";
import "./styles.scss";

interface IPageHeader {
  open: () => void;
}
const PageHeader = ({ open }: IPageHeader) => {
  return (
    <div className="page-header-wrapper">
      <Typography variant={"title"}>Departments</Typography>
      <Button
        type={"button"}
        disabled={false}
        text={"+ Create department"}
        className={"secondary"}
        onClick={open}
      />
    </div>
  );
};
export default PageHeader;
