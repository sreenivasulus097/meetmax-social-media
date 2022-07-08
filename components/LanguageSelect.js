import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  ar: { label: "العربية", dir: "rtl", active: false },
  fr: { label: "Français", dir: "ltr", active: false },
};

const LanguageSelect = () => {
  const [langSelected, setLangSelected] = useState("en");
  /*useEffect(() => {
    setLangSelected(localStorage.getItem("i18nextLng") || "en");
  }, []);*/

  const { t, i18n } = useTranslation();
  console.log("i18n", i18n);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLangSelected(e.target.value);
  };
  return (
    <div className="w-[100%] text-sm   pl-2 border border-lognScrnBrderColorLight dark:border-bgLoginLayoutColor rounded-md">
      <select
        defaultValue={langSelected}
        onChange={(e) => handleLanguageChange(e)}
        className="bg-white dark:bg-bgLoginLayoutColor "
      >
        <option value="en">{languageMap.en.label}</option>
        <option className="" value="fr">
          {languageMap.fr.label}
        </option>
        <option className="" value="ar">
          {languageMap.ar.label}
        </option>
      </select>
    </div>
  );
};

export default LanguageSelect;
