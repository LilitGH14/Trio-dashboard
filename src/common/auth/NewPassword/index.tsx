import React, { useState } from "react";
import { Formik } from "formik";
import Button from "../../shared/Button/Button.tsx";
import FormWrapper from "../components/FormWrapper/index.tsx";
import PasswordInput from "../../shared/PasswordInput/index.tsx";
import ValidationList from "../components/ValidationList/index.tsx";
import { passwordValidation } from "../../schemas/userValidation.ts";
import { useNavigate } from "react-router-dom";
import SuccessCard from "../../shared/SuccessCard/index.tsx";
import { resetPassword } from "../../servicies/userService.ts";
import "./styles.scss";

const NewPassword = () => {
  const navigate = useNavigate();

  const [passIsUpdatedSuccessFully, setPassIsUpdatedSuccessFully] =
    useState(false);
  const [startChecking, setStartChecking] = useState(false);
  const [error, setError] = useState("");
  const [errPass, setErrPass] = useState(false);
  const [validations, setValidations] = useState([
    { isValid: false, validation: "8-32 characters long" },
    { isValid: false, validation: "At least one number" },
    { isValid: false, validation: "One uppercase/lowercase letter" },
    { isValid: false, validation: "Contains a symbol" },
  ]);

  const goToLogin = (): void => {
    navigate("/login");
  };

  const checkValidations = (values) => {
    let fd = [...validations];

    fd[0].isValid = values.password.length >= 8 && values.password.length <= 32;
    fd[1].isValid = /[0-9]/.test(values.password);
    fd[2].isValid = /[a-zA-Z]/.test(values.password);
    fd[3].isValid = /[\W_]/.test(values.password);

    setErrPass(fd.filter((f) => !f.isValid).length > 0);

    if (values.password !== values.repeatPassword && !!values.repeatPassword) {
      setError("Dont match");
    } else if (!values.repeatPassword) {
      setError("Repeat pass is required");
    } else {
      setError("");
    }

    setValidations(fd);
  };

  return (
    <div className="reset-password-wrapper">
      {!passIsUpdatedSuccessFully ? (
        <FormWrapper title={"New password"} hasTerms={true}>
          <Formik
            initialValues={{ password: "", repeatPassword: "" }}
            validationSchema={passwordValidation}
            validate={(values) => {
              checkValidations(values);
              setStartChecking(true);
            }}
            onSubmit={(values) => {
              resetPassword(values.password)
                .then((res) => {
                  if (res) {
                    setPassIsUpdatedSuccessFully(true);
                  } else {
                    //show error
                  }
                })
                .catch(() => {
                  //show error
                });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <PasswordInput
                  label={"New password"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.password}
                  name="password"
                  errors={errors}
                  touched={touched}
                  placeholder="Enter your new password"
                  hideError
                  hasError={errPass}
                />
                <ValidationList
                  validations={validations}
                  startChecking={startChecking}
                />
                <PasswordInput
                  label={"Repeat password"}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.repeatPassword}
                  name="repeatPassword"
                  errors={{ repeatPassword: error }}
                  touched={touched}
                  placeholder="Repeat your new password"
                />
                <Button
                  type={"submit"}
                  disabled={isSubmitting}
                  text="Continue"
                  className={"primary"}
                />
              </form>
            )}
          </Formik>
        </FormWrapper>
      ) : (
        <FormWrapper hasTerms={false}>
          <SuccessCard
            title="Congratulations!"
            subTitle={
              "Your password was successfully  changed! Sign In and continue your journey with us."
            }
            btnTitle="Go to Sign In"
            handleClick={goToLogin}
          />
        </FormWrapper>
      )}
    </div>
  );
};
export default NewPassword;
