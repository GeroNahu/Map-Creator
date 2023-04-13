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

  const { title, setTitle, layers, setLayers } = React.useContext(MapContext);
  const { theme } = React.useContext(ThemesContext);
  const { language } = React.useContext(LanguageContext);

  const handleSetVisibleLayers = (layer, value) => {
    const newLayers = [...layers];
    newLayers[layer].visible = value;
    setLayers(newLayers);
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
            <input
              className="titleInput"
              name="title"
              onChange={(e) => {
                const newTitle = e.target.value;
                setTitle(newTitle);
              }}
              placeholder={language.DEFAULT_MAP_TITLE}
              spellCheck="false"
              style={{
                backgroundColor: "transparent",
                outline: `solid ${theme.MAP_TITLE_BORDER} 3px`,
                color: theme.TITLES,
              }}
              value={title}
            />
            {title}
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
      <div
        className="backgroundMapContainer"
        style={{
          backgroundColor: theme.MAP_BACKGROUND,
          border: `solid ${theme.MAP_BORDER} 3px`,
        }}
      >
        {layers.map((layer, index) => {
          return layer?.visible ? (
            <BackgroundMap
              key={`map_layer_${index}`}
              selected={selected}
              setSelectedLayer={setSelectedLayer}
              selectedLayer={selectedLayer}
              mapSize={mapSize}
              tileSize={100}
              tool={tool}
              move={move}
              firstTile={firstTile}
              setFirstTile={setFirstTile}
              tiles={layer.tiles}
              layerIndex={index}
            />
          ) : null;
        })}
      </div>
    </section>
  );
};

export default MapSection;
