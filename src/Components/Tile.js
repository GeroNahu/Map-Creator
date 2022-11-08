import React from "react";
import ThemesContext from "../constants/ThemesContext";

const Tile = ({ x, y, layers = [], ...rest }) => {
  const { theme } = React.useContext(ThemesContext);
  return (
    <div
      className="tile"
      {...rest}
      style={{ outline: `solid ${theme.TILE_GRID_COLOR} 1px` }}
    >
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
