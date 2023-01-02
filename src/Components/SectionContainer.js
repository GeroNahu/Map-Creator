import React, { useState } from "react";

import MapSection from "./MapSection";
import ToolsSection from "./ToolsSection";
import HandleTheme from "./HandleTheme";

import CursorsContext from "../Contexts/CursorsContext";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);
  const [visibleLayers, setVisibleLayers] = React.useState([true]);

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
  const eraserLayer = ({ map, setMap, tile: currentTile, image }) => {
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        newTile.layers[selectedLayer] = image;
        return newTile;
      }),
    });
  };
  const paintLayer = ({ map, setMap, tile: currentTile, image }) => {
    const actualCurrentTile = currentTile.layers[selectedLayer];
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        if (tile.layers[selectedLayer] === actualCurrentTile) {
          newTile.layers[selectedLayer] = image;
        }
        return newTile;
      }),
    });
  };
  const [firstTile, setFirstTile] = React.useState("");
  const [lastTile, setLastTile] = React.useState("");

  const move = ({ map, setMap, tile: currentTile, image }) => {
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        currentTile.layers[selectedLayer] = image;
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
    paintBucket: ({ map, setMap, tile: currentTile }) => {
      paintLayer({ map, setMap, tile: currentTile, image: selectedImage });
    },
    eraserLayer: ({ map, setMap, tile: currentTile }) => {
      eraserLayer({ map, setMap, tile: currentTile, image: "" });
    },
    move: {
      down: ({ i }) => {
        move({ i });
      },
      up: ({ map, setMap, tile: currentTile }) => {
        move({ map, setMap, tile: currentTile, image: "lastTile" });
      },
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
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
        move={move}
        firstTile={firstTile}
        setFirstTile={setFirstTile}
        lastTile={lastTile}
        setLastTile={setLastTile}
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
        visibleLayers={visibleLayers}
        setVisibleLayers={setVisibleLayers}
      />
    </div>
  );
};

export default SectionContainer;
