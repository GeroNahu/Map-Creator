import React from "react";

import BackgroundMap from "./BackgroundMap";
import ZoomSelector from "./ZoomSelector";
import GridSizeSelector from "./GridSizeSelector";
import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";
import VisibilityLayers from "./VisibilityLayers";

const MapSection = ({
  selected,
  selectedLayer,
  setSelectedLayer,
  tool,
  visibleLayers,
  setVisibleLayers,
  move,
  firstTile,
  setFirstTile,
  lastTile,
  setLastTile,
}) => {
  const [width, setWidth] = React.useState(10);
  const [height, setHeight] = React.useState(10);
  const [mapSize, setMapSize] = React.useState(100);
  const { theme } = React.useContext(ThemesContext);

  const handleSetVisibleLayers = (layer, value) => {
    const newState = [...visibleLayers];
    newState[layer] = value;
    setVisibleLayers(newState);
  };
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
          <VisibilityLayers
            visibleLayers={visibleLayers}
            handleSetVisibleLayers={handleSetVisibleLayers}
            selectedLayer={selectedLayer}
          />
        </div>
      </div>
      <BackgroundMap
        selected={selected}
        setSelectedLayer={setSelectedLayer}
        selectedLayer={selectedLayer}
        width={width}
        height={height}
        mapSize={mapSize}
        tileSize={100}
        visibleLayers={visibleLayers}
        tool={tool}
        move={move}
        firstTile={firstTile}
        setFirstTile={setFirstTile}
        lastTile={lastTile}
        setLastTile={setLastTile}
      />
    </section>
  );
};

export default MapSection;
