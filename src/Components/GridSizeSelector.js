import React from "react";

import ThemesContext from "../constants/ThemesContext";

import "../Styles/gridSizaSelector.css";

const GridSizeSelector = ({ setWidth, setHeight }) => {
  const { theme } = React.useContext(ThemesContext);

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
          Columns
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
          Rows
        </label>
      </form>
    </div>
  );
};

export default GridSizeSelector;
