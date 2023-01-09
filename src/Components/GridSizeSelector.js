import React from "react";
import LanguageContext from "../Contexts/LanguageContext";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/gridSizaSelector.css";

const GridSizeSelector = ({ setWidth, setHeight }) => {
  const { theme } = React.useContext(ThemesContext);
  const { language } = React.useContext(LanguageContext);

  return (
    <div className="formContainer">
      <form className="gridSizaForm">
        <input
          className="girdSizaSelectorInput"
          name="gridSizeInput"
          id="gridSizeInputWidth"
          type="number"
          defaultValue={1}
          onChange={(e) => setWidth(e.target.value)}
        ></input>
        <label
          className="gridSizaFormInputTitle"
          htmlFor="gridSizeInputWidth"
          style={{
            color: theme.TEXT_PRIMARY,
          }}
        >
          {language.GRID_SELECTOR_COLUMNS_LABEL}
        </label>
        <input
          className="girdSizaSelectorInput"
          name="gridSizeInput"
          id="gridSizeInputHeight"
          type="number"
          defaultValue={1}
          onChange={(e) => setHeight(e.target.value)}
        ></input>
        <label
          className="gridSizaFormInputTitle"
          htmlFor="gridSizeInputHeight"
          style={{
            color: theme.TEXT_PRIMARY,
          }}
        >
          {language.GRID_SELECTOR_ROWS_LABEL}
        </label>
      </form>
    </div>
  );
};

export default GridSizeSelector;
