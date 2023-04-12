import React from "react";

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const defaultTitle = "";
  const defaultTile = { x: 1, y: 1, image: "" };
  const defaultColumns = 1;
  const defaultRows = 1;
  const defaultLayer = { name: "Layer 1", visible: true, tiles: [defaultTile] };
  const defaultLayers = [defaultLayer];
  const defaultMetaData = {};

  const [title, setTitle] = React.useState(defaultTitle);
  const [columns, setColumns] = React.useState(defaultColumns);
  const [rows, setRows] = React.useState(defaultRows);
  const [layers, setLayers] = React.useState(defaultLayers);
  const [metadata, setMetadata] = React.useState(defaultMetaData);
  const data = {
    defaultTile,
    defaultLayer,
    defaultLayers,
    title,
    setTitle,
    columns,
    setColumns,
    rows,
    setRows,
    layers,
    setLayers,
    metadata,
    setMetadata,
  };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };

export default MapContext;
