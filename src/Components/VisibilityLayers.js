import React from "react";

import ThemesContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";

import "../Styles/visibilityLayers.css";

const VisibilityLayers = ({ visibleLayers, handleSetVisibleLayers }) => {
  const { theme } = React.useContext(ThemesContext);
  const { map } = React.useContext(MapContext);

  return (
    <div className="visibleHiddenLayers" style={{ color: theme.TEXT_PRIMARY }}>
      {map?.layers?.map((layer, index) => {
        return (
          <div>
            <input
              type="checkbox"
              id={`layer ${index}`}
              name={`layer ${index}`}
              className="checkBoxLayer"
              value="true"
              defaultChecked={`${visibleLayers[index]}`}
              onChange={(e) => {
                return handleSetVisibleLayers(index, e.target.checked);
              }}
            />
            <label htmlFor="layer1" className="visibleLayerLabel">
              {`${layer}`}
            </label>
          </div>
        );
      })}
      {/* <input
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
      </label> */}
    </div>
  );
};

export default VisibilityLayers;
