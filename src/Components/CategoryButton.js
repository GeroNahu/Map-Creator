import React from "react";
import "../Styles/categoryButton.css";
import ThemeContext from "../Contexts/ThemesContext";

const CategoryButton = ({
  buttonLabel,
  setImages,
  setSelectedCategory,
  selectedCategory,
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className="categoryButtonBackground"
      style={{
        background: selectedCategory
          ? theme.CATEGORY_BUTTONS_BACKGROUND_ON
          : theme.CATEGORY_BUTTONS_BACKGROUND,
      }}
    >
      <button
        className={`categoryButton ${
          selectedCategory ? "categoryButtonOn" : ""
        }`}
        onClick={() => {
          setImages(buttonLabel);
          setSelectedCategory(buttonLabel);
        }}
        style={{
          backgroundColor: "transparent",
          outline: `solid ${theme.CATEGORY_BUTTONS_BORDER} 1px`,
          color: theme.TEXT_PRIMARY,
        }}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default CategoryButton;
