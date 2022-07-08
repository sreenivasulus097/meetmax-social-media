import React from "react";

const LoginErrorMessage = ({ errorVal, errorMsg, addtnClsses }) => {
  return (
    <>
      {errorVal && errorMsg && (
        <p
          className={`${addtnClsses} text-red-500 font-semibold text-sm mt-1 text-left `}
        >
          {errorMsg}
        </p>
      )}
    </>
  );
};

export default LoginErrorMessage;
