import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";
import MapContext from "../Contexts/MapContext";

const Layer = ({ mapSize, tileSize, tool, tiles, layerIndex }) => {
  const { columns, rows, layers, setLayers } = React.useContext(MapContext);
  const width = columns;
  const height = rows;

  React.useEffect(() => {
    const newTiles = [];
    for (let i = 0; i < width * height; i++) {
      const x = i + 1 - Math.floor(i / width) * width;
      const y = Math.ceil((i + 1) / width);

      const image =
        layers?.[layerIndex]?.tiles?.find((tile) => {
          return tile.x === x && tile.y === y;
        })?.image || "";
      newTiles.push({
        x,
        y,
        image,
      });
    }

    const newLayers = [...layers];
    newLayers[layerIndex] = { ...layers[layerIndex], tiles: newTiles };
    setLayers(newLayers);
  }, [width, height]);

  const handleEvent = (event, mapIndex) => {
    const type = event._reactName;
    tool?.[type]?.(mapIndex, event);
  };
  return (
    <div className="layer">
      <div
        className="tileContainer"
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
        {tiles?.map((tile, i) => {
          return (
            <Tile
              {...tile}
              key={`tile_${tile.x}_${tile.y}`}
              onMouseDown={(e) => handleEvent(e, i)}
              onMouseEnter={(e) => handleEvent(e, i)}
              onMouseUp={(e) => handleEvent(e, i)}
              draggable={tool?.draggable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Layer;
