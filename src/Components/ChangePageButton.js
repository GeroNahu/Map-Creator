import React from "react";
import "../Styles/changePageButton.css";
import ThemeContext from "../constants/ThemesContext";

const ChangePageButton = ({ buttonLabel, setImages }) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <button
      className="changePageButton"
      onClick={setImages}
      style={{
        backgroundColor: theme.THEME_BUTTONS_BACKGROUND,
        border: `solid ${theme.THEME_BUTTONS_BORDER} 3px`,
        color: theme.TEXT_PRIMARY,
      }}
    >
      {buttonLabel}
    </button>
  );
};

export default ChangePageButton;
