import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import MapContext from "../Contexts/MapContext";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/gridSizaSelector.css";

const GridSizeSelector = () => {
  const { columns, setColumns, rows, setRows } = React.useContext(MapContext);

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
          defaultValue={columns || 1}
          key={`columns_input_${columns}`}
          onBlur={(e) => {
            setColumns(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setColumns(e.target.value);
            }
          }}
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
          defaultValue={rows || 1}
          key={`rows_input_${rows}`}
          onBlur={(e) => {
            setRows(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setRows(e.target.value);
            }
          }}
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
