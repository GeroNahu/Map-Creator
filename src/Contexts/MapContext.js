import React from "react";

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const defaultTile = { x: 1, y: 1, layers: [""] };
  const defaultMap = {
    title: "",
    columns: 1,
    rows: 1,
    layers: [{ name: "Layer 1", visible: true }],
    tiles: [defaultTile],
    metaData: {},
  };
  const [map, setMap] = React.useState(defaultMap);
  const data = { map, setMap, defaultMap };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };

export default MapContext;
