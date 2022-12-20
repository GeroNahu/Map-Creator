import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";
import ThemesContext from "../Contexts/ThemesContext";

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
  const [mapa, setMapa] = React.useState([{}]);
  const { theme } = React.useContext(ThemesContext);
  React.useEffect(() => {
    const newMap = [];
    for (let i = 0; i < width * height; i++) {
      const x = i + 1 - Math.floor(i / width) * width;
      const y = Math.ceil((i + 1) / width);
      const layers = mapa.find((tile) => {
        return tile.x === x && tile.y === y;
      })?.layers;
      newMap.push({
        x,
        y,
        layers: layers || ["", "", ""],
      });
    }
    setMapa(newMap);
  }, [width, height]);

  const handleClick = (tile) => {
    tool({ tile, setMapa, mapa, selectedLayer, selectedImage: selected });
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
          {mapa.map((tile) => {
            return (
              <Tile
                {...tile}
                key={`tile_${tile.x}_${tile.y}`}
                onClick={() => handleClick(tile)}
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
