import React from "react";
import { Form, Field } from "formik";
import { FaAt } from "react-icons/fa";
import { RiUserSmileLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { TbGenderMale } from "react-icons/tb";
import LoginErrorMessage from "../utils/LoginErrorMessage";

function SignUpForm({ errors, touched, isValid, dirty }) {
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

        {/* Name */}
        <div className="py-2.5 border border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md w-full box-border  align-center text-md mt-5">
          <RiUserSmileLine className=" w-1/12 inline-block " />
          <Field
            className="w-11/12 bg-white dark:bg-bgLoginLayoutColor h-[100%] inline-block focus:outline-none"
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <LoginErrorMessage errorVal={touched.name} errorMsg={errors.name} />
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
        {/* Date and Gender */}
        <div className="flex  justify-between space-x-4 py-2.5  rounded-md box-border  align-center text-md mt-5">
          {/* Date Picker */}
          <div className="px-10 w-1/2 h-12 border  mb-4 border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md box-border">
            <input
              type="date"
              name="dob"
              className=" bg-white dark:bg-bgLoginLayoutColor align-center  text-sm h-[100%] focus:outline-none"
            />
            <LoginErrorMessage
              errorVal={touched.dob}
              errorMsg={errors.dob}
              addtnClsses="block"
            />
          </div>

          {/* Gender */}
          <div className=" p-[0.5rem] h-12 w-1/2 text-md  border space-x-2  mb-4 border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md box-border">
            <TbGenderMale className="mb-1 text-xl inline-block " />
            <input
              type="radio"
              name="gender"
              id="gender-male"
              className="inline-block align-top bg-center mt-[0.5rem]  focus:outline-none"
            />
            <label className="inline-block text-sm pr-2">Male</label>
            <input
              type="radio"
              name="gender"
              id="gender-female"
              className="inline-block align-top mt-[0.5rem]  focus:outline-none"
            />
            <label className="inline-block text-sm ">Female</label>
            <LoginErrorMessage
              errorVal={touched.gender}
              errorMsg={errors.gender}
            />
            {/*touched.gender && errors.gender && (
              <p className=" text-red-500 font-semibold text-sm mt-4 text-left">
                {errors.gender}
              </p>
            ) */}
          </div>
        </div>

        {/* SignUp Button */}

        <button
          type="submit"
          className="w-full h-10 bg-btnBlue text-white text-center text-md rounded-md"
        >
          Sign Up
        </button>
      </div>
    </Form>
  );
}

export default SignUpForm;
