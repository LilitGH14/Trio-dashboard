import React from "react";
import Typography from "../../../shared/Typography/index.tsx";
import "./styles.scss";

const Terms = () => {
  return (
    <div className="terms-wrapper">
      <Typography variant="textSm">
        By signing up to create an account I accept Company’s
      </Typography>
      <Typography variant="textSMBold">Terms of use & Privacy Policy.</Typography>
    </div>
  );
};

export default Terms;
