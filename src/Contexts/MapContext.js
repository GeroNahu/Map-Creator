import React from "react";

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const [map, setMap] = React.useState("");

  const data = { map, setMap };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };

export default MapContext;
