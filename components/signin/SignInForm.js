import React from "react";
import { Form, Field } from "formik";
import { FaAt } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import LoginErrorMessage from "../utils/LoginErrorMessage";
import Link from "next/link";

const SignInForm = ({ errors, touched }) => {
  return (
    <Form>
      <div className="items-center">
        {/* Email */}

        <div className=" py-2.5 border border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md w-full box-border  align-center text-md">
          <FaAt className=" w-1/12 inline-block text-sm" />

          <Field
            className="w-11/12 bg-white dark:bg-bgLoginLayoutColor h-[100%] inline-block focus:outline-none"
            type="text"
            name="email"
            placeholder="Your Email"
          />
        </div>

        <LoginErrorMessage errorVal={touched.email} errorMsg={errors.email} />

        {/* Password */}
        <div className="py-2.5 border border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md w-full box-border  align-center text-md mt-5">
          <FiLock className=" w-1/12 inline-block " />
          <Field
            className="w-10/12 bg-white dark:bg-bgLoginLayoutColor h-[100%] inline-block focus:outline-none"
            type="password"
            name="password"
            placeholder="Create Password"
          />
          <RiEyeOffLine className="w-1/12 inline-block" />
        </div>
        <LoginErrorMessage
          errorVal={touched.password}
          errorMsg={errors.password}
        />
        {/* Remember Me and Forgot Password */}
        <div className="flex  justify-between  mb-3 rounded-md box-border  align-center text-md mt-5">
          {/* Remember Me Checkbox */}
          <div className="form-check">
            <input
              className="appearance-none h-4 w-4 border  border-gray-300 rounded-sm  checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="inline-block text-md" htmlFor="flexCheckDefault">
              Remember Me
            </label>
          </div>

          {/* Forgot Password */}
          <div className="inline-block">
            <Link href="/auth/forgotpwd" passHref>
              <a className="text-blue-500 text-md inline-block">
                Forgot Password?
              </a>
            </Link>
          </div>
        </div>
        {/* SignIn Button */}

        <button
          type="submit"
          className="w-full h-10 bg-btnBlue text-white text-center text-md rounded-md"
        >
          Sign In
        </button>
      </div>
    </Form>
  );
};

export default SignInForm;
