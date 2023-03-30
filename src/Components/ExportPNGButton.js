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
          const completeMap = { ...map };
          const usedImages = [];
          completeMap?.tiles.forEach((tile) => {
            tile?.layers?.forEach((layer, layersIndex) => {
              if (completeMap?.layers?.[layersIndex]?.visible) {
                let tempIndex = 0;
                if (
                  !usedImages.some((usedImage, usedImagesIndex) => {
                    tempIndex = usedImagesIndex;
                    return usedImage.src === layer;
                  })
                ) {
                  usedImages.push({ image: new Image(), src: layer });
                  const lastImageIndex = usedImages.length - 1;
                  usedImages[lastImageIndex].image.src = layer;
                  usedImages[lastImageIndex].src = layer;
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
              }
            });
          });

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
