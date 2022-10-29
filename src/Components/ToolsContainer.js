import React from "react";

import { themes } from "../constants/themes";
import ChangePageButtons from "./ChangePageButtons";
import NavButton from "./NavButton";

import "../Styles/toolContainer.css";
import "../Styles/globalStyles.css";

const ToolContainer = ({
  onImageSelect,
  selectedImage,
  onLayerSelect,
  selectedLayer,
}) => {
  const [images, setImages] = React.useState(themes.medieval || []);
  const [visibility, setVisibility] = React.useState(false);

  const handleSelect = (theme) => {
    setImages(themes[theme]);
  };

  const listaTemas = Object.keys(themes);

  const tool = images?.map((image, index) => (
    <div
      key={`tool_${index}`}
      className="tools"
      style={{
        backgroundImage: image,
        backgroundSize: "contain",
      }}
      onClick={() => onImageSelect(image)}
    />
  ));

  let showHideClass;
  if (visibility) {
    showHideClass = "shown";
  } else showHideClass = "hidden";

  return (
    <section className={`divToolsContainer  ${showHideClass}`}>
      <NavButton visibility={visibility} setVisibility={setVisibility} />
      <div className="headerToolContainer">
        <div className="selectedToolContainer">
          <h2 className="h2">Tool</h2>
          <div
            className="selectedTool"
            style={{
              backgroundImage: selectedImage,
              backgroundSize: "contain",
            }}
          />
        </div>
        <div className="selectedLayerContainer">
          <h2 className="h2">Layer</h2>
          <div>
            <form
              onChange={(e) => onLayerSelect(e.target.value)}
              defaultValue={selectedLayer}
              className="form"
            >
              <input
                className="formInput"
                type="radio"
                id="layer1"
                value="1"
                name="layer"
              />
              <label className="formInputTitle" htmlFor="layer1">
                Layer 1
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer2"
                value="2"
                name="layer"
              />
              <label className="formInputTitle" htmlFor="layer2">
                Layer 2
              </label>
              <input
                className="formInput"
                type="radio"
                id="layer3"
                value="3"
                name="layer"
              />
              <label className="formInputTitle" htmlFor="layer3">
                Layer 3
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="buttosAndTools">
        <ChangePageButtons setImages={handleSelect} themes={listaTemas} />
        <div className="toolsContainerDad">
          <div className="toolsContainer">{tool}</div>
        </div>
      </div>
    </section>
  );
};

export default ToolContainer;
