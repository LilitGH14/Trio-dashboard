import React from "react";
import Typography from "../../../../common/shared/Typography/index.tsx";
import Button from "../../../../common/shared/Button/Button.tsx";
import "./styles.scss";

const NoDepartments = ({ open }) => {
  return (
    <div className="no-departments-wrapper">
      <img src="/assets/svg/departments/no-result.svg" alt="No departments" />
      <Typography variant="titleMd">There are no departments</Typography>
      <Typography variant="text">
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
