import React from "react";

import MapSection from "./MapSection";
import ToolsSection from "./ToolsSection";

import CursorsContext from "../Contexts/CursorsContext";
import MapContext from "../Contexts/MapContext";

import "../Styles/sectionContainer.css";

const SectionContainer = () => {
  const { map, setMap } = React.useContext(MapContext);
  const { setCursor } = React.useContext(CursorsContext);

  const [selectedImage, setSelectedImage] = React.useState("");
  const [selectedLayer, setSelectedLayer] = React.useState(0);
  const [visibleLayers, setVisibleLayers] = React.useState(
    Array(map?.layers?.length || 1).fill(true)
  );

  const [beforeTool, setBeforeTool] = React.useState("pen");

  const paintTile = (mapIndex) => {
    const newTiles = [...map.tiles];
    newTiles[mapIndex].layers[selectedLayer] = selectedImage;
    setMap?.({
      ...map,
      tiles: newTiles,
    });
  };
  const eraseTile = (mapIndex) => {
    const newTiles = [...map.tiles];
    newTiles[mapIndex].layers[selectedLayer] = "";
    setMap?.({
      ...map,
      tiles: newTiles,
    });
  };
  const eraserLayer = () => {
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        newTile.layers[selectedLayer] = "";
        return newTile;
      }),
    });
  };
  const paintLayer = (mapIndex) => {
    const currentImage = map?.tiles?.[mapIndex]?.layers?.[selectedLayer];
    setMap?.({
      ...map,
      tiles: map?.tiles?.map((tile) => {
        const newTile = { ...tile };
        if (tile.layers[selectedLayer] === currentImage) {
          newTile.layers[selectedLayer] = selectedImage;
        }
        return newTile;
      }),
    });
  };

  const [dragging, setDragging] = React.useState(false);
  const [firstTile, setFirstTile] = React.useState();

  const move = (lastTile) => {
    const firstImage = map?.tiles?.[firstTile]?.layers?.[selectedLayer] || "";
    const lastImage = map?.tiles?.[lastTile]?.layers?.[selectedLayer] || "";
    const newMap = { ...map };
    if (
      newMap?.tiles?.[firstTile]?.layers?.[selectedLayer] &&
      newMap?.tiles?.[lastTile]?.layers?.[selectedLayer]
    ) {
      newMap.tiles[firstTile].layers[selectedLayer] = lastImage;
      newMap.tiles[lastTile].layers[selectedLayer] = firstImage;
    } else {
      newMap.tiles[firstTile].layers[selectedLayer] = "";
      newMap.tiles[lastTile].layers[selectedLayer] = firstImage;
    }
    setMap?.(newMap);
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
        const image = map?.tiles?.[mapIndex]?.layers?.[selectedLayer];
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
