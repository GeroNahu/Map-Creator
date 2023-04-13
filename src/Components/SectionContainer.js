import React from "react";

import MapSection from "./MapSection";
import ToolsSection from "./ToolsSection";

import CursorsContext from "../Contexts/CursorsContext";
import MapContext from "../Contexts/MapContext";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const { layers, setLayers } = React.useContext(MapContext);
  const { setCursor } = React.useContext(CursorsContext);

  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);
  const [visibleLayers, setVisibleLayers] = React.useState(
    Array(layers?.length || 1).fill(true)
  );

  const [beforeTool, setBeforeTool] = React.useState("pen");

  const paintTile = (mapIndex) => {
    const newLayers = [...layers];
    const newTiles = [...layers[selectedLayer].tiles];
    newTiles[mapIndex].image = selectedImage;
    newLayers[selectedLayer] = { ...newLayers[selectedLayer], tiles: newTiles };
    setLayers(newLayers);
  };
  const eraseTile = (mapIndex) => {
    const newLayers = [...layers];
    const newTiles = [...layers[selectedLayer].tiles];
    newTiles[mapIndex].image = "";
    newLayers[selectedLayer] = { ...newLayers[selectedLayer], tiles: newTiles };
    setLayers(newLayers);
  };
  const eraserLayer = () => {
    const newLayers = [...layers];
    const newTiles = layers?.[selectedLayer]?.tiles?.map((tile) => {
      const newTiles = { ...tile };
      newTiles.image = "";
      return newTiles;
    });
    newLayers[selectedLayer] = { ...newLayers[selectedLayer], tiles: newTiles };
    setLayers(newLayers);
  };
  const paintLayer = (mapIndex) => {
    const currentImage = layers?.[selectedLayer]?.tiles?.[mapIndex].image;
    const newLayers = [...layers];
    const newTiles = layers?.[selectedLayer]?.tiles?.map((tile) => {
      const newTile = { ...tile };
      if (newTile.image === currentImage) {
        newTile.image = selectedImage;
      }
      return newTile;
    });
    newLayers[selectedLayer] = { ...newLayers[selectedLayer], tiles: newTiles };
    setLayers(newLayers);
  };

  const [dragging, setDragging] = React.useState(false);
  const [firstTile, setFirstTile] = React.useState();

  const move = (lastTile) => {
    const firstImage = layers?.[selectedLayer]?.tiles?.[firstTile]?.image || "";
    const lastImage = layers?.[selectedLayer]?.tiles?.[lastTile]?.image || "";
    const newLayers = [...layers];
    if (
      newLayers?.[selectedLayer]?.tiles?.[firstTile]?.image &&
      newLayers?.[selectedLayer]?.tiles?.[lastTile]?.image
    ) {
      newLayers[selectedLayer].tiles[firstTile].image = lastImage;
      newLayers[selectedLayer].tiles[lastTile].image = firstImage;
    } else {
      newLayers[selectedLayer].tiles[firstTile].image = "";
      newLayers[selectedLayer].tiles[lastTile].image = firstImage;
    }
    setLayers(newLayers);
    setDragging(false);
  };

  const tools = {
    pen: {
      onMouseDown: (mapIndex) => paintTile(mapIndex),
      onMouseEnter: (mapIndex, e) => e.buttons === 1 && paintTile(mapIndex),
    },
    paintBucket: {
      onMouseDown: (mapIndex) => {
        paintLayer(mapIndex);
      },
    },
    eyedropper: {
      onMouseDown: (mapIndex) => {
        const image = layers?.[selectedLayer]?.tiles?.[mapIndex].image;
        setSelectedImage(image);
        handleToolChange(beforeTool);
      },
    },
    move: {
      onMouseDown: (mapIndex) => {
        setFirstTile(mapIndex);
        setDragging(true);
      },
      onMouseEnter: (mapIndex, e) => dragging && move(mapIndex),
      draggable: true,
    },
    eraser: {
      onMouseDown: (mapIndex) => eraseTile(mapIndex),
      onMouseEnter: (mapIndex, e) => e.buttons === 1 && eraseTile(mapIndex),
    },
    eraserLayer: {
      onMouseDown: () => eraserLayer(),
    },
  };
  const toolsList = Object.keys(tools);

  const [tool, setTool] = React.useState("pen");

  React.useEffect(() => {
    return setCursor(tool);
  }, [tool]);

  const handleToolChange = (tool) => {
    setTool(tool);
    tool === "pen"
      ? setBeforeTool(tool)
      : tool === "paintBucket" && setBeforeTool("paintBucket");
  };
  return (
    <div className="container">
      <MapSection
        selected={selectedImage}
        selectedLayer={selectedLayer}
        setSelectedLayer={setSelectedLayer}
        tool={tools[tool]}
        move={move}
        firstTile={firstTile}
        setFirstTile={setFirstTile}
      />
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
