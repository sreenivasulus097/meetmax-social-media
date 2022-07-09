import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const languageMap = {
  en: { label: "English", dir: "ltr", active: true },
  ar: { label: "العربية", dir: "rtl", active: false },
  fr: { label: "Français", dir: "ltr", active: false },
};

const LanguageSelect = () => {
  const router = useRouter();
  const { locale } = router;
  //const [langSelected, setLangSelected] = useState("en");
  /* useEffect(() => {
    setLangSelected(locale);
    console.log("useeffect locale", locale);
  }, [locale]); */

  const { t, i18n } = useTranslation();
  // console.log("i18n", i18n, useTranslation());

  const handleLanguageChange = (e) => {
    // console.log("language change", e.target.value);
    //setLangSelected(e.target.value);
    i18n.changeLanguage(e.target.value);

    router.push(
      {
        route: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: e.target.value },
      { shallow: true }
    );
    //  router.push(`/${e.target.value}/${router.asPath}`);
    //console.log("router on change", router);
  };
  return (
    <div className="w-[100%] text-sm   pl-2 border border-lognScrnBrderColorLight dark:border-bgLoginLayoutColor rounded-md">
      <select
        defaultValue={locale}
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
