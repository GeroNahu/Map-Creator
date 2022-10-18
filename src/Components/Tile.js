import React from "react";

const Tile = ({ x, y, layers = [], ...rest }) => {
  return (
    <div className="tile" {...rest}>
      {layers?.map((layer, index) => {
        return (
          <div
            className="layer"
            key={`tile_${x}_${y}_layer_${index}`}
            style={{
              backgroundImage: layer,
              backgroundSize: "contain",
            }}
          />
        );
      })}
    </div>
  );
};

export default Tile;
