import React from "react";

import ThemesContext from "../constants/ThemesContext";

const Header = () => {
  const { theme } = React.useContext(ThemesContext);

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
      <h1 className="h1">Map Creator</h1>
    </header>
  );
};

export default Header;
