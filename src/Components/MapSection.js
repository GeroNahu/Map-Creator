import React from "react";

import BackgroundMap from "./BackgroundMap";
import ZoomSelector from "./ZoomSelector";
import GridSizeSelector from "./GridSizeSelector";
import VisibilityLayers from "./VisibilityLayers";

import MapContext from "../Contexts/MapContext";
import ThemesContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";

import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";
import ExportMap from "./ExportMap";
import ImportMap from "./ImportMap";
import NewMap from "./NewMap";

const MapSection = ({
  selected,
  selectedLayer,
  setSelectedLayer,
  tool,
  move,
  firstTile,
  setFirstTile,
}) => {
  const [mapSize, setMapSize] = React.useState(100);

  const [inputSize, setInputSize] = React.useState(8);

  const { map, setMap } = React.useContext(MapContext);
  const { theme } = React.useContext(ThemesContext);
  const { language } = React.useContext(LanguageContext);

  const handleSetVisibleLayers = (layer, value) => {
    const newLayers = [...map.layers];
    newLayers[layer].visible = value;
    const newMap = {
      ...map,
      layers: newLayers,
    };
    setMap(newMap);
  };
  React.useEffect(() => {
    if (map.title.length !== 0) setInputSize(map.title.length);
  }, [map.title.length]);

  return (
    <section
      className="divBackgorundMapContainer"
      style={{
        backgroundColor: theme.MAP_SECTION_BACKGROUND,
      }}
    >
      <div className="mapHeader">
        <div className="titleContainer">
          <h2 className="h2">
            <form
              onSubmit={(e) => {
                setMap({ ...map, title: e.target.title.value });
                e.preventDefault();
              }}
              onBlur={(e) => {
                const title = e.target.value;
                setMap({ ...map, title: title });
              }}
            >
              <input
                onChange={(e) => {
                  setInputSize(e.target.value.length);
                }}
                size={inputSize || 1}
                className="titleInput"
                defaultValue={map.title}
                placeholder={language.DEFAULT_MAP_TITLE}
                name="title"
                style={{
                  backgroundColor: theme.MAP_TITLE_BACKGROUND,
                  border: `solid ${theme.MAP_TITLE_BORDER} 3px`,
                  color: theme.TITLES,
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
          <div className="importExportContainer">
            <NewMap />
            <ExportMap />
            <ImportMap />
          </div>
          <GridSizeSelector />
          <ZoomSelector setMapSize={setMapSize} />
          <VisibilityLayers
            handleSetVisibleLayers={handleSetVisibleLayers}
            selectedLayer={selectedLayer}
          />
        </div>
      </div>
      <BackgroundMap
        selected={selected}
        setSelectedLayer={setSelectedLayer}
        selectedLayer={selectedLayer}
        mapSize={mapSize}
        tileSize={100}
        tool={tool}
        move={move}
        firstTile={firstTile}
        setFirstTile={setFirstTile}
      />
    </section>
  );
};

export default MapSection;
