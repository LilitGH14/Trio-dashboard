import React from "react";
import Input from "../../shared/Input/index.tsx";
import { Formik } from "formik";
import Button from "../../shared/Button/Button.tsx";
import FormWrapper from "../components/FormWrapper/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import { emailValidationSchema } from "../../schemas/userValidation.ts";
import { getLink } from "../../servicies/userService.ts";
import "./styles.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  
  return (
    <div className="reset-password-wrapper">
      <FormWrapper
        title="Reset password"
        subTitle={`Enter the email address associated with your account, and we’ll send you a link to reset your password.`}
      >
        <Formik
          initialValues={{ email: "" }}
          validationSchema={emailValidationSchema}
          onSubmit={(values) => {
            getLink(values.email)
              .then((res) => {
                if (res) {
                  navigate("/new-password");
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
              <Input
                variant={"text"}
                label={"Email address"}
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.email}
                name="email"
                errors={errors}
                touched={touched}
                placeholder="Enter your email address"
              />
              <Button
                type={"submit"}
                disabled={isSubmitting}
                text="Send the link"
                className={"primary"}
              />
            </form>
          )}
        </Formik>
        <Link to="/login" className="link">
          or Sign In
        </Link>
      </FormWrapper>
    </div>
  );
};
export default ResetPassword;
