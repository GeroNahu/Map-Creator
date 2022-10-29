import React from "react";

import "../Styles/zoomSelector.css";

const ZoomSelector = ({ setMapSize }) => {
  return (
    <div className="zoomSelectorsContainer">
      <input
        className="zoomInputRange"
        type="range"
        min="1"
        max="400"
        onChange={(e) => setMapSize(e.target.value)}
      />
      <select
        className="zoomSelector"
        name="selector"
        onChange={(e) => setMapSize(e.target.value)}
      >
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
    </div>
  );
};

export default ZoomSelector;
