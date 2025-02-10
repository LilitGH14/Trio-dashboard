import * as Yup from "yup";

export const emailValidationSchema = Yup.object({
  email: Yup.string().matches(
    /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/i,
    "Invalid email"
  ),
});

export const passwordValidation = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[\W_]/, "Password must contain at least one symbol")
    .required("Password is required"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Repeat password is required"),
});

export const userValidationSchema = Yup.object({
  email: Yup.string().matches(
    /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/i,
    "Invalid email"
  ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[\W_]/, "Password must contain at least one symbol")
    .required("Password is required"),
});
