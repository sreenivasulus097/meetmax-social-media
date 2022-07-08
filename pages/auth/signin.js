import React from "react";
import LoginLayout from "../../components/utils/LoginLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const signin = () => {
  // console.log("page props", props);
  return <LoginLayout pgLabel="signin" pageTitle="Social Media - Sign In" />;
};

export default signin;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login-page"])),
      // Will be passed to the page component as props
    },
  };
}
