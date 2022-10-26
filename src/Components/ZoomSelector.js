import React from "react";

const ZoomSelector = ({ setMapSize }) => {
  return (
    <select name="selector" onChange={(e) => setMapSize(e.target.value)}>
      <option value="25">25 %</option>
      <option value="50">50 %</option>
      <option value="75">75 %</option>
      <option value="100" selected>
        100 %
      </option>
      <option value="200">200 %</option>
      <option value="300">300 %</option>
      <option value="400">400 %</option>
    </select>
  );
};

export default ZoomSelector;
