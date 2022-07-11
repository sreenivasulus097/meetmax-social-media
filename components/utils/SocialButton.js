import React from "react";
import { signIn } from "next-auth/react";
//import { auth } from "@next-auth/firebase-adapter";
//  import { app } from "../../firebase.config";

function SocialButton({ icon, label, providers, providerType }) {
  const handleSignIn = () => {
    if (providerType === "google") {
      signIn(providers.google.id, { callbackUrl: "/" });
    }
  };
  return (
    <button
      onClick={() => handleSignIn()}
      className="bg-[#F6F7F8] dark:bg-bgSocialBtns w-1/2 flex py-4 pl-[1.25rem] pr-12 rounded-md space-x-2 items-center"
    >
      {icon}
      <span className="text-sm font-semibold ">{label}</span>
    </button>
  );
}

export default SocialButton;
