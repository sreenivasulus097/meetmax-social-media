import React from "react";
import LanguageSelect from "./LanguageSelect";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="container-xl p-3  flex justify-between">
      <div>
        <Image src="/" width={90} height={50} alt="LogoImage" />
      </div>
      {/* DropDown */}
      <div>
        <LanguageSelect />
      </div>
    </div>
  );
};

export default Navbar;
