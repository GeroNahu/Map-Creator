import React from "react";

import MapSection from "./MapSection";
import ToolsSection from "./ToolsSection";
import HandleTheme from "./HandleTheme";

import CursorsContext from "../Contexts/CursorsContext";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);

  const { setCursor } = React.useContext(CursorsContext);

  const paintTile = ({ map, setMap, tile: currentTile, image }) => {
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        if (tile.x === currentTile.x && tile.y === currentTile.y) {
          newTile.layers[selectedLayer] = image;
        }
        return newTile;
      }),
    });
  };

  const tools = {
    pen: ({ map, setMap, tile: currentTile }) => {
      paintTile({ map, setMap, tile: currentTile, image: selectedImage });
    },
    eraser: ({ map, setMap, tile: currentTile }) => {
      paintTile({ map, setMap, tile: currentTile, image: "" });
    },
    eyedropper: ({ tile }) => {
      setSelectedImage(tile?.layers?.[selectedLayer]);
      handleToolChange("pen");
    },
  };
  const toolsList = Object.keys(tools);

  const [tool, setTool] = React.useState("pen");

  const selectedTool = React.useCallback(tools[tool], [
    tool,
    selectedImage,
    selectedLayer,
  ]);

  React.useEffect(() => {
    return setCursor(tool);
  }, [tool]);

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
        toolsList={toolsList}
        selectedTool={tool}
      />
    </div>
  );
};

export default SectionContainer;
