import React from "react";

import "../Styles/importMap.css";

import ThemeContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";
import MapContext from "../Contexts/MapContext";

const ImportMap = () => {
  const [importClickOn, setImportClickOn] = React.useState(false);

  const { theme } = React.useContext(ThemeContext);
  const { language } = React.useContext(LanguageContext);
  const { setTitle, setColumns, setRows, setLayers, setMetadata } =
    React.useContext(MapContext);
  const inputRef = React.useRef(null);

  const reader = new FileReader();
  reader.addEventListener("loadend", (a) => {
    const result = a.currentTarget.result;
    const decodedResult = decodeURIComponent(result);
    const parsedResult = JSON.parse(decodedResult);
    setTitle(parsedResult.title);
    setColumns(parsedResult.columns);
    setRows(parsedResult.rows);
    setLayers(parsedResult.layers);
    setMetadata(parsedResult.metadata);
  });
  return (
    <button
      className={`importMapButton ${importClickOn ? "importMapButtonOn" : ""}`}
      type="submit"
      style={{
        background: importClickOn
          ? theme.IMPORT_BUTTONS_BACKGROUND_ON
          : theme.IMPORT_BUTTONS_BACKGROUND,
        outline: `solid ${theme.IMPORT_BUTTON_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
      onMouseDown={() => setImportClickOn(true)}
      onMouseUp={() => {
        setImportClickOn(false);
        inputRef?.current?.click?.();
      }}
      onMouseLeave={() => setImportClickOn(false)}
    >
      <input
        ref={inputRef}
        className="importFileInput"
        type="file"
        onChange={(e) => {
          reader.readAsText(e.target.files[0]);
          e.target.value = null;
        }}
      ></input>
      {language.IMPORT_MAP_BUTTON}
    </button>
  );
};

export default ImportMap;
