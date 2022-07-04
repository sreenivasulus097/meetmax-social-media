import React from "react";

function SocialButton({ icon, label }) {
  return (
    <button className="bg-[#F6F7F8] dark:bg-bgSocialBtns w-1/2 flex py-4 pl-[1.25rem] pr-12 rounded-md space-x-2 items-center">
      {icon}
      <span className="text-sm font-semibold ">{label}</span>
    </button>
  );
}

export default SocialButton;
