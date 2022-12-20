import React from "react";
import ThemesContext from "../Contexts/ThemesContext";
import CursorsContext from "../Contexts/CursorsContext";

const Tile = ({ x, y, layers = [], visibleLayers, ...rest }) => {
  const { theme } = React.useContext(ThemesContext);
  const { cursor } = React.useContext(CursorsContext);
  return (
    <div
      className="tile"
      {...rest}
      style={{
        outline: `solid ${theme.TILE_GRID_COLOR} 1px`,
        cursor: `${cursor}`,
        cursosrSize: "10px",
      }}
    >
      {layers?.map((layer, index) => {
        const visibile = visibleLayers[index];
        return visibile ? (
          <div
            className="layer"
            key={`tile_${x}_${y}_layer_${index}`}
            style={{
              backgroundImage: layer,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : null;
      })}
    </div>
  );
};

export default Tile;
