import React from "react";

import { tilesThemes } from "../constants/tilesThemes";
import CategoryButtons from "./CategoryButtons";
import NavButton from "./NavButton";
import Drawer from "./Drawer";
import ThemeContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";
import ToolsContainer from "./ToolsContainer";
import CommonSelect from "./CommonSelect";

import "../Styles/toolsSection.css";
import "../Styles/globalStyles.css";

const platform = navigator?.userAgentData?.platform;

const ToolsSection = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
  handleToolChange,
  toolsList,
  selectedTool,
  visibleLayers,
  setVisibleLayers,
}) => {
  const ref = React.useRef(null);

  const [images, setImages] = React.useState(tilesThemes.Exile || []);
  const [visibility, setVisibility] = React.useState(false);
  const [drawerPosition, setDrawerPosition] = React.useState(0);
  const { theme } = React.useContext(ThemeContext);
  const { map, setMap } = React.useContext(MapContext);

  const divToolsSectionWidth = ref.current?.clientWidth;
  const [transition, setTransition] = React.useState(true);
  const [plusClickOn, setPlusClickOn] = React.useState(false);
  const [submitClickOn, setSubmitClickOn] = React.useState(false);

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
    const currentLayers = [...map.layers, `Layer ${map.layers.length + 1}`];
    const newTiles = map.tiles?.map((tile) => {
      return { ...tile, layers: [...tile.layers, ""] };
    });
    setMap({ ...map, layers: currentLayers, tiles: newTiles });
    setVisibleLayers([...visibleLayers, true]);
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
      <div
        className="selectedLayerContainer"
        style={{
          backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
          outline: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
        }}
      >
        <CommonSelect
          onChange={onLayerSelect}
          items={map?.layers?.map((layer, index) => ({
            value: index,
            label: layer,
          }))}
        />
        <form className="handleLayers" onSubmit={(e) => handleName(e)}>
          <button
            type="button"
            className={`layersNumberButton ${
              plusClickOn ? "layersNumberButtonOn" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handlelayersNumber();
            }}
            onMouseDown={() => setPlusClickOn(true)}
            onMouseUp={() => setPlusClickOn(false)}
            onMouseLeave={() => setPlusClickOn(false)}
            style={{
              background: plusClickOn
                ? theme.CATEGORY_BUTTONS_BACKGROUND_ON
                : theme.CATEGORY_BUTTONS_BACKGROUND,
              outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
              color: theme.TEXT_PRIMARY,
            }}
          >
            +
          </button>
          <input
            defaultValue={`Layer ${selectedLayer + 1}`}
            type="text"
            className="inputRenameLayer"
            name="layerName"
            style={{
              backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
              outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
              color: theme.TEXT_PRIMARY,
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSubmitClickOn(true);
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setSubmitClickOn(false);
              }
            }}
          />
          <button
            className={`layersSubmitButton ${
              plusClickOn ? "layersSubmitButtonOn" : ""
            }`}
            type="submit"
            style={{
              background: submitClickOn
                ? theme.CATEGORY_BUTTONS_BACKGROUND_ON
                : theme.CATEGORY_BUTTONS_BACKGROUND,
              outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
              color: theme.TEXT_PRIMARY,
            }}
            onMouseDown={() => setSubmitClickOn(true)}
            onMouseUp={() => setSubmitClickOn(false)}
            onMouseLeave={() => setSubmitClickOn(false)}
          >
            Submit
          </button>
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
