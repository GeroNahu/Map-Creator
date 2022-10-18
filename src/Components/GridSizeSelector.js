import React from "react";
import "../Styles/gridSizaSelector.css";

const GridSizeSelector = ({ setWidth, setHeight }) => {
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
        <label className="gridSizaFormInputTitle" htmlFor="gridSizeInputWidth">
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
        <label className="gridSizaFormInputTitle" htmlFor="gridSizeInputHeight">
          Rows
        </label>
      </form>
    </div>
  );
};

export default GridSizeSelector;
