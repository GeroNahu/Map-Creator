import React from "react";
import MapSection from "./MapSection";
import ToolContainer from "./ToolsContainer";
import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(1);

  return (
    <div className="container">
      <MapSection
        selected={selectedImage}
        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}
      />
      <ToolContainer
        onImageSelect={setSelectedImage}
        selectedImage={selectedImage}
        onLayerSelect={setSelectedLayer}
        selectedLayer={selectedLayer}
      />
    </div>
  );
};

export default SectionContainer;
