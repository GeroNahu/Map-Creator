import React from "react";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/categoryButton.css";

const CategoryButtons = ({ themes, setImages }) => {
  const { theme } = React.useContext(ThemesContext);
  const options = themes.map((item, index) => (
    <option
      className="commonSelectLabels"
      key={`option_${item}_${index}`}
      value={item}
      style={{ color: theme.TEXT_PRIMARY }}
    >
      {item}
    </option>
  ));
  return (
    <div
      className="tilesCategory"
      style={{
        backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
        outline: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
      }}
    >
      <select
        onChange={(e) => {
          setImages(e.target.value);
        }}
        className="commonSelect"
        id="commonSelect"
        style={{
          backgroundColor: theme.COMMON_SELECTORS_BACKGROUND,
          outline: `solid ${theme.COMMON_SELECTORS_BORDER} 2px`,
          color: theme.TEXT_PRIMARY,
        }}
      >
        {options}
      </select>
    </div>
  );
};

export default CategoryButtons;
