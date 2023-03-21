import React from "react";

import "../Styles/backgroundMap.css";
import "../Styles/exportPNGButton.css";

import MapContext from "../Contexts/MapContext";
import ThemesContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";

const ExportPNGButton = () => {
  const { map } = React.useContext(MapContext);
  const { theme } = React.useContext(ThemesContext);
  const { language } = React.useContext(LanguageContext);

  const [exportPNGButtonClickOn, setExportPNGButtonClickOn] =
    React.useState(false);

  const width = map.columns;
  const height = map.rows;

  const canvas = document.querySelector("#canvas");
  let ctx = canvas?.getContext("2d");

  React.useEffect(() => {
    const tiles = [...map.tiles];
    tiles?.forEach((tile) => {
      tile?.layers?.forEach((layer) => {
        const imageData = new Image();
        imageData.src = layer;
        imageData.onload = () => {
          const x1 = tile.x;
          const y1 = tile.y;
          ctx.clearRect((x1 - 1) * 100, (y1 - 1) * 100, 100, 100);
          ctx?.drawImage?.(imageData, (x1 - 1) * 100, (y1 - 1) * 100, 100, 100);
        };
      });
    });
  }, [map]);

  return (
    <>
      <canvas
        className="canvas"
        id="canvas"
        height={100 * height}
        width={100 * width}
      ></canvas>
      <button
        className={`exportPNGButton ${
          exportPNGButtonClickOn ? "exportPNGButton" : ""
        }`}
        onClick={() => {
          const canvasBASE64 = document
            .querySelector("#canvas")
            .toDataURL("image/jpg");

          const toDownload = document.createElement("a");
          toDownload.download = map.title;
          toDownload.href = canvasBASE64;
          toDownload.click();
        }}
        style={{
          background: exportPNGButtonClickOn
            ? theme.NEW_MAP_BUTTONS_BACKGROUND_ON
            : theme.NEW_MAP_BUTTONS_BACKGROUND,
          outline: `solid ${theme.NEW_MAP_BUTTON_BORDER} 2px`,
          color: theme.TEXT_PRIMARY,
        }}
        onMouseDown={() => setExportPNGButtonClickOn(true)}
        onMouseUp={() => {
          setExportPNGButtonClickOn(false);
        }}
        onMouseLeave={() => setExportPNGButtonClickOn(false)}
      >
        {language.ExportPNG_MAP_BUTTON}
      </button>
    </>
  );
};
export default ExportPNGButton;
