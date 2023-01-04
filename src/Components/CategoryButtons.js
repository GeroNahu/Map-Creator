import React from "react";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/categoryButton.css";
import CommonSelect from "./CommonSelect";

const CategoryButtons = ({ themes, setImages }) => {
  const { theme } = React.useContext(ThemesContext);

  return (
    <div
      className="tilesCategory"
      style={{
        backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
        outline: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
      }}
    >
      <CommonSelect
        onChange={setImages}
        items={themes.map((theme) => ({
          value: `${theme}`,
          label: `${theme}`,
        }))}
      />
    </div>
  );
};

export default CategoryButtons;
