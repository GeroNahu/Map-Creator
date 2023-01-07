import React from "react";

import languages from "../constants/AppLanguage";

const LanguageContext = React.createContext();
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState(languages.english);
  const [allLanguages, setAllLanguages] = React.useState(languages);

  const handleLanguage = (language) => {
    setLanguage(languages[language]);
    console.log("lo que vemos", language, languages.english);
  };

  const data = { language, allLanguages, setLanguage: handleLanguage };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;
