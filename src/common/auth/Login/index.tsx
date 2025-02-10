import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../shared/Input/index.tsx";
import { Formik } from "formik";
import Button from "../../shared/Button/Button.tsx";
import PasswordInput from "../../shared/PasswordInput/index.tsx";
import FormWrapper from "../components/FormWrapper/index.tsx";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/slices/generalSlice.ts";
import { useAuth } from "../../hooks/useAuth.ts";
import { userValidationSchema } from "../../schemas/userValidation.ts";
import { login } from "../../servicies/userService.ts";
import "./styles.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserPermissions } = useAuth();

  const [generalError, setGeneralError] = useState<{
    hasError: boolean;
    error: string;
  }>({ hasError: false, error: "" });

  const getUser = (values) => {
    login(values.email, values.password)
      .then((res) => {
        if (res.status === 200) {
          dispatch(setUser(res.data));
          setUserPermissions(res.data.permissions);
          navigate("/dashboard");
        } else {
          setGeneralError({
            hasError: true,
            error: "Incorrect Email address or password. Please try again!",
          });
        }
      })
      .catch(() => {
        setGeneralError({
          hasError: true,
          error: "Incorrect Email address or password. Please try again!",
        });
      });
  };

  return (
    <div className="login-wrapper">
      <FormWrapper
        title="Sign In"
        subTitle={`Enter your Email address and password to log in to your CRM system. 
        After successful login, you will be redirected to your dashboard.`}
        generalError={generalError}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={userValidationSchema}
          onSubmit={(values) => {
            getUser(values);
          }}
          validate={() => {
            generalError.hasError &&
              setGeneralError({ hasError: false, error: "" });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
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
              <PasswordInput
                label={"Password"}
                name="password"
                handleChange={handleChange}
                handleBlur={handleBlur}
                value={values.password}
                errors={errors}
                touched={touched}
                placeholder="Enter your email password"
              />
              <Button
                type={"submit"}
                disabled={!dirty}
                text="Continue"
                className={"primary"}
              />
            </form>
          )}
        </Formik>
        <Link to="/reset-password" className="link">
          Forget password?
        </Link>
      </FormWrapper>
    </div>
  );
};
export default Login;
