import React from "react";

import { tilesThemes } from "../constants/tilesThemes";
import CategoryButtons from "./CategoryButtons";
import NavButton from "./NavButton";
import Drawer from "./Drawer";
import ThemeContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";
import ToolsContainer from "./ToolsContainer";

import "../Styles/toolsSection.css";
import "../Styles/globalStyles.css";

const platform = navigator.userAgentData.platform;

const ToolsSection = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
  handleToolChange,
  toolsList,
  selectedTool,
}) => {
  const ref = React.useRef(null);

  const [images, setImages] = React.useState(tilesThemes.medieval || []);
  const [visibility, setVisibility] = React.useState(false);
  const [drawerPosition, setDrawerPosition] = React.useState(0);
  const { theme } = React.useContext(ThemeContext);
  const { map, setMap } = React.useContext(MapContext);

  const divToolsSectionWidth = ref.current?.clientWidth;
  const [transition, setTransition] = React.useState(true);

  const handleSelect = (theme) => {
    setImages(tilesThemes[theme]);
  };

  const listaTemas = Object.keys(tilesThemes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tiles"
      style={{
        backgroundImage: image,
        backgroundSize: "cover",
        backgroundPosition: "center",
        outline: `solid ${theme.TOOLS_GRID_COLOR} 1px`,
      }}
      onClick={() => onImageSelect(image)}
    />
  ));

  let showHideClass;
  if (visibility) {
    showHideClass = "shown";
  } else showHideClass = "hidden";

  const transitionPosition = `calc(100% - ${drawerPosition}px)`;

  const handleName = (e) => {
    const newLayers = [...map.layers];
    newLayers[selectedLayer] = e.target.layerName.value;
    setMap({ ...map, layers: newLayers });
    e.preventDefault();
  };
  const handlelayersNumber = () => {
    const currentLayers = [...map.layers, ""];
    const newTiles = map.tiles?.map((tile) => {
      return { ...tile, layers: [...tile.layers, ""] };
    });
    setMap({ ...map, layers: currentLayers, tiles: newTiles });
  };
  return (
    <section
      className={`divToolsSection  ${showHideClass}`}
      id="divToolsSection"
      ref={ref}
      style={{
        backgroundColor: theme.TOOLS_SECTION_BACKGROUND,
        border: `solid ${theme.TOOLS_SECTION_BORDER} 3px`,
        left: platform === "Android" ? transitionPosition : `${null}`,
        transition: transition ? "400ms linear" : "none",
      }}
    >
      <NavButton
        platform={platform}
        visibility={visibility}
        setVisibility={setVisibility}
      />
      <Drawer
        drawerPosition={drawerPosition}
        setDrawerPosition={setDrawerPosition}
        platform={platform}
        divToolsSectionWidth={divToolsSectionWidth}
        transition={transition}
        setTransition={setTransition}
      />
      <ToolsContainer
        selectedImage={selectedImage}
        onImageSelect={onImageSelect}
        handleToolChange={handleToolChange}
        toolsList={toolsList}
        selectedTool={selectedTool}
      />
      <div className="selectedToolContainer">
        <div
          className="selectedTool"
          style={{
            backgroundColor: theme.SELECTED_TOOL_BACKGROUND,
            backgroundImage: selectedImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
          }}
        />
      </div>
      <div className="selectedLayerContainer">
        <select
          onChange={(e) => {
            onLayerSelect(e.target.value);
          }}
          defaultValue={1}
          className="form"
          id="form"
          style={{
            backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
            border: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
          }}
        >
          {map?.layers?.map((layer, index) => {
            return (
              <option
                className="formInputTitle"
                key={`layer ${index}`}
                value={index}
                style={{ color: theme.TEXT_PRIMARY }}
              >
                {layer || `layer ${index}`}
              </option>
            );
          })}
          ;
        </select>
        <form onSubmit={(e) => handleName(e)}>
          <button
            type="button"
            className="layersNumberButton"
            onClick={(e) => {
              e.preventDefault();
              handlelayersNumber();
            }}
          >
            +
          </button>
          <input type="text" className="inputRenameLayer" name="layerName" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="buttosAndTiles">
        <CategoryButtons setImages={handleSelect} themes={listaTemas} />
        <div
          className="tilesContainerDad"
          style={{
            backgroundColor: theme.TOOLS_CONTAINER_BACKGROUND,
            border: `solid ${theme.TOOLS_CONTAINER_BORDER} 3px`,
          }}
        >
          <div className="tilesContainer">{tool}</div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
