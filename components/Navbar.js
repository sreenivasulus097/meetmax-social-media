import React from "react";
import LanguageSelect from "./LanguageSelect";
import Image from "next/image";
import { useSession } from "next-auth/react";
const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className="container-xl p-3 pb-0 self-center  flex justify-between">
      <div>
        <Image src="/" width={90} height={50} alt="LogoImage" />
      </div>
      {/* DropDown */}
      <div>{!session ? <LanguageSelect /> : session.user.tag.name}</div>
    </div>
  );
};

export default Navbar;
