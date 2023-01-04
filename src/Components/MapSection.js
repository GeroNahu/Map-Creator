import React from "react";

import BackgroundMap from "./BackgroundMap";
import ZoomSelector from "./ZoomSelector";
import GridSizeSelector from "./GridSizeSelector";
import VisibilityLayers from "./VisibilityLayers";

import MapContext from "../Contexts/MapContext";
import ThemesContext from "../Contexts/ThemesContext";

import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";

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
}) => {
  const [width, setWidth] = React.useState(15);
  const [height, setHeight] = React.useState(14);
  const [mapSize, setMapSize] = React.useState(100);

  const [inputSize, setInputSize] = React.useState(20);

  const { map, setMap } = React.useContext(MapContext);
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
            <form
              onSubmit={(e) => {
                setMap({ ...map, title: e.target.title.value });
                e.preventDefault();
                console.log(map.title);
              }}
            >
              <input
                onChange={(e) => {
                  setInputSize(e.target.value.length);
                }}
                size={inputSize ? inputSize : 1}
                className="titleInput"
                defaultValue={map.title || "Map Without Title"}
                name="title"
                style={{
                  backgroundColor: theme.MAP_TITLE_BACKGROUND,
                  border: `solid ${theme.MAP_TITLE_BORDER} 3px`,
                }}
              ></input>
            </form>
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
      />
    </section>
  );
};

export default MapSection;
