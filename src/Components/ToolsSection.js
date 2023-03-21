import React from "react";

import { tilesThemes } from "../constants/tilesThemes";
import CategoryButtons from "./CategoryButtons";
import NavButton from "./NavButton";
import Drawer from "./Drawer";
import ToolsContainer from "./ToolsContainer";
import CommonSelect from "./CommonSelect";

import LanguageContext from "../Contexts/LanguageContext";
import ThemeContext from "../Contexts/ThemesContext";
import MapContext from "../Contexts/MapContext";

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
}) => {
  const ref = React.useRef(null);

  const [images, setImages] = React.useState(tilesThemes.Exile || []);
  const [visibility, setVisibility] = React.useState(false);
  const [drawerPosition, setDrawerPosition] = React.useState(0);

  const { language } = React.useContext(LanguageContext);
  const { theme } = React.useContext(ThemeContext);
  const { map, setMap } = React.useContext(MapContext);

  const divToolsSectionWidth = ref.current?.clientWidth;
  const [transition, setTransition] = React.useState(true);
  const [plusClickOn, setPlusClickOn] = React.useState(false);
  const [minusClickOn, setMinusClickOn] = React.useState(false);
  const [renameClickOn, setRenameClickOn] = React.useState(false);

  const handleSelect = (theme) => {
    setImages(tilesThemes[theme]);
  };

  const listaTemas = Object.keys(tilesThemes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tiles"
      style={{
        backgroundImage: `url(${image})`,
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
    newLayers[selectedLayer].name = e.target.layerName.value;
    setMap({ ...map, layers: newLayers });
    e.preventDefault();
  };

  const addNewLayer = () => {
    const currentLayers = [
      ...map.layers,
      {
        name: `${language.LAYER_DEFAULT_NAME} ${map.layers.length + 1}`,
        visible: true,
      },
    ];
    const newTiles = map?.tiles?.map((tile) => {
      return { ...tile, layers: [...tile.layers, ""] };
    });
    setMap({ ...map, layers: currentLayers, tiles: newTiles });
  };
  const removeLayer = () => {
    const newMapLayers = [...map.layers];
    newMapLayers.splice(selectedLayer, 1);
    const newTiles = map.tiles.map((tile) => {
      const newTileLayers = [...tile.layers];
      newTileLayers.splice(selectedLayer, 1);
      return { ...tile, layers: newTileLayers };
    });
    setMap({
      ...map,
      layers: newMapLayers,
      tiles: newTiles,
    });
    const checkedIndex = Math.min(
      selectedLayer,
      Math.max(0, map.layers.length - 2)
    );
    if (checkedIndex !== selectedLayer) onLayerSelect(checkedIndex);
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
        transition: transition ? "right 400ms linear" : "none",
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
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
          }}
        />
      </div>
      <div
        className="selectedLayerContainer"
        style={{
          backgroundColor: theme.COMMON_SELECTORS_BACKGROUND,
          outline: `solid ${theme.COMMON_SELECTORS_BORDER} 3px`,
        }}
      >
        <CommonSelect
          onChange={onLayerSelect}
          items={map?.layers?.map((layer, index) => ({
            value: index,
            label: layer?.name,
          }))}
          selectedLayer={selectedLayer}
        />
        <form className="handleLayers" onSubmit={(e) => handleName(e)}>
          <div className="layersHandlerButtonsWrapper">
            <div className="plusMinusButtonsWrapper">
              <button
                type="button"
                className={`layersNumberButton ${
                  plusClickOn ? "layersNumberButtonOn" : ""
                }`}
                onClick={(e) => {
                  addNewLayer();
                  e.preventDefault();
                }}
                onMouseDown={() => {
                  setPlusClickOn(true);
                }}
                onMouseUp={() => {
                  setPlusClickOn(false);
                }}
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
              <button
                type="button"
                className={`layersNumberButton ${
                  minusClickOn ? "layersNumberButtonOn" : ""
                }`}
                onClick={(e) => {
                  removeLayer();
                  e.preventDefault();
                }}
                onMouseDown={() => {
                  setMinusClickOn(true);
                }}
                onMouseUp={() => setMinusClickOn(false)}
                onMouseLeave={() => setMinusClickOn(false)}
                style={{
                  background: minusClickOn
                    ? theme.CATEGORY_BUTTONS_BACKGROUND_ON
                    : theme.CATEGORY_BUTTONS_BACKGROUND,
                  outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
                  color: theme.TEXT_PRIMARY,
                }}
              >
                -
              </button>
            </div>

            <button
              className={`layersRenameButton ${
                renameClickOn ? "layersSubmitButtonOn" : ""
              }`}
              type="submit"
              style={{
                background: renameClickOn
                  ? theme.CATEGORY_BUTTONS_BACKGROUND_ON
                  : theme.CATEGORY_BUTTONS_BACKGROUND,
                outline: `solid ${theme.LAYER_SELECTOR_BORDER} 2px`,
                color: theme.TEXT_PRIMARY,
              }}
              onMouseDown={() => setRenameClickOn(true)}
              onMouseUp={() => setRenameClickOn(false)}
              onMouseLeave={() => setRenameClickOn(false)}
            >
              {language.RENAME_LAYERS_SUBMIT_BUTTON}
            </button>
          </div>
          <input
            className="inputRenameLayer"
            defaultValue={map?.layers?.[selectedLayer]?.name}
            key={map?.layers?.[selectedLayer]?.name}
            type="text"
            name="layerName"
            style={{
              backgroundColor: theme.LAYERS_RENAME_INPUT_BACKGROUND,
              outline: `solid ${theme.LAYERS_RENAME_INPUT_BORDER} 2px`,
              color: theme.TEXT_PRIMARY,
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setRenameClickOn(true);
              }
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setRenameClickOn(false);
              }
            }}
          />
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
