import React from "react";

import MapSection from "./MapSection";
import TilesContainer from "./TilesContainer";
import HandleTheme from "./HandleTheme";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);

  return (
    <div className="container">
      <MapSection
        selected={selectedImage}
        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}
      />
      <HandleTheme />
      <TilesContainer
        onImageSelect={setSelectedImage}
        selectedImage={selectedImage}
        onLayerSelect={setSelectedLayer}
        selectedLayer={selectedLayer}
      />
    </div>
  );
};

export default SectionContainer;
