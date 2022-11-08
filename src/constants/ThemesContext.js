import React from "react";

import defaultThemes from "./AppThemes";

const ThemesContext = React.createContext();

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(defaultThemes.light);

  const handleTheme = (themeName) => {
    setTheme(defaultThemes[themeName]);
  };

  const data = { theme, setTheme: handleTheme };

  return (
    <ThemesContext.Provider value={data}>{children}</ThemesContext.Provider>
  );
};

export { ThemesProvider };

export default ThemesContext;
