import React from "react";

const MapContext = React.createContext();

const MapProvider = ({ children }) => {
  const [mapa, setMapa] = React.useState("");

  const data = { mapa, setMapa };

  return <MapContext.Provider value={data}>{children}</MapContext.Provider>;
};

export { MapProvider };

export default MapContext;
