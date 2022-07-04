import React from "react";
import { Form, Field } from "formik";
import { FaAt } from "react-icons/fa";
import { RiUserSmileLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { TbGenderMale } from "react-icons/tb";

function SignUpForm({ errors, touched, isValid, dirty }) {
  console.log(errors);
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
        {touched.email && errors.email && (
          <p className="text-red-500 font-semibold text-sm mt-1 text-left">
            {errors.email}
          </p>
        )}

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
        {touched.name && errors.name && (
          <p className="text-red-500 font-semibold text-sm mt-1 text-left">
            {errors.name}
          </p>
        )}
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
        {touched.password && errors.password && (
          <p className="text-red-500 font-semibold text-sm mt-1 text-left">
            {errors.password}
          </p>
        )}
        {/* Date and Gender */}
        <div className="flex  justify-between space-x-4 py-2.5  rounded-md box-border  align-center text-md mt-5">
          {/* Date Picker */}
          <div className="px-10 w-1/2 h-12 border  mb-4 border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md box-border">
            <input
              type="date"
              name="dob"
              className=" bg-white dark:bg-bgLoginLayoutColor align-center  text-sm h-[100%] focus:outline-none"
            />
            {touched.dob && errors.dob && (
              <p className="block text-red-500 font-semibold text-sm mt-1 text-left">
                {errors.dob}
              </p>
            )}
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
            {touched.gender && errors.gender && (
              <p className=" text-red-500 font-semibold text-sm mt-4 text-left">
                {errors.gender}
              </p>
            )}
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
