import React from "react";
import LoginLayout from "../../components/utils/LoginLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const signup = () => {
  return <LoginLayout pgLabel="signup" pageTitle="Social Media - Sign Up" />;
};

export default signup;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login-page"])),
      // Will be passed to the page component as props
    },
  };
}
