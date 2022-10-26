import React from "react";
import BackgroundMap from "./BackgroundMap";
import ZoomSelector from "./ZoomSelector";
import GridSizeSelector from "./GridSizeSelector";
import "../Styles/globalStyles.css";
import "../Styles/mapSection.css";

const MapSection = ({ selected, selectedLayer, setSelectedLayer, layer }) => {
  const [width, setWidth] = React.useState(1);
  const [height, setHeight] = React.useState(1);
  const [mapSize, setMapSize] = React.useState(100);

  return (
    <section className="divBackgorundMapContainer">
      <div className="mapHeader">
        <div className="titleContainer">
          <h2 className="h2">Map</h2>
        </div>
        <div className="mapHeaderSelectors">
          <GridSizeSelector
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
          />
          <ZoomSelector setMapSize={setMapSize} />
        </div>
      </div>
      <BackgroundMap
        selected={selected}
        setSelectedLayer={setSelectedLayer}
        selectedLayer={selectedLayer}
        layer={layer}
        width={width}
        height={height}
        mapSize={mapSize}
        tileSize={100}
      />
    </section>
  );
};

export default MapSection;
