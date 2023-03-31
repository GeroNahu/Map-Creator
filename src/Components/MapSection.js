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
import ExportJSONButton from "./ExportJSONButton";
import ImportMap from "./ImportMap";
import NewMap from "./NewMap";
import ExportPNGButton from "./ExportPNGButton";

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
              backgroundColor: theme.MAP_TITLE_BACKGROUND,
              outline: `solid ${theme.MAP_TITLE_BORDER} 3px`,
            }}
          >
            {map.title}
            <input
              onChange={(e) => {
                const title = e.target.value;
                setMap({ ...map, title: title });
              }}
              className="titleInput"
              placeholder={language.DEFAULT_MAP_TITLE}
              name="title"
              spellCheck="false"
              style={{
                backgroundColor: "transparent",
                outline: `solid ${theme.MAP_TITLE_BORDER} 3px`,
                color: theme.TITLES,
              }}
              value={map.title}
            />
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
            <NewMap setSelectedLayer={setSelectedLayer} />
            <ExportJSONButton />
            <ImportMap />
            <ExportPNGButton />
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
