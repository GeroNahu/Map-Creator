import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";
import ThemesContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";

const BackgroundMap = ({
  width,
  height,
  mapSize,
  tileSize,
  visibleLayers,
  tool,
}) => {
  const { theme } = React.useContext(ThemesContext);
  const { map, setMap } = React.useContext(MapContext);

  React.useEffect(() => {
    const newTiles = [];
    for (let i = 0; i < width * height; i++) {
      const x = i + 1 - Math.floor(i / width) * width;
      const y = Math.ceil((i + 1) / width);
      const layers = map?.tiles?.find((tile) => {
        return tile.x === x && tile.y === y;
      })?.layers;
      newTiles.push({
        x,
        y,
        layers: layers || map.layers.name.map(() => ""),
      });
    }
    setMap({ ...map, tiles: newTiles });
  }, [width, height]);

  const handleEvent = (event, mapIndex) => {
    const type = event._reactName;
    tool?.[type]?.(mapIndex, event);
  };
  return (
    <div
      className="backgroundMapContainer"
      style={{
        backgroundColor: theme.MAP_BACKGROUND,
        border: `solid ${theme.MAP_BORDER} 3px`,
      }}
    >
      <div className="mapCanvas">
        <div
          className="backgroundMap"
          style={{
            gridTemplateColumns: `repeat(${width}, ${
              (mapSize / 100) * tileSize + 2
            }px`,
            gridTemplateRows: `repeat(${height}, ${
              (mapSize / 100) * tileSize + 2
            }px`,
            gridAutoRows: `${(mapSize / 100) * tileSize + 2}px`,
          }}
        >
          {map?.tiles?.map((tile, i) => {
            return (
              <Tile
                {...tile}
                key={`tile_${tile.x}_${tile.y}`}
                onMouseDown={(e) => handleEvent(e, i)}
                onMouseEnter={(e) => handleEvent(e, i)}
                onMouseUp={(e) => handleEvent(e, i)}
                draggable={tool?.draggable}
                visibleLayers={visibleLayers}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BackgroundMap;
