import React from "react";
import BackgroundMap from "./BackgroundMap";
import ToolContainer from "./ToolsContainer";
import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [layer, setLayer] = React.useState(1);

  return (
    <div className="container">
      <div className="divBackgorundMapContainer">
        <BackgroundMap selected={selectedImage} layer={layer} />
      </div>
      <div className="divToolsContainer">
        <ToolContainer
          onImageSelect={setSelectedImage}
          selectedImage={selectedImage}
          onLayerSelect={setLayer}
          selectedLayer={layer}
        />
      </div>
    </div>
  );
};

export default SectionContainer;
