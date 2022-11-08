import React from "react";

import BackgroundMap from "./BackgroundMap";
import ZoomSelector from "./ZoomSelector";
import GridSizeSelector from "./GridSizeSelector";
import ThemesContext from "../constants/ThemesContext";

import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";

const MapSection = ({ selected, selectedLayer, setSelectedLayer, layer }) => {
  const [width, setWidth] = React.useState(1);
  const [height, setHeight] = React.useState(1);
  const [mapSize, setMapSize] = React.useState(100);
  const { theme } = React.useContext(ThemesContext);

  return (
    <section
      className="divBackgorundMapContainer"
      style={{
        backgroundColor: theme.MAP_SECTION_BACKGROUND,
      }}
    >
      <div className="mapHeader">
        <div className="titleContainer">
          <h2
            className="h2"
            style={{
              color: theme.TITLES,
            }}
          >
            Map
          </h2>
        </div>
        <div
          className="mapSelectorsContainer"
          style={{
            backgroundColor: theme.MAP_SELECTORS_CONTAINER_BACKGROUND,
            border: `solid ${theme.MAP_SELECTORS_CONTAINER_BORDER} 3px`,
          }}
        >
          <GridSizeSelector
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
          />
          <ZoomSelector setMapSize={setMapSize} />
        </div>
      </div>
      <BackgroundMap
        selected={selected}
        setSelectedLayer={setSelectedLayer}
        selectedLayer={selectedLayer}
        layer={layer}
        width={width}
        height={height}
        mapSize={mapSize}
        tileSize={100}
      />
    </section>
  );
};

export default MapSection;
