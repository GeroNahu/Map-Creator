import React from "react";
import "../Styles/changePageButton.css";
import ThemeContext from "../constants/ThemesContext";

const CategoryButton = ({
  buttonLabel,
  setImages,
  setSelectedCategory,
  selectedCategory,
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className="changePageButtonBackground"
      style={{
        background: selectedCategory
          ? theme.THEME_BUTTONS_BACKGROUND_ON
          : theme.THEME_BUTTONS_BACKGROUND,
      }}
    >
      <button
        className={`changePageButton ${
          selectedCategory ? "changePageButtonOn" : ""
        }`}
        onClick={() => {
          setImages(buttonLabel);
          setSelectedCategory(buttonLabel);
        }}
        style={{
          backgroundColor: "transparent",
          outline: `solid ${theme.THEME_BUTTONS_BORDER} 1px`,
          color: theme.TEXT_PRIMARY,
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default CategoryButton;
