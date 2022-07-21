import React from "react";
import * as Yup from "yup";
export const ValidationSchemaSignUp = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .email("Please enter a valid email address"),
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 Chars(atleast one upper, lower, number and special chars)"
    ),
  dob: Yup.string().required("DOB is required"),
  gender: Yup.string().required("Gender is required"),
});

export const ValidationSchemaSignIn = Yup.object().shape({
  email: Yup.string()
    .required("Required")
    .email("Please enter a valid email address"),

  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 Chars(atleast one upper, lower, number and special chars)"
    ),
});
