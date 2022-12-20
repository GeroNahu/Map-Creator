import React from "react";

import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/visibilityLayers.css";

const VisibilityLayers = ({ visibleLayers, handleSetVisibleLayers }) => {
  const { theme } = React.useContext(ThemesContext);

  return (
    <div className="visibleHiddenLayers" style={{ color: theme.TEXT_PRIMARY }}>
      <input
        type="checkbox"
        id="layer1"
        name="layer1"
        className="checkBoxLayer"
        value="true"
        defaultChecked={`${visibleLayers[0]}`}
        onChange={(e) => {
          return handleSetVisibleLayers(0, e.target.checked);
        }}
      />
      <label htmlFor="layer1" className="visibleLayerLabel">
        Layer 1
      </label>
      <input
        name="layer2"
        className="checkBoxLayer"
        id="layer2"
        type="checkbox"
        defaultChecked={`${visibleLayers[1]}`}
        value="true"
        onChange={(e) => {
          return handleSetVisibleLayers(1, e.target.checked);
        }}
      />
      <label htmlFor="layer2" className="visibleLayerLabel">
        Layer 2
      </label>
      <input
        name="layer3"
        className="checkBoxLayer"
        id="layer3"
        type="checkbox"
        defaultChecked={`${visibleLayers[2]}`}
        value="true"
        onChange={(e) => {
          return handleSetVisibleLayers(2, e.target.checked);
        }}
      />
      <label htmlFor="layer3" className="visibleLayerLabel">
        Layer 3
      </label>
    </div>
  );
};

export default VisibilityLayers;
