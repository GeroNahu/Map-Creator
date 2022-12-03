import React from "react";
import ThemesContext from "../constants/ThemesContext";

const Tile = ({ x, y, layers = [], visibleLayers, ...rest }) => {
  const { theme } = React.useContext(ThemesContext);

  return (
    <div
      className="tile"
      {...rest}
      style={{ outline: `solid ${theme.TILE_GRID_COLOR} 1px` }}
    >
      {layers?.map((layer, index) => {
        const visibile = visibleLayers[index];
        return visibile ? (
          <div
            className="layer"
            key={`tile_${x}_${y}_layer_${index}`}
            style={{
              backgroundImage: layer,
              backgroundSize: "contain",
            }}
          />
        ) : null;
      })}
    </div>
  );
};

export default Tile;
