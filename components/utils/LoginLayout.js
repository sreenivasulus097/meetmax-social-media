import React from "react";
import { useTranslation } from "next-i18next";
import SignInForm from "../signin/SignInForm";
import SocialButton from "./SocialButton";
import { AiOutlineGoogle } from "react-icons/ai";
import { DiApple } from "react-icons/di";
import { Formik } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import Layout from "../Layout";
import SignUpForm from "../signup/SignUpForm";
import Link from "next/link";

const LoginLayout = ({ pgLabel, pageTitle }) => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={pageTitle}>
      <div className="container ml-[10%] md:ml-0 flex flex-col text-center justify-center items-center min-h-screen ">
        <h2 className="font-bold text-lg mb-2 text-center">
          {t(`login-page:getting_started_${pgLabel}`)}
        </h2>
        <p className="text-sm mb-3 text-center">
          {t(`login-page:signup_desc_${pgLabel}`)}
        </p>
        {/* Box */}
        <div className="bg-white dark:bg-bgLoginLayoutColor rounded-lg p-5">
          {/* Social Buttons */}
          <div className="flex space-x-4 mb-3 whitespace-nowrap justify-between">
            <SocialButton
              icon={<AiOutlineGoogle className="text-lg  ml-1 mr-2" />}
              label={t("login-page:login_google_label")}
            />
            <SocialButton
              icon={<DiApple className="text-xl  ml-1 mr-2" />}
              label={t("login-page:login_apple_label")}
            />
          </div>
          {/* OR */}
          <div className=" text-center mb-2 relative font-bold font-lg">
            <fieldset className="border-t border-lognScrnBrderColor">
              <legend className="uppercase mx-auto px-4 ">
                {t("common:or_label")}
              </legend>
            </fieldset>
          </div>
          {/* INPUT Fields */}
          {pgLabel === "signup" ? (
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
          ) : (
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, { resetForm }) => {
                console.log(value);
                resetForm();
              }}
              validationSchema={ValidationSchema}
              component={SignInForm}
            />
          )}

          {/* Sign In */}
          <div className="flex justify-center mt-4">
            <p className="text-md mr-5">
              {t(`login-page:footer_text_${pgLabel}`)}
            </p>
            <Link
              href={pgLabel === "signin" ? "/auth/signup" : "/auth/signin"}
              passHref
            >
              <a className="text-blue-500 text-md inline-block">
                {t(`login-page:footer_link_label_${pgLabel}`)}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginLayout;
