import React from "react";

import "../Styles/newMap.css";

import ThemeContext from "../Contexts/ThemesContext";
import LanguageContext from "../Contexts/LanguageContext";
import MapContext from "../Contexts/MapContext";

const NewMap = ({ setSelectedLayer }) => {
  const [newMapClickOn, setNewMapClickOn] = React.useState(false);

  const { theme } = React.useContext(ThemeContext);
  const { language } = React.useContext(LanguageContext);
  const {
    setTitle,
    defaultTitle,
    setColumns,
    defaultColumns,
    setRows,
    defaultRows,
    setLayers,
    defaultLayers,
    setMetadata,
    defaultMetaData,
  } = React.useContext(MapContext);

  return (
    <button
      className={`newMapButton ${newMapClickOn ? "newMapButtonOn" : ""}`}
      type="submit"
      style={{
        background: newMapClickOn
          ? theme.NEW_MAP_BUTTONS_BACKGROUND_ON
          : theme.NEW_MAP_BUTTONS_BACKGROUND,
        outline: `solid ${theme.NEW_MAP_BUTTON_BORDER} 2px`,
        color: theme.TEXT_PRIMARY,
      }}
      onMouseDown={() => setNewMapClickOn(true)}
      onMouseUp={() => {
        setNewMapClickOn(false);
        setTitle(defaultTitle);
        setColumns(defaultColumns);
        setRows(defaultRows);
        setLayers(defaultLayers);
        setMetadata(defaultMetaData);
        setSelectedLayer(0);
      }}
      onMouseLeave={() => setNewMapClickOn(false)}
    >
      {language.NEW_MAP_BUTTON}
    </button>
  );
};

export default NewMap;
