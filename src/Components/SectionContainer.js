import React from "react";
import MapSection from "./MapSection";
import ToolContainer from "./ToolsContainer";
import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(1);

  return (
    <div className="container">
      <div className="divBackgorundMapContainer">
        <MapSection
          selected={selectedImage}
          selectedLayer={selectedLayer}
          setSelectedLayer={setSelectedLayer}
        />
      </div>
      <div className="divToolsContainer">
        <ToolContainer
          onImageSelect={setSelectedImage}
          selectedImage={selectedImage}
          onLayerSelect={setSelectedLayer}
          selectedLayer={selectedLayer}
        />
      </div>
    </div>
  );
};

export default SectionContainer;
