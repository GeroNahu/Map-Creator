import React from "react";
import BackgroundMap from "./BackgroundMap";
import GridSizeSelector from "./GridSizeSelector";
import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";

const MapSection = ({ selected, selectedLayer, setSelectedLayer, layer }) => {
  const [width, setWidth] = React.useState(1);
  const [height, setHeight] = React.useState(1);

  return (
    <>
      <div className="titleContainer">
        <h2 className="h2">Map</h2>
      </div>
      <GridSizeSelector
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
      />
      <BackgroundMap
        selected={selected}
        setSelectedLayer={setSelectedLayer}
        selectedLayer={selectedLayer}
        layer={layer}
        width={width}
        height={height}
      />
    </>
  );
};

export default MapSection;
