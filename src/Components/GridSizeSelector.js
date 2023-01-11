import React from "react";
import LanguageContext from "../Contexts/LanguageContext";
import MapContext from "../Contexts/MapContext";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/gridSizaSelector.css";

const GridSizeSelector = () => {
  const { map, setMap } = React.useContext(MapContext);

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
          defaultValue={map.columns || 1}
          key={`columns_input_${map.columns}`}
          onBlur={(e) => {
            setMap({ ...map, columns: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMap({ ...map, columns: e.target.value });
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
          defaultValue={map.rows || 1}
          key={`rows_input_${map.rows}`}
          onBlur={(e) => {
            setMap({ ...map, rows: e.target.value });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setMap({ ...map, rows: e.target.value });
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
