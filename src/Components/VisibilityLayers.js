import React from "react";

import ThemesContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";

import "../Styles/visibilityLayers.css";

const VisibilityLayers = ({ handleSetVisibleLayers }) => {
  const { theme } = React.useContext(ThemesContext);
  const { layers } = React.useContext(MapContext);

  return (
    <div
      className="visibleHiddenLayersContain"
      style={{ color: theme.TEXT_PRIMARY }}
    >
      {layers?.map((layer, index) => {
        return (
          <div className="visibleHiddenLayer" key={`layer ${index}`}>
            <input
              type="checkbox"
              id={`layer ${index}`}
              name={`layer ${index}`}
              className="checkBoxLayer"
              checked={layers[index].visible}
              onChange={(e) => {
                return handleSetVisibleLayers(index, e.target.checked);
              }}
            />
            <label htmlFor="layer1" className="visibleLayerLabel">
              {`${layer?.name}`}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default VisibilityLayers;
