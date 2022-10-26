import React from "react";

import Tile from "./Tile";

import "../Styles/backgroundMap.css";

const BackgroundMap = ({ selected, selectedLayer, width, height, mapSize }) => {
  const [mapa, setMapa] = React.useState([{}]);
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

  const handleClick = (x, y) => {
    setMapa(
      mapa.map((tile) => {
        const newTile = { ...tile };
        if (tile.x === x && tile.y === y) {
          newTile.layers[selectedLayer] = selected;
        }
        return newTile;
      })
    );
  };

  return (
    <div className="backgroundMapContainer">
      <div className="mapCanvas">
        <div
          className="backgroundMap"
          style={{
            gridTemplateColumns: `repeat(${width}, ${mapSize}px`,
            gridTemplateRows: `repeat(${height}, ${mapSize}px`,
            gridAutoRows: `${mapSize}px`,
          }}
        >
          {mapa.map((tile) => {
            return (
              <Tile
                {...tile}
                key={`tile_${tile.x}_${tile.y}`}
                onClick={() => handleClick(tile.x, tile.y)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BackgroundMap;
