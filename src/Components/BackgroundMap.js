import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";
import ThemesContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";

const BackgroundMap = ({
  selected,
  selectedLayer,
  width,
  height,
  mapSize,
  tileSize,
  visibleLayers,
  tool,
}) => {
  const { theme } = React.useContext(ThemesContext);
  const { map, setMap } = React.useContext(MapContext);
  const [click, setClick] = React.useState(false);

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
        layers: layers || map.layers.map(() => ""),
      });
    }
    setMap({ ...map, tiles: newTiles });
  }, [width, height]);

  const handleClick = (tile) => {
    tool({ tile, setMap, map, selectedLayer, selectedImage: selected });
  };
  return (
    <div
      className="backgroundMapContainer"
      style={{
        backgroundColor: theme.MAP_BACKGROUND,
        border: `solid ${theme.MAP_BORDER} 3px`,
      }}
    >
      <div className="mapCanvas" onMouseLeave={() => setClick(false)}>
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
          {map?.tiles?.map((tile) => {
            return (
              <Tile
                {...tile}
                key={`tile_${tile.x}_${tile.y}`}
                onMouseDown={() => {
                  handleClick(tile);
                  setClick(true);
                }}
                onMouseEnter={() => {
                  if (click) handleClick(tile);
                }}
                onMouseUp={() => setClick(false)}
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
