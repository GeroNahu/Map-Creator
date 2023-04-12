import React from "react";

import "../Styles/backgroundMap.css";
import "../Styles/exportPNGButton.css";

import MapContext from "../Contexts/MapContext";
import ThemesContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";

const ExportPNGButton = () => {
  const { title, columns, rows, layers } = React.useContext(MapContext);
  const { theme } = React.useContext(ThemesContext);
  const { language } = React.useContext(LanguageContext);

  const [exportPNGButtonClickOn, setExportPNGButtonClickOn] =
    React.useState(false);

  const width = columns;
  const height = rows;

  const canvas = document.querySelector("#canvas");
  let ctx = canvas?.getContext("2d");

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
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          const allLayers = [...layers];
          const usedImages = [];
          allLayers?.forEach((layer, layersIndex) => {
            console.log("%c", "color: #007300", layer, layersIndex);
            if (layer?.visible) {
              let tempIndex = 0;
              layer?.tiles.forEach((tile) => {
                console.log("%c%s", "color: #807160", tile.image);
                if (
                  !usedImages.some((usedImage, usedImagesIndex) => {
                    tempIndex = usedImagesIndex;
                    return usedImage.src === tile.image;
                  })
                ) {
                  usedImages.push({ image: new Image(), src: tile.image });
                  const lastImageIndex = usedImages.length - 1;
                  usedImages[lastImageIndex].image.src = tile.image;
                  usedImages[lastImageIndex].src = tile.image;
                  tempIndex = lastImageIndex;
                }
                const x1 = tile.x;
                const y1 = tile.y;
                ctx?.drawImage?.(
                  usedImages[tempIndex]?.image,
                  (x1 - 1) * 100,
                  (y1 - 1) * 100,
                  100,
                  100
                );
              });
            }
          });

          const canvasBASE64 = document
            .querySelector("#canvas")
            .toDataURL("image/jpg");
          const toDownload = document.createElement("a");
          toDownload.download = title;
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
