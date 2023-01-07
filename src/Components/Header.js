import React from "react";

import LanguageContext from "../Contexts/LanguageContext";
import ThemesContext from "../Contexts/ThemesContext";
import LittleSelect from "./LittleSelect";
import HandleTheme from "./HandleTheme";

const Header = () => {
  const { language, allLanguages, setLanguage } =
    React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemesContext);

  const languages = Object.keys(allLanguages);
  console.log(allLanguages, language, "lalalalal", setLanguage);
  console.log("SUPUESTO ARRAY", languages);

  const handleLanguage = (value) => {
    setLanguage(languages[value]);
  };

  return (
    <header
      className="header"
      style={{
        background: theme.HEADER_BACKGROUND,
        outline: `inset ${theme.HEADER_BORDER} 4px`,
        color: theme.HEADER_TEXT,
        fontFamily: theme.HEADER_FONT_FAMILY,
      }}
    >
      <HandleTheme />
      <LittleSelect
        onChange={handleLanguage}
        items={languages?.map((language, index) => ({
          value: index,
          label: language,
        }))}
      />
      <h1 className="h1">{language.APP_HEADER_TITLE}</h1>
    </header>
  );
};

export default Header;
