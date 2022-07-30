import React from "react";
import Layout from "../../components/Layout";
import { Formik } from "formik";
import { Form, Field } from "formik";
import { ValidationSchemaForgetPwd } from "../../components/utils/ValidationSchema";
import {useState} from 'react'
import Link from "next/link";
import LoginErrorMessage from "../../components/utils/LoginErrorMessage";
import { FaAt } from "react-icons/fa";
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import Router from 'next/router'
import { useCookies } from 'react-cookie';

const forgotpwd = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("hidden");
  const [cookies, setCookie] = useCookies();
  
  const handleVerification = async (values, { resetForm }) => {
    const { email } = values;
    console.log('email is ',email)
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setSuccessMessage("Mail sent")
      setCookie('forgottenUser', email);
      Router.push('/auth/checkmail')
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage(error.message)
    });  
  };

  return (
    <Layout pageTitle="Social Media - Forgot Password">
      <div className="container ml-[10%] md:ml-0 flex flex-col text-center justify-center items-center sm:flex">
        <h2 className="font-bold text-3xl mb-2 text-center text-gray-500">
          {/* {t(`login-page:getting_started_${pgLabel}`)} */}
          Forgot Password ?
        </h2>
        <h2 className="font-medium text-md mb-2 text-center text-gray-500 mt-4">
          Enter your details to receive a reset link
        </h2>
        <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={ValidationSchemaForgetPwd}
      onSubmit={(values, { resetForm }) => {

        handleVerification(values, { resetForm });
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <p
            className={`text-green-600 text-md-bold  text-center   ${successMessage}`}
          >
            Mail sent
            {/* Thanks for signing up. Welcome to our community. Please click */}
            {/* <Link href="/" passHref>
              <a className="text-blue-500 text-md inline-block px-2 ">here</a>
            </Link>
            to signin. */}
          </p>

          <div className="items-center mt-24">
            {/* Email */}

            <div className="py-2.5 px-1 border shadow-sm border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md w-full box-border align-center text-md mt-5">
              <FaAt className=" w-1/12 inline-block text-sm" />

              <Field
                className="w-11/12 bg-white dark:bg-bgLoginLayoutColor h-[100%] inline-block focus:outline-none"
                type="text"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <LoginErrorMessage errorVal={true} errorMsg={errorMessage} />

            {/* SignUp Button */}

            <button
              type="submit"
              className="w-full px-60 mt-5 h-10 bg-btnBlue text-white text-center text-md rounded-md"

            >
              Send
            </button>

          </div>
        </Form>
      )}
    </Formik>
      </div>
    </Layout>
  );
};

export default forgotpwd;
