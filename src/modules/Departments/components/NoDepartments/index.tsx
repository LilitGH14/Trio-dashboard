import React from "react";
import Typography from "../../../../common/shared/Typography/index.tsx";
import "./styles.scss";
import Button from "../../../../common/shared/Button/Button.tsx";

const NoDepartments = ({ open }) => {
  return (
    <div className="no-departments-wrapper">
      <img src="/assets/svg/departments/no-result.svg" alt="No departments" />
      <Typography variant="titleMd">There are no departments</Typography>
      <Typography variant="subTitle">
        You haven’t created any departments to your system yet.
      </Typography>
      <div className="btn-wrapper">
        <Button
          type={"button"}
          disabled={false}
          text="Create Department"
          onClick={open}
          className="secondary"
        />
      </div>
    </div>
  );
};
export default NoDepartments;
