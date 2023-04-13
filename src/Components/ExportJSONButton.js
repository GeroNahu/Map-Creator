import React from "react";

import "../Styles/ExportJSONButton.css";

import ThemeContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";
import MapContext from "../Contexts/MapContext";

const ExportJSONButton = () => {
  const { theme } = React.useContext(ThemeContext);
  const { title, columns, rows, layers, metadata } =
    React.useContext(MapContext);
  const { language } = React.useContext(LanguageContext);

  const downloadObjectAsJson = (exportObj, exportName) => {
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `${exportName || language.DEFAULT_MAP_TITLE}.json`
    );
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const [exportClickOn, setExportClickOn] = React.useState(false);

  const mapObject = {
    title: title,
    columns: columns,
    rows: rows,
    layers: layers,
    metadata: metadata,
  };

  const mapTitle = title;

  return (
    <button
      className={`ExportJSONButton ${
        exportClickOn ? "ExportJSONButtonOn" : ""
      }`}
      type="submit"
      style={{
        background: exportClickOn
          ? theme.EXPORT_BUTTONS_BACKGROUND_ON
          : theme.EXPORT_BUTTONS_BACKGROUND,
        outline: `solid ${theme.EXPORT_BUTTON_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
      onMouseDown={() => setExportClickOn(true)}
      onMouseUp={() => {
        setExportClickOn(false);
        downloadObjectAsJson(mapObject, mapTitle);
      }}
      onMouseLeave={() => setExportClickOn(false)}
    >
      {language.EXPORT_MAP_BUTTON}
    </button>
  );
};

export default ExportJSONButton;
