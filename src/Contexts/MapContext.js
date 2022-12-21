import React from "react";

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const defaultTile = { x: 0, y: 0, layers: [""] };
  const [map, setMap] = React.useState({
    title: "",
    layers: [""],
    Tiles: [defaultTile],
    metaData: {},
  });

  const data = { map, setMap };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };

export default MapContext;
