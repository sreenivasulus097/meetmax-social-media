import React from "react";
import Layout from "../../components/Layout";
import {useState} from 'react'
import LoginErrorMessage from "../../components/utils/LoginErrorMessage";
import {sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import Router from 'next/router'
import { useCookies } from 'react-cookie';
import { useTranslation } from "next-i18next";



const checkmail = () => {
  const [cookies, removeCookie] = useCookies();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("hidden");
  const [userMail,setUserMail]=useState(cookies.forgottenUser);

  const { t } = useTranslation();
  
  const handleVerification = async() => {
    sendPasswordResetEmail(auth, cookies.forgottenUser)
    .then(() => {
      console.log('mail sent')
      setUserMail(cookies.forgottenUser)
      setSuccessMessage("visible")
    })
    .catch((error) => {
      console.log(error)
      setErrorMessage(error.message)
    });
  
    
  };

  const fallbackToSignin = async () => {
    try{
    removeCookie("user");
    Router.push('/auth/signin')
    }catch(e){
        console.log(e)
    }
  }

  return (
    <Layout pageTitle="Social Media - Forgot Password">
      <div className="container ml-[10%] md:ml-0 flex flex-col text-center justify-center items-center sm:flex">
        <h2 className="font-bold text-3xl mb-2 text-center text-gray-500">
          {/* {t(`login-page:getting_started_${pgLabel}`)} */}
          {t(`Check you email`)}
        </h2>
        <h2 className="font-medium text-md mb-2 text-center text-gray-500 mt-4">
          {/* We've sent a mail to your email address  ${userMail} */}
          {t(`We've sent a mail to your address`)} <b>{userMail}</b>
        </h2>
          <p
            className={`text-green-600 text-md-bold  text-center   ${successMessage}`}
          >
            {t(`Mail sent again`)}
          </p>

          <div className="items-center mt-3 w-80">
            <LoginErrorMessage errorVal={true} errorMsg={errorMessage} />
             <button onClick={fallbackToSignin} className="w-full px-10 mt-5 h-10 bg-btnBlue text-white text-center text-md rounded-md">
                    {t(`Skip now`)}
             </button>
            <h2 className="font-medium text-md mb-2 text-center text-gray-500 mt-4">
                {t(`Didn't receive an email?`)}
                <a 
                 className="font-medium px-2 text-md mb-2 text-center text-blue-500 mt-4 cursor-pointer" 
                onClick={handleVerification}
                > {t(`Resend`)} </a>
            </h2>
          </div>
      </div>
    </Layout>
  );
};

export default checkmail;
