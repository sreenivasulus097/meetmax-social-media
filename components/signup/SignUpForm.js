import React, { useState } from "react";
import { Form, Field } from "formik";
import { FaAt } from "react-icons/fa";
import { RiUserSmileLine } from "react-icons/ri";
import { FiLock } from "react-icons/fi";
import { RiEyeOffLine } from "react-icons/ri";
import { TbGenderMale } from "react-icons/tb";
import LoginErrorMessage from "../utils/LoginErrorMessage";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { ValidationSchemaSignUp } from "../utils/ValidationSchema";
import { Formik } from "formik";
import { app, db, auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { doc, setDoc, getDoc } from "firebase/firestore";
function SignUpForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("hidden");

  const handleSignUp = async (values, { resetForm }) => {
    // function handleSignUp(values) {
    console.log("signup data", values);
    console.log("handle signup", app, auth);
    const { name, email, password, dob, gender } = values;
    // const auth = getAuth(app);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential) {
        // Signed in
        console.log("signed in", userCredential);

        const user = userCredential.user;

        const docRef = doc(db, "users", user.uid);
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: values.email,
          name: values.name,
          dob: values.dob,
          gender: values.gender,
        });

        //alert("success");
        setErrorMessage(null);
        setSuccessMessage("block");
        resetForm();
      }
    } catch (error) {
      //alert("error", error);
      setErrorMessage(error.message);
      setSuccessMessage("hidden");
      console.log("signup error", error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        password: "",
        dob: "",
        gender: "",
      }}
      validationSchema={ValidationSchemaSignUp}
      onSubmit={(values, { resetForm }) => {
        console.log("value:", values);
        handleSignUp(values, { resetForm });
        //resetForm();
      }}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <p
            className={`text-green-600 text-md-bold  text-center   ${successMessage}`}
          >
            Thanks for signing up. Welcome to our community. Please click
            <Link href="/" passHref>
              <a className="text-blue-500 text-md inline-block px-2 ">here</a>
            </Link>
            to signin.
          </p>

          <LoginErrorMessage errorVal={true} errorMsg={errorMessage} />
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

            <LoginErrorMessage
              errorVal={touched.email}
              errorMsg={errors.email}
            />

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
                {/* <AiOutlineCalendar className="w-1/12 inline-block" /> */}
                <Field
                  type="date"
                  name="dob"
                  placeholder="Date of birth"
                  className=" bg-white dark:bg-bgLoginLayoutColor align-center  text-md h-[100%] focus:outline-none"
                />

                <LoginErrorMessage
                  errorVal={touched.dob}
                  errorMsg={errors.dob}
                  addtnClsses="block"
                />
              </div>

              {/* Gender */}
              <div className=" p-[0.5rem] h-12 w-1/2 text-md  border space-x-2  mb-4 border-lognScrnBrderColorLight dark:border-lognScrnBrderColor rounded-md box-border">
                <TbGenderMale className="mb-1 text-2xl inline-block " />
                <Field
                  type="radio"
                  name="gender"
                  id="gender-male"
                  className="inline-block align-top bg-center mt-[0.5rem]  focus:outline-none"
                  value="male"
                />
                <label className="inline-block text-sm pr-2">Male</label>
                <Field
                  type="radio"
                  name="gender"
                  id="gender-female"
                  className="inline-block align-top mt-[0.5rem]  focus:outline-none"
                  value="female"
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
      )}
    </Formik>
  );
}

export default SignUpForm;
