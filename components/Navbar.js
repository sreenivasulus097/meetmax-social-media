import React from "react";
import LanguageSelect from "./LanguageSelect";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session, status } = useSession();
  const getNameFromSession = () => {
    if (session.user?.name) {
      console.log("google logged in", session.user.name);
      return session.user.name;
    } else {
      return session.user.tag.name;
    }
  };
  return (
    <div className="container-xl p-3 pb-0 self-center  flex justify-between">
      <div>
        <Image src="/" width={90} height={50} alt="LogoImage" />
      </div>
      {/* DropDown */}
      <div>{!session ? <LanguageSelect /> : getNameFromSession()}</div>
    </div>
  );
};

export default Navbar;
