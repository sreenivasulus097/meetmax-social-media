import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { DiApple } from "react-icons/di";
import { Formik } from "formik";
import SignUpForm from "./SignUpForm";
import { useTranslation } from "react-i18next";

import SocialButton from "../utils/SocialButton";
import { ValidationSchema } from "../utils/ValidationSchema";
const SignUp = () => {
  const { t } = useTranslation();
  return (
    <div className="container ml-[10%] md:ml-0 flex flex-col text-center justify-center items-center min-h-screen ">
      <h2 className="font-bold text-lg mb-2 text-center">
        {t("getting_started")}
      </h2>
      <p className="text-sm mb-3 text-center">{t("signup_desc")}</p>
      {/* Box */}
      <div className="bg-white dark:bg-bgLoginLayoutColor rounded-lg p-5">
        {/* Social Buttons */}
        <div className="flex space-x-4 mb-3 whitespace-nowrap justify-between">
          <SocialButton
            icon={<AiOutlineGoogle className="text-lg  ml-1 mr-2" />}
            label={t("login_google_label")}
          />
          <SocialButton
            icon={<DiApple className="text-xl  ml-1 mr-2" />}
            label={t("login_google_label")}
          />
        </div>
        {/* OR */}
        <div className=" text-center mb-2 relative font-bold font-lg">
          <fieldset className="border-t border-lognScrnBrderColor">
            <legend className="uppercase mx-auto px-4 ">or</legend>
          </fieldset>
        </div>
        {/* INPUT Fields */}
        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            dob: "",
            gender: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(value);
            resetForm();
          }}
          validationSchema={ValidationSchema}
          component={SignUpForm}
        />
        {/* Sign In */}
        <div className="flex justify-center mt-4">
          <p className="text-md mr-5">Already have an account?</p>
          <a className="text-blue-500 text-md inline-block">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
