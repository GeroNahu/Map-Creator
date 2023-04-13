import React from "react";
import ThemesContext from "../Contexts/ThemesContext";
import CursorsContext from "../Contexts/CursorsContext";

const Tile = ({ x, y, image, ...rest }) => {
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
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};
export default Tile;
