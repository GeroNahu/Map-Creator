import React from "react";

import MapSection from "./MapSection";
import ToolsSection from "./ToolsSection";
import HandleTheme from "./HandleTheme";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);
  const paintTile = ({ mapa, setMapa, tile: currentTile, image }) => {
    setMapa?.(
      mapa?.map((tile) => {
        const newTile = { ...tile };
        if (tile.x === currentTile.x && tile.y === currentTile.y) {
          newTile.layers[selectedLayer] = image;
        }
        return newTile;
      })
    );
  };
  const tools = {
    ereaser: ({ mapa, setMapa, tile: currentTile }) => {
      paintTile({ mapa, setMapa, tile: currentTile, image: "" });
    },
    pen: ({ mapa, setMapa, tile: currentTile }) => {
      paintTile({ mapa, setMapa, tile: currentTile, image: selectedImage });
    },
    dropper: ({ tile }) => setSelectedImage(tile?.layers?.[selectedLayer]),
  };

  const [tool, setTool] = React.useState("pen");

  const selectedTool = React.useCallback(tools[tool], [
    tool,
    selectedImage,
    selectedLayer,
  ]);

  const handleToolChange = (tool) => {
    setTool(tool);
  };
  return (
    <div className="container">
      <MapSection
        selected={selectedImage}
        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}
        tool={selectedTool}
      />
      <HandleTheme />
      <ToolsSection
        onImageSelect={setSelectedImage}
        selectedImage={selectedImage}
        onLayerSelect={setSelectedLayer}
        selectedLayer={selectedLayer}
        tool={tool}
        handleToolChange={handleToolChange}
      />
    </div>
  );
};

export default SectionContainer;
