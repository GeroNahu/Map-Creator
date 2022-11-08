import React from "react";

import { toolsThemes } from "../constants/toolsThemes";
import ChangePageButtons from "./ChangePageButtons";
import NavButton from "./NavButton";
import ThemeContext from "../constants/ThemesContext";

import "../Styles/toolContainer.css";
import "../Styles/globalStyles.css";

const ToolContainer = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
}) => {
  const [images, setImages] = React.useState(toolsThemes.medieval || []);
  const [visibility, setVisibility] = React.useState(false);

  const { theme } = React.useContext(ThemeContext);

  const handleSelect = (theme) => {
    setImages(toolsThemes[theme]);
  };

  const listaTemas = Object.keys(toolsThemes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tools"
      style={{
        backgroundImage: image,
        backgroundSize: "contain",
        outline: `solid ${theme.TOOLS_GRID_COLOR} 1px`,
      }}
      onClick={() => onImageSelect(image)}
    />
  ));

  let showHideClass;
  if (visibility) {
    showHideClass = "shown";
  } else showHideClass = "hidden";

  return (
    <section
      className={`divToolsContainer  ${showHideClass}`}
      style={{
        backgroundColor: theme.TOOLS_SECTION_BACKGROUND,
        border: `solid ${theme.TOOLS_SECTION_BORDER} 3px`,
      }}
    >
      <NavButton visibility={visibility} setVisibility={setVisibility} />
      <div className="headerToolContainer">
        <div className="selectedToolContainer">
          <h2 className="h2" style={{ color: theme.TITLES }}>
            Tool
          </h2>
          <div
            className="selectedTool"
            style={{
              backgroundColor: theme.SELECTED_TOOL_BACKGROUND,
              backgroundImage: selectedImage,
              backgroundSize: "contain",
              border: `solid ${theme.SELECTED_TOOL_BORDER} 3px`,
            }}
          />
        </div>
        <div className="selectedLayerContainer">
          <h2 className="h2" style={{ color: theme.TITLES }}>
            Layer
          </h2>
          <div>
            <form
              onChange={(e) => onLayerSelect(e.target.value)}
              defaultValue={selectedLayer}
              className="form"
              style={{
                backgroundColor: theme.LAYER_SELECTOR_BACKGROUND,
                border: `solid ${theme.LAYER_SELECTOR_BORDER} 3px`,
              }}
            >
              <input
                className="formInput"
                type="radio"
                id="layer1"
                value="1"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer1"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 1
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer2"
                value="2"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer2"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 2
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer3"
                value="3"
                name="layer"
              />
              <label
                className="formInputTitle"
                htmlFor="layer3"
                style={{ color: theme.TEXT_PRIMARY }}
              >
                Layer 3
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="buttosAndTools">
        <ChangePageButtons setImages={handleSelect} themes={listaTemas} />
        <div
          className="toolsContainerDad"
          style={{
            backgroundColor: theme.TOOLS_CONTAINER_BACKGROUND,
            border: `solid ${theme.TOOLS_CONTAINER_BORDER} 3px`,
          }}
        >
          <div className="toolsContainer">{tool}</div>
        </div>
      </div>
    </section>
  );
};

export default ToolContainer;
